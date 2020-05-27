import React, { memo } from 'react';
import {
  ImageBackground,
  StyleSheet,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
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
            {/* <ScrollView contentContainerStyle={styles.scrollView}>
            </ScrollView> */}
              <KeyboardAvoidingView style={styles.container} >
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
    width: '100%',
    height:'100%',
    maxWidth: 340,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    //backgroundColor:'red'
  },
  scrollView:{
    flex:1,
    alignItems:"center",
    justifyContent:'center',
  },
});

export default memo(Background);