'use client';

import { TrumpCard } from '@/components/Trump';
import { cardSizeAtom } from '@/utils/atoms';
import { Box } from '@mui/material';
import { useAtomValue } from 'jotai';
import { useState } from 'react';

export default function Page() {
	const cardSize = useAtomValue(cardSizeAtom);

	const [clicked, setClicked] = useState(false);

	return (
		<Box>
			<TrumpCard size={cardSize} rank={8} />
			<TrumpCard rank={2} />
			<TrumpCard size='large' rank={5} />
		</Box>
	);

	function onClick() {
		setClicked(!clicked);
	}
}
