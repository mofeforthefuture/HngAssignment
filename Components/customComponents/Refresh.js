import React from 'react';
import { View } from 'react-native'
import LottieView from 'lottie-react-native';
import Modal from 'react-native-modal';

function Refresh({ visible }) {
    return (

        <View style={{ width: 150, height: 200, }}>
            <LottieView source={require('./refresh.json')} autoPlay loop />
        </View>

    )

}
export default Refresh