import {StyleSheet} from 'react-native';

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0e0e0',
  },
  card_container: {
    backgroundColor: 'white',
    margin: 20,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 10,
    overflow: 'hidden',
  },
  card_body: {
    padding: 10,
    // margin: 20,
  },
  card_title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    margin: 10,
    marginBottom: 3,
  },

  card_text: {
    fontSize: 18,
    color: 'black',
    margin: 10,
    marginTop: 3,
  },
  card_button_container: {
    backgroundColor: '#00A3DD',
    padding: 10,
    alignItems: 'center',
  },

  button_text: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
});
