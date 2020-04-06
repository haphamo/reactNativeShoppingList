import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native'
import Header from './components/Header';
import 'react-native-get-random-values';
import { uuid } from 'uuidv4';

// flex in react native will default to column instead of row, flex param only supports single num
// function that creates a randomId
const randomId = function() {
  return Math.random().toString(36).substring(2, 5) + Math.random().toString(36).substring(2, 5);
}
// hardcoded initial state
const initalState = [
  {id: randomId(), text: 'Coffee'},
  {id: randomId(), text: 'Eggs'},
  {id: randomId(), text: 'Bananas'},
  {id: randomId(), text: 'Sweet Potato'},
]

const App = () => {
  const [items, setItems] = useState([
    {id: randomId(), text: 'Coffee'},
    {id: randomId(), text: 'Eggs'},
    {id: randomId(), text: 'Bananas'},
    {id: randomId(), text: 'Sweet Potato'},
  ])

  return (
    <View style={styles.container}>
      <Header />
      <FlatList data={items} renderItem={({item}) => {
        <Text>{item.text}</Text>
      }}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60
  },

})
export default App;