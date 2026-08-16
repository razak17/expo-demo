import { Link, useLocalSearchParams } from 'expo-router';
import { View, Text } from 'react-native'

const SubscriptionsDetails = () => {
  const { id } = useLocalSearchParams<{ id: string }>()
  return (
    <View>
      <Text className="text-primary">SubscriptionsDetails: {id}</Text>
      <Link href="/subscriptions">Go to Subscriptions</Link>
    </View>
  )
}

export default SubscriptionsDetails
