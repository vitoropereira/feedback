module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx}",
        "./src/components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                brand: {
                    300: "#996DEF",
                    500: "#8257e6",
                },
            },
            borderRadius: {
                2: "2px",
                4: "4px",
            },
        },
    },
    plugins: [require("@tailwindcss/forms"), require("tailwind-scrollbar")],
};