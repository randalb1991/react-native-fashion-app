import React from "react";
import Footer from "./Components/Footer";
import {AuthenticationRoutes, StackNavigationProps} from "../components/Navigation";
import {Linking} from "react-native";
import {Box, Button, Container, Text} from "../components";
import {useFormik} from "formik";
import * as Yup from "yup";
import TextInput from "../components/Form/TextInput";


const ForgotPasswordSchema = Yup.object().shape({
    email: Yup.string()
        .email('Invalid email')
        .required('Required'),
});

const ForgotPassword = ({navigation}: StackNavigationProps<AuthenticationRoutes, "ForgotPassword">)=>{

    const footer = (
        <Footer
            onPress={()=>Linking.openURL("mailto:help@support.com")}
            title={"Don't Work?"}
            action={"Try another Way"}/>
    )
    const { handleChange,
        handleBlur,
        handleSubmit,
        errors,
        touched,
        } = useFormik({ validationSchema:ForgotPasswordSchema,
        initialValues:{ email: ''},
        onSubmit: () => navigation.navigate("PasswordChanged")})

    return(
        <Container pattern={2} {...{footer}}>
            <Box padding={"xl"} justifyContent={"flex-start"} flex={1}>
                <Text variant={"title1"} textAlign={"center"} marginBottom={"l"}>Forgot password?</Text>
                <Text textAlign={"center"} variant={"body"} marginBottom={"l"}>Enter the email address associated with your account</Text>
                <Box>
                    <Box marginBottom={"m"}>
                        <TextInput
                            icon={"mail"}
                            placeholder={"Enter your email"}
                            onChangeText={handleChange('email')}
                            onBlur={handleBlur('email')}
                            error={errors.email}
                            autoCompleteType={"email"}
                            autoCorrect={false}
                            autoCapitalize={"none"}
                            returnKeyType={"go"}
                            returnKeyLabel={"go"}
                            touched={touched.email}
                            onSubmitEditing={()=>handleSubmit}
                        />
                    </Box>
                    <Box alignItems={"center"} marginTop={"xl"}>
                        <Button
                            variant={"primary"}
                            onPress={handleSubmit}
                            label={"Reset Password"}/>
                    </Box>
                </Box>
            </Box>

        </Container>
    )
}
export default ForgotPassword