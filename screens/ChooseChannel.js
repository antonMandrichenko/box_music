import React, { useEffect, useState } from "react";
import {
    BackHandler, ImageBackground,
    Text, TouchableOpacity,
    View
} from "react-native";
import firebase from "../config/firebase";

function ChooseChannel(props) {
  const [goback, setgoBack] = useState(false);

  const handleBackButtonClick = () => {
    setgoBack(props.navigation.goBack());
    return true;
  }
  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', handleBackButtonClick); // works best when the goBack is async
    return () => {
      BackHandler.removeEventListener('hardwareBackPress', handleBackButtonClick);
    };
  }, [])
  return (
      <View>
        <Text style={{
        fontSize: 66,
        color: 'black'
        }
        }>
          ChooseChannel
        </Text>
          <TouchableOpacity
              onPress={() =>
                  firebase.auth().signOut().then(function() {
                      props.navigation.navigate('Login');
                  }).catch(function(error) {
                      // An error happened.
                  })
              }
          >
              <Text>sign out</Text>
          </TouchableOpacity>
      </View>
  );
}

export default ChooseChannel
