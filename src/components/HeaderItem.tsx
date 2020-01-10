import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import IconProvider from './IconProvider';

interface Props {
    onPress?(): any,
    onPressTo?(): any,
    iconLeft: string,
    iconRight: string,
    title: string,
    titleRight: string
}

function HeaderItem({onPress, iconLeft, iconRight, title, titleRight, onPressTo}: Props){
    return(
        <View style={styles.container}>
            <View>
              <IconProvider style={styles.viewIconLeft} name={iconLeft} size={30} onPress={()=> onPress && onPress()}/>
            </View>
              <Text style={styles.txtTitle}>{title}</Text>
            <TouchableOpacity style={styles.viewRight}>
              <Text style={styles.txtTitleRight} onPress={()=> onPressTo && onPressTo()}>{titleRight}</Text>
              <IconProvider name={iconRight} />
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
        fontSize:15,
        color: 'blue',
        fontWeight: 'bold',
    }
})