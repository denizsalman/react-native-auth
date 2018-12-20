import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillmount() {
    firebase.initializeApp({
    apiKey: 'AIzaSyCaKbauHyWlilnzvtj9xSOaFnM47kva2PE',
    authDomain: 'auth-500a1.firebaseapp.com',
    databaseURL: 'https://auth-500a1.firebaseio.com',
    projectId: 'auth-500a1',
    storageBucket: 'auth-500a1.appspot.com',
    messagingSenderId: '9106014853'
  });
  }

  render() {
    return (
      <View>
        <Header headerText={'Authentication'} />
        <LoginForm />
      </View>
    );
  }
}

export default App;
