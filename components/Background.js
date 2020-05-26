import React, { memo } from 'react';
import {
  ImageBackground,
  StyleSheet,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard
} from 'react-native';

const DismissKeyboard = ({children}) => (
    <TouchableWithoutFeedback onPress = {() => Keyboard.dismiss()}>
        {children}
    </TouchableWithoutFeedback>
);

const Background = ({ children }) => (
    <DismissKeyboard>
        <ImageBackground
            source={require('../assets/images/background_dots.png')}
            resizeMode="repeat"
            style={styles.background}
        >
            <KeyboardAvoidingView style={styles.container} behavior="padding">
                {children}
            </KeyboardAvoidingView>
        </ImageBackground>
    </DismissKeyboard>
);

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
  },
  container: {
    flex: 1,
    padding: 20,
    width: '100%',
    maxWidth: 340,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default memo(Background);