import { useNavigation } from "@react-navigation/native";
import { Text, View, Image } from "react-native";
import CustomButtom from "../components/Buttom";
import { styles } from "./Skill.Styles";

const Skill = ()=>{
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <CustomButtom
            title="Skill"
            onPress={() => navigation.navigate('Home')}
            />
            <View style={styles.containerTech}>
                <Image source={require('../../assets/Alefy.png')} style={styles.img}/>
                <View>
                <Text style={styles.texto}>React</Text>
                <Text style={styles.texto}>React Native</Text>
                <Text style={styles.texto}>TypeScript</Text>
                </View>
            </View>
        </View>
    )
}

export default Skill