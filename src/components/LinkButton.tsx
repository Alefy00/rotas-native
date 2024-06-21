import React from 'react';
import { TouchableOpacity, Text, StyleSheet, Linking } from 'react-native';

const LinkButton = ({ url, title }) => {
  const handlePress = () => {
    Linking.openURL(url).catch(err => console.error('Erro ao abrir o link:', err));
  };

  return (
    <TouchableOpacity onPress={handlePress} style={styles.button}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#007bff', // Azul típico de links
    padding: 10,
    borderRadius: 5,
    marginBottom:25,
  },
  text: {
    color: 'white',
    textAlign: 'center',
    fontSize:16,
  },
});

export default LinkButton;
