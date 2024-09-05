import React from 'react';
import { ScrollView, StyleSheet, Text, View, Button, TextInput, Alert, TouchableOpacity } from 'react-native';

const useCharacterCount = (text) => {
  const [length, setLength] = React.useState(0);

  React.useEffect(() => {
    setLength(text.length);
  }, [text]);

  return length;
};

export default function App() {
  const [count, setCount] = React.useState(0);
  const [isDarkTheme, setIsDarkTheme] = React.useState(false);
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  const usernameLength = useCharacterCount(username);

  const handleLogin = () => {
    const validUsername = 'userAlisah';
    const validPassword = 'user2001!';

    if (username === validUsername && password === validPassword) {
      Alert.alert('Login Successful', 'Welcome!');
    } else {
      Alert.alert('Login Failed', 'Invalid username or password. Please try again.');
    }
  };

  const toggleTheme = () => {
    setIsDarkTheme((prevMode) => !prevMode);
  };

  return (
    <ScrollView style={[styles.scrollView, (isDarkTheme ? styles.darkMode : styles.lightMode)]}>
      <View style={styles.container}>
        
        <Text style={[
            styles.LoginText,
            { 
              color: isDarkTheme ? 'white' : 'black',
            }
          ]}>Login</Text>

        <TextInput
          style={[
            styles.textInput,
            { 
              color: isDarkTheme ? 'white' : 'black',
              borderColor: isDarkTheme ? 'white' : 'black'
            }
          ]}
          placeholder="Username"
          placeholderTextColor={isDarkTheme ? 'white' : 'gray'}
          value={username}
          onChangeText={(text) => setUsername(text)}
        />

        <Text style={{ marginBottom: 12, color: isDarkTheme ? 'white' : 'black' }}>Characters: {usernameLength}</Text>
        

        <TextInput
          style={[
            styles.textInput,
            { 
              color: isDarkTheme ? 'white' : 'black',
              borderColor: isDarkTheme ? 'white' : 'black'
            }
          ]}
          placeholder="Password"
          placeholderTextColor={isDarkTheme ? 'white' : 'gray'}
          secureTextEntry
          value={password}
          onChangeText={(text) => setPassword(text)}
        />

        <Button
          title='Login'
          onPress={handleLogin}
        />

        <TouchableOpacity onPress={toggleTheme}>
          <Text style={{ fontSize: 50 }}>
            {isDarkTheme ? '🙈' : '🙉'}
          </Text>
        </TouchableOpacity>
        
        <View style ={{width: 150}}>
        <Text style={{ marginBottom: 12, color: isDarkTheme ? 'white' : 'black' }}>Username: userAlisah</Text>
        <Text style={{ marginBottom: 12, color: isDarkTheme ? 'white' : 'black' }}>Password: Alisah2001!</Text>
        </View>
        
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    height: '100%',
    width: '100%',
  },
  container: {
    padding: 150,
    alignItems: 'center',
    justifyContent: 'center',
  },
  darkMode: {
    backgroundColor: 'black',
  },
  lightMode: {
    backgroundColor: 'khaki',
  },
  textInput: {
    height: 40,
    width: 180,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  LoginText: {
    fontSize: 30
  }
});