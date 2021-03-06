import React from 'react';
import { ScrollView, View } from 'react-native';
import styles from './styles/AppStyles';
import DefaultOrBallSpinnerButton from './DefaultOrBallSpinnerButton';
import BarSpinnerButton from './BarSpinnerButton';
import DotSpinnerButton from './DotSpinnerButton';
import MaterialSpinnerButton from './MaterialSpinnerButton';
import PacmanSpinnerButton from './PacmanSpinnerButton';
import PulseSpinnerButton from './PulseSpinnerButton';
import SkypeSpinnerButton from './SkypeSpinnerButton';
import UIActivitySpinnerButton from './UIActivitySpinnerButton';
import WaveSpinnerButton from './WaveSpinnerButton';

const App = () => {
  return (
    <ScrollView style={styles.safeArea}>
      <DefaultOrBallSpinnerButton />
      <DotSpinnerButton />
      <PacmanSpinnerButton />
      <SkypeSpinnerButton />
      <BarSpinnerButton />
      <MaterialSpinnerButton />
      <PulseSpinnerButton />
      <UIActivitySpinnerButton />
      <WaveSpinnerButton />
    </ScrollView>
  )
};

export default App;
