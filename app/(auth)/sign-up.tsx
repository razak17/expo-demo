import { Link } from 'expo-router';
import { View, Text } from 'react-native'

const SignIn = () => {
  return (
    <View>
      <Text>Sign Up</Text>
      <Link href="(auth)/sign-in" className="text-lg text-primary">
        Sign In
      </Link>
    </View>
  )
}

export default SignIn

