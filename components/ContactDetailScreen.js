import React from 'react';
import { View, Text, Image, StyleSheet, Button } from 'react-native';

const ContactDetailScreen = ({ route, navigation }) => {
  const { contact } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.profileHeader}>
        <Image source={{ uri: contact.image }} style={styles.image} />
        <View style={styles.infoContainer}>
          <Text style={styles.label}>Name:</Text>
          <Text style={styles.name}>{contact.name}</Text>

          <Text style={styles.label}>Contact No:</Text>
          <Text style={styles.phone}>{contact.phone}</Text>
        </View>
      </View>
      <Button title="Back to Contacts" onPress={() => navigation.goBack()} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  profileHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginRight: 20,
  },
  infoContainer: {
    flex: 1,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#444',
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  phone: {
    fontSize: 18,
    color: '#666',
  },
});

export default ContactDetailScreen;
