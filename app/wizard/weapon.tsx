import React from "react";
import { Button, Text, View } from "react-native";
import { useRouter } from "expo-router";

export default function Step4() {
  const router = useRouter();
  const [stub, onChangeStub] = React.useState("");

  return (
    <View>
      <Text>Тут будет оружие и снаряжение, сейчас его нет</Text>
      <Button title="Сохранить"/>
    </View>
  );
}