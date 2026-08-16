import { Link } from 'expo-router';
import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text } from 'react-native'

const SignUp = () => {
  return (
    <SafeAreaView className="auth-safe-area">
      <Text>Sign Up</Text>
      <Link href="(auth)/sign-in" className="text-lg text-primary">
        Sign In
      </Link>
    </SafeAreaView>
  )
}

export default SignUp

