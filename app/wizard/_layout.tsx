import { Stack } from "expo-router";

export default function WizardLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{
        title: 'Step 1'
      }} />
    </Stack>
  );
}
