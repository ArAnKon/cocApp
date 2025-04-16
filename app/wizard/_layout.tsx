import { Stack } from "expo-router";

export default function WizardLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "Step 1",
        }}
      />
      <Stack.Screen
        name="characteristics1Step"
        options={{
          title: "Step 2",
        }}
      />
      <Stack.Screen
        name="characteristics2Step"
        options={{
          title: "Step2",
        }}
      />
      <Stack.Screen
        name="autocomplete"
        options={{
          title: "Step3",
        }}
      />
      <Stack.Screen
        name="skills"
        options={{
          title: "Step4",
        }}
      />

      <Stack.Screen
        name="characterStory"
        options={{
          title: "Step5",
        }}
      />

      <Stack.Screen
        name="weapon"
        options={{
          title: "Step6",
        }}
      />
    </Stack>
  );
}
