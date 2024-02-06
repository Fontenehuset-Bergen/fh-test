import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Footer from './components/footer';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <>
      <h1>Merge conflict incoming</h1>
      <NavigationContainer styles={styles.container}>
        <Footer></Footer>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
