import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const ListItem = ({item, index, deleteItem}) => {
  return (
    <TouchableOpacity style={styles.listItem}>
      <View style={styles.listItemView}>
        <Text style={styles.listItemText}>
          {index + 1}. {item.text}
        </Text>
        <Text style={styles.listItemDelete} onPress={() => deleteItem(item.id)}>
          X
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listItem: {
    padding: 15,
    backgroundColor: '#f8f8f8',
  },
  listItemView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  listItemText: {
    fontSize: 18,
  },
  listItemDelete: {
    color: 'red',
    fontSize: 18,
    fontWeight: '600',
  },
});

export default ListItem;
