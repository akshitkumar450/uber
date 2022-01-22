import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import tw from "tailwind-react-native-classnames";
import { useDispatch } from "react-redux";
import { setOrigin, setDestination } from "../Redux/slices/navSlice";
const SearchBar = () => {
  const dispatch = useDispatch();
  return (
    <View>
      <GooglePlacesAutocomplete
        styles={{
          container: {
            flex: 0,
          },
          textInput: {
            color: "#5d5d5d",
            fontSize: 16,
          },
        }}
        // when be hit back btn
        returnKeyType={"search"}
        onPress={(data, details = null) => {
          // 'details' is provided when fetchDetails = true
          console.log(data, details);
          //   saving the origin from search field to redux
          dispatch(
            setOrigin({
              location: details.geometry.location,
              description: data.description,
            })
          );
          //   set the destination to null
          dispatch(setDestination(null));
        }}
        fetchDetails={true} //include geometry location,cordinates
        // to hide powered by text which will be available in details
        enablePoweredByContainer={false}
        minLength={2}
        nearbyPlacesAPI="GooglePlacesSearch"
        debounce={400} //to search after 400s after stopping typing
        placeholder="from where?"
        query={{
          key: "YOUR API KEY",
          language: "en",
        }}
      />
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({});
