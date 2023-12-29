import React, { useState, useEffect } from 'react'
import image from '../../assets/image.png'
import { Text, View, TextInput, StyleSheet, Image, ImageBackground, SafeAreaView, Button } from 'react-native'

function HomeScreen() {

    const [receiver, setReceiver] = useState([])
    const [sender, setSender] = useState('')
    const [message, setMessage] = useState('')

    return (
        <SafeAreaView>
            <View style={styles.wrapper}>
                <View style={styles.headingContainer}>
                    <Text style={styles.headingText}>Make a birthday card</Text>
                </View>
                <View style={styles.container}>
                    <View style={styles.inputSection}>
                        <TextInput
                            style={styles.textInput}
                            placeholder=' Sending to'
                            onChangeText={(text) => setReceiver(text)} />
                        <TextInput
                            style={styles.textInput}
                            placeholder=' From who'
                            onChangeText={(text) => setSender(text)} />
                        <TextInput
                            style={styles.textInput}
                            placeholder='message'
                            onChangeText={(text) => setMessage(text)} />
                    </View>
                </View>
                <View style={styles.cardContainer} >
                    <View>
                        <ImageBackground source={require('../../assets/image.png')} resizeMode="cover" style={styles.image}>
                            <Text style={styles.toText}>Dear {receiver}</Text>
                            <Text style={styles.fromText}>From {sender}</Text>
                            <Text style={styles.imageMiddleText}>Happy</Text>
                            <Text style={styles.imageBottomText}>Birthday</Text>
                            <Text style={styles.messageText}>{message}</Text>
                        </ImageBackground>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        alignItems: 'center',
    },

    container: {
        height: 200,
        width: 300,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#E57556',
        borderWidth: 1,
        borderRadius: 15,
        marginBottom: -500,
    },

    cardContainer: {
        marginTop: 550,
    },

    inputSection: {
        alignItems: "center",
        justifyContent: 'center'
    },

    textInput: {
        height: 35,
        width: 200,
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: 'gray',
        margin: 5
    },

    headingContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
        fontWeight: 'bold',
        marginTop: 120,
    },

    headingText: {
        fontSize: 15,
        fontWeight: 'bold',
    },

    image: {
        flex: 1,
        justifyContent: 'center',
        width: 300,
        height: 250,
        alignItems: 'center',
        justifyContent: 'center'
    },

    toText: {
        color: '#044C59',
        fontSize: 12,
        marginTop: 20,
    },

    fromText: {
        color: '#044C59',
        fontSize: 10,
        marginTop: 10,
    },

    imageMiddleText: {
        color: '#E57556',
        marginTop: 15,
        fontSize: 18,
        fontStyle: 'italic'
    },

    imageBottomText: {
        color: '#044C59',
        marginTop: 5,
        fontSize: 18,
    },

    messageText: {
        color: '#044C59',
        marginTop: 20,
        fontSize: 12,
    }


})


export default HomeScreen
