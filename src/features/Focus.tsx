import React, { Dispatch, useState } from "react";
import { View, StyleSheet } from "react-native";
import { TextInput } from "react-native-paper";
import RoundedButton from "../components/RoundedButton";
import { colors } from "../utils/colors";
import { spacing } from "../utils/sizes";
const Focus = ({addSubject}: FocusProps) => {
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
                    <RoundedButton title="+" size={50} onPress={()=>addSubject(subject)} />
                </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        
    },
    text: {
        color: colors.white
    },
    textInput: {
        flex: 1,
        marginRight: spacing.md,
    }        ,
    inputContainer: {
        padding: spacing.lg,
        flexDirection: 'row',
    },
    button: {
        justifyContent: 'center',
    }
})
export default Focus

type FocusProps  = {
    addSubject: Dispatch<String>
}