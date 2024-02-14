import React, { useState } from "react";
import { View, Text, StyleSheet, Vibration } from "react-native";
import { Countdown } from "../components/CountDown";
import { useKeepAwake } from "expo-keep-awake";
import RoundedButton from "../components/RoundedButton";
import { spacing } from "../utils/sizes";
import { colors } from "../utils/colors";
import { ProgressBar } from "react-native-paper";
import { Timing } from "./Timing";

const ONE_SECOND_IN_MS = 1000;

const PATTERN = [
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
];

export const Timer = ({ focusSubject,clearSubject,onTimerEnd }: TimerProps) => {
  useKeepAwake()
  const [isStarted, setIsStarted] = useState(false);
  const [progress, setProgress] = useState(1);
  const [minutes, setMinutes] = useState(0.1);
  const onEnd =(reset:()=>void) => {
    Vibration.vibrate(PATTERN);
    setIsStarted(false)
    setProgress(1)
    reset()
    onTimerEnd(focusSubject)
  }
  return (
    <View style={styles.container}>
      <View style={styles.countDown}>
        <Countdown
          minutes={minutes}
          isPaused={!isStarted}
          onProgress={setProgress}
          onEnd={onEnd}
        />
        <View style={{ paddingTop: spacing.xxl }}>
          <Text style={styles.title}>Focusing on:</Text>
          <Text style={styles.task}>{focusSubject}</Text>
        </View>
      </View>
      <View style={styles.timingWrapper}>
        <Timing onChangeTime={setMinutes} />
      </View>
      <View style={styles.buttonWrapper}>
        {!isStarted ? (
          <RoundedButton title={"Start"} onPress={() => setIsStarted(true)} />
        ) : (
          <RoundedButton title={"Pause"} onPress={() => setIsStarted(false)} />
        )}
      </View>
      <View style={styles.clearSubjectWrapper}>
          <RoundedButton size={75} title={"-"} onPress={clearSubject}/>
      </View>
      <View style={{ paddingTop: spacing.sm }}>
        <ProgressBar
          progress={progress}
          color={colors.progressBar}
          style={{ height: spacing.sm }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  countDown: {
    flex: 0.5,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonWrapper: {
    flex: 0.3,
    flexDirection: "row",
    padding: spacing.md,
    justifyContent: "center",
    alignItems: "center",
  },
  timingWrapper:{
    flex:0.1,
    padding:spacing.md
  },
  title: {
    color: colors.white,
    fontWeight: "bold",
    textAlign: "center",
  },
  task: {
    color: colors.white,
    textAlign: "center",
  },
  clearSubjectWrapper:{
    alignItems:'center',
    paddingBottom:20
  }
});
type TimerProps = {
  focusSubject: String;
  onTimerEnd?: () => void;
  clearSubject?: () => void;
};
