import React from "react";
import { View, Text } from "react-native";

export const Timer = ({ focusSubject }: TimerProps) => {
  return (
    <View>
      <Text>Focus Feature {focusSubject}</Text>
    </View>
  );
};

type TimerProps = {
  focusSubject: String;
  onTimerEnd?: () => void;
  clearSubject?: () => void;
};
