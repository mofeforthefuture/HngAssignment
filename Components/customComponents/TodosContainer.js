
import React, { useState } from 'react'
import { TouchableOpacity, StyleSheet, View, Text, } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import DATA from '../pages/Todo'
import { faCheckCircle, faTrashAlt } from '@fortawesome/free-solid-svg-icons'

import { State, Swipeable } from 'react-native-gesture-handler';
import TodoDelete from './TodoDelete';

export default function TodosContainer({ text, index, deleted, keys }) {
    const [complete, setComplete] = useState(false);
    const handleComplete = () => {
        if (!complete) {
            setComplete(true)
        } else {
            setComplete(false)
        }
    }
    const handleStateChange = ({ nativeEvent }) => {
        if (nativeEvent.state === State.ACTIVE) {
            console.log(hey)
        }
    }
    // const handleDelete = () => {
    //     console.log(DATA, 11);
    //     DATA.splice(dataid - 1, 1)
    //     console.log('hey', dataid);
    // }
    return (
        <>
            <Swipeable
                key={keys}
                onActivated={deleted}
                onHandlerStateChange={() => handleStateChange}
                renderRightActions={() => <TodoDelete />}>
                <View style={{
                    width: '100%',
                    height: 60,
                    backgroundColor: 'rgba(245, 255, 255, 0.5)',
                    // marginLeft: '5%',
                    borderRadius: 10,
                    marginBottom: 10,
                    overflow: 'hidden',
                    flexDirection: 'row',

                }}>
                    <View
                        style={{
                            width: '80%',
                            height: '100%',
                            justifyContent: 'center',
                            paddingLeft: 10,

                        }}
                    >
                        <Text style={{ color: 'rgba(10, 22, 83, 1)', fontWeight: '600', textDecorationLine: complete ? 'line-through' : 'none' }}>{index}{text}</Text>
                    </View>
                    <TouchableOpacity style={{ paddingLeft: 5, paddingRight: 5, }}>
                        <FontAwesomeIcon icon={faCheckCircle} size={25} color='green' style={{ marginTop: 17, }} onPress={handleComplete} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <FontAwesomeIcon icon={faTrashAlt} size={25} color='red' style={{ marginTop: 17, }} onPress={deleted} />
                    </TouchableOpacity>

                </View>
            </Swipeable>
        </>
    )
}
const styles = StyleSheet.create({
    shadow: {
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 10
        },
        shadowOpacity: 0.7,
        shadowRadius: 3.5,
        elevation: 5,

    }
})