
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(0 0% 0%)', // Pure black background
				foreground: 'hsl(0 0% 98%)', // Almost white text
				primary: {
					DEFAULT: 'hsl(258 81% 74%)', // Keeping the purple primary color
					foreground: 'hsl(0 0% 98%)'
				},
				secondary: {
					DEFAULT: 'hsl(240 3.7% 15.9%)', // Dark gray secondary
					foreground: 'hsl(0 0% 98%)'
				},
				zoezi: {
					purple: '#9b87f5',
					'dark-purple': '#7E69AB', 
					'light-purple': '#D6BCFA',
					dark: '#000000', // Pure black
					'dark-card': '#111111', // Slightly lighter than black for cards
					light: '#F6F6F7',
					gray: '#8E9196'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'fade-in': {
					'0%': {
						opacity: '0',
						transform: 'translateY(10px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'pulse-slow': {
					'0%, 100%': {
						opacity: '1'
					},
					'50%': {
						opacity: '0.8'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.5s ease-out forwards',
				'pulse-slow': 'pulse-slow 3s infinite'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
