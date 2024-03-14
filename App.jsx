import React, { useState } from 'react';
import {
  ActivityIndicator,
  Image,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import FortuneCookie from './src/assets/images/fortune-cookie.png';
import OpenedCookie from './src/assets/images/opened-cookie.png';
import Card from './src/components/Card/Card';
import Heading from './src/components/Heading/Heading';
import Paragraph from './src/components/Paragraph/Paragraph';

const App = () => {
  const [title, setTitle] = useState('Qual é a sua sorte de hoje?');
  const [message, setMessage] = useState('Clique no biscoito e descubra!');
  const [originalMessage, setOriginalMessage] = useState('');
  const [image, setImage] = useState(FortuneCookie);
  const [isOpened, setIsOpened] = useState(false);
  const [language, setLanguage] = useState('pt-BR');
  const [loading, setLoading] = useState(false);

  const toggleImage = async () => {
    const newImage = image === FortuneCookie ? OpenedCookie : FortuneCookie;
    setImage(newImage);
    setIsOpened(!isOpened);
    setLanguage('pt-BR');

    if (newImage === OpenedCookie) {
      setTitle('Aqui está a sua sorte de hoje:');
      setMessage('');
      await fetchRandomMessage();
    } else {
      setTitle('Qual é a sua sorte de hoje?');
      setMessage('Clique no biscoito e descubra!');
    }
  };

  const fetchRandomMessage = async () => {
    try {
      setLoading(true);
      const response = await fetch('https://api.quotable.io/quotes/random');
      const data = await response.json();
      const {content} = data[0];
      setMessage(content);
      setOriginalMessage(content);
      setLoading(false);
    } catch (error) {
      console.log(error.message);
    }
  };

  const toogleTranslation = async () => {
    try {
      setLanguage(language === 'pt-BR' ? 'en-US' : 'pt-BR');
      if (language === 'pt-BR') {
        const response = await fetch(
          `https://api.mymemory.translated.net/get?q=${message}!&langpair=en|pt-br`,
        );
        const {responseData} = await response.json();
        setMessage(responseData.translatedText);
      } else {
        setMessage(originalMessage);
      }
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
          <TouchableHighlight style={{alignItems: 'flex-end', gap: 2}}>
            <>
              {loading ? (
                <ActivityIndicator size="large" />
              ) : (
                <>
                  <Paragraph text={message} isOpened={isOpened} />
                  {isOpened && (
                    <Text onPress={toogleTranslation}>{language}</Text>
                  )}
                </>
              )}
            </>
          </TouchableHighlight>
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
    width: '100%',
  },
  image: {
    height: 200,
    resizeMode: 'contain',
    width: 200,
  },
});
