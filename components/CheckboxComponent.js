import React from "react";
import { CheckBox } from "react-native-elements";

const CheckboxComponent = () => {
  const [checked, setChecked] = React.useState(true);

  return (
    <CheckBox
      // checkedIcon={
      //   <Image source={require("../assets/images/icons/check-circle.svg")} />
      // }
      // uncheckedIcon={
      //   <Image source={require("../assets/images/icons/key-confirm.png")} />
      // }
      checked
      // onPress={setChecked(!checked)}
      // value={checked}

      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        width: 20,
        height: 20
      }}
    />
  );
};

export default CheckboxComponent;
