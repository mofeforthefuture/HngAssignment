import React from 'react'
import { View, Text } from 'react-native'

export default function ChatTxt({ texts }) {
    return (
        <View style={{
            backgroundColor: "#0078fe",
            padding: 10,
            marginLeft: '45%',
            borderRadius: 5,
            marginTop: 5,
            marginRight: "5%",
            maxWidth: '50%',
            alignSelf: 'flex-end',

            borderRadius: 20,
        }}>
            <Text>{texts}</Text>
        </View>
    )
}
