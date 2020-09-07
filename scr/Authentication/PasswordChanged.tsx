import * as React from "react";
import {Routes, StackNavigationProps} from "../components/Navigation";
import {Feather as Icon} from "@expo/vector-icons";
import {Box, Button, Container, Text, CloseButton} from "../components";

const SIZE = 80

const PasswordChanged = ({navigation}: StackNavigationProps<Routes, "ForgotPassword">)=>{
    return(
        <Container footer={
            <Box justifyContent={"center"} flexDirection={"row"}>
                <CloseButton onPress={()=>navigation.pop()}/>
            </Box>
            }>
            <Box flex={1} justifyContent={"center"} alignItems={"center"}>
                <Box  marginBottom={"xl"} backgroundColor={"primaryLight"} justifyContent={"center"} alignItems={"center"} style={{height: SIZE, width: SIZE, borderRadius: SIZE/2}} >
                    <Text textAlign={"center"} color={"primary"}>
                        <Icon name={"check"} size={32}/>
                    </Text>
                </Box>
                <Text variant={"title1"} textAlign={"center"} marginBottom={"l"}>Welcome Back</Text>
                <Text textAlign={"center"} variant={"body"} marginBottom={"l"}>User your credentials below and login to your account</Text>
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