import React, {useState} from "react";
import {Box, Text} from "../../../components";
import {Feather as Icon} from "@expo/vector-icons";
import {RectButton} from "react-native-gesture-handler";

interface CheckboxProps {
    label: string;
}
const Checkbox = ({label}: CheckboxProps)=>{
    const [checked, setChecked] = useState(false)
    return(
        <RectButton onPress={()=>setChecked(!checked)} style={{justifyContent:"center"}}>
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
        </RectButton>

    )
}

export default Checkbox