import React, {useState} from 'react'
import {View, Text, TextInput, StyleSheet, TouchableOpacity} from 'react-native'
import axios from 'axios'

const Register = ({navigation}) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const registerUser = () => {
        const user = {email, password}
        axios.post('http://192.168.137.1:3100/register', {user})
            .then((res) => {
                alert(res.data)
            })
        navigation.navigate('Sign in')
    }

    return (
        <View style={styles.parent}>
            <View style={styles.wrapper}>
                <Text style={styles.label}>Your email</Text>
                <TextInput
                    style={styles.input}
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                />
            </View>
            <View style={styles.wrapper}>
                <Text style={styles.label}>Your password</Text>
                <TextInput
                    style={styles.input}
                    value={password}
                    onChangeText={(text) => setPassword(text)}
                />
            </View>
            <TouchableOpacity onPress={registerUser} style={styles.button}>
                <Text style={styles.btntext}>Sign Up</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    parent: {
        margin: 5,
        padding: 10
    },

    input: {
        borderWidth: 0.4,
        borderRadius:10,
        height: 40,
        padding: 10,
        margin: 20,
        color: 'grey'
    },

    label: {
        margin: 20
    },

    wrapper: {
        padding: 10
    }, 

    button: {
        backgroundColor: 'black',
        height: 45,
        borderRadius: 10,
        alignItems: 'center'
    }, 

    btntext: {
        color: 'white',
        marginTop: 10,
        marginBottom: 5
    }
})

export default Register