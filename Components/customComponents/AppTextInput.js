import React from 'react'
import { View, Text, TextInput } from 'react-native'
import { COLORS } from '../constants/themes'

export default function AppTextInput({ placeholder, top, onPress, onChangeText, onBlur, secureTextEntry, value }) {
    return (
        <View
            onPress={onPress}
            style={{
                backgroundColor: COLORS.white,
                width: '90%',
                height: 60,
                borderRadius: 10,
                marginBottom: 10,
                top: top,
                justifyContent: 'center',
                paddingLeft: 15,
                borderStyle: 'solid',
                borderColor: 'rgba(255, 255, 241, 0.8)'
            }}>
            <TextInput
                placeholder={placeholder}
                placeholderTextColor={'#ccc'}
                fontSize={18}
                onChangeText={onChangeText}
                onBlur={onBlur}
                secureTextEntry={secureTextEntry}
                value={value}
                style={{
                    color: COLORS.black,
                }}
            />
        </View>
    )
}