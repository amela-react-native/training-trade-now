import React from 'react';
import {View,Text,StyleSheet} from 'react-native';

interface Props {
    title? : string,
    number? : string,
}
export default function Informations({title, number}: Props) {
    return (
        <View style={styles.container}>
            <Text style={styles.txtTitle}>{title}</Text>
            <Text style={styles.txtNumber}>{number}</Text>
        </View>
    )

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        margin: 5,
    },
    txtTitle: {
        textAlign: 'center',
        padding: 2, 
    },
    txtNumber: {
        textAlign: 'center',
    },
})