import defaultTheme from '../shared/theme/default.theme';

export enum Theme {
	DEFAULT = 'DEFAULT',
	DARK = 'DARK',
}

export type ThemeType = typeof defaultTheme;