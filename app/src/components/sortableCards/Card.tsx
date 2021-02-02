import React from 'react';
import { View, Dimensions, StyleSheet } from 'react-native';
import { Text, Svg, Line, G} from 'react-native-svg';

import { themes } from '../../context/ThemeContext';
import { constStyles } from '../../constants/StyleStructure';
import { getDomain, CardChart } from './CardChart';
import data from '../../../assets/data/ticker.json';

export interface Card {
  style: number;
  id: number;
  name: string;
}

export interface CardProps {
  card: Card;
}

const { height, width } = Dimensions.get('window');
export const MAX_COL = 2;
export const COL_SIZE = width / MAX_COL;
export const CARD1_SIZE = { height: height * 0.45, width: width * 0.9 };
export const CARD2_SIZE = { height: height * 0.16, width: (width / 2) * .90};

export const Card = ({ card: { style, name } }: CardProps) => {
  const candles = data.slice(0, 25);
  const domain = getDomain(candles);
  return (
    <View style={[constStyles.shadow, style == 1 ? styles.fullContainer : styles.halfContainer]}>
      <Svg style={styles.thumbnail} viewBox='-10 -5 200 100'>
        <Line stroke={themes.Dark.colors.text} strokeWidth={1} y1={0} y2={110} />
        <Line stroke={themes.Dark.colors.text} strokeWidth={1} x1={0} x2={170} translateY={110} />
        <Text fill='white' dy='-12' dx='8' fontSize='18'>
          {name}
        </Text>
        <G scale={.8} translate={[5, 5]}>
          <CardChart {...{ candles, domain }} />
        </G>
      </Svg>
    </View>
  );
}

const styles = StyleSheet.create({
  fullContainer: { height: CARD1_SIZE.height,  width: CARD1_SIZE.width },
  halfContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    backgroundColor: themes.Dark.colors.card,
    height: CARD2_SIZE.height,  
    width: CARD2_SIZE.width,
    padding: 10,
  },
  thumbnail: {
    ...StyleSheet.absoluteFillObject,
    width: undefined,
    height: undefined,
    position: 'relative'
  },
});