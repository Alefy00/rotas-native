import { useNavigation } from "@react-navigation/native";
import { Image,  View } from "react-native";
import CustomButtom from "../components/Buttom";
import LinkButton from "../components/LinkButton";
import {styles} from './HomeStyles'

const Home = ()=>{

    const navigation = useNavigation();
    return (
        <View style={styles.container}> 
            <CustomButtom
            title="Home"
            onPress={()=> navigation.navigate('Skill')}
            />
            <View>
                <Image source={require('../../assets/Alefy.png')}
                style={styles.image}
                />
            <LinkButton title='Linkedln' url='https://www.linkedin.com/in/alefy-xavier-developer/' />
            <LinkButton title='Linkedln' url='https://www.linkedin.com/in/alefy-xavier-developer/' />
            <LinkButton title='Linkedln' url='https://www.linkedin.com/in/alefy-xavier-developer/' />
                
        </View>
        </View>
    )
}
export default Home