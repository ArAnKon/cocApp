import React from "react";
import { Button, Text, View } from "react-native";
import { useRouter } from "expo-router";

export default function Step4() {
  const router = useRouter();
  const [stub, onChangeStub] = React.useState("");

  return (
    <View>
      <Text>Тут будет ранджомайзер истории сыщика, сейчас его нет</Text>
      <Button title="Далее" onPress={() => router.navigate('/wizard/weapon')}/>
    </View>
  );
}