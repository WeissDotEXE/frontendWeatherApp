/** @type {import('tailwindcss').Config} */
module.exports={
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                pink: {
                    950: "#E10075",
                    940: "#FF00B8",
                    disable: "#F07BB8",
                },
                blue:{
                  950:"#0B131E",
                    940:"#202B3B",
                },
                white:{
                    950:"#ffffff"
                }
            },
        },
    },
    plugins: [],
};