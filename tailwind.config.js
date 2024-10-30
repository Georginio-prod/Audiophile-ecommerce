/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
        'node_modules/flowbite-vue/**/*.{js,jsx,ts,tsx,vue}',
        'node_modules/flowbite/**/*.{js,jsx,ts,tsx}'
    ],
    theme: {
        extend: {
            colors: {
                hov: '#D87D4A',
                main: '#F1F1F1',
                main1: '#979797',
                bgColor: '#101010',
            }
        },
    },
    plugins: [
        require('flowbite/plugin')
    ],
}

