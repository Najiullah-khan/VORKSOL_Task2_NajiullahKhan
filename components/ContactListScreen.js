import React from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet } from 'react-native';
import contacts from './data/contacts';

const ContactListScreen = ({ navigation }) => {
  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.contactItem} onPress={() => navigation.navigate('ContactDetail', { contact: item })}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <View>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.phone}>{item.phone}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={contacts}
      keyExtractor={item => item.id}
      renderItem={renderItem}
    />
  );
};

const styles = StyleSheet.create({
  contactItem: {
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  phone: {
    fontSize: 14,
    color: '#888',
  },
});

export default ContactListScreen;
