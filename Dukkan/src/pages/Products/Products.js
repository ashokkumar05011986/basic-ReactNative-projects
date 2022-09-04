import React from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
} from 'react-native';
import Config from 'react-native-config';
import Error from '../../components/Error/Error';
import Laoding from '../../components/Loading/Loading';
import ProductCard from '../../components/ProductCard/ProductCard';
import useFetch from '../../hooks/useFetch';

const Products = ({navigation}) => {
  //!custom hook oluşturduk. url isteğini ve bundan doğan statelerin tamamını bir hook ta birleştirdik.
  // const [data, setData] = useState();
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);
  // useEffect(() => {
  //   fetchData();
  // }, []);

  // const fetchData = async () => {
  //   try {
  //     const {data: productData} = await axios.get(Config.API_URL);
  //     setData(productData);
  //     setLoading(false);
  //   } catch (err) {
  //     setError(err.message);
  //   }
  // };

  const {loading, data, error} = useFetch(Config.API_URL);
  // console.log({loading, data, error});
  console.log('-----------------');

  const handleProductSelect = id => {
    navigation.navigate('DetailScreen', {id});
  };

  const renderProduct = ({item}) => (
    <ProductCard product={item} onSelect={() => handleProductSelect(item.id)} />
  );
  if (loading) {
    // return <ActivityIndicator size="large" color="#0000ff" />;
    return <Laoding />;
  }
  if (error) {
    // return <Text>{error}</Text>;
    return <Error />;
  }
  return (
    <View>
      {/* {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <FlatList data={data} renderItem={renderProduct} />
      )} */}
      <FlatList data={data} renderItem={renderProduct} />
    </View>
  );
};

export default Products;

const styles = StyleSheet.create({});
