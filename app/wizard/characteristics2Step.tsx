import React from "react";
import { Button, Text, View } from "react-native";
import { useRouter } from "expo-router";

import LabeledInput from "@/src/components/LabeledInput/LabeledInput";
import getRandom from "@/src/utils/random";

export default function Step2() {
  const router = useRouter();
  const [size, onChangeSIZ] = React.useState(""); //телосложение
  const [intelligense, onChangeINT] = React.useState(""); //интеллект
  const [education, onChangeEDU] = React.useState(""); //образование

  const [random, setRandom] = React.useState(0); //кубики

  const btnHandler = () => {
    setRandom(getRandom(2, 12) + 6 * 5);
  };

  return (
    <View>
      <Text>
        Бросьте кубик и распределите полученные очки по характеристикам
      </Text>
      <Button title="Roll" onPress={btnHandler} />
      <Text>{random}</Text>
      <LabeledInput label="ТЕЛ" value={size} onChangeText={onChangeSIZ} />
      <LabeledInput
        label="ИНТ"
        value={intelligense}
        onChangeText={onChangeINT}
      />
      <LabeledInput label="ОБР" value={education} onChangeText={onChangeEDU} />
    </View>
  );
}
