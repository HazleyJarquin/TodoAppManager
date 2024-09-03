import { ScreenWrapper } from '@/components/ScreenWrapper'
import { AnimatedUserProfileBanner } from '@/components/UserProfileBanner/components/AnimatedUserProfileBanner'
import { useUsersStore } from '@/store/useUsersStore'
import { UsersProps } from '@/types'
import React, { useEffect } from 'react'
import { BackHandler, FlatList, StyleSheet, View } from 'react-native'
import { shallow } from 'zustand/shallow'

export const Users = ({ navigation }: UsersProps) => {
  const { users } = useUsersStore((state) => ({ users: state.users }), shallow)

  useEffect(() => {
    const handleBackPress = () => {
      navigation.navigate('Home')
      return true
    }

    BackHandler.addEventListener('hardwareBackPress', handleBackPress)

    return () => {
      BackHandler.removeEventListener('hardwareBackPress', handleBackPress)
    }
  }, [navigation])
  return (
    <View style={styles.container}>
      <ScreenWrapper
        appBarHeaderStyle={styles.appBarStyle}
        title="Users List"
        backIconColor="black"
        goBack={() => navigation.navigate('Home')}
      >
        <FlatList
          style={{
            width: '100%',
            padding: 20,
          }}
          data={users}
          keyExtractor={(u) => u.id}
          renderItem={({ item, index }) => (
            <AnimatedUserProfileBanner index={index} users={item} />
          )}
        />
      </ScreenWrapper>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  appBarStyle: {
    backgroundColor: '#7A7777',
  },
})
