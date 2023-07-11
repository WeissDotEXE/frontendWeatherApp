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
                },
                red:{
                    950:"#ff0000"
                }
            },
            dropShadow: {
                'white': '0 5px 5px rgba(254, 253, 255,0.25)',
            }
        },
    },
    plugins: [],
};