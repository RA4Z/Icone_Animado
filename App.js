import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Button, TouchableOpacity } from 'react-native';
import { Feather } from 'react-native-vector-icons'
import LottieView from 'lottie-react-native'

export default function App() {
  let animation = React.createRef();

  function startAnimation() {
    animation.current.play();
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={startAnimation} style={{marginTop: 200}}>
        <Feather name="play" size={60} color="black" />
      </TouchableOpacity>

      <LottieView 
        source={require('./assets/check.json')}
        style={{
          width: 500,
          height: 500,
        }}
        loop={false}
        ref={animation}
      />

      <StatusBar style="auto" />
    </View>
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
