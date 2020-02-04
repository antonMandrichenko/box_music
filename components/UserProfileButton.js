import React from 'react';
import {Image, TouchableOpacity, View, StyleSheet} from "react-native";
import PropTypes from 'prop-types';

const UserProfileButton = ({path}, props) => {
    return (
        <View style={styles.headerButtonRight}>
            <TouchableOpacity onPress={() => props.navigation.navigate("ChooseChannel")}>
                    <Image
                        source={path}
                        style={styles.square}
                    />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    headerButtonRight: {
        paddingHorizontal: 5,
    },
    square: {
        width: 25,
        height: 25,
        borderRadius: 3
    },
});

UserProfileButton.propTypes = {
    path: PropTypes.string,
};

export default UserProfileButton;