import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';
import IconProvider from './IconProvider';

interface Props {
    onPress?(): any,
    onPressTo?(): any,
    onPressThree?(): any,
    iconLeft?: string,
    iconRight?: string,
    title?: string,
    titleRight?: string,
    img?: string,
    txtName? : string,
    color? : string,
    sizeheight? : string,
}

function HeaderItem({ onPress, iconLeft, iconRight, title, titleRight, onPressTo, img, txtName,color, sizeheight,onPressThree }: Props) {
    return (
        <View style={styles.container}>
            <View style={styles.viewLeft}>
                <IconProvider style={styles.viewIconLeft} name={iconLeft} size={30} onPress={() => onPress && onPress()} />
                <Image style={styles.avatar} source={{uri: img}} />
                <Text style={styles.txtTitle}>{txtName}</Text>
            </View>
            <Text style={styles.txtTitle}>{title}</Text>
            <TouchableOpacity style={styles.viewRight}>
                <Text style={styles.txtTitleRight} onPress={() => onPressTo && onPressTo()}>{titleRight}</Text>
                <IconProvider name={iconRight} color={color} size={30} onPress={() => onPressThree && onPressThree()} />
            </TouchableOpacity>
        </View>
    )
}

export default HeaderItem;
const styles = StyleSheet.create({
    container: {
        height: 50,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: 'white',
        alignItems: 'center',
    },
    viewIconLeft: {
        marginLeft: 10,
    },
    txtTitle: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    viewRight: {
        marginRight: 15,
        flexDirection: 'row'
    },
    txtTitleRight: {
        fontSize: 15,
        color: 'blue',
        fontWeight: 'bold',
    },
    avatar: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginHorizontal: 10,
    },
    viewLeft: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    }
})