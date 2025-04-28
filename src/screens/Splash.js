import React, {useEffect, useRef} from 'react';
import {Animated, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const Splash = () => {
  const navigation = useNavigation();

  const white1 = useRef(new Animated.Value(300)).current;
  const white2 = useRef(new Animated.Value(300)).current;
  const white3 = useRef(new Animated.Value(300)).current;

  useEffect(() => {
    navigation.navigate('Welcome');
  }, []);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#000',
        alignItems: 'flex-start',
        justifyContent: 'center',
        paddingVertical: 40,
      }} />
  );
};

export default Splash;
