import React from "react";
import { CheckBox } from "react-native-elements";
import {ImageBackground, Text} from "react-native";
import PropTypes from "prop-types";

const CheckboxComponent = ({checked}) => {

  return (
      <CheckBox
          checkedIcon={<ImageBackground style={{width: 20, height: 20}} source={require("../assets/images/icons/checkbox-circle.png")} />}
          uncheckedIcon={<Text />}
          checked={checked}
      />
  );
};

CheckboxComponent.propTypes = {
    checked: PropTypes.bool,
};

export default CheckboxComponent;
