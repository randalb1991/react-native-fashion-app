import React from "react";
import SocialLogin from "../Components/SocialLogin";
import {Box, Button, Container, Text} from "../../components";
import TextInput from "../Components/Form/TextInput";
import Checkbox from "../Components/Form/Checkbox";

import {Alert} from "react-native"

const emailValidator = (email: string)=>{
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLocaleLowerCase());
}

const passwordValidator = (password: string)=>password.length >= 6
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
            <Box padding={"xl"}>
                <Text variant={"title1"} textAlign={"center"} marginBottom={"l"}>Welcome Back</Text>
                <Text textAlign={"center"} variant={"body"} marginBottom={"l"}>User your credentials below and login to your account</Text>
                <Box marginBottom={"m"}>
                    <TextInput icon={"mail"} placeholder={"Enter your email"} validator={emailValidator}/>
                </Box>
                <Box>
                    <TextInput icon={"lock"} placeholder={"Enter your password"} validator={passwordValidator}/>
                </Box>
                <Box flexDirection={"row"} justifyContent={"space-between"}>
                    <Checkbox label={"Remember me"} />
                    <Button variant={"transparent"} onPress={()=>true}>
                        <Text color={"primary"}>Forgot password</Text>
                    </Button>
                </Box>
                <Box alignItems={"center"} marginTop={"xl"}>
                    <Button variant={"primary"} onPress={()=>true} label={"Log into your account"}/>
                </Box>
            </Box>

        </Container>
    )
}
export default Login

