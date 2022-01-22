import { StyleSheet, Text, View } from "react-native";
import React, { useRef } from "react";
import MapView, { Marker } from "react-native-maps";
import tw from "tailwind-react-native-classnames";
import { useSelector } from "react-redux";
import {
  selectDestination,
  selectOrigin,
  setTravelTime,
} from "../Redux/slices/navSlice";
import MapViewDirections from "react-native-maps-directions";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
const MapComp = () => {
  const origin = useSelector(selectOrigin);
  const destination = useSelector(selectDestination);
  const mapRef = useRef(null);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!origin || !destination) return;
    // zoom and fit to markers
    mapRef.current.fitToSuppliedMarkers(["origin,destination"], {
      edgePadding: {
        top: 50,
        right: 50,
        bottom: 50,
        left: 50,
      },
    }); //identifier origin in Marker
  }, [origin, destination]);

  // using google distance matrix api
  useEffect(() => {
    if (!origin || !destination) return;
    const fetchTime = async () => {
      const url = `https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=${
        origin.description
      }$destination=${destination.description}&key=${"your api key"}`;

      const response = await fetch(url);
      const data = await response.json();
      // data has all the info like time,distance duration
      dispatch(setTravelTime(data.rows[0].elements[0]));
    };
    fetchTime();
  }, [origin, destination]);

  return (
    <View>
      <MapView
        ref={mapRef}
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
        {/*for destination */}
        {destination?.location && (
          <Marker
            coordinate={{ latitude: 37.771707, longitude: -122.4053769 }}
            title="origin"
            description="starting point"
            identifier="destination"
          />
        )}
        {/**for origin */}
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
        {/**for origin */}
        <Marker
          coordinate={{
            latitude: 37.78825,
            longitude: -122.4324,
          }}
          title="origin"
          description="starting point"
          identifier="origin"
        />
        {/**for destination */}
        <Marker
          coordinate={{ latitude: 37.771707, longitude: -122.4053769 }}
          title="origin"
          description="starting point"
          identifier="destination"
        />
      </MapView>
    </View>
  );
};

export default MapComp;

const styles = StyleSheet.create({});
