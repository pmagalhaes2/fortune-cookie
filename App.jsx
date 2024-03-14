import React, {useState} from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import FortuneCookie from './src/assets/images/fortune-cookie.png';
import OpenedCookie from './src/assets/images/opened-cookie.png';
import Card from './src/components/Card/Card';
import Heading from './src/components/Heading/Heading';
import Paragraph from './src/components/Paragraph/Paragraph';

const App = () => {
  const [title, setTitle] = useState('Qual é a sua sorte de hoje?');
  const [message, setMessage] = useState('Clique na imagem e descubra!');
  const [image, setImage] = useState(FortuneCookie);
  const [isOpened, setIsOpened] = useState(false);

  const toggleImage = async () => {
    const newImage = image === FortuneCookie ? OpenedCookie : FortuneCookie;
    setImage(newImage);
    setIsOpened(!isOpened);

    if (newImage === OpenedCookie) {
      setTitle('Aqui está a sua sorte de hoje:');
      setMessage('');
      await fetchRandomMessage();
    } else {
      setTitle('Qual é a sua sorte de hoje?');
      setMessage('Clique na imagem e descubra!');
    }
  };

  const fetchRandomMessage = async () => {
    try {
      const response = await fetch('https://api.quotable.io/quotes/random');
      const data = await response.json();
      const {content} = data[0];
      setMessage(content);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <LinearGradient
      start={{x: 1, y: 0}}
      end={{x: 0, y: 1}}
      colors={['#BB00FF', '#190361']}
      style={styles.linearGradient}>
      <View style={styles.container}>
        <Card>
          <Heading text={title} />
          <Paragraph text={message} isOpened={isOpened} />
          <TouchableOpacity onPress={toggleImage}>
            <Image source={image} style={styles.image} />
          </TouchableOpacity>
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
