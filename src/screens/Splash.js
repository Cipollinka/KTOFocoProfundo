import React, {useEffect, useRef} from 'react';
import {Animated, Image, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const Splash = () => {
	const navigation = useNavigation();

	const white1 = useRef(new Animated.Value(300)).current;
	const white2 = useRef(new Animated.Value(300)).current;
	const white3 = useRef(new Animated.Value(300)).current;

	useEffect(() => {
		navigation.navigate('MainTab');
		// Анимация и переход после завершения
		Animated.stagger(300, [
			Animated.timing(white1, {
				toValue: 0,
				duration: 1000,
				useNativeDriver: true,
			}),
			Animated.timing(white2, {
				toValue: 0,
				duration: 1000,
				useNativeDriver: true,
			}),
			Animated.timing(white3, {
				toValue: 0,
				duration: 1000,
				useNativeDriver: true,
			}),
		]).start(() => {
			navigation.navigate('MainTab');
		});
	}, []);

	return (
		<View style={{backgroundColor: 'black', flex: 1}}/>
	);
};

export default Splash;
