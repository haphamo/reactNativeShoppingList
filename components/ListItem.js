import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome'

const ListItem = ({ item, deleteItem }) => {
  return (
    <TouchableOpacity style={styles.listItem} key={item.id}>
      <View style={styles.listItemView}>
        <Text style={styles.listItemText}>{item.text}</Text>
        <Icon 
          name="remove" 
          size={30} 
          color="#b22222" 
          onPress={() => deleteItem(item.id)}
        />
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  listItem: {
    padding: 15,
    backgroundColor: '#f8f8f8',
    borderColor: '#eee',
    borderBottomWidth: 1
  },
  listItemView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  listItemText: {
    fontSize: 18
  }
})
export default ListItem;