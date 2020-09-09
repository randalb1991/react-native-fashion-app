import React from "react";
import {Box, Text} from "../index";
import {Feather as Icon} from "@expo/vector-icons";
import {BorderlessButton} from "react-native-gesture-handler";

interface CheckboxProps {
    label: string;
    checked: boolean;
    onChange: ()=>void;
}
const Checkbox = ({label, onChange, checked}: CheckboxProps)=>{
    return(
        <BorderlessButton onPress={()=>onChange()} style={{justifyContent:"center"}}>
            <Box flexDirection={"row"} alignItems={"center"}>
                <Box height={20}
                     width={20}
                     justifyContent={"center"}
                     alignItems={"center"}
                     borderRadius={"s"}
                     borderWidth={1}
                     borderColor={"primary"}
                     marginRight={"m"}
                     backgroundColor={checked ? "primary": "white"}>
                    <Icon name={"check"} color={"white"}/>
                </Box>
                <Text variant={"button"}>{label}</Text>

            </Box>
        </BorderlessButton>

    )
}

export default Checkbox