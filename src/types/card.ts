export type CardSize = 'small' | 'medium' | 'large';
export type FlippedCard = {
	row: number;
	col: number;
	rank: number;
};

export type Card = {
	rank: number;
	flipped: boolean;
};
