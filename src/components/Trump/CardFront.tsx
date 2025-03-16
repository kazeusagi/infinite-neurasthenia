import { Card, Typography } from '@mui/material';

type Props = {
	rank: number;
	flipped: boolean;
	width: string;
	height: string;
};

export function CardFront({ rank, flipped, width, height }: Props) {
	return (
		<Card sx={{ width, height }}>
			{flipped && (
				<Typography
					variant='h1'
					height='100%'
					display='flex'
					justifyContent='center'
					alignItems='center'
				>
					{rank}
				</Typography>
			)}
		</Card>
	);
}
