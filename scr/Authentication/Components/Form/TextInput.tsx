import React from "react";
import { TextInput as RNTextInput, StyleSheet, TextInputProps as RNTextInputProps} from "react-native";
import {Box, useTheme} from "../../../components";
import {Feather as Icon} from "@expo/vector-icons";

interface TextInputProps extends RNTextInputProps{
    icon: string;
    touched?: boolean;
    error?:string;
}


const TextInput = ({icon, touched, error, ...props}: TextInputProps)=>{
    const theme = useTheme()
    const SIZE = theme.borderRadii.m*2
    const reColor = !touched ? "text": (error? "danger": "primary")
    const color = theme.colors[reColor]

    return(
        <Box flexDirection={"row"} alignItems={"center"} height={48} borderRadius={"s"} borderColor={reColor} borderWidth={StyleSheet.hairlineWidth}>
            <Box padding={"s"}>
                <Icon name={icon} size={16} {...{color}}></Icon>
            </Box>
            <Box flex={1}>
                <RNTextInput
                    underlineColorAndroid={"transparent"}
                    placeholderTextColor={color}
                    {...props}/>
            </Box>
            {
                (touched) &&(
                    <Box borderRadius={"m"}
                         height={SIZE}
                         width={SIZE}
                         justifyContent={"center"}
                         alignItems={"center"}
                         marginRight={"s"}
                         backgroundColor={!error? "primary": "danger"}>
                        <Icon
                            name={!error ? "check" : "x"} color={"white"} size={12}/>
                    </Box>
                )
            }
        </Box>
    )
}

export default TextInput