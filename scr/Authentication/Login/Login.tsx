import React from "react";
import SocialLogin from "../Components/SocialLogin";
import {Box, Button, Container, Text} from "../../components";
import {Alert} from "react-native"
const Login = ()=>{
    const footer = (
        <>
            <SocialLogin/>
            <Box alignItems={"center"}>
                <Button variant={"transparent"} onPress={()=>Alert.alert("SignUp!")} >
                    <Box flexDirection={"row"}>
                        <Text variant={"button"} color={"white"}>Don't have an account?</Text>
                        <Text variant={"button"} color={"primary"} marginLeft={"s"}>Sign Up here</Text>
                    </Box>
                </Button>
            </Box>

        </>
    )
    return(
        <Container {...{footer}}>

        </Container>
    )
}
export default Login