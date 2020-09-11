import React,{useRef} from "react";
import {Box, Button, Container, Text} from "../components";
import TextInput from "../components/Form/TextInput";
import Checkbox from "../components/Form/Checkbox";
import {useFormik} from "formik";
import {AuthenticationRoutes, HomeRoutes} from "../components/Navigation";
import {TextInput as RNTextInput} from "react-native";
import {CompositeNavigationProp} from "@react-navigation/native";
import * as Yup from "yup";
import Footer from "./Components/Footer";
import {BorderlessButton} from "react-native-gesture-handler";
import {DrawerNavigationProp} from "@react-navigation/drawer";
import {StackNavigationProp} from "@react-navigation/stack";

const LoginSchema = Yup.object().shape({
    password: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    email: Yup.string()
        .email('Invalid email')
        .required('Required'),
});

interface LoginProps {
    navigation: CompositeNavigationProp<
        StackNavigationProp<AuthenticationRoutes, "Login">,
        DrawerNavigationProp<HomeRoutes>
        >;
}
const Login = ({navigation}: LoginProps)=>{
    console.log(navigation)
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
        onSubmit: ()=>navigation.navigate("OutfitIdeas")
        })
    return(
        <Container {...{footer}} pattern={0}>
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
                            <Box flexDirection={"row"} justifyContent={"space-between"} marginVertical={"s"} alignItems={"center"}>
                                <Checkbox
                                    label={"Remember me"}
                                    checked={values.remember}
                                    onChange={()=>setFieldValue("remember",!values.remember)}/>
                                 <BorderlessButton onPress={()=>navigation.navigate("ForgotPassword")}>
                                     <Text variant={"button"} color={"primary"}>Forgot password</Text>
                                 </BorderlessButton>

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

