import { getFirstAndLastInitials } from '@/utils/getFirstAndLastInitials'
import { Image, StyleSheet, View } from 'react-native'
import { Avatar, Text } from 'react-native-paper'

interface UserProfileBannerProps {
  avatar: string
  username: string
  avatarImage?: boolean
}

export const UserProfileBanner = ({
  avatar,
  username,
  avatarImage = true,
}: UserProfileBannerProps) => {
  return (
    <View style={styles.container}>
      <View style={{ width: '50%' }}>
        {avatarImage ? (
          <Avatar.Image size={60} source={{ uri: avatar }} />
        ) : (
          <Avatar.Text size={60} label={getFirstAndLastInitials(username)} />
        )}
      </View>

      <Text
        style={{
          color: '#fff',
          fontWeight: 'bold',
          fontSize: 20,
          width: '50%',
        }}
      >
        {username}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#201F1F',
    alignItems: 'center',
    padding: 20,
    borderRadius: 10,
    flexDirection: 'row',
    marginBottom: 10,
  },
})
