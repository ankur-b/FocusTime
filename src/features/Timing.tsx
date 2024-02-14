import React,{Dispatch,SetStateAction} from "react";
import { View,StyleSheet } from "react-native";
import RoundedButton from "../components/RoundedButton";

export const Timing = ({onChangeTime}:{onChangeTime:Dispatch<SetStateAction<number>>})=>{
    return(
        <View style={styles.timingButton}>
            <RoundedButton size={75} title={"10"} onPress={()=>onChangeTime(10)} />
            <RoundedButton size={75} title={"20"} onPress={()=>onChangeTime(15)} />
            <RoundedButton size={75} title={"30"} onPress={()=>onChangeTime(20)} />
        </View>
    )
}
const styles = StyleSheet.create({
    timingButton:{
        flex:1,
        justifyContent:'space-evenly',
        flexDirection:'row'
    }
})