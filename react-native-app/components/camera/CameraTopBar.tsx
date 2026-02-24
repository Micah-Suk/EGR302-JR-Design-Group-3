import { Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface CameraTopBarProps {
    onCancel: () => void;
    onFlip: () => void;
}

export function CameraTopBar({ onCancel, onFlip }: CameraTopBarProps) {
    return (
    <View style={styles.topBar}>
      <TouchableOpacity style={styles.button} onPress={onCancel}>
        <Text style={styles.buttonText}>Cancel</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={onFlip}>
        <Text style={styles.buttonText}>Flip</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
    topBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingTop: Platform.OS === 'android' ? 16 : 0,
    },
    button: {
        padding: 8,
    },
    buttonText: {
        color: '#fff',
        fontSize: 17,
        fontWeight: '500',
    },
});