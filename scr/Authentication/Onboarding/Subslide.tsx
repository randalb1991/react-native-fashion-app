import React from "react";
import {View, Text, StyleSheet} from "react-native";
import {Button} from "../../components";

interface SubslideProps {
    subtitle: string,
    description:string,
    last?: boolean,
    onPress: ()=>void,
}

const styles = StyleSheet.create({
    container:{
        justifyContent:"center",
        alignItems: "center",
        padding:44,
        flex:1    },
    subtitle:{
        fontFamily: "SFProText-Semibold",
        fontSize: 24,
        color: "#0C0D34",
        lineHeight: 30,
        textAlign:"center",
        marginBottom:12
    },
    description:{
        fontFamily: "SFProText-Regular",
        fontSize: 16,
        lineHeight: 24,
        color: "#0C0D34",
        textAlign:"center",
        marginBottom: 40
    }
})
const Subslide = ({subtitle, description, last, onPress}: SubslideProps) => {

    return (
        <View style={styles.container}>
            <Text style={styles.subtitle}>{subtitle}</Text>
            <Text style={styles.description}>{description}</Text>
            <Button label={ last ? "Let's get started":"Next"} variant={last ? "primary":"default"} {...{onPress}}/>
        </View>
    )
}
export  default Subslide