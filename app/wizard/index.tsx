import React from 'react';
import { View } from "react-native";

import LabeledInput from "@/src/components/LabeledInput/LabeledInput";

export default function Step1() {
  const [name, onChangeName] = React.useState('')
  const [residence, onChangeResidence] = React.useState('')
  const [birthplace, onChangeBirthplace] = React.useState('')

  return (
    <View>
      <LabeledInput label="Имя" value={name} onChangeText={onChangeName}/>
      <LabeledInput label="Место жительства" value={residence} onChangeText={onChangeResidence} />
      <LabeledInput label="Место рождения" value={birthplace} onChangeText={onChangeBirthplace} />
    </View>
  );
}
