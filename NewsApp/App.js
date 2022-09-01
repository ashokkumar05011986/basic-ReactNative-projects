import React from 'react';
import {SafeAreaView, Text, FlatList, StyleSheet} from 'react-native';
import news_data from './news_data.json';
import NewsCard from './src/components/NewsCard';
import ScrollViewImages from './src/components/NewsCard/ScrollViewImages';

const App = () => {
  const renderNews = ({item}) => <NewsCard news={item} />;
  const keyNews = item => item.id;
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerText}>News</Text>
      <FlatList
        ListHeaderComponent={() => <ScrollViewImages />}
        keyExtractor={keyNews}
        data={news_data}
        renderItem={renderNews}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eceff1',
  },

  headerText: {
    fontSize: 45,
    fontWeight: 'bold',
    margin: 10,
    textAlign: 'center',
  },
});

export default App;
