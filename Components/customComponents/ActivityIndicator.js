import React from 'react';
import { View } from 'react-native'
import LottieView from 'lottie-react-native';
import Modal from 'react-native-modal';

function ActivityIndicator({ visible }) {
    return (
        <Modal isVisible={visible} style={{
            flex: 1,
            justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(255, 255, 255,  0)'
        }}>
            <View style={{ width: 150, height: 200, }}>
                <LottieView source={require('./loader3.json')} autoPlay loop />

            </View>


        </Modal>
    )

}
export default ActivityIndicator