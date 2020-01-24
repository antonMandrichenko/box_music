import React, { useContext } from "react";
import { View } from "react-native";
import { SliderBox } from "react-native-image-slider-box";
import AppContext from "../context/AppContext";

const SliderArtists = () => {
  const { data } = useContext(AppContext);
  const [test, setTest] = React.useState("");
  const dataImages = data.map(
    (image, index) => image.header_image_thumbnail_url
  );
  const dataText = data.map((image, index) =>
    image.primary_artist.url.slice(27)
  );
  return (
    <>

      <View style={styles.container}>
        <SliderBox
          images={dataImages}
          sliderBoxHeight={50}
          parentWidth={350}
          onCurrentImagePressed={index => setTest(dataText[index])}
          dotColor="transparent"
          inactiveDotColor="transparent"
          paginationBoxVerticalPadding={20}
          circleLoop
          resizeMethod={"resize"}
          resizeMode={"cover"}
        />
      </View>
    </>
  );
};

const styles = {
  container: {
    width: "100%",
    paddingBottom: 20
  }
};

export default SliderArtists;