import type { CardSize } from '@/types/card';
import { atom } from 'jotai';

export const cardSizeAtom = atom<CardSize>('medium');
