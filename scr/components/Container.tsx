import React from "react";
import {Image, Dimensions, StyleSheet, StatusBar} from "react-native";
import theme, {Box} from "./Theme";
import {useSafeAreaInsets} from "react-native-safe-area-context";

const {width} = Dimensions.get("window")
const aspectRadio = 750/1125;
const height = width * aspectRadio;
interface ContainerProps {
    children: React.ReactNode;
    footer: React.ReactNode

}

export const assets = [require("../../assets/patterns/1.jpg")]
const Container = ({children, footer}: ContainerProps)=>{
    const insets = useSafeAreaInsets()
    return(
        <Box flex={1} backgroundColor={"secondary"}>
            <StatusBar barStyle={"light-content"} />
            <Box backgroundColor={"white"}>
                <Box  borderBottomLeftRadius={"xl"} overflow={"hidden"} height={height * 0.61}>
                    <Image source={assets[0]} style={{width,height, borderBottomLeftRadius: theme.borderRadii.xl}}/>
                </Box>
            </Box>

            <Box flex={1} overflow={"hidden"}>
                <Image source={assets[0]} style={{...StyleSheet.absoluteFillObject, width,height, top: -height * 0.61}}/>
                <Box
                    borderRadius={"xl"}
                    borderTopLeftRadius={0}
                    backgroundColor={"white"}
                    flex={1}
                >
                    {children}
                </Box>
            </Box>
            <Box backgroundColor={"secondary"} paddingTop={"m"} style={{paddingBottom:insets.bottom}}>
                {footer}
            </Box>
        </Box>
    )
}
export default Container