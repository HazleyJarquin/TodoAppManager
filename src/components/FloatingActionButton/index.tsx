import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Button, Icon, IconButton, Tooltip } from 'react-native-paper'

interface FloatingActionButtonProps {
  onPress: () => void
  icon: string
  iconColor: string
  iconButtonSize: number
  tooltipText: string
  buttonBackground: string
}

export const FloatingActionButton = ({
  icon,
  onPress,
  iconButtonSize,
  iconColor,
  tooltipText,
  buttonBackground,
}: FloatingActionButtonProps) => {
  return (
    <View style={styles.addButtonContainer}>
      <Tooltip title={tooltipText}>
        <IconButton
          icon={icon}
          iconColor={iconColor}
          size={iconButtonSize}
          style={[
            styles.button,
            {
              backgroundColor: buttonBackground,
            },
          ]}
          onPress={onPress}
        />
      </Tooltip>
    </View>
  )
}

const styles = StyleSheet.create({
  addButtonContainer: {
    position: 'absolute',
    bottom: 20,
    right: 0,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
  },
  buttonContent: {
    alignItems: 'center',
    justifyContent: 'center',
  },
})
