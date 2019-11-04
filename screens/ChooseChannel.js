import React, { useEffect, useState } from "react";
import {
  BackHandler,
  Text,
  View
} from "react-native";

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
      </View>
  );
}

export default ChooseChannel
