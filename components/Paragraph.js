import React, { memo } from 'react';
import { StyleSheet, Text } from 'react-native';
import { theme } from '../core/theme';

type Props = {
  children: React.ReactNode;
};

const Paragraph = ({ style,children }: Props) => (
  <Text style={[style,styles.text]}>{children}</Text>
);

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    lineHeight: 26,
    marginBottom: 14,
  },
});

export default memo(Paragraph);