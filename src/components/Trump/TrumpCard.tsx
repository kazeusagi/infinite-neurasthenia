'use client';

import type { CardSize } from '@/types/card';
import { cardsAtom, flippedCardsAtom } from '@/utils/atoms';
import { sleep } from '@/utils/sleep';
import { Box } from '@mui/material';
import { useAtom } from 'jotai';
import { MotionConfig, type MotionStyle, motion } from 'motion/react';
import { CardBack } from './CardBack';
import { CardFront } from './CardFront';

type Props = {
	col: number;
	row: number;
	rank: number;
	size?: CardSize;
};

const cardStyle: MotionStyle = {
	backfaceVisibility: 'hidden',
	position: 'absolute',
	top: 0,
	left: 0,
};

export function TrumpCard({ col, row, rank, size = 'medium' }: Props) {
	const [flippedCards, setFlippedCards] = useAtom(flippedCardsAtom);
	const [cards, setCards] = useAtom(cardsAtom);
	const card = cards[row][col];

	const [width, height] = getSize();

	return (
		<>
			{rank !== -1 && (
				<Box position='relative' onClick={() => onClick()} style={{ width, height }}>
					<MotionConfig transition={{ duration: 0.4, ease: 'easeInOut' }}>
						{/* 表 */}
						<motion.div animate={{ rotateY: card.flipped ? 0 : 180 }} style={cardStyle}>
							<CardFront {...{ rank, flipped: card.flipped, width, height }} />
						</motion.div>

						{/* 裏 */}
						<motion.div animate={{ rotateY: card.flipped ? 180 : 0 }} style={cardStyle}>
							<CardBack {...{ width, height }} />
						</motion.div>
					</MotionConfig>
				</Box>
			)}
		</>
	);

	async function onClick() {
		const newCards = [...cards];
		newCards[row][col].flipped = true;
		setCards(newCards);

		if (flippedCards.length === 1) {
			await sleep(1000);
			const result = flippedCards[0].rank === rank;
			console.log(result);

			if (result) {
				newCards[row][col].rank = -1;
				newCards[flippedCards[0].row][flippedCards[0].col].rank = -1;
			} else {
				setFlippedCards([]);

				const newCards = [...cards];
				newCards[row][col].flipped = false;
				newCards[flippedCards[0].row][flippedCards[0].col].flipped = false;
				setCards(newCards);
			}
		} else setFlippedCards([...flippedCards, { col, row, rank }]);
	}

	function getSize() {
		if (size === 'small') {
			return ['7rem', '10.92rem'];
		}
		if (size === 'medium') {
			return ['10rem', '15.6rem'];
		}
		if (size === 'large') {
			return ['15rem', '23.4rem'];
		}
		return ['0', '0'];
	}
}
