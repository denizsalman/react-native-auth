import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from '@firebase/app';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import LoginForm from './components/LoginForm';
import Router from './Router';

class App extends Component {
    componentWillMount() {
        const config = {
            apiKey: 'AIzaSyCaKbauHyWlilnzvtj9xSOaFnM47kva2PE',
            authDomain: 'auth-500a1.firebaseapp.com',
            databaseURL: 'https://auth-500a1.firebaseio.com',
            projectId: 'auth-500a1',
            storageBucket: 'auth-500a1.appspot.com',
            messagingSenderId: '9106014853'
          };
          
          firebase.initializeApp(config);
    }

    render() {
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
        return (
        <Provider store={store}>
            <Router />
        </Provider>
        );
  }
}

export default App;