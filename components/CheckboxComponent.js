import React from "react";
import CheckBox from "react-native-web/dist/exports/CheckBox";
import View from "react-native-web/dist/exports/View";
import Image from "react-native-web/dist/exports/Image";

const CheckboxComponent = () => {
    const [checked, setChecked] = React.useState(true);

    return (
        <View style={{      position: "absolute",
            top: "50%",
            left: "50%",
            transform: [{ translateX: "-50%" }, { translateY: "-50%" }],}}>
            <CheckBox
                checkedIcon={<Image source={require('../assets/images/icons/check-circle.svg')} />}
                uncheckedIcon={<Image source={require('../assets/images/icons/key-confirm.png')} />}
                value={checked}
                onPress={() => setChecked(!checked)}
                onValueChange={() => setChecked(!checked)}
                style={{width: 20, height: 20}}
            />
        </View>
    );
  };



export default CheckboxComponent;