import React, { useState } from 'react';
import { ScrollView, View, Text, Image, TextInput } from 'react-native';

const OnChangeAndOnSubmit = () => {
    const [displayText, setDisplayText] = useState("Name:");
    const [textInput, setTextInput] = useState("");

    const handleInputSubmit = () => {
        setDisplayText(textInput);
    }

    const handleInputChange = (text) => {
        setTextInput(text);
    }

    return (
        <ScrollView>
            <View style={{
                flex: 1,
                backgroundColor: 'gray',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Text style={{
                    fontSize: 30
                }}>
                    {displayText}
                </Text>

                <Image
                    source={require('./assests/images/parkash.png')}
                    style={{
                        width: 200,
                        height: 300,
                        borderRadius: 100,
                        borderWidth: 2,
                        borderColor: 'green'
                    }}
                />

                <TextInput
                    value={textInput}
                    onChangeText={handleInputChange}
                    onSubmitEditing={handleInputSubmit}
                    placeholder="Enter name"
                    style={{
                        width: 200,
                        height: 50,
                        borderWidth: 2,
                        textAlign: 'left'
                    }}
                />
            </View>
        </ScrollView>
    );
}

export default OnChangeAndOnSubmit;
