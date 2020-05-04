import React from 'react';
import { Text, View, StyleSheet, KeyboardAvoidingView, StatusBar, TextInput, TouchableOpacity, Alert } from 'react-native';
import BackgroundScreen from '../screens/BackgroundScreen';

import { AntDesign } from '@expo/vector-icons';

import Spacer from '../components/Spacer';

const PasswordScreen = ({ navigation }) => {
    return (
        <>
            <BackgroundScreen />
            <KeyboardAvoidingView behavior='position' style={styles.pwdBar} enabled={true}>
                <StatusBar hidden={true} />
                <View>
                    <Spacer>
                        <Text style={{fontWeight: 'bold'}}>Password</Text>
                        <Text style={{ paddingTop: 5 }}>Enter your Password to Login</Text>
                        <TextInput 
                            secureTextEntry={true} 
                            style={styles.password}
                            onSubmitEditing={() => navigation.navigate('mainFlow')}
                            autoFocus={true}
                        />
                        <View style={styles.forgotPwd}>
                            <Text style={{paddingTop: 15, fontWeight: 'bold'}}> 
                                I forgot my Password
                            </Text>
                            <TouchableOpacity
                                style={styles.pwdbtn}
                                onPress={() => Alert.alert('Forget Password function will Execute..')}
                                >
                                <AntDesign name="arrowright" size={25} color={'white'} />
                            </TouchableOpacity>
                        </View>
                    </Spacer>
                </View>
            </KeyboardAvoidingView> 
        </>
    )
}

PasswordScreen.navigationOptions = {
    headerShown: false
}

const styles = StyleSheet.create({
    pwdBar: {
        position: 'absolute',
        height: '35%',
        width: '90%',
        backgroundColor: '#ffffff',
        borderRadius: 10,
        borderWidth: 5,
        borderColor: 'white',
        marginTop: '30%',
        marginHorizontal: '5%',
        elevation: 5,
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    password: {
        borderWidth: 0.5,
        alignItems: 'stretch', 
        // height: 35,
        // paddingLeft: 8,
        // paddingRight: 50,
        paddingVertical: 2,
        paddingLeft: 10,
        borderRadius: 5,
        marginTop: 10,
    },
    forgotPwd: {
        flexDirection: 'row',
        marginTop: 30,
        marginLeft: 10,
    },
    pwdbtn: {
        borderWidth:1,
        borderColor:'rgba(0,0,0,0.2)',
        alignItems:'center',
        justifyContent:'center',
        width:40,
        height:40,
        backgroundColor:'#29b357',
        borderRadius:20,
        marginLeft: 120,
        marginTop: 5
    },
});

export default PasswordScreen;