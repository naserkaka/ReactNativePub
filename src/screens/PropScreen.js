import React from "react";
import { View, Text, StyleSheet } from "react-native";
import ImageDetail from "../components/ImageDetail";

// skickar prop imageSource
const PropScreen = () => {

  return(
    <View>
    <ImageDetail title="Skickar en prop med namn title till ImageDetail component" />
    <ImageDetail title="ImageDetail 2" imageSource={require('../../assets/forest.jpg')} />
    <ImageDetail title="ImageDetail 3" imageSource={require('../../assets/beach.jpg')} />
    <ImageDetail/>
    </View>
  );


};

const styles = StyleSheet.create({});

export default PropScreen;
