import React, { useEffect, useState } from 'react'
import { View, StyleSheet, TextInput, Text } from 'react-native';

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
    numberOfLines: string,
    title: string,
    secureTextEntry: string,
}
const FormTextInput = (props) => {
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
        <View style={styles.container}>
            <View style={styles.viewLable}>
                <View style={styles.viewOne} />
                <Text style={styles.txtLable}>{props.title}</Text>
                <View style={styles.viewTwo} />
            </View>
            <View style={styles.viewInput}>
                <Text style={styles.txtError}>{error}</Text>
                <TextInput
                    style={styles.textInput}
                    placeholder={props.placeholder}
                    value={props.value}
                    maxLength={props.maxLength}
                    onChangeText={handleOnChangeText}
                    secureTextEntry={props.secureTextEntry} />
            </View>
        </View>
    );

}

export default FormTextInput;

const styles = StyleSheet.create({
    container: {
        height: 40,
        width: '80%',
        marginHorizontal: 20,
        //backgroundColor: 'gray',
        justifyContent: 'center',
        marginTop: 40,
    },
    viewInput: {
        paddingHorizontal: 20,
        height: 35,
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20,
        //backgroundColor: 'red',
        borderLeftWidth: 1.5,
        borderRightWidth: 1.5,
        borderBottomWidth: 1.5,
        borderColor: '#C4C0C0',
    },
    viewLable: {
        flexDirection: 'row',
        height: 5,
        justifyContent: 'center',
    },
    viewOne: {
        flex: 0.075,
        height: 20,
        alignSelf: 'flex-end',
        borderTopLeftRadius: 20,
        borderLeftWidth: 1.5,
        borderTopWidth: 1.5,
        borderColor: '#C4C0C0',
    },
    viewTwo: {
        flex: 0.75,
        height: 20,
        //backgroundColor: 'red',
        alignSelf: 'flex-end',
        borderTopRightRadius: 20,
        borderRightWidth: 1.5,
        borderTopWidth: 1.5,
        marginTop: 10,
        borderColor: '#C4C0C0',
    },
    txtLable: {
        flex: 0.25,
        textAlign: 'center',
        marginTop: -25,
        height: 15,
        alignItems: 'center',
        fontSize: 12,
        fontWeight: '100'
    },
    textInput: {
        height: 40,
        //backgroundColor: 'red',
        marginTop: -10,
    },
    txtError: {
        fontSize: 12,
        color: 'red',
        marginTop: -15,
    },
});