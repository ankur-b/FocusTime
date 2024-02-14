import React, { ReactElement } from "react";
import { View,Text,StyleSheet,FlatList} from "react-native";
import { colors } from "../utils/colors";
import { fontSizes,spacing} from "../utils/sizes";
const FocusHistory=({history}:{history:String[]})=>{
    if(!history || !history.length){
        return null
    }
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Things We Have Focused On :</Text>
            <FlatList data={history} renderItem={({item}:{item:String}):ReactElement=>{
               return <Text style={styles.item}>- {item}</Text>
            }}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        padding:spacing.md,
    },
    title:{
        color:colors.white,
        fontSize:fontSizes.lg,
        textAlign:'center',
        fontWeight:"bold"
    },
    item:{
        fontSize:fontSizes.md,
        color:colors.white,
        padding:spacing.sm,
    }
})

export default FocusHistory