import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { TextInput } from "react-native-paper";
import RoundedButton from "../components/RoundedButton";
import { colors } from "../utils/colors";

const Focus = (props: {}) => {
    const [subject, setSubject] = useState("")
    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.textInput}
                    onChangeText={setSubject}
                    label="What would you like to focus on?"
                />
                <View style={styles.button}>
                    <RoundedButton title="+" size={50} />
                </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    text: {
        color: colors.white
    },
    textInput: {
        flex: 1,
        marginRight: 25,
    }        ,
    inputContainer: {
        padding: 20,
        flexDirection: 'row',
    },
    button: {
        justifyContent: 'center',
    }
})
export default Focus