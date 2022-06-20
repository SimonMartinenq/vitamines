import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

const EditProfilScreen = () => {
    return (
        <View style = {StyleSheet.container}>
            <Text></Text>
            <Button
                title = "Click Here"
                onPress={() => alert('Button Clicked')}
            />
        </View>
    );
};

export default EditProfilScreen;
const styles = StyleSheet.create({
    container: {
        flex : 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
});