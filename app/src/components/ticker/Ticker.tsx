import React from 'react';
import moment from 'moment';

import { Candle } from './Candle';

export interface TickerHistory {
  startTime:      string;
  endTime:        string;
  periodType:     string;
  frequencyType:  string;
  period:         number;
  frequency:      number; 
  extendedHours:  boolean;
  candles:        Candle[];
}

export interface Ticker {
  symbol:       string;
  open:         number;
  close:        number;
  high:         number;
  low:          number;
  ask:          number;
  bid:          number;
  askSize:      number;
  bidSize:      number;
  volume:       number;
  lastUpdated:  string;
  history:      TickerHistory;
}