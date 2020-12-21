import React from 'react';

export interface Card{
    index: number;
    width: number;
    height: number;
}

// Declaring this as a constant, however, it could be fetched from
// a DB
export const cards: Card[] = [
    {
        index: 1, width: 120, height: 140
    },
    {
        index: 2, width: 120, height: 190
    },
    {
        index: 3, width: 120, height: 170
    },
    {
        index: 4, width: 120, height: 160
    },
    {
        index: 5, width: 120, height: 150
    },
    {
        index: 6, width: 120, height: 150
    },
    {
        index: 7, width: 120, height: 120
    },
    {
        index: 8, width: 120, height: 130
    },
    {
        index: 9, width: 120, height: 140
    },
    {
        index: 10, width: 120, height: 160
    },
    {
        index: 11, width: 120, height: 140
    },
    {
        index: 12, width: 120, height: 140
    },
    {
        index: 13, width: 120, height: 140
    }
];
  
  export const CardContext = React.createContext(
    cards
  );