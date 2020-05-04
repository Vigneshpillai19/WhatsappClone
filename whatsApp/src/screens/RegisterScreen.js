import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput, KeyboardAvoidingView, TouchableOpacity, StatusBar, Alert } from 'react-native';
import BackgroundScreen from './BackgroundScreen';
import { SafeAreaView } from 'react-navigation';

import { Dropdown } from 'react-native-material-dropdown';
import { AntDesign } from '@expo/vector-icons';

import Spacer from '../components/Spacer';

const RegisterScreen = ({ navigation }) => {

    const code = [{
        value: '+91',
        label: '+91'
    },{
        value: '+92',
        label: '+92'
    },{
        value: '+93',
        label: '+93'
    }];

    const [numCode, setnumCode] = useState(code[0].label);

    return (
        <>
            <BackgroundScreen />
            <KeyboardAvoidingView behavior='position' style={styles.number} enabled={true}>
                <StatusBar hidden={true} />
            <View >
                <Spacer>
                    <Text style={{fontWeight: 'bold'}}>WhatsApp Messenger</Text>
                    <Text style={{ paddingTop: 5 }}>Enter your Mobile Number to Login or Register</Text>
                    <View style={styles.mobilenumber}>
                        <Dropdown
                            value = {numCode}
                            data = {code}
                            pickerStyle={{borderBottomColor:'transparent',borderWidth: 0}}
                            dropdownOffset={{ 'top': 10 }}
                            containerStyle={{width: '20%'}}
                            onChangeText={(value) => {
                                setnumCode(value.label);
                            }}
                        />
                        <Spacer>
                            <TextInput
                                placeholder="Your Mobile Number"
                                style={styles.numberInp}
                                keyboardType={'numeric'}
                                maxLength={10}
                                onSubmitEditing={() => navigation.navigate('Password')}
                                autoFocus={true}
                            />
                        </Spacer>
                    </View>
                    <View style={styles.social}>
                        <Text style={{paddingTop: 15}}> 
                            Or Connect with Social Account
                        </Text>
                        <TouchableOpacity
                            style={styles.socialbtn}
                            onPress={() => Alert.alert('Will Connect using Social Media Account')}
                            >
                            <AntDesign name="arrowright" size={25} color={'white'} />
                        </TouchableOpacity>
                    </View>
                </Spacer>
            </View>
            </KeyboardAvoidingView>
        </>
    );
};

RegisterScreen.navigationOptions = {
    headerShown: false
}

const styles = StyleSheet.create({
    number: {
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
    mobilenumber: {
        paddingTop: 20,
        flexDirection: 'row',
        paddingBottom: 20,
    },
    numberInp: {
        borderWidth: 0.5,
        flex: 1,
        alignItems: 'stretch', 
        height: 35,
        paddingLeft: 10,
        paddingRight: 50,
        paddingVertical: 2,
        borderRadius: 5,
        // elevation: 2,
        // fontSize: 18,
    },
    social: {
        flexDirection: 'row',
    },
    socialbtn: {
        borderWidth:1,
        borderColor:'rgba(0,0,0,0.2)',
        alignItems:'center',
        justifyContent:'center',
        width:40,
        height:40,
        backgroundColor:'#29b357',
        borderRadius:20,
        marginLeft: 40,
        marginTop: 5
    },
});

export default RegisterScreen;