import React from 'react';
import {SafeAreaView ,Text , Button, View, StyleSheet} from 'react-native';


function StartScreen({navigation}) {
    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Button title='Gallery' onPress={() => navigation.navigate('Gallery')}/>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginHorizontal: 16,
      },
  });

export default StartScreen;