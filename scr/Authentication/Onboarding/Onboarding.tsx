import React, {useRef} from "react";
import {Dimensions, Image, StyleSheet, View} from "react-native";
import {interpolateColor, useScrollHandler} from "react-native-redash"
import Animated, {interpolate, Extrapolate} from "react-native-reanimated";
import {theme} from "../../components"

import Slide, { SLIDER_HEIGHT} from "./Slide"
import Dot from "./Dot"
import Subslide from './Subslide'
import {Routes, StackNavigationProps} from "../../components/Navigation";

const { multiply, divide } = Animated
const {width} = Dimensions.get("window")
const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: "white"
    },
    slider:{
        height: SLIDER_HEIGHT,
        borderBottomRightRadius: theme.borderRadii.xl
    },
    footer:{
        flex: 1
    },
    footerContent:{
        flex: 1,
        backgroundColor: "white",
        borderTopLeftRadius: theme.borderRadii.xl
    },
    pagination:{
        ...StyleSheet.absoluteFillObject,
        height: theme.borderRadii.xl,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row"
    },
    underlay:{
        ...StyleSheet.absoluteFillObject,
        alignItems: "center",
        justifyContent: "flex-end"
    }
})

const slides = [
    {
        title: "Relaxed",
        subtitle:"Find Your Outfits",
        description: "Confused about outfit? Don't worry! Find the best outfit here!",
        color:"#BFEAF5",
        picture:
            {
                src: require("../../../assets/1.png"),
                width: 2249,
                height: 3000
            }
    },
    {
        title: "Playful",
        subtitle:"Hear it First, Wear it First",
        description:"Hating the clothes in your wardrobe? Explore hundreds of outfits ideas",
        color:"#BEECC4",
        picture:
            {
                src: require("../../../assets/2.png"),
                width: 622,
                height: 796
            }
        },
    {
        title: "Excentric",
        subtitle:"Your Style, Your Way",
        description:"Create your individual & unique style and look amazing everyday",
        color:"#FFE4D9",
        picture:
            {
                src: require("../../../assets/3.png"),
                width: 421,
                height: 589
            }
    },
    {
        title: "Funky",
        subtitle:"Look Good, Feel Good",
        description:"Discover the lastest trends in fashion and explore your personality",
        color:"#FFDDDD",
        picture:
            {
                src: require("../../../assets/4.png"),
                width: 444,
                height: 582
            }
    },
]
export const assets = slides.map((slide)=>slide.picture.src)

const Onboarding = ({navigation}: StackNavigationProps<Routes,  "Onboarding">) => {
    const scroll = useRef<Animated.ScrollView>(null)
    // TODO: scrollHandler useScrollHandler?
    const { scrollHandler, x} = useScrollHandler()
    const backgroundColor = interpolateColor(x,{
        inputRange:slides.map((_,i)=>i*width),
        outputRange: slides.map(slide=>slide.color)
    })
    return (
      <View style={styles.container} >
        <Animated.View style={[styles.slider, {backgroundColor}]}>
            {slides.map(({picture}, index)=>{
                const opacity = interpolate(x,{
                    inputRange: [(index-0.5)* width, index*width, (index+0.5)*width],
                    outputRange: [0., 1, 0],
                    extrapolate: Extrapolate.CLAMP
                })
                return(
                    <Animated.View style={[styles.underlay,{opacity}]} key={index}>
                        <Image source={picture.src} style={{
                            width: width-theme.borderRadii.xl,
                            height: ((width - theme.borderRadii.xl) * picture.height) / picture.width}}/>
                    </Animated.View>
                )
            })}

            <Animated.ScrollView
              ref={scroll}
              horizontal
              snapToInterval={width}
              decelerationRate={"fast"}
              showsHorizontalScrollIndicator={false}
              bounces={false}
              {...scrollHandler}
            >
              {slides.map(({title, picture}, index)=>(
                  <Slide key={index} right={!!(index%2)} {...{title, picture}}/>
              ))}
            </Animated.ScrollView>
        </Animated.View>
        <View style={styles.footer}>
            <Animated.View style={{... StyleSheet.absoluteFillObject, backgroundColor}}/>
            <View style={styles.footerContent}>
                <View style={styles.pagination}>
                    {slides.map((_, index)=>(<Dot key={index} currentIndex={divide(x, width)}{...{index}} />
                    ))}
                </View>
                <Animated.View style={{
                    flex:1,
                    flexDirection: "row",
                    width: width * slides.length,
                    transform:[{translateX: multiply(x,-1)}]}}>
                    {slides.map(({subtitle, description}, index)=> {
                        const last = index === slides.length - 1
                        return (
                            <Subslide key={index} {...{subtitle, description, last}}
                                      onPress={() => {
                                          if (last){
                                            navigation.navigate("Welcome")
                                          }else{
                                              scroll.current?.getNode().scrollTo({
                                                  x: width * (index + 1),
                                                  animated: true
                                              })
                                          }
                                      }}/>
                        )
                    })}
                </Animated.View>
            </View>
        </View>
      </View>);
};

export default Onboarding;