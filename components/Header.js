  
import React, { memo } from 'react';
import { StyleSheet, Text } from 'react-native';
import { theme } from '../core/theme';

const Header = ({ children }) => <Text style={styles.header}>{children}</Text>;

const styles = StyleSheet.create({
  header: {
    fontSize: 26,
    color: theme.colors.secondary,
    fontWeight: 'bold',
    paddingTop: 14,
    paddingBottom: 7,
  },
});

export default memo(Header);