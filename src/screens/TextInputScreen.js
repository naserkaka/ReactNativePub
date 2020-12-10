import React, {useState} from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";



const TextInputScreen = () => {
  const [name,setName] = useState("");

  return(
    <View>
    
    <TextInput
     style={styles.input}
     autoCapitalize="none"
     autoCorrect={false}fdsf
     value={name}
     onChangeText={(newValue) => setName(newValue)}
    />

    <Text>My name is {name}</Text>

    </View>
  );
};

const styles = StyleSheet.create({
  input:{
    margin:15,

  }
});

export default TextInputScreen;
