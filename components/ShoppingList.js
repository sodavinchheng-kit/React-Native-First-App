import React, {useState} from 'react';
import {
  Alert,
  FlatList,
  Keyboard,
  View,
  TouchableWithoutFeedback,
} from 'react-native';
import AddItem from '../components/AddItem';
import ListItem from '../components/ListItem';

const ShoppingList = () => {
  const [items, setItems] = useState([]);

  const [id, setId] = useState(0);

  const incrementId = () => setId(id => id + 1);

  const addItem = text => {
    if (!text) {
      Alert.alert('Error', 'Please Enter An Item Name');
    } else {
      incrementId();
      setItems(items => {
        return [...items, {id: id, text}];
      });
    }
  };

  const deleteItem = id =>
    setItems(items => items.filter(item => item.id != id));

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View>
        <AddItem addItem={addItem} />
        <FlatList
          data={items}
          renderItem={({item, index}) => (
            <ListItem item={item} index={index} deleteItem={deleteItem} />
          )}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ShoppingList;
