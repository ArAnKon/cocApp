import React from 'react';
import { Button, Text, View } from "react-native";
import { useRouter } from 'expo-router';

import LabeledInput from "@/src/components/LabeledInput/LabeledInput";
import getRandom from "@/src/utils/random";

export default function Step2() {

    const router = useRouter();
    const [strenght, onChangeSTR] = React.useState(''); //сила
    const [power, onChangePOW] = React.useState(''); //мощность
    const [dexterity, onChangeDEX] = React.useState(''); //ловкость
    const [appearance, onChangeAPP] = React.useState(''); //наружность
    const [constitiution, onChangeCON] = React.useState('') //выносливость

    const [random, setRandom] = React.useState(0) //кубики

    const btnHandler = () => {
        setRandom(getRandom(3, 18)*5)
    }


    return (
        <View>
            <Text>Бросьте кубик и распределите полученные очки по характеристикам</Text>
            <Button title="Roll" onPress={btnHandler} />
            <Text>{random}</Text>
            <LabeledInput label="СИЛ" value={strenght} onChangeText={onChangeSTR}/>
            <LabeledInput label="ВЫН" value={constitiution} onChangeText={onChangeCON}/>
            <LabeledInput label="ЛВК" value={dexterity} onChangeText={onChangeDEX}/>
            <LabeledInput label="НАР" value={appearance} onChangeText={onChangeAPP}/>
            <LabeledInput label="МОЩ" value={power} onChangeText={onChangePOW}/>
            <Button title="Далее" onPress={() => router.navigate('/wizard/characteristics2Step')} />
        </View>
    )
}
