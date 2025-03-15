import { MyLink } from '@/components/Elements';
import { Box, Button } from '@mui/material';

export default function Page() {
	return (
		<Box>
			<Button>ようこそ</Button>
			<MyLink href='/game'>Play !</MyLink>
		</Box>
	);
}
