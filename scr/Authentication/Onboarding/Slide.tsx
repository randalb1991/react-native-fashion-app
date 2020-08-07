import React from "react";
import {View, Text, Dimensions, StyleSheet, Image} from "react-native";

interface SlideProps {
    title: string;
    right?: boolean;
    picture: number
}
const {width, height} = Dimensions.get("window")
export const BORDER_RADIUS = 75
export const SLIDER_HEIGHT = 0.61 * height
const styles = StyleSheet.create({
    container:{
        width,
        overflow: "hidden"
    },
    title:{
        fontSize: 80,
        fontFamily: "SFProText-Bold",
        color: "white",
        textAlign: "center",
        lineHeight: 80,
    },
    titlecontainer:{
        justifyContent: "center",
        height: 100,

    },
    underlay:{
        ...StyleSheet.absoluteFillObject,
        justifyContent: "flex-end"
    },
    picture:{
        ...StyleSheet.absoluteFillObject,
        width: undefined,
        height: undefined,
        borderBottomRightRadius: BORDER_RADIUS
    }
})
const Slide = ({title, right, picture}: SlideProps) => {
    const transform = [
        { translateY: (SLIDER_HEIGHT - 100)/2},
        { translateX: right ? width/2 - 50: -width / 2 + 50},
        { rotate: right ? "-90deg": "90deg"}
    ]
    return (
        <View style={styles.container}>
            <View style={styles.underlay}>
                <Image source={picture} style={styles.picture}/>
            </View>
            <View style={[styles.titlecontainer, {transform}]}>
                <Text style={styles.title}>{title}</Text>
            </View>
        </View>
    )
}
export  default Slide