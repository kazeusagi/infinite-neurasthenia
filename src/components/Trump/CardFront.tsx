import { Card, Typography } from '@mui/material';

type Props = {
	rank: number;
	width: string;
	height: string;
};

export function CardFront({ rank, width, height }: Props) {
	return (
		<Card sx={{ width, height }}>
			<Typography
				variant='h1'
				height='100%'
				display='flex'
				justifyContent='center'
				alignItems='center'
			>
				{rank.toString()}
			</Typography>
		</Card>
	);
}
