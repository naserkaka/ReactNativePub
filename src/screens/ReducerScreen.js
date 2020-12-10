import React, { useReducer } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

/*Use action to change state*/
const reducer = (state, action) => {
  /* state === {red: number , green: number , blue: number} -- never change state property*/
  /* action === {colorToChange: "red" || */
  /*returns a object*/
  switch (action.AddOrSub) {
    case 'add':
    return {...state, counter: state.counter + action.amount};
    case 'sub':
    return {...state, counter: state.counter - action.amount};
    default:
    return state;
  }
};
const ReducerScreen = () => {

   /*runMyReducer = dispatch*/
  const [state, dispatch] = useReducer(reducer, {counter:0});
  console.log(state);

  return(
    <View>
    <Text>Reduceeeeer Screeen</Text>
    <Button
    title="Increase"
    onPress={() => dispatch({AddOrSub: 'add' , amount: 1})}
     />

    <Button
    title="Decrease"
    onPress={() => dispatch({AddOrSub: 'sub' , amount: 1})}
    />

    <Text>{state.counter}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ReducerScreen;
