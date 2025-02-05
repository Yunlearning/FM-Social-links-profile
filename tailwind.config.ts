import type { Config } from 'tailwindcss';

export default {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            screens: {
                mobile: '375px',
                desktop: '1440px',
            },
            borderRadius: {
                'custom-lg': '10px',
                'custom-xl': '20px',
            },
            colors: {
                background: 'var(--background)',
                foreground: 'var(--foreground)',
                'profile-green': 'hsl(75, 94%, 57%)',
                'profile-grey-700': 'hsl(0, 0%, 20%)',
                'profile-grey-800': 'hsl(0, 0%, 12%)',
                'profile-grey-900': 'hsl(0, 0%, 8%)',
            },
            backgroundColor: {
                'profile-green': 'hsl(75, 94%, 57%)',
            },
            fontFamily: {
                inter: ['Inter', 'sans-serif'],
            },
        },
    },
    plugins: [],
} satisfies Config;
