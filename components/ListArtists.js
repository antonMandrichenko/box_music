import React from "react";
import { View, Image, Text, FlatList } from "react-native";
import AppContext from "../context/AppContext";
import SmallButton from "./SmallButton";

const ListArtists = () => {
  const { data } = React.useContext(AppContext);

  return (
    <View style={styles.flatListWrapper}>
      <FlatList
        horizontal={true}
        data={data}
        renderItem={({ item }) => (
          <View style={styles.imageWrapper}>
            <Image
              style={styles.imageThumbnail}
              source={{ uri: item.header_image_thumbnail_url }}
            />
            <Text style={styles.textThumbnail}>{item.title.slice(0, 10)}</Text>
          </View>
        )}
        //Setting the number of column
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

const styles = {
  flatListWrapper: {
    width: 200
  },
  imageWrapper: {
    height: 150,
    width: 150,
    borderColor: "#000",
    borderWidth: 3,
    borderRadius: 25,
    marginHorizontal: 20,
    marginBottom: 30
  },
  shadowImage: {
    shadowColor: "#484982",
    shadowOffset: {
      width: 0,
      height: 16
    },
    shadowOpacity: 0.44,
    shadowRadius: 10,

    elevation: 15
  },
  imageThumbnail: {
    width: 144,
    height: 144,
    borderRadius: 25
  },
  textThumbnail: {
    flex: 1,
    paddingVertical: 10,
    color: "#abaed0",
    textAlign: "center",

  }
};
export default ListArtists;
