import React, {useRef} from "react";
import * as Yup from "yup";
import {AuthNavigationProps} from "../components/Navigation";
import Footer from "./Components/Footer";
import TextInput from "../components/Form/TextInput";
import {useFormik} from "formik";
import {Box, Button, Container, Text} from "../components";
import {TextInput as RNTextInput} from "react-native"

const SignUpSchema = Yup.object().shape({
    password: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    passwordConfirmation: Yup.string()
        .equals([Yup.ref("password")], "Passwords dont' match")
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    email: Yup.string()
        .email('Invalid email')
        .required('Required'),
});
const SignUp = ({navigation}: AuthNavigationProps<"SignUp">)=>{
    const footer = <Footer onPress={()=>navigation.navigate("Login")} title={"Already have an account"} action={"Login Here"}/>
    const password = useRef<RNTextInput>(null)
    const passwordConfirmation = useRef<RNTextInput>(null)

    const { handleChange,
        handleBlur,
        handleSubmit,
        errors,
        touched,
        } = useFormik({ validationSchema:SignUpSchema,
        initialValues:{ email: '', password: '', passwordConfirmation: '' },
        onSubmit: (values) => console.log(values)})
    return(
        <Container pattern={1} {...{footer}} >
            <Box padding={"xl"}>
                <Text variant={"title1"} textAlign={"center"} marginBottom={"l"}>Create Account</Text>
                <Text textAlign={"center"} variant={"body"} marginBottom={"l"}>Let's us know what is your name, email, and your password</Text>
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
                    <Box marginBottom={"m"}>
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
                            returnKeyType={"next"}
                            returnKeyLabel={"next"}
                            onSubmitEditing={()=>passwordConfirmation.current?.focus()}
                        />
                    </Box>
                    <Box>
                        <TextInput
                            ref={passwordConfirmation}
                            icon={"lock"}
                            placeholder={"Confirm your password"}
                            onChangeText={handleChange('passwordConfirmation')}
                            onBlur={handleBlur('passwordConfirmation')}
                            error={errors.passwordConfirmation}
                            touched={touched.passwordConfirmation}
                            secureTextEntry
                            autoCorrect={false}
                            autoCapitalize={"none"}
                            autoCompleteType={"password"}
                            returnKeyType={"go"}
                            returnKeyLabel={"go"}
                            onSubmitEditing={()=>handleSubmit()}
                        />
                    </Box>
                    <Box alignItems={"center"} marginTop={"xl"}>
                        <Button
                            variant={"primary"}
                            onPress={handleSubmit}
                            label={"Create your account"}/>
                    </Box>
                </Box>
            </Box>
        </Container>
    )
}
export default SignUp