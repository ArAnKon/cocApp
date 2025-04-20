//на этапе создания роутинга логика на данном экране не реализовывается
//на данном этапе логика кубиков для определения БкУ и Компл не реализована

import React from "react";
import { Button, Text, View } from "react-native";
import { useRouter } from "expo-router";

import LabeledInput from "@/src/components/LabeledInput/LabeledInput";

export default function Step3() {
  const router = useRouter();
  const [sanity, onChangeSanity] = React.useState(""); //рассудок
  const [hp, onChangeHP] = React.useState(""); //ПЗ
  const [mp, onChangeMP] = React.useState(""); //ПМ
  const [speed, onChangeSpeed] = React.useState(""); //скорость
  const [db, onChangedb] = React.useState(""); //БкУ
  const [build, onChangeBuild] = React.useState(""); //Компл

  return (
    <View>
      <LabeledInput
        label="Рассудок"
        value={sanity}
        onChangeText={onChangeSanity}
      />
      <LabeledInput label="ПЗ" value={hp} onChangeText={onChangeHP} />
      <LabeledInput label="ПМ" value={mp} onChangeText={onChangeMP} />
      <LabeledInput label="ПМ" value={speed} onChangeText={onChangeSpeed} />
      <LabeledInput label="БкУ" value={mp} onChangeText={onChangeMP} />
      <Button title="Далее" onPress={() => router.navigate("/wizard/skills")} />
    </View>
  );
}
