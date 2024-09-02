import React from 'react'
import { Appbar } from 'react-native-paper'
import { View, StyleSheet } from 'react-native'

interface AppBarActions {
  icon: string
  onPress: () => void
}

interface ScreenWrapperProps {
  title: string
  children: React.ReactNode
  goBack?: () => void
  appBarHeaderStyle?: object
  appBarBackActionStyle?: object
  appBarContentStyle?: object
  backIconColor?: string
  titleColor?: string
  appBarActions?: AppBarActions[]
}

export const ScreenWrapper: React.FC<ScreenWrapperProps> = ({
  title,
  children,
  goBack,
  appBarHeaderStyle,
  appBarBackActionStyle,
  appBarContentStyle,
  backIconColor = 'black',
  titleColor = 'black',
  appBarActions,
}) => {
  return (
    <View style={styles.container}>
      <Appbar.Header style={appBarHeaderStyle}>
        {goBack && (
          <Appbar.BackAction
            style={appBarBackActionStyle}
            onPress={goBack}
            iconColor={backIconColor}
          />
        )}
        <Appbar.Content
          style={appBarContentStyle}
          color={titleColor}
          title={title}
        />

        {appBarActions?.map((action, index) => (
          <Appbar.Action icon={action.icon} onPress={action.onPress} />
        ))}
      </Appbar.Header>
      <View style={styles.content}>{children}</View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
  },
  content: {
    flex: 1,
  },
})
