import { StyleSheet, Text, View, Platform, SafeAreaView, StatusBar } from 'react-native';
import { colors } from './src/utils/colors';
import Focus from './src/features/Focus';
import { useState } from 'react';
import { Timer } from './src/features/Timer';

export default function App() {
  const [currentSubject, setCurrentSubject] = useState<String>("")
  return (
    <SafeAreaView style={styles.container}>
      {!currentSubject ? <Focus addSubject={setCurrentSubject} /> : <Timer
        focusSubject={currentSubject}
        onTimerEnd={()=>{}}
        clearSubject={()=>{}}
      />}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    backgroundColor: colors.darkBlue
  },
  text: {
    color: colors.white
  }
});
{/* <View><Text style={{color:colors.white}}>I am going to render a timer for {currentSubject}</Text></View> */}