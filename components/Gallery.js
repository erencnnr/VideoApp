import React, { useState } from "react"; 

import { Text, SafeAreaView, View, StyleSheet, Alert, TouchableOpacity } from 'react-native';
import * as ImagePicker from "expo-image-picker"; 

import { ResizeMode } from 'expo-av'
import VideoPlayer from 'expo-video-player'

function Gallery(props) {
    const [error, setError] = useState(null);
    const [file, setFile] = useState(null);

    func = () => {
        console.log("fs");
    }

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
                    console.log(result.assets[0]);
                    setFile(result.assets[0].uri);
                }
                
                
                setError(null); 
            }
            console.log(result.canceled); 
        } 
    }; 

    return (
        <SafeAreaView style={styles.container}>

    {file ? (
        <View style={styles.videoView}>
          <VideoPlayer
              style={styles.videoPlayer}
              videoProps={{
              shouldPlay: true,
              resizeMode: ResizeMode.CONTAIN,
              source: {
                      uri: file,
                      },
                
              }}
              fullscreen={{enterFullscreen:func,
                exitFullscreen:func,
                inFullscreen:true,
                visible:true
                                    }}
              
            />
        </View>) : 
            <></>
      }


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
        backgroundColor: '#ecf0f1'
      },
      view: {
        flex: 1, 
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        padding: 16,
        backgroundColor: '#ecf0f1' 
      },
      videoView: {
        flex: 1,
        paddingTop:200,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ecf0f1'
        
      },
      videoPlayer: {
        width: 420, 
        height: 300,
        
      },
      button: {
        width: 60, 
        height: 60, 
        borderRadius: 30, 
        backgroundColor: '#007AFF', 
        justifyContent: 'center', 
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 }, 
        shadowOpacity: 0.3, 
        shadowRadius: 4, 
        elevation: 5, 
      },
      plusText: {
        fontSize: 30, 
        color: '#fff', 
      },
  });

export default Gallery;