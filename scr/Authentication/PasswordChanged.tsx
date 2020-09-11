import * as React from "react";
import {AuthNavigationProps} from "../components/Navigation";
import {Box, Button, Container, Text, RoundedIconButton, RoundedIcon} from "../components";

const SIZE = 80

const PasswordChanged = ({navigation}: AuthNavigationProps<"ForgotPassword">)=>{
    return(
        <Container pattern={0} footer={
            <Box justifyContent={"center"} flexDirection={"row"}>
                <RoundedIconButton backgroundColor={"white"} color={"secondary"} name={"x"} size={60} onPress={()=>navigation.pop}/>
            </Box>
            }>
            <Box flex={1} justifyContent={"center"} alignItems={"center"} padding={"xl"}>
                <RoundedIcon name={"check"} size={SIZE} color={"primary"} backgroundColor={"primaryLight"}/>
                <Text variant={"title1"} textAlign={"center"} marginBottom={"l"} marginVertical={"l"}>Your password was successfully changed</Text>
                <Text textAlign={"center"} variant={"body"} marginBottom={"l"}>Close this windows and log in again</Text>
                <Box alignItems={"center"} marginTop={"xl"}>
                    <Button
                        variant={"primary"}
                        onPress={()=>navigation.navigate("Login")}
                        label={"Log into your account"}/>
                </Box>
            </Box>

        </Container>
    )
}

export default PasswordChanged