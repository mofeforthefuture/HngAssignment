import React, { useState, Alert } from 'react'
import { View, Text, SafeAreaView, Image, Linking, TouchableOpacity } from 'react-native';
import AppTextInput from './Components/customComponents/AppTextInput';
import { COLORS, } from './Components/constants/themes';

import Zuri from './assets/zuri.png'
import I4g from './assets/I4G-Logo-Color-Cropped.png'
import Brand from './assets/brand-logo.png'


const Hng = "https://hng.tech";
const ingressive = "https://ingressive.org"
const ZuriLink = "https://internship.zuri.team/"



function App() {
  const [text, setText] = useState('')
  return (
    <>
      <SafeAreaView style={{ backgroundColor: COLORS.black, }}></SafeAreaView>
      <View>
        <View
          style={{
            width: '100%',
            height: 50,
            backgroundColor: COLORS.black,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text style={{
            fontSize: 20,
            fontWeight: '500',
            color: COLORS.white,

          }}>HNGI8 Stage 2 Task</Text>
        </View>
        <View style={{ alignItems: 'center', height: '50%', backgroundColor: COLORS.white }}>
          <TouchableOpacity style={{ width: '80%', marginTop: 30 }} onPress={() => Linking.openURL(Hng)}>
            <Image source={Brand} style={{ width: '100%', height: 80, paddingBottom: 20, marginBottom: 20, resizeMode: 'stretch' }} />
          </TouchableOpacity >
          <TouchableOpacity style={{ width: '80%' }} onPress={() => Linking.openURL(ingressive)}>
            <Image source={I4g} style={{ width: '90%', height: 80, marginBottom: 20, resizeMode: 'stretch' }} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => Linking.openURL(ZuriLink)}>
            <Image source={Zuri} style={{ marginTop: 20, marginBottom: 20, }} />
          </TouchableOpacity>

        </View>

        <View style={{
          height: '70%',
          borderRadius: 30,
          backgroundColor: COLORS.black,
          alignItems: 'center',
          paddingTop: 40
        }}>
          <Text style={{
            fontSize: 20,
            fontWeight: '500',
            color: COLORS.white,

          }}>{text}</Text>

          <AppTextInput
            placeholder={'Type here to see something cool'}
            onChangeText={value => setText(value)}
          />
        </View>
      </View>
    </>
  )
}


export default App;
