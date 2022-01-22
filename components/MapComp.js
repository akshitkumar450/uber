import { StyleSheet, Text, View } from "react-native";
import React from "react";
import MapView, { Marker } from "react-native-maps";
import tw from "tailwind-react-native-classnames";
import { useSelector } from "react-redux";
import { selectDestination, selectOrigin } from "../Redux/slices/navSlice";
import MapViewDirections from "react-native-maps-directions";
const MapComp = () => {
  const origin = useSelector(selectOrigin);
  const destination = useSelector(selectDestination);
  return (
    <View>
      <MapView
        mapType="mutedStandard"
        style={tw`h-full w-full`}
        // is we are getting from redux store
        // initialRegion={{
        //   latitude: origin.location.lat,
        //   longitude: origin.location.lng,
        //   latitudeDelta: 0.0922,
        //   longitudeDelta: 0.0421,
        // }}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}>
        {/**original view */}
        {origin && destination && (
          <MapViewDirections
            origin={origin.description}
            destination={destination.description}
            apikey={"GOOGLE_MAPS_APIKEY"}
            strokeWidth={3}
            strokeColor="black"
          />
        )}
        {origin?.location && (
          <Marker
            coordinate={{
              atitude: 37.78825,
              longitude: -122.4324,
            }}
            title="origin"
            description={origin.description}
            identifier="origin"
          />
        )}
        {/**testing */}
        <MapViewDirections
          origin={{
            latitude: 37.78825,
            longitude: -122.4324,
          }}
          destination={{
            latitude: 37.771707,
            longitude: -122.4053769,
          }}
          // apikey={"GOOGLE_MAPS_APIKEY"}
          strokeWidth={3}
          strokeColor="black"
        />

        {/**for showing the marker for testing */}
        <Marker
          coordinate={{
            latitude: 37.78825,
            longitude: -122.4324,
          }}
          title="origin"
          description="starting point"
          identifier="origin"
        />
      </MapView>
    </View>
  );
};

export default MapComp;

const styles = StyleSheet.create({});
