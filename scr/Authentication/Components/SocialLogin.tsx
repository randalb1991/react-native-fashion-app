import React from "react";
import Google from "./Google";
import Facebook from "./Facebook";
import Apple from "./Apple";
import {Box, useTheme} from "../../components";

interface SocialProps {
    children: React.ReactNode;
}
const SocialIcon = ({children}: SocialProps) =>{
    const theme = useTheme()
    const SIZE = theme.borderRadii.l*2;
    return(
        <Box backgroundColor={"white"} width={SIZE} height={SIZE} borderRadius={"l"} justifyContent={"center"} alignItems={"center"} padding={"s"} marginHorizontal={"m"}>
            {children}
        </Box>
    )
}
const SocialLogin = ()=>{
    return(
        <Box flexDirection={"row"} justifyContent={"center"} >
            <SocialIcon>
                <Facebook/>
            </SocialIcon>
            <SocialIcon>
                <Google/>
            </SocialIcon>
            <SocialIcon>
                <Apple/>
            </SocialIcon>
        </Box>
    )
};
export default SocialLogin;