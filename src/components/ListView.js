import React from "react";
import { Text, StyleSheet, View, TouchableOpacity, FlatList } from "react-native";

const ListView = () => {

  const DATA = [
  {title: "First Item", age:"1"},
  {title: "Second Item", age:"2"},
  {title: "Third Item", age:"3"},
];

 return(

    <FlatList
          keyExtractor={(data) => data.name} //gives key to each item, key = data.title
          data={DATA}

          renderItem={({item}) => { //element ==={item: {name: "Friend 1", index: 0}}
            return <Text style={styles.textStyle}>{item.title} - Age {item.age}</Text> // vad som ska visas
          }}
        //  showHoriziontalScrollIndicator = {false}  hide scrollist


    />

 );
};

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 2,
    borderRadius:5,
    backgroundColor:"lightblue",
    textAlign:"center"

  }
});

export default ListView;
