import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screen/Home";
import Skill from "../screen/Skill";

const { Navigator, Screen  } = createStackNavigator()

export function MainNavigator(){
    return(
        <Navigator>
            <Screen
            name="Home"
            component={Home}
            />
            <Screen
            name="Skill"
            component={Skill}
            />
        </Navigator>
    )
}