import React, {useRef, useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import globalStyles from '../style/global';

const AddItem = ({addItem}) => {
  const textInputRef = useRef();

  const [text, setText] = useState('');

  const onChange = value => setText(value);

  const clearText = () => {
    setText('');
    textInputRef.current.clear();
  };

  return (
    <View style={styles.addItemView}>
      <TextInput
        placeholder="Add Item..."
        onChangeText={onChange}
        style={styles.addItemInput}
        ref={textInputRef}
      />
      <TouchableOpacity
        onPress={() => {
          addItem(text);
          clearText();
        }}
        style={[styles.addItemBtn, globalStyles.button]}>
        <Text style={[styles.addItemBtnText, globalStyles.buttonText]}>
          + Add
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  addItemView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  addItemInput: {
    flex: 1,
    padding: 8,
  },
  addItemBtn: {
    padding: 8,
  },
  addItemBtnText: {
    fontSize: 20,
  },
});

export default AddItem;
