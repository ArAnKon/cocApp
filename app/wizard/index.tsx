import React, { useMemo, useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import RadioGroup, { RadioButtonProps } from "react-native-radio-buttons-group";
import { useRouter } from "expo-router";

import LabeledInput from "@/src/components/LabeledInput/LabeledInput";
import { ageRadioButtonsProps } from "@/src/constants/ageRadioButtonsProps";

export default function Step1() {
  const router = useRouter();

  const [name, onChangeName] = React.useState("");
  const [residence, onChangeResidence] = React.useState("");
  const [birthplace, onChangeBirthplace] = React.useState("");
  const radioButtons: RadioButtonProps[] = useMemo(
    () => ageRadioButtonsProps,
    []
  );

  const [selectedId, setSelectedId] = useState<string | undefined>();

  return (
    <View>
      <LabeledInput label="Имя" value={name} onChangeText={onChangeName} />

      <LabeledInput
        label="Место жительства"
        value={residence}
        onChangeText={onChangeResidence}
      />

      <LabeledInput
        label="Место рождения"
        value={birthplace}
        onChangeText={onChangeBirthplace}
      />

      <Text>Выберите возраст Вашего сыщика:</Text>

      <RadioGroup
        radioButtons={radioButtons}
        onPress={setSelectedId}
        selectedId={selectedId}
        layout="row"
        containerStyle={styles.radioGroup}
      />

      <Button
        title="Далее"
        onPress={() => router.navigate("/wizard/characteristics1Step")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  radioGroup: {
    flexWrap: "wrap",
  },
});
