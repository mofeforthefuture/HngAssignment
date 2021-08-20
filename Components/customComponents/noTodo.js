import React from 'react';
import { View } from 'react-native'
import LottieView from 'lottie-react-native';

function Notodo({ visible }) {
    return (

        <View style={{ width: 300, height: 300, }}>
            <LottieView source={require('./notodo.json')} autoPlay loop />

        </View>

    )

}
export default Notodo