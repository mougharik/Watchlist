import React from 'react';
import { StyleSheet } from 'react-native';
import Animated from 'react-native-reanimated';
import { PanGestureHandler, State } from 'react-native-gesture-handler';
import { moving, panGestureHandler, withSpringTransition } from 'react-native-redash';
import { Card, CardProps, COL_SIZE, CARD1_SIZE, CARD2_SIZE } from './Card';

const {
  Value,
  add,
  cond,
  eq,
  block,
  set,
  useCode,
  multiply,
  divide,
  and,
  round,
  greaterOrEq,
} = Animated;

const withOffset = ({
  offset,
  value,
  state: gestureState
}: {
  offset: Animated.Adaptable<number>,
  value: Animated.Value<number>,
  state: Animated.Value<State>
}) => {
  const safeOffset = new Value(0);
  return cond(
    eq(gestureState, State.ACTIVE),
    add(safeOffset, value),
    set(safeOffset, offset)
  );
}

interface SortableCardProps extends CardProps {
  index: number;
  offsets: { x: Animated.Value<number>; y: Animated.Value<number> }[];
}

export const SortableCard = ({ card, offsets, index }: SortableCardProps) => {
  const { gestureHandler, state, translation, velocity } = panGestureHandler();
  const currentOffset = offsets[index];
  const x = withOffset({
    value: translation.x,
    offset: currentOffset.x,
    state
  });
  const y = withOffset({
    value: translation.y,
    offset: currentOffset.y,
    state
  });

  const zIndex = cond(eq(state, State.ACTIVE), 200, cond(moving(y), 100, 1));
  const offsetX = multiply(round(divide(x, (CARD2_SIZE.width + 16))), (CARD2_SIZE.width + 16));
  const offsetY = multiply(round(divide(y, (CARD2_SIZE.height + 16))), (CARD2_SIZE.height + 16));
  const translateX = withSpringTransition(x, {}, velocity.x, state);
  const translateY = withSpringTransition(y, {}, velocity.y, state);

  useCode(() => 
    block(
      offsets.map((offset) =>
        cond(
          and(
            eq(offsetX, offset.x),
            eq(offsetY, offset.y),
            eq(state, State.ACTIVE),
          ),
          [
            set(offset.x, currentOffset.x),
            set(offset.y, currentOffset.y),
            set(currentOffset.x, offsetX),
            set(currentOffset.y, offsetY)
          ]
        )
      )
    ),
    [currentOffset.x, currentOffset.y, offsetX, offsetY, offsets, state]
  );

  return (
      <PanGestureHandler {...gestureHandler}>
        <Animated.View 
          style={[
            styles.sortableBase,
            card.style == 1 ? styles.sortableFullCard : styles.sortableHalfCard,
            {transform: [{ translateX }, { translateY }], zIndex: zIndex},
          ]}>
          <Card {...{ card }} />
        </Animated.View>
      </PanGestureHandler>
  );
}

const styles = StyleSheet.create({
  sortableBase: {
    flex: 1,
    position: 'absolute',
    top: 0,
    left: 0,
    //justifyContent: 'center',
    //alignItems: 'center',
  },
  sortableHalfCard: {
    height: CARD2_SIZE.height,
    width: CARD2_SIZE.width
  },
  sortableFullCard: {
    height: COL_SIZE,
    width: COL_SIZE
  }
});