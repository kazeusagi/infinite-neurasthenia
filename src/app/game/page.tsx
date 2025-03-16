'use client';
import { TrumpCard } from '@/components/Trump';
import { cardSizeAtom, cardsAtom } from '@/utils/atoms';
import { Box } from '@mui/material';
import { useAtom, useAtomValue } from 'jotai';
import { useEffect } from 'react';

export default function Page() {
	const cardSize = useAtomValue(cardSizeAtom);

	const [cards, setCards] = useAtom(cardsAtom);

	// 初期値
	useEffect(() => {
		const newCards = Array.from({ length: 6 }, () =>
			Array.from({ length: 6 }, () => ({ rank: Math.ceil(Math.random() * 13), flipped: false })),
		);
		setCards(newCards);
	}, []);

	return (
		<Box bgcolor='#135624'>
			<Box display='flex' flexDirection='column' gap={2}>
				{cards.map((row, rowIndex) => (
					<Box key={rowIndex} display='flex' gap={2}>
						{row.map((card, colIndex) => (
							<TrumpCard
								key={colIndex}
								col={colIndex}
								row={rowIndex}
								rank={card.rank}
								size={cardSize}
							/>
						))}
					</Box>
				))}
			</Box>
		</Box>
	);
}
