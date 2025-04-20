import React from "react";
import { Button, Text, View } from "react-native";
import { useRouter } from "expo-router";

export default function Step4() {
  const router = useRouter();

  return (
    <View>
      <Text>Тут будет рандомайзер истории сыщика, сейчас его нет</Text>
      <Button title="Далее" onPress={() => router.navigate("/wizard/weapon")} />
    </View>
  );
}
