import { Stack } from "expo-router";

export default function WizardLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{
        title: 'Step 1'
      }} />
      <Stack.Screen name="characteristics1Step" options={{
        title: 'Step 2'
      }} />
        <Stack.Screen name="characteristics2Step" options={{
    title: 'Step2'
  }}/>
    </Stack>
    
  );
}
