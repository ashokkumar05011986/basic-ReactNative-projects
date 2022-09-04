import {Dimensions, StyleSheet} from 'react-native';

const deviceSize = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F5EDDC',
    // marginTop: 50,
  },
  body_container: {padding: 30},
  image_container: {},
  image: {
    width: deviceSize.width / 2,
    height: deviceSize.height / 3,
    margin: 10,
    borderRadius: 15,
  },
  title: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 23,
    textAlign: 'center',
    margin: 10,
  },
  desc: {
    color: 'black',
    fontSize: 18,
    margin: 10,
    lineHeight: 25,
    // fontStyle: 'italic',
  },
  price: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 20,
    alignSelf: 'flex-end',
    margin: 15,
  },
});

export default styles;
