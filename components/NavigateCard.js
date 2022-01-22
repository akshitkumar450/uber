import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import tw from "tailwind-react-native-classnames";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { setDestination } from "../Redux/slices/navSlice";
import { useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import Favourites from "./Favourites";
import { Icon } from "react-native-elements";

const NavigateCard = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  return (
    <View style={tw`bg-white flex-1`}>
      {/**for testing only,,by default when we select the options from search field ,,after selecting it should navigate  */}
      <TouchableOpacity>
        <Text style={tw`text-center text-xl py-2`}>Good Morning</Text>
      </TouchableOpacity>
      <View style={tw`border-t border-gray-200`}>
        <View>
          <GooglePlacesAutocomplete
            styles={{
              container: {
                flex: 0,
                paddingTop: 20,
              },
              textInput: {
                fontSize: 16,
                backgroundColor: "#eee",
              },
            }}
            // when be hit back btn
            returnKeyType={"search"}
            onPress={(data, details = null) => {
              // 'details' is provided when fetchDetails = true
              console.log(data, details);
              //   saving the destination from search field to redux
              dispatch(
                setDestination({
                  location: details.geometry.location,
                  description: data.description,
                })
              );
              navigation.navigate("RideOptions");
            }}
            fetchDetails={true} //include geometry location,cordinates
            // to hide powered by text which will be available in details
            enablePoweredByContainer={false}
            minLength={2}
            nearbyPlacesAPI="GooglePlacesSearch"
            debounce={400} //to search after 400ms after stopping typing
            placeholder="where to?"
            query={{
              key: "YOUR API KEY",
              language: "en",
            }}
          />
        </View>
      </View>
      <Favourites />
      <View style={tw`items-center py-1`}>
        <TouchableOpacity
          onPress={() => navigation.navigate("RideOptions")}
          style={tw`flex-row w-24 items-center px-4 py-3 bg-black rounded-full `}>
          <Icon name="car" type="font-awesome" color="white" size={16} />
          <Text style={tw`text-white ml-2`}>Rides</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default NavigateCard;

const styles = StyleSheet.create({});
