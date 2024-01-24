import { Platform, Text, View } from "react-native";

const AndroidFunction = () => {
    return (
        <>
            <Text style={{ fontSize: 30, textAlign: "center" }}>AndroidFunction</Text>
            <View style={{ alignItems: "center", justifyContent: "center" }}>
                <Text style={{ fontSize: 20, color: "red" }}>platForm: {Platform.OS} </Text>
                {
                    Platform.OS === "android" ?
                    <View style={{width:100,height:100 , backgroundColor:"green"}}></View>
                        :    <View style={{width:100,height:100 , backgroundColor:"red"}}></View>


                }
            </View>
            
        </>
    )

}
export default AndroidFunction;