import React from 'react';
import {SafeAreaView, StatusBar, Text} from 'react-native';
import useSWR from 'swr';

const fetcher = (url: string) => fetch(url).then(r => r.json());

const App = () => {
  const {data, isLoading, isValidating} = useSWR(
    'https://dummyjson.com/products/1',
    fetcher,
  );
  return (
    <SafeAreaView>
      <StatusBar />
      <Text>isData: {JSON.stringify(data)}</Text>
      <Text>isLoading: {String(isLoading)}</Text>
      <Text>isValidating: {String(isValidating)}</Text>
    </SafeAreaView>
  );
};

export default App;
