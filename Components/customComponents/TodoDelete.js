import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { View } from 'react-native'

function TodoDelete(props) {
    return (
        <View style={{ height: 60, width: '100%', backgroundColor: '#ff5252', flexDirection: 'row-reverse' }}>
            <FontAwesomeIcon
                icon={faTrashAlt}
                size={25}
                color='white'
                style={{ marginTop: 17, marginRight: 10 }}
            />

        </View>
    );
}



export default TodoDelete;