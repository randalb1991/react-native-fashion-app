import React from "react";
import {Image, Dimensions, StyleSheet, Platform} from "react-native";
import Constants from "expo-constants";
import {Box, useTheme} from "./Theme";
import {useSafeAreaInsets} from "react-native-safe-area-context";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
const {width, height: wHeight} = Dimensions.get("window")

const aspectRadio = 750/1125;
const height = width * aspectRadio;
interface ContainerProps {
    children: React.ReactNode;
    footer: React.ReactNode
    pattern : 0 | 1 | 2
}

export const assets = [
    require("../../assets/patterns/1.jpg"),
    require("../../assets/patterns/2.jpg"),
    require("../../assets/patterns/3.jpg")] as const
const Container = ({children, footer, pattern}: ContainerProps)=>{
    const insets = useSafeAreaInsets()
    const theme = useTheme()
    const asset = assets[pattern]
    return(
        <KeyboardAwareScrollView scrollEnabled={false}>
            <Box height={wHeight + (Platform.OS ==="android" ? Constants.statusBarHeight : 0)} backgroundColor={"secondary"}>
                <Box backgroundColor={"white"}>
                    <Box  borderBottomLeftRadius={"xl"} overflow={"hidden"} height={height * 0.61}>
                        <Image source={asset} style={{width,height, borderBottomLeftRadius: theme.borderRadii.xl}}/>
                    </Box>
                </Box>

                <Box flex={1} overflow={"hidden"}>
                    <Image source={asset} style={{...StyleSheet.absoluteFillObject, width,height, top: -height * 0.61}}/>
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
        </KeyboardAwareScrollView>
    )
}
export default Container