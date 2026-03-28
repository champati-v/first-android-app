import { useState } from "react";
import { Alert, Button, Switch, Text, View } from "react-native";

function HomeScreen() {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  const onPress = () => {
    Alert.alert("Button Pressed");
  }
  return(
    <View>
      <Text>Hello From Home Screen</Text>
      <Button title="Click Me" onPress={onPress} />
      <Switch value={isEnabled} onValueChange={toggleSwitch} />
      {isEnabled ? (<Text>Switch is ON</Text>) : (<Text>Switch is OFF</Text>)}
    </View>
  )
}

export default HomeScreen;

