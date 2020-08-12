import React from "react";
import SocialLogin from "../Components/SocialLogin";
import {Box, Button, Container, Text} from "../../components";
import TextInput from "../Components/Form/TextInput";
import Checkbox from "../Components/Form/Checkbox";
import {Formik} from "formik";
import {Alert} from "react-native";
import * as Yup from "yup";
const LoginSchema = Yup.object().shape({
    password: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    email: Yup.string()
        .email('Invalid email')
        .required('Required'),
});
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
                <Formik
                    validationSchema={LoginSchema}
                    initialValues={{ email: '', password: '', remember: true }}
                    onSubmit={values => console.log(values)}
                >
                    {({ handleChange,
                          handleBlur,
                          handleSubmit,
                          values ,
                          errors,
                          touched,
                          setFieldValue}) => (
                        <Box>
                            <Box marginBottom={"m"}>
                                <TextInput
                                    icon={"mail"}
                                    placeholder={"Enter your email"}
                                    onChangeText={handleChange('email')}
                                    onBlur={handleBlur('email')}
                                    error={errors.email}
                                    touched={touched.email}/>
                            </Box>
                            <Box>
                                <TextInput
                                    icon={"lock"}
                                    placeholder={"Enter your password"}
                                    onChangeText={handleChange('password')}
                                    onBlur={handleBlur('password')}
                                    error={errors.password}
                                    touched={touched.password}
                                />
                            </Box>
                            <Box flexDirection={"row"} justifyContent={"space-between"}>
                                <Checkbox
                                    label={"Remember me"}
                                    checked={values.remember}
                                    onChange={()=>setFieldValue("remember",!values.remember)}/>
                                <Button variant={"transparent"} onPress={()=>true}>
                                    <Text color={"primary"}>Forgot password</Text>
                                </Button>
                            </Box>
                            <Box alignItems={"center"} marginTop={"xl"}>
                                <Button
                                    variant={"primary"}
                                    onPress={handleSubmit}
                                    label={"Log into your account"}/>
                            </Box>
                        </Box>
                    )}
                </Formik>

            </Box>
        </Container>
    )
}
export default Login

