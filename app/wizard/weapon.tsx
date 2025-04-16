import React from "react";
import { Button, Text, View } from "react-native";
import { useRouter } from "expo-router";

export default function Step4() {
  const router = useRouter(); //оставила роут чтобы потом перейти на экран готового чарника

  return (
    <View>
      <Text>Тут будет оружие и снаряжение, сейчас его нет</Text>
      <Button title="Сохранить" />
    </View>
  );
}
