import {createBox, createText} from '@shopify/restyle'

const theme ={
    colors: {
        primary: "#2CB9B0",
        title: "#0C0D34",
        text: "rgba(12,13,52, 0.7)",
        white: "white",
        grey: "rgba(12,13,52,0.05)",
        button: "#0C0D34",
    },
    spacing: {
        s: 8,
        m: 16,
        l: 24,
        xl: 40,
    },
    borderRadii:{
        s: 4,
        m: 10,
        l: 25,
        xl: 75//Dimensions.get("window").width/2,
    },
    textVariants:{
        hero:{
            fontSize: 80,
            fontFamily: "SFProDisplay-Bold",
            color: "white",
            textAlign: "center",
            lineHeight: 80,
        },
        title1:{
            fontSize: 28,
            fontFamily: "SFProDisplay-Semibold",
            color: "title"
        },
        title2:{
            fontSize: 24,
            lineHeight: 30,
            fontFamily: "SFProDisplay-Semibold",
            color: "title"
        },
        body:{
            fontSize: 16,
            lineHeight: 24,
            fontFamily: "SFProDisplay-Regular",
            color: "text", // el ultimo numero indica transparencia de 70%

        },
        button:{
            fontFamily: "SFProDisplay-Semibold",
            fontSize: 15,
            color: "text",
        }
    },
    breakpoints:{}
};

export type Theme = typeof theme;
export const Text = createText<Theme>()
export const Box = createBox<Theme>()

export default theme;