import { StyleSheet } from 'react-native'
import { Modal as PaperModal, Portal } from 'react-native-paper'

interface ModalProps {
  open: boolean
  onClose: () => void
  children: React.ReactNode
  contentSytle: object
}

export const Modal = ({
  open,
  onClose,
  children,
  contentSytle,
}: ModalProps) => {
  return (
    <Portal>
      <PaperModal
        visible={open}
        onDismiss={onClose}
        contentContainerStyle={contentSytle}
      >
        {children}
      </PaperModal>
    </Portal>
  )
}
