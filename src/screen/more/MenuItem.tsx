import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import IconProvider from '../../components/IconProvider';
import LinearGradient from 'react-native-linear-gradient'

interface Props {
    onPress?(): any,
    iconLeft: string,
    iconRight: string,
    title: string,
    colors:  string[],
}
function MenuItem({onPress, iconLeft, iconRight, title, colors}: Props){
    return(
      <View style={styles.viewChild}>
        <View style={styles.viewIconMenu}>
          <LinearGradient colors={colors} style={styles.iconMenu}>
            <IconProvider name={iconLeft} size={28} color={'#FFFFFF'} />
          </LinearGradient>
        </View>
      <View style={styles.viewIcon} >
        <Text style={styles.txtMenu} >{title}</Text>
        <View style={styles.viewIconNext}>
          <IconProvider name={iconRight} size={20} onPress={()=> onPress && onPress()} />
        </View>
      </View>
      </View>
    )
}
export default MenuItem;
const styles = StyleSheet.create({
    viewIcon: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: 'white',
        width: '70%',
        alignItems: 'center',
        borderRadius: 12,
      },
      viewChild: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        height: 60,
        marginHorizontal: 30,
        marginTop: 20,
      },
      viewIconMenu: {
        width: '30%',
        alignItems: 'center',
        justifyContent: 'center',
      },
      iconMenu: {
        width: 60,
        height: 60,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
      },
      txtMenu: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 20,
      },
      viewIconNext: {
        backgroundColor: 'gray',
        marginRight: 10,
        borderRadius: 20,
        width: 20,
        height: 20,
        alignItems: 'center',
        justifyContent: 'center',
      }, 
})