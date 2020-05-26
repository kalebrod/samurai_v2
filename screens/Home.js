import React, { memo } from 'react';
import Background from '../components/Background';
import Header from '../components/Header';
import Button from '../components/Button';
import Paragraph from '../components/Paragraph';
import { Navigation } from '../types';

type Props = {
  navigation: Navigation;
};

const HomeScreen = ({ navigation }: Props) => (
  <Background>
    <Header>Login Template</Header>

    <Paragraph>
      The easiest way to start with your amazing application.
    </Paragraph>
  </Background>
);

export default memo(HomeScreen);
