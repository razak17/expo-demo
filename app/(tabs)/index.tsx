import { SafeAreaView } from "react-native-safe-area-context";

import { Link } from "expo-router";
import { Text, View } from "react-native";


export default function Index() {
  return (
    <SafeAreaView className="flex-1 bg-background p-5">
      <Text className="text-xl font-bold text-success">
        Welcome to Nativewind!
      </Text>
      <Link href="/onboarding" className="text-lg text-primary">
        Get started
      </Link>
      <Link href="/(auth)/sign-in" className="text-lg text-primary">
        Sign In
      </Link>
      <Link href="/(auth)/sign-up" className="text-lg text-primary">
        Sign Up
      </Link>
      <Link href="/subscriptions/hulu" className="text-lg text-primary">
        Hulu Subscription
      </Link>
      <Link
        href={{
          pathname: "/subscriptions/[id]",
          params: { id: "netflix" }
        }}
        className="text-lg text-primary">
        Netflix Subscription
      </Link>
    </SafeAreaView>
  );
}
