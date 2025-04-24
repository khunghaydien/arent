export type Locale = (typeof locales)[number];

export const locales = ['jp', 'zh'] as const;
export const defaultLocale: Locale = 'jp';