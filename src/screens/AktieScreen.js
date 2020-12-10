import React, { useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import SearchBar from "../components/SearchBar";
import yelp from "../api/yelp";

/* api.openweathermap.org/data/2.5/weather?q=london&appid=d2f33553660e66a837288a7643542fd1 */
const AktieScreen = () => {

  const [term, setTerm] = useState('');
  const [results, setResults] = useState([]);

  const searchApi = async () => {
    const response = await yelp.get('/search', {
      params: {
        limit: 50,
        term,
        location: 'san jose'
    }
    });
    setResults(response.data.businesses);

 };





  return(
  <View>

  <SearchBar
   term={term}
   onTermChange={newTerm => setTerm(newTerm)}
   onTermSubmit={searchApi}
    />


    <Text>we have found {results.length}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default AktieScreen;
