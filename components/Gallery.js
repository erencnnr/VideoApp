import React, { useState } from "react"; 

import { Text, SafeAreaView, View, StyleSheet, Alert, TouchableOpacity } from 'react-native';
import * as ImagePicker from "expo-image-picker"; 

function Gallery(props) {
    const [error, setError] = useState(null);

    const pickFromGallery = async () => { 
        const { status } = await ImagePicker. 
            requestMediaLibraryPermissionsAsync(); 
        
        if (status !== "granted") { 
  
            Alert.alert( 
                "Permission Denied", 
                `Sorry, we need camera  
                 roll permission to upload images.` 
            ); 
        } else { 
            
            const result = 
                await ImagePicker.launchImageLibraryAsync({base64:true, allowsEditing:true, mediaTypes:ImagePicker.MediaTypeOptions.Videos}); 
            console.log(result);
            if (!result.cancelled) { 
                
                if(result.assets != null)
                {
                    console.log(result.assets[0].uri);
                }
                
                
                setError(null); 
            }
            console.log(result.canceled); 
        } 
    }; 

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.view}>
                
                <TouchableOpacity style={styles.button}
                onPress={pickFromGallery}> 
                <Text style={styles.plusText}> 
                    + 
                </Text> 
            </TouchableOpacity> 
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
      view: {
        flex: 1, // Ekranı kaplamak için
        justifyContent: 'flex-end', // Dikeyde en alta yerleştirir
        alignItems: 'flex-end', // Yatayda en sağa yerleştirir
        padding: 16, // Butonun kenarlara mesafesi
      },
      button: {
        width: 60, // Butonun genişliği
        height: 60, // Butonun yüksekliği
        borderRadius: 30, // Yuvarlak yapmak için yarıçap
        backgroundColor: '#007AFF', // Butonun arka plan rengi
        justifyContent: 'center', // "+" işaretini dikeyde ortalamak için
        alignItems: 'center', // "+" işaretini yatayda ortalamak için
        shadowColor: '#000', // Gölge rengi
        shadowOffset: { width: 0, height: 2 }, // Gölge ofseti
        shadowOpacity: 0.3, // Gölge opaklığı
        shadowRadius: 4, // Gölge yayılma yarıçapı
        elevation: 5, // Android'de gölge için
      },
      plusText: {
        fontSize: 30, // "+" işaretinin boyutu
        color: '#fff', // "+" işaretinin rengi
      },
  });

export default Gallery;