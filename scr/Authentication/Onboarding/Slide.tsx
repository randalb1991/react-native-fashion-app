import React from "react";
import {View, Dimensions, StyleSheet} from "react-native";
import {Text} from "../../components"
interface SlideProps {
    title: string;
    right?: boolean
}
const {width, height} = Dimensions.get("window")
export const SLIDER_HEIGHT = 0.61 * height
const styles = StyleSheet.create({
    container:{
        width,
        overflow: "hidden"
    },
    titlecontainer:{
        justifyContent: "center",
        height: 100,

    }
})
const Slide = ({title, right}: SlideProps) => {
    const transform = [
        { translateY: (SLIDER_HEIGHT - 100)/2},
        { translateX: right ? width/2 - 50: -width / 2 + 50},
        { rotate: right ? "-90deg": "90deg"}
    ]
    return (
        <View style={styles.container}>

            <View style={[styles.titlecontainer, {transform}]}>
                <Text variant={"hero"}>{title}</Text>
            </View>
        </View>
    )
}
export  default Slide

