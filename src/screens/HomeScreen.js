import React from "react";
import { View, Text, StyleSheet, Button} from "react-native";
import SearchBar from "../components/SearchBar";
import ListView from "../components/ListView";



const HomeScreen = ({navigation}) => { // kan också vara {navigation}
//  console.log();

  return(
    <View>
      <SearchBar />
      <ListView />

    <Button
     title="Navigate to Detail"
     onPress={()=> navigation.navigate("Detail")}
     style={styles.buttonstyle}
      />

      <Button
       title="Navigate to Image"
       onPress={()=> navigation.navigate("Image")}
       style={styles.buttonstyle}
        />

        <Button
         title="State Screen"
         onPress={()=> navigation.navigate("State")}
         style={styles.buttonstyle}
          />
          <Button
           title="Reducer Screen"
           onPress={()=> navigation.navigate("Reducer")}
           style={styles.buttonstyle}
            />

            <Button
             title="TextInput Screen"
             onPress={()=> navigation.navigate("TextInput")}
             style={styles.buttonstyle}
              />
              <Button
               title="API Screen"
               onPress={()=> navigation.navigate("Aktier")}
               style={styles.buttonstyle}
                />
    </View>
  );
};

const styles = StyleSheet.create({
  buttonstyle:{
    margin:20,
    backgroundColor:"blue",
    height:40
  }
});

export default HomeScreen;
