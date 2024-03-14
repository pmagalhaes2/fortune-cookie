import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import FortuneCookie from './src/assets/images/fortune-cookie.png';
import Card from './src/components/Card/Card';
import Heading from './src/components/Heading/Heading';
import Paragraph from './src/components/Paragraph/Paragraph';

const App = () => {
  return (
    <LinearGradient
      start={{x: 1, y: 0}}
      end={{x: 0, y: 1}}
      colors={[ '#BB00FF', '#190361']}
      style={styles.linearGradient}>
      <View style={styles.container}>
        <Card>
          <Heading text="Qual é a sua sorte de hoje?" />
          <Paragraph text="Clique na imagem e descubra!" />
          <Image source={FortuneCookie} style={styles.image} />
        </Card>
      </View>
    </LinearGradient>
  );
};

export default App;

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
  },
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    paddingLeft: 15,
    paddingRight: 15,
  },
  image: {
    height: 200,
    resizeMode: 'contain',
    width: 200,
  },
});
