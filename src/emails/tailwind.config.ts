import type { TailwindConfig } from '@react-email/tailwind';

/*
NOTE: Dark mode is not yet supported. See this [GitHub issue](https://github.com/resendlabs/react-email/issues/509) for more info
 */

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',

  theme: {
    extend: {
      // From web config
      textColor: {
        destructive: {
          DEFAULT: 'hsl(var(--destructive-text))',
        },
      },
      // from web config
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      textShadow: {
        sm: '0 1px 2px var(--tw-shadow-color)',
        DEFAULT: '0 2px 4px var(--tw-shadow-color)',
        lg: '0 8px 16px var(--tw-shadow-color)',
      },

      // set up the `variables` in your config
      variables: {
        // `DEFAULT` stands for `:root` in CSS
        DEFAULT: {
          // The css variables are nested according to how they appear
          // with the hyphens (-) e.g --red-50 => red: { 50: "#hexCode"}
          'naples-yellow': '46 100% 72%',
          'midnight-green': '189 67% 25%',
          'tiffany-blue': '177 39% 60%',
          'moss-green': '74 25% 48%',
          'burnt-sienna': '14 69% 57%',
          'amaranth-purple': '348 41% 44%',
          'text-dark': '222.2 47.4% 11.2%',
          'lapis-lazuli': '',
          background: '0 0% 100%',
          foreground: '222.2 84% 4.9%',
          muted: '210 40% 96.1%',
          'muted-foreground': '215.4 16.3% 46.9%',
          popover: '0 0% 100%',
          'popover-foreground': '222.2 84% 4.9%',
          card: '0 0% 100%',
          'card-foreground': '222.2 84% 4.9%',
          border: '214.3 31.8% 91.4%',
          input: '214.3 31.8% 91.4%',
          primary: 'var(--midnight-green)',
          'primary-foreground': '210 40% 98%',
          secondary: 'var(--tiffany-blue)',
          'secondary-foreground': 'var(--text-dark)',
          accent: '210 40% 96.1%',
          'accent-foreground': '222.2 47.4% 11.2%',
          destructive: '0 84.2% 60.2%',
          'destructive-foreground': '210 40% 98%',
          'destructive-text': '0 84.2% 60.2%',
          ring: '215 20.2% 65.1%',
          radius: '0.5rem',
        },
        darkVariables: {
          DEFAULT: {
            // background: '222.2 84% 4.9%',
            background: 'var(--burnt-sienna)', // TODO: revert this
            foreground: '210 40% 98%',
            muted: '217.2 32.6% 17.5%',
            'muted-foreground': '215 20.2% 65.1%',
            popover: '222.2 84% 4.9%',
            'popover-foreground': '210 40% 98%',
            card: '222.2 84% 4.9%',
            'card-foreground': '210 40% 98%',
            border: '217.2 32.6% 17.5%',
            input: '217.2 32.6% 17.5%',
            // primary: 'var(--midnight-green)',
            primary: 'var(--amaranth-purple)', // TODO: revert this
            'primary-foreground': '0 85.7% 97.3%',
            secondary: 'var(--tiffany-blue)',
            'secondary-foreground': 'var(--text-dark)',
            accent: '217.2 32.6% 17.5%',
            'accent-foreground': '210 40% 98%',
            destructive: '0 62.8% 30.6%',
            'destructive-foreground': '0 85.7% 97.3%',
            'destructive-text': '0 84.2% 60.2%',
            ring: '217.2 32.6% 17.5%',
          },
        },
      },
    },
  },
  // Setup the plugins array and add @mertasan/tailwindcss-variables
  plugins: [require('@mertasan/tailwindcss-variables')],
} satisfies TailwindConfig;
