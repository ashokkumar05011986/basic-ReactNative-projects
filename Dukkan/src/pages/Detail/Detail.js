import {View, Text, Image, ScrollView} from 'react-native';
import React from 'react';
import styles from './Detail.styles';
import useFetch from '../../hooks/useFetch';
import Config from 'react-native-config';
import Error from '../../components/Error/Error';
import Laoding from '../../components/Loading/Loading';

const Detail = ({route}) => {
  console.log(route.params.id);
  const {id} = route.params;
  const {loading, error, data} = useFetch(`${Config.API_PRODUCT_URL}/${id}`);
  console.log(data);

  if (loading) {
    return <Laoding />;
  }
  if (error) {
    return <Error />;
  }
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.image_container}>
          <Image source={{uri: data.image}} style={styles.image} />
        </View>
        <View style={styles.body_container}>
          <Text style={styles.title}>{data.title}</Text>
          <Text style={styles.desc}>{data.description}</Text>
          <Text style={styles.price}>{data.price}</Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default Detail;
