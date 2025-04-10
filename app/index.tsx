import { Button, View } from "react-native";
import { useRouter } from 'expo-router';

export default function Index() {
  const router = useRouter();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Button title="Wizard" onPress={() => router.navigate('/wizard')} />
    </View>
  );
}
