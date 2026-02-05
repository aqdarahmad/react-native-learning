import { useState } from 'react';
import { View, StyleSheet } from 'react-native';

import LoginScreen from './screens/LoginScreen';


export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <View style={styles.container}>
      (
        <LoginScreen onLogin={() => setIsLoggedIn(true)} />
      )
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
