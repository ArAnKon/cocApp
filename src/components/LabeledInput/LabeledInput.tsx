import React from 'react';
import { StyleSheet, Text, TextInput, View } from "react-native";

type LabeledInputProps = {
  label: string
  value: string
  onChangeText: (text: string) => void
}

export default function LabeledInput(props: LabeledInputProps) {
  return (
    <View style={styles.root}>
      <Text style={styles.label}>{props.label}</Text>
      <TextInput style={styles.input} placeholder={`${props.label}...`} value={props.value} onChangeText={props.onChangeText} placeholderTextColor="#777" />
    </View>
  )
}

const styles = StyleSheet.create({
  root: {
    padding: 8
  },
  label: {
    marginLeft: 8,
    marginBottom: 4
  },
  input: {
    padding: 8,
    borderWidth: 1,
    borderRadius: 6,
    borderColor: '#ccc'
  }
})