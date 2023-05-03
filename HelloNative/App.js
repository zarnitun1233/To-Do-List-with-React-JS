import React, { useState } from "react";
import { Text, View, Button, FlatList, StyleSheet, TextInput } from "react-native";

const styles = StyleSheet.create({
  item: {
    padding: 10,
    borderBottomColor: '#ddd',
    borderBottomWidth:1,
  },
  itemText: {
    fontSize: 20
  },
  container: {
    backgroundColor: '#ddd',

  },
  title: {
    fontSize: 30,
    fontWeight: 'bold'
  },
  appbar: {
    paddingTop: 20,
    paddingBottom: 20,
    paddingRight: 20,
    paddingLeft: 20,
    backgroundColor: 'cyan'
  },
  content: {
    margin: 10,
    backgroundColor: 'white'
  },
  input: {
    padding: 10,
    borderColor: '#ddd',
    borderWidth: 1
  }
});

const Item = props => (
  <View style={styles.item}>
    <Text style={styles.itemText}>
      {props.name}, $({props.price})
    </Text>
  </View>
)

const App = props => {
  const [items, setItem] = useState([
    {id: 1, name: 'Banana', price: '1'},
    {id: 2, name: 'Orange', price: '2'},
  ]);
  const [name, setName] = useState("Name");
  const [price, setPrice] = useState("Price");
  const add = () => {
    setItem([
      ...items,
      {id:items.length+1, name, price}
    ]);
  }
  return (
    <View style={styles.container}>
      <View style={styles.appbar}>
      <Text style={styles.title}>
        React Native
      </Text>
      </View>
      <View style={styles.content}>
        <FlatList
          data={items}
          renderItem={({ item }) => (
            <Item name={item.name} price={item.price} />
          )}
          keyExtractor={i=>i.id}
        />
      </View>
      <View style={styles.content}>
        <TextInput
          value={name}
          onChangeText={text => setName(text)}
          style={styles.input}
        />
        <TextInput
          value={price}
          onChangeText={text => setPrice(text)}
          style={styles.input}
        />
        <Button title="ADD" onPress={add}/>
      </View>
    </View>
  )
}

export default App;