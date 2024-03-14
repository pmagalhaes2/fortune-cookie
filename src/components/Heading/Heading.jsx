import { StyleSheet, Text } from 'react-native';

const Heading = ({text}) => {
  return <Text style={styles.heading}>{text}</Text>;
};

const styles = StyleSheet.create({
  heading: {
    color: '#34355B',
    fontFamily: 'Montserrat-Bold',
    fontSize: 24,
    textAlign: 'center',
  },
});

export default Heading;
