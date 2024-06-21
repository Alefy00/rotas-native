import React from "react";
import { StyleSheet, Text } from "react-native";

import { TouchableOpacity } from "react-native-gesture-handler";


interface ButtomProps{
    title: string;
    onPress:()=>void;
}

const CustomButtom: React.FC<ButtomProps> = ({title,onPress}) => {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress} sty>
            <Text style={styles.botao}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    botao:{
        padding:10,
        color:'white',
        fontSize:25,
    },
    container:{
        backgroundColor:'purple',
        paddingHorizontal:'30%',
        borderRadius:5,
    }
})

export default CustomButtom