import { StyleSheet, Text, View } from "react-native";
import React from "react";
import MapView, { Marker } from "react-native-maps";
import tw from "tailwind-react-native-classnames";
import { useSelector } from "react-redux";
import { selectOrigin } from "../Redux/slices/navSlice";
const MapComp = () => {
  const origin = useSelector(selectOrigin);
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
        {/**for showing the marker */}
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
