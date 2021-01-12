import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';
import firebase from 'firebase';
import db from '../config';

export default class SignInandLoginScreen extends React.Component {
    constructor() {
        super();
        this.state = {
            emailID: "",
            password: "" 
        }
    }
    render() {
        return(
            <View style={styles.container}>
                <View style={styles.profileContainer}>
                    <Text style={styles.titleText}>Book Santa</Text>
                </View>
                <View style={styles.buttonContainer}>
                    <TextInput
                        onChangeText={(text) => {
                            this.setState({
                                emailID: text
                            });
                        }}
                        placeholder="abc@123.com"
                        placeholderTextColor="#00008B"
                        style={styles.loginInput}
                        keyboardType="email-address"
                    />

                    <TextInput
                        onChangeText={(text) => {
                            this.setState({
                                password: text
                            });
                        }}
                        placeholder="Password"
                        placeholderTextColor="#00008B"
                        style={styles.loginInput}
                        secureTextEntry={true}
                    />
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => {
                            this.signUp(this.state.emailID, this.state.password);
                        }}
                    >
                        <Text style={styles.buttonText}>Sign Up</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => {
                            this.login(this.state.emailID, this.state.password);
                        }}
                    >
                        <Text style={styles.buttonText}>Login</Text>
                    </TouchableOpacity>

                </View>
            </View>
        )
    }
    signUp = (email, password) => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((user) => {
            return(Alert.alert("User Sign Up Worked"))
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            return(Alert.alert(errorMessage))
        });
    }

    login = (email, password) => {
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then((user) => {
        return(Alert.alert("Log In Worked"));
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            return(Alert.alert(errorMessage));
        });
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fed348',
        alignItems: 'center',
        justifyContent: 'center',
    },
    profileContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',  
    },
    buttonContainer: {
        flex: 1,
        alignItems: 'center'
    },
    titleText: {
        fontSize: 65,
        fontWeight: "300",
        color: '#291f00',
        paddingBottom: 30
    },
    loginInput: {
        width: 300,
        height: 50,
        borderColor: '#876600',
        backgroundColor: '#68ff7c',
        margin: 10,
        paddingLeft: 10,
        borderWidth: 2
    },
    button: {
        width: 300,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 2,
        borderRadius: 25,
        margin: 10,
        backgroundColor: '#95e8ff',
        shadowColor: '#876600 ',
        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowOpacity: 0.6,
        shadowRadius: 10,
        elevation: 16
    }
});
  