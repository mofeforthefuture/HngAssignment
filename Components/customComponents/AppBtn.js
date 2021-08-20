import React from 'react'
import { Text, TouchableOpacity } from 'react-native';


export default function AppBtn({ backgroundColor, width, height, borderRadius, top, txtWeight, fontSize, txt, onPress }) {
    return (
        <>
            <TouchableOpacity
                onPress={onPress}
                style={{
                    backgroundColor: backgroundColor,
                    width: width,
                    height: height,
                    borderRadius: borderRadius,
                    top: top,
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative',
                }}>
                <Text style={{
                    fontWeight: txtWeight,
                    fontSize: fontSize,
                    position: 'relative',
                }}>{txt}</Text>
            </TouchableOpacity>
        </>
    )
}
