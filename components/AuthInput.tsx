import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import LoginIcon from '../assets/images/auth-screen-icons/login.svg';
import PasswordIcon from '../assets/images/auth-screen-icons/password.svg';

type Props = {
  label: 'Email' | 'Password';
  inputValue: string;
  onChangeText: (text: string) => void;
  secureTextEntry?: boolean;
  showPassword?: boolean;
  handleShowPassword?: () => void;
};

export const AuthInput: React.FC<Props> = ({
  label,
  inputValue,
  onChangeText,
  secureTextEntry,
  showPassword,
  handleShowPassword,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>

      <View style={styles.inputContainer}>
        {label === 'Email' && (
          <LoginIcon
            width={20}
            height={20}
            stroke="#8E91A8"
            opacity={0.25}
            style={styles.inputIcon}
          />
        )}
        {label === 'Password' && (
          <PasswordIcon
            width={20}
            height={20}
            stroke="#8E91A8"
            opacity={0.25}
            style={styles.inputIcon}
          />
        )}

        <TextInput
          value={inputValue}
          onChangeText={onChangeText}
          secureTextEntry={secureTextEntry && !showPassword}
          style={styles.input}
        />

        {label === 'Password' && (
          <Pressable
            style={styles.showPasswordButton}
            onPress={handleShowPassword}
          >
            {showPassword ? (
              <Ionicons name="eye-outline" size={20} color={'#BBBDCB'} />
            ) : (
              <Ionicons name="eye-off-outline" size={20} color={'#BBBDCB'} />
            )}
          </Pressable>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { width: '100%', marginTop: 12, gap: 5 },
  label: { fontSize: 12, color: '#8E91A8', lineHeight: 16 },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
    height: 34,
    backgroundColor: '#fff',
    borderRadius: 8,
    borderColor: '#BBBDCB',
    borderWidth: 1,
  },
  inputIcon: {
    marginLeft: 8,
  },
  input: {
    flex: 1,
    paddingLeft: 5,
  },
  showPasswordButton: {
    position: 'absolute',
    right: 8,
    top: 0,
    bottom: 0,
    justifyContent: 'center',
  },
});
