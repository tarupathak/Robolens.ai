import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const HomeScreen = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [message, setMessage] = useState('');

  const handlePress = () => {
    if (name && age) {
      setMessage(`Hello ${name}, you are ${age} years old!`);
    } else {
      setMessage('Please enter your name and age.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Sample App</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your name"
        onChangeText={setName}
        value={name}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter your age"
        onChangeText={setAge}
        value={age}
        keyboardType="numeric"
      />
      <Button title="Greet Me" onPress={handlePress} />
      <Text style={styles.message}>{message}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '80%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  message: {
    marginTop: 20,
    fontSize: 18,
  },
});

export default HomeScreen;
