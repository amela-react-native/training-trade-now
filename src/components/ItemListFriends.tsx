import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import FastImage from 'react-native-fast-image';
interface Props {
    onPress?(): any,
    onPressTo?(): any,
    name?: string,
    avatar?: string,
    title?: string,

}
export default function ItemListFriends({ onPress, onPressTo, name, avatar, title }: Props) {
    return (
        <View style={styles.container}>
            <View style={styles.viewImage}>
                {/* <Image style={styles.avatar} source={{ uri: avatar }} /> */}
                <FastImage
                    style={styles.avatar}
                    source={{
                        uri: avatar,
                        headers: { Authorization: 'someAuthToken' },
                        priority: FastImage.priority.normal,
                    }}
                />
            </View>
            <TouchableOpacity style={styles.viewTxtName} onPress={() => onPress && onPress()}>
                <Text style={styles.name}>{name}</Text>

            </TouchableOpacity>
            <View style={styles.viewBtn}>
                <TouchableOpacity style={styles.btnTitle}>
                    <Text numberOfLines={1} >{title}</Text>
                </TouchableOpacity>

            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        height: 60,
        // backgroundColor: 'red',
        marginBottom: 10,
        flex: 1,
        marginHorizontal: 15,
    },
    avatar: {
        height: 60,
        width: 60,
        borderRadius: 30,
        borderWidth: 0.5,
        borderColor: 'black'
    },
    name: {
        justifyContent: 'center',
        fontWeight: 'bold'
    },
    btnTitle: {
        justifyContent: 'center',
        alignSelf: 'center',
        borderRadius: 10,
        borderWidth: 1,
        width: 80,
        height: 30,
        alignItems: 'center',
        borderColor: 'gray'

    },
    viewImage: {
        width: '30%'
    },
    viewTxtName: {
        width: '40%',
        alignSelf: 'center',
    },
    viewBtn: {
        alignSelf: 'center',
        width: '30%',
    },
})