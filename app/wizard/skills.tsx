import React from "react";
import { Button, Text, View } from "react-native";
import { useRouter } from "expo-router";

export default function Step4() {
  const router = useRouter();
  const [stub, onChangeStub] = React.useState("");

  return (
    <View>
      <Text>Тут будет род выбора щанятий и скиллы, сейчас их нет</Text>
      <Button title="Далее" onPress={() => router.navigate('/wizard/characterStory')}/>
    </View>
  );
}
