import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import IconProvider from './IconProvider';

interface Props {
    onPress?(): any,
    iconLeft: string,
    iconRight: string,
    title: string,
}
function ItemSetting({onPress,iconLeft,iconRight,title}:Props){
    return(
        <View style={styles.viewItem}>
            <IconProvider style={styles.viewiconLeft} name={iconLeft} size={24} />
            <Text style={styles.txtTitle}>{title}</Text>
            <View style={styles.viewiconRight}>
                <IconProvider name={iconRight}/>
            </View>
        </View>
    )
}
export default ItemSetting;

const styles = StyleSheet.create({
    viewItem: {
        flexDirection: 'row',
        marginHorizontal: 20,
        marginTop: 5,
        height: 45,
        justifyContent: 'space-around',
        borderBottomWidth: 1,
        borderBottomColor: '#A2A9B5',
    },
    viewiconRight: {
        height: 20,
        width: 20,
        borderRadius: 10,
        backgroundColor: 'gray',
        justifyContent: 'center',
        alignSelf: 'center',
        alignItems: 'center',
    },
    txtTitle: {
        justifyContent: 'center',
        alignSelf: 'center',
        fontSize: 15,
    },
    viewiconLeft: {
        justifyContent: 'center',
        alignSelf: 'center',
    }
})