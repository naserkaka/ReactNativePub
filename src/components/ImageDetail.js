import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";



const ImageDetail = ({title, imageSource}) => {
/* console.log(props) testa vilka props som kommer med */
/* får inte finnas kommentarer i return statement */
  return(
   <View>
   <Text>{title}</Text>
   <Image source={imageSource}/>
   </View>
);
};

const styles = StyleSheet.create({});

export default ImageDetail;
