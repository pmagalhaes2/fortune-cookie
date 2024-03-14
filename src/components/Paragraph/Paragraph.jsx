import {StyleSheet, Text} from 'react-native';

const Paragraph = ({text, isOpened}) => {
  return <Text style={[styles.paragraph, isOpened && styles.message]}>{text}</Text>;
};

const styles = StyleSheet.create({
  paragraph: {
    color: '#34355B',
    fontFamily: 'Montserrat-Regular',
    marginTop: 20,
    padding: 5,
    textAlign: 'center',
  },
  message: {
    backgroundColor: '#E4EDF1',
    borderColor: '#1111',
    borderWidth: 1
  }
});

export default Paragraph;
