import type { Card, CardSize, FlippedCard } from '@/types/card';
import { atom } from 'jotai';

export const cardSizeAtom = atom<CardSize>('small');
export const scoreAtom = atom(0);
export const flipCountAtom = atom(0);
export const flippedCardsAtom = atom<FlippedCard[]>([]);
export const cardsAtom = atom<Card[][]>([]);
