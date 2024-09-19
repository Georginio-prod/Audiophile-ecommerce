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
                hov: '#d87d4a',
                main: '#F1F1F1',
                main1: '#979797',
            }
        },
    },
    plugins: [
        require('flowbite/plugin')
    ],
}

