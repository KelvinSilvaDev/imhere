import React from "react";
import { Text, View, TouchableOpacity } from "react-native";

import { styles } from "./styles";

type ParticipantProps = {
  name: string;
  onRemove: any;
};

export function Participant({ name, onRemove }: ParticipantProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{name}</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => onRemove({ name })}
      >
        <Text style={styles.buttonText}>-</Text>
      </TouchableOpacity>
    </View>
  );
}
