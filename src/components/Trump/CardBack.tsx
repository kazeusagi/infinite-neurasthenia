import { Card } from '@mui/material';

type Props = {
	width: string;
	height: string;
};

export function CardBack({ width, height }: Props) {
	return <Card sx={{ width, height, bgcolor: '#3b3b3f' }}>裏</Card>;
}
