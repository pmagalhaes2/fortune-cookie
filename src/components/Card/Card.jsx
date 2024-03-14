import { StyleSheet, View } from 'react-native';

const Card = ({children}) => {
  return <View style={styles.container}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    flexDirection: 'column',
    minHeight: 400,
    justifyContent: 'space-around',
    paddingVertical: 20,
    paddingHorizontal: 40,
    textAlign: 'center',
    width: '80%',
  },
});

export default Card;
