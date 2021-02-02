import React from 'react';
import { 
  View,
  Keyboard,
  StyleSheet,
  Dimensions,
  FlatList,
  ScrollView,
  TouchableWithoutFeedback
} from 'react-native';
import { SafeAreaView, useSafeArea } from 'react-native-safe-area-context';
import Animated from 'react-native-reanimated';

import { constStyles } from '../../constants/StyleStructure';
import { SearchBar } from '../../components/SearchBar';
import { COL_SIZE, MAX_COL, Card, CARD2_SIZE } from '../../components/sortableCards/Card';
import { SortableCard } from '../../components/sortableCards/SortableCard';

const { Value } = Animated;
const { height, width } = Dimensions.get('window');
const ScreenContainer = ({ children }) => {
  const insets = useSafeArea();
  
  return (
    <SafeAreaView style={[constStyles.safearea, {paddingBottom: 0} ]}>
      <TouchableWithoutFeedback onPress={() => { Keyboard.dismiss() }}>
        <View style={ [constStyles.default, { justifyContent: 'flex-start'}] }>
          { children }
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
}

export const Dashboard = ({ navigation }) => {
  const cards: Card[] = [
    {
      id: 1,
      style: 2,
      name: 'SPY'
    },
    {
      id: 2,
      style: 2,
      name: 'GLD'
    },
    {
      id: 3,
      style: 2,
      name: 'DXY'
    },
    {
      id: 4,
      style: 2,
      name: 'WORK'
    },
    {
      id: 5,
      style: 2,
      name: 'MSFT'
    }
  ]

  const offsets = cards.map((_, index) => ({
    x: new Value(index % MAX_COL === 0 ? 0 : CARD2_SIZE.width + 16),
    y: new Value(Math.floor(index / MAX_COL) * (CARD2_SIZE.height + 16))
  }));

  return (
    <ScreenContainer>
       <SearchBar />    

      <View style={styles.cardContainer}>
        {cards.map((card, index) => (
          <SortableCard key={card.id} {...{ card, index, offsets }} />
        ))}
      </View>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  button: {
    //flex:1,
    //position: 'absolute',
    //top: 0,
    //right: 25,
    //zIndex: -50
    //marginHorizontal: 26
  },
  cardContainer: {
    flex: 15,
    left: 0, 
    position: 'absolute',
    marginTop: 60,
    width: '100%',
    height: '100%',
  }
});