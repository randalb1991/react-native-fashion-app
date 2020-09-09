import * as React from "react";
import {Feather as Icon} from "@expo/vector-icons";
import {Box, Theme, Text} from "./Theme";

export interface RoundedIconProps {
    name: string;
    size: number;
    color: keyof Theme["colors"];
    backgroundColor: keyof Theme["colors"];
}

const RoundedIcon = ({name, size, color, backgroundColor}: RoundedIconProps) =>{
    const iconSize = size*0.7;
    return (
        <Box borderRadius={"m"}
             height={size}
             width={size}
             justifyContent={"center"}
             alignItems={"center"}
             marginRight={"s"}
             style={{borderRadius:size/2}}
             {...{backgroundColor}}
        >
            <Text style={{ width: iconSize, height:iconSize}} {...{ color }}>
                <Icon
                    size={iconSize}
                    {...{name}}
                />
            </Text>

        </Box>
    )
}

export default RoundedIcon