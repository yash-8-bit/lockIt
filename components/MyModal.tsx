import React from 'react'
import { PropsWithChildren } from 'react'
import { Modal, Portal } from 'react-native-paper'

interface MyModalInterface extends PropsWithChildren {
    isOpen: boolean;
    onClose: () => void;
}

function MyModal({ isOpen, onClose, children }: MyModalInterface) {

    return (
        <Portal >
            <Modal  visible={isOpen} onDismiss={onClose} >
                {children}
            </Modal>
        </Portal>
    )
}

export default MyModal