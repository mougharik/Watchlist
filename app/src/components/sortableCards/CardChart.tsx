import React from 'react';
import { scaleLinear }  from 'd3-scale';

import SvgCandle, { Candle } from '../ticker/Candle';

const size = 130;

interface ChartProps {
  candles: Candle[];
  domain: [number, number];
}

export const getDomain = (rows: Candle[]): [number, number] => {
  const values = rows.map( ({ high, low }) => [high, low]).flat();
  return [Math.min(...values), Math.max(...values)];
}

export const CardChart = ({ candles, domain }: ChartProps) => {
  const width = (size * 1.5) / candles.length;
  const scaleY = scaleLinear().domain(domain).range([size, 0]);
  const scaleBody = scaleLinear()
    .domain([0, Math.max(...domain) - Math.min(...domain)])
    .range([0, size]);

  return (
    <>
      {candles.map((candle, index) => (
          <SvgCandle key={candle.date} {...{ candle, index, width, scaleY, scaleBody }} />
        ))}
    </>
    );
}