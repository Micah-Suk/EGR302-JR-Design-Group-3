import { ActivityIndicator, StyleSheet, TouchableOpacity, View } from 'react-native';

interface CaptureButtonProps {
    onPress: () => void;
    isCapturing: boolean;
}

export function CaptureButton({ onPress, isCapturing }: CaptureButtonProps) {
    return (
    <TouchableOpacity
      style={[styles.captureButton, isCapturing && styles.disabled]}
      onPress={onPress}
      disabled={isCapturing}
    >
      {isCapturing ? (
        <ActivityIndicator color="#000" />
      ) : (
        <View style={styles.captureButtonInner} />
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  captureButton: {
    width: 72,
    height: 72,
    borderRadius: 36,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 4,
    borderColor: 'rgba(255,255,255,0.5)',
  },
  disabled: {
    opacity: 0.6,
  },
  captureButtonInner: {
    width: 58,
    height: 58,
    borderRadius: 29,
    backgroundColor: '#fff',
  },
});