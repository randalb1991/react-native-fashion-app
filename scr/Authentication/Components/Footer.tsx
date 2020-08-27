import React from "react";
import SocialLogin from "./SocialLogin";
import {Box, Text} from "../../components";
import {TouchableWithoutFeedback} from "react-native";
interface FooterProps{
    onPress: ()=>void;
    title: string;
    action: string;
}

const Footer = ({onPress, title, action}: FooterProps)=>{
    return(
        <>
            <SocialLogin/>
            <Box alignItems={"center"} marginTop={"m"}>
                <TouchableWithoutFeedback {...{onPress}}>
                    <Text variant={"button"} color={"white"}>
                        <Text>{`${title} `}</Text>
                        <Text color={"primary"} marginLeft={"s"}>{action}</Text>
                    </Text>
                </TouchableWithoutFeedback>
            </Box>
        </>
    )
}
export default Footer