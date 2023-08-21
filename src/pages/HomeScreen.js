import React, { useState, useEffect } from 'react'
import image from '../../assets/image.png'
import { Text, View, TextInput, StyleSheet, Image, ImageBackground } from 'react-native'

function HomeScreen() {

    const [name, setName] = useState([])
    const [message, setMessage] = useState('')

    useEffect(() => {
        console.log(name);
        console.log(message);
    }, [name, message])

    return (
        <View style={styles.wrapper}>
            <View style={styles.headingContainer}>
                <Text style={styles.headingText}>Make a birthday card</Text>
            </View>
            <View style={styles.container}>
                <View style={styles.inputSection}>
                    <TextInput style={styles.textInput} placeholder='name' onBlur={(ev) => setName(ev.target.value)} />
                    <TextInput style={styles.textInput} placeholder='message' onBlur={(ev) => setMessage(ev.target.value)} />
                </View>
            </View>
            <View style={styles.cardContainer} >
                <View>
                    <ImageBackground source={require('../../assets/image.png')} resizeMode="cover" style={styles.image}>
                        <Text style={styles.imageTopText}>Dear {name}</Text>
                        <Text style={styles.imageMiddleText}>Happy</Text>
                        <Text style={styles.imageBottomText}>Birthday</Text>
                        <Text style={styles.messageText}>{message}</Text>
                    </ImageBackground>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        alignItems: 'center',
    },

    container: {
        height: 100,
        width: 200,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#E57556',
        borderWidth: 1,
        borderRadius: 15,
    },

    inputSection: {
        alignItems: "center",
        justifyContent: 'center'
    },

    textInput: {
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: 'gray',
        margin: 5
    },

    cardContainer: {
        marginTop: 50
    },

    headingContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
        fontWeight: 'bold'
    },

    headingText: {
        fontSize: 15,
        fontWeight: 'bold',
    },

    image: {
        flex: 1,
        justifyContent: 'center',
        width: 250,
        height: 200,
        alignItems: 'center',
        justifyContent: 'center'
    },

    imageTopText: {
        color: '#044C59',
        fontSize: 12,
        marginTop: 40,
    },

    imageMiddleText: {
        color: '#E57556',
        marginTop: 15,
        fontSize: 18,
        fontFamily: 'roboto',
        fontStyle: 'italic'
    },

    imageBottomText: {
        color: '#044C59',
        marginTop: 5,
        fontSize: 18,
        fontFamily: 'roboto',
        
    },

    messageText: {
        color: '044C59',
        marginTop: 20,
        fontSize: 12,
    }


})


export default HomeScreen
