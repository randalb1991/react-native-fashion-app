import React,{useRef} from "react";
import {Box, Button, Container, Text} from "../components";
import TextInput from "./Components/Form/TextInput";
import Checkbox from "./Components/Form/Checkbox";
import {useFormik} from "formik";
import {Routes, StackNavigationProps} from "../components/Navigation";
import {TextInput as RNTextInput} from "react-native"
import * as Yup from "yup";
import Footer from "./Components/Footer";
const LoginSchema = Yup.object().shape({
    password: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    email: Yup.string()
        .email('Invalid email')
        .required('Required'),
});
const Login = ({navigation}: StackNavigationProps<Routes, "Login">)=>{
    const footer = <Footer onPress={()=>navigation.navigate("SignUp")} title={"Don't have an account"} action={"Sign Up"}/>
    const password = useRef<RNTextInput>(null)
    const { handleChange,
        handleBlur,
        handleSubmit,
        values ,
        errors,
        touched,
        setFieldValue} = useFormik({ validationSchema:LoginSchema,
        initialValues:{ email: '', password: '', remember: true },
        onSubmit: (values) => console.log(values)})
    return(
        <Container {...{footer}}>
            <Box padding={"xl"}>
                <Text variant={"title1"} textAlign={"center"} marginBottom={"l"}>Welcome Back</Text>
                <Text textAlign={"center"} variant={"body"} marginBottom={"l"}>User your credentials below and login to your account</Text>
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
                                    returnKeyType={"next"}
                                    returnKeyLabel={"next"}
                                    onSubmitEditing={()=>password.current?.focus()}
                                    touched={touched.email}/>
                            </Box>
                            <Box>
                                <TextInput
                                    ref={password}
                                    icon={"lock"}
                                    placeholder={"Enter your password"}
                                    onChangeText={handleChange('password')}
                                    onBlur={handleBlur('password')}
                                    error={errors.password}
                                    touched={touched.password}
                                    secureTextEntry
                                    autoCorrect={false}
                                    autoCapitalize={"none"}
                                    autoCompleteType={"password"}
                                    returnKeyType={"go"}
                                    returnKeyLabel={"go"}
                                    onSubmitEditing={()=>handleSubmit()}
                                />
                            </Box>
                            <Box flexDirection={"row"} justifyContent={"space-between"}>
                                <Checkbox
                                    label={"Remember me"}
                                    checked={values.remember}
                                    onChange={()=>setFieldValue("remember",!values.remember)}/>
                                <Button variant={"transparent"} onPress={()=>navigation.navigate("ForgotPassword")}>
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
            </Box>
        </Container>
    )
}
export default Login

