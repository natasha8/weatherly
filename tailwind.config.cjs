/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                lorina: ["Megrim", "cursive"],
            },
            backgroundImage: {
                sunny: "url('/sunny.png')",
                rain: "url('/rain.png')",
            },
        },
    },
    plugins: [require("tailwind-scrollbar-hide")],
};
