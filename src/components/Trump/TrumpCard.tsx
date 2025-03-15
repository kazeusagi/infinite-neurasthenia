'use client';

import type { CardSize } from '@/types/card';
import { Box } from '@mui/material';
import { MotionConfig, type MotionStyle, motion } from 'motion/react';
import { useState } from 'react';
import { CardBack } from './CardBack';
import { CardFront } from './CardFront';

type Props = {
	rank: number;
	size?: CardSize;
};

const cardStyle: MotionStyle = {
	backfaceVisibility: 'hidden',
	position: 'absolute',
	top: 0,
	left: 0,
};

export function TrumpCard({ rank, size = 'medium' }: Props) {
	const [width, height] = getSize();
	const [flipped, setFlipped] = useState(false);

	return (
		<Box position='relative' onClick={flip} style={{ width, height }}>
			<MotionConfig transition={{ duration: 0.5, ease: 'easeInOut' }}>
				{/* 表 */}
				<motion.div animate={{ rotateY: flipped ? 0 : 180 }} style={cardStyle}>
					<CardFront {...{ rank, width, height }} />
				</motion.div>

				{/* 裏 */}
				<motion.div animate={{ rotateY: flipped ? 180 : 0 }} style={cardStyle}>
					<CardBack {...{ width, height }} />
				</motion.div>
			</MotionConfig>
		</Box>
	);

	function flip() {
		setFlipped((prev) => !prev);
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
