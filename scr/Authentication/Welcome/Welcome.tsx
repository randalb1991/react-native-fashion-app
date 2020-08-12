import React from "react";
import {Dimensions, Image} from "react-native";
import {Box, Button, Text, useTheme} from "../../components";
import {Routes, StackNavigationProps} from "../../components/Navigation";
const {width} = Dimensions.get("window")

const picture = {
    src: require("../../../assets/2.png"),
    width: 622,
    height: 796
}
export const assets = [picture.src]
const Welcome = ({navigation}: StackNavigationProps<Routes,  "Welcome">) =>{
    const theme = useTheme()
    return(
         <Box flex={1} backgroundColor={"white"}>
            <Box flex={1} borderBottomRightRadius={"xl"} backgroundColor={"grey"} justifyContent={"flex-end"} alignItems={"flex-end"}>
                <Image source={picture.src} style={{
                    width: width - theme.borderRadii.xl,
                    height: ((width-theme.borderRadii.xl)*picture.height/picture.width)
                }}/>

            </Box>
            <Box flex={1} borderTopLeftRadius={"xl"}>
                <Box
                    backgroundColor={"grey"}
                    position={"absolute"}
                    top={0}
                    left={0}
                    right={0}
                    bottom={0}
                />
                <Box
                    backgroundColor={"white"}
                    borderTopLeftRadius={"xl"}
                    flex={1}
                    justifyContent={"space-evenly"}
                    alignItems={"center"}
                    padding={"xl"}
                >
                    <Text variant={"title2"}>Let's get started</Text>
                    <Text variant={"body"}  textAlign={"center"}>Login to your account below or signup for an amazing experience</Text>
                    <Button
                        label={"Have an account? Login"}
                        variant={"primary"} onPress={()=>navigation.navigate("Login")}/>
                    <Button label={"Join us, it's Free"} variant={"default"} onPress={()=>{}}/>
                    <Button label={"Forgot Password?"} variant={"transparent"} onPress={()=>{}}/>

                </Box>

            </Box>
        </Box>
    )
}

export default Welcome