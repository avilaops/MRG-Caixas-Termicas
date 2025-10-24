/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Paleta MRG - Industrial
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7', // Azul principal
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
        steel: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b', // Aço escovado
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        },
        silver: {
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
          900: '#111827',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-steel': 'linear-gradient(135deg, #64748b 0%, #475569 50%, #334155 100%)',
        'gradient-primary': 'linear-gradient(135deg, #0ea5e9 0%, #0284c7 50%, #0369a1 100%)',
        'brushed-steel': 'linear-gradient(45deg, #64748b 25%, transparent 25%, transparent 75%, #64748b 75%, #64748b), linear-gradient(45deg, #64748b 25%, transparent 25%, transparent 75%, #64748b 75%, #64748b)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'scale-in': 'scaleIn 0.4s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
      boxShadow: {
        'steel': '0 4px 20px rgba(100, 116, 139, 0.3)',
        'primary': '0 4px 20px rgba(14, 165, 233, 0.3)',
        'xl-steel': '0 20px 50px rgba(100, 116, 139, 0.4)',
      }
    },
  },
  plugins: [],
}