import React from 'react';
import {Image, TouchableOpacity, View, StyleSheet} from "react-native";
import PropTypes from 'prop-types';

const UserProfileButton = ({path, nav}) => {

    return (
        <View style={styles.headerButtonRight}>
            <TouchableOpacity onPress={nav}>
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
    path: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
};

export default UserProfileButton;