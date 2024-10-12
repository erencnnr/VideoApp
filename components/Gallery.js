import React from 'react';
import { Text, SafeAreaView, View, StyleSheet } from 'react-native';
function Gallery(props) {
    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Text>asd</Text>
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

export default Gallery;