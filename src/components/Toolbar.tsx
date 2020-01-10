import React from 'react';
import { View, Text, StyleSheet, Image,TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

interface Props {
  onPress?(): any,
  onPressTo?(): any,
  title?: string,
  avatar?: any
}
 const Toolbar =(props) => {
  return (
    <View style={styles.container}>
      <View style={styles.viewHeader}>
        <View style={styles.headerLeft}>
          <Image style={styles.avatar} source={props.avatar} />
          <Text style={styles.txtTitle}>{props.title}</Text>
        </View>
        <View style={styles.headerRight}>
          <TouchableOpacity onPress={()=> props.onPress && props.onPress()} >
             <Icon style={styles.message} name="comment" size={24} />
          </TouchableOpacity>
          <TouchableOpacity onPress={()=> props.onPressTo && props.onPressTo()} >
             <Icon style={styles.notification} name="bell" size={24} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
export default Toolbar;
const styles = StyleSheet.create({
  container: {
    height: 55,
    backgroundColor: '#FFF',
    borderBottomRightRadius: 15,
    borderBottomLeftRadius: 15,
  },
  viewHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    marginHorizontal: 20,
  },
  message: {
    padding: 5,
  },
  notification: {
    padding: 5,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  headerLeft: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerRight: {
    flexDirection: 'row',
  },
  txtTitle: {
    marginLeft: 20,
    fontSize: 15,
  }
});
