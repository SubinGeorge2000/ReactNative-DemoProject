import React from 'react';
import {Modal, StyleSheet, View, Pressable, Image} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
type Props = {
  modalVisible: boolean;
  setModalVisible: (modalVisible: boolean) => void;
  selectedItem?: {
    id: number;
    shirtName: string;
    category: string;
    price: number;
    imageUrl: string;
  };
};
export default function CustomModal({
  modalVisible,
  setModalVisible,
  selectedItem,
}: Props) {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Pressable onPress={() => setModalVisible(!modalVisible)}>
            <View style={styles.cancelButton}>
              <MaterialIcons name="cancel" color="black" size={40} />
            </View>
          </Pressable>
          <Image
            style={styles.modalImage}
            source={{
              uri: selectedItem?.imageUrl,
            }}
          />
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    height: '100%',
    width: '100%',
  },
  modalContent: {
    backgroundColor: 'white',
  },
  cancelButton: {
    alignItems: 'flex-end',
    paddingEnd: 10,
    paddingTop: 10,
  },
  modalImage: {
    height: '100%',
    width: '100%',
  },
});
