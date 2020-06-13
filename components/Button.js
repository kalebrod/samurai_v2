import React, { memo } from 'react';
import { StyleSheet } from 'react-native';
import { Button as PaperButton } from 'react-native-paper';

type Props = React.ComponentProps<typeof PaperButton>;

const Button = ({ mode, style, children, ...props }: Props) => (
  <PaperButton
      style={[
        styles.button,
        mode === 'outlined' && { backgroundColor: '#4ecdc4' },
        style,
      ]}
      labelStyle={styles.text}
      color="grey"
      mode={mode}
      {...props}
  >
    {children}
  </PaperButton>
);

const styles = StyleSheet.create({
  button: {
      marginVertical: 10,
  },
  text: {
      fontSize: 15,
      lineHeight: 26,
  },
});

export default memo(Button);