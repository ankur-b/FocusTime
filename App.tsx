import { StyleSheet, Text, View, Platform, SafeAreaView, StatusBar } from 'react-native';
import { colors } from './src/utils/colors';
import Focus from './src/features/Focus';
import { useState } from 'react';
import { Timer } from './src/features/Timer';
import FocusHistory from './src/features/FocusHistory';

export default function App() {
  const [currentSubject, setCurrentSubject] = useState<String|null>("")
  const [history,setHistory] = useState<String[]>([])
  return (
    <SafeAreaView style={styles.container}>
      {!currentSubject ? <View>
        <Focus addSubject={setCurrentSubject} />
        <FocusHistory history={history}/>
      </View> : <Timer
        focusSubject={currentSubject}
        onTimerEnd={()=>{
          setHistory([...history,currentSubject])
        }}
        clearSubject={()=>setCurrentSubject(null)}
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