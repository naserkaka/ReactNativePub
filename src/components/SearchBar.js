import React from "react";
import { Text, StyleSheet, View, TouchableOpacity, TextInput } from "react-native";


const SearchBar = ({onTermChange,term,onTermSubmit}) => {
  return(
    <View style={styles.background}>

    <TextInput
      autoCapitalize="none"
      autoCorrect={false}
      style={styles.inputStyle}
      placeholder="Search"
      value={term}
      onChangeText={onTermChange}
      onEndEditing={onTermSubmit}
    />



    </View>


  );
};

const styles = StyleSheet.create({
    background: {

      flexDirection:"row",
      margin:20,
      backgroundColor:"grey",
      height:40

    },

    inputStyle: {
      flex: 1,
      fontSize: 18
    }

});

export default SearchBar;
