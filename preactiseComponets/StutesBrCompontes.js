import { useState } from "react";
import { Button, StatusBar, Text, View } from "react-native";

const StutesBrCompontes = () => {
    const [color, setColor] = useState("pink");
    const [content, setContent] = useState("dark-content");
    const [ahide, setAhide] = useState(false);

    return (
        <>
            <Text style={{ fontSize: 20 }}>StutesBrCompontes</Text>

            <View>
                <StatusBar
                    backgroundColor={color}
                    barStyle={content}
                    hidden={ahide}
                />

            </View>
            <Button title="change color" onPress={() => setColor("yellow")} />
            <Button title="change color" onPress={() => setContent("ight-content")} />
            <Button title="change color" onPress={() => setAhide(!ahide)} />
        </>
    )
}
export default StutesBrCompontes;