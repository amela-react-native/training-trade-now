import React, { useEffect, useState } from 'react'
import { View, StyleSheet, TextInput, Text } from 'react-native';
import theme from '../styles/colors'

interface Props {
    onPress?(): any,
    placeholder: string,
    txtError: string,
    maxLength: any,
    value: string,
    onChangeText: any,
    autoCompleteType: string,
    keyboardType: string,
    numberMaxLength: string,
    numberOfLines: string
}

const TextInputs = (props) => {
    const [error, setError] = useState("")
    function handleOnChangeText(text) {
        //check error
        if (text === ''){
            setError("vui lòng nhập ký tự")
        }else if (text.length < props.numberMaxLength) {
            setError("Vui lòng nhập " + props.numberMaxLength + " ký tự trở lên")
        } else {
            setError("")
        }

        props.onChangeText && props.onChangeText()
    }
    return (
        <View style={styles.viewInput}>
            <Text style={styles.txtError}>{error}</Text>
            <TextInput
                placeholder={props.placeholder}
                maxLength={props.maxLength}
                value={props.value} multiline={true}
                keyboardType={props.keyboardType}
                onChangeText={handleOnChangeText} 
                numberOfLines={props.numberOfLines}/>
        </View>
    )
}
export default TextInputs;

const styles = StyleSheet.create({
    viewInput: {
        // height: 60,
        borderTopWidth: 0.3,
        borderColor: '#E1DADA',
    },
    txtError: {
        fontSize: 12,
        color: 'red',
    }
})


