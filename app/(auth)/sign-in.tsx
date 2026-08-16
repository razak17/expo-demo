import { View, Text } from 'react-native'
import { Link } from 'expo-router';

const SignIn = () => {
  return (
    <View>
      <Text>Sign In</Text>
      <Link href="(auth)/sign-up" className="text-lg text-primary">
        Sign Up
      </Link>
      <Link href="/" className="text-lg text-primary">
        Go to Home
      </Link>
    </View>
  )
}

export default SignIn
