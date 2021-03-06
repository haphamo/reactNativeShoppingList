import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';


// flex in react native will default to column instead of row, flex param only supports single num
const AddItem = ({ addItem }) => {
  const [text, setText] = useState('')

  const onChange = textValue => setText(textValue)

  return (
    <View>
      <TextInput 
        style={styles.input} 
        placeholder="Add item" 
        onChangeText={onChange}
        value={text}
        clearButtonMode="always"
      />
      <TouchableOpacity 
        style={styles.btn} 
        onPress={() => {
          addItem(text)
          setText("")
        }}> 
        <Text style={styles.btnText}>
          <Icon
            name="plus" 
            size={20}
          />
          <Text>Add New Item</Text>
        </Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    height: 60,
    padding: 8,
    fontSize: 16
  },
  btn: {
    backgroundColor: '#c2bad8',
    padding: 9,
    margin: 5,
  },
  btnText: {
    color: 'darkslateblue',
    fontSize: 20,
    textAlign: 'center'
  }
})
export default AddItem;