import { CssBaseline } from '@mui/material';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';

type Props = {
	children: React.ReactNode;
};

export function ThemeProvider({ children }: Props) {
	return (
		<>
			<AppRouterCacheProvider>
				<CssBaseline />
				{children}
			</AppRouterCacheProvider>
		</>
	);
}
