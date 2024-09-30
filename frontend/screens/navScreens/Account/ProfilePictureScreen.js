import React, { useState } from 'react';
import { View, Button, Image, Alert, TouchableOpacity, Text, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import AWS from 'aws-sdk';


AWS.config.update({
    accessKeyId: ACCESS_KEY,
    secretAccessKey: SECRET_KEY,
    region: REGION,
});

const ProfilePictureUpdate = () => {
    const [imageUri, setImageUri] = useState(null);

    const openImagePickerOptions = () => {
        Alert.alert(
            "Change Profile Picture",
            "Select an option",
            [
                {
                    text: "Take Photo",
                    onPress: openCamera,
                },
                {
                    text: "Choose from Library",
                    onPress: openImageLibrary,
                },
                {
                    text: "Cancel",
                    style: "cancel",
                }
            ],
            { cancelable: true }
        );
    };

    const openCamera = async () => {
        const { status } = await ImagePicker.requestCameraPermissionsAsync();
        if (status === 'granted') {
            const result = await ImagePicker.launchCameraAsync({
                allowsEditing: true,
                aspect: [1, 1],
                quality: 1,
            });

            if (!result.canceled) {
                const selectedImage = result.assets[0];
                setImageUri(selectedImage.uri);
                console.log("here",selectedImage);
                uploadImageToS3(selectedImage);
            }
        } else {
            Alert.alert('Permission Denied', 'Camera permission is required to take a photo.');
        }
    };

    const openImageLibrary = async () => {
        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [1, 1],
            quality: 1,
        });

        if (!result.canceled) {
            const selectedImage = result.assets[0];
            setImageUri(selectedImage.uri);
            uploadImageToS3(selectedImage);
        }
    };

    const uploadImageToS3 = async (file) => {
        const fileName = file.fileName || `profile-pic-${Date.now()}`;
        const s3 = new AWS.S3();
        const fileUri = file.uri;
    
        try {
            // Fetch the image data
            const response = await fetch(fileUri);
            const blob = await response.blob();
    
            const params = {
                Bucket: S3_BUCKET,
                Key: fileName,
                Body: blob,
                ContentType: file.type,
            };
    
            s3.upload(params, (err, data) => {
                if (err) {
                    console.log('Error uploading file:', err);
                } else {
                    console.log('Successfully uploaded file:', data.Location);
                }
            });
        } catch (error) {
            console.log('Error uploading file:', error);
        }
    };
    

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={openImagePickerOptions} style={styles.profilePictureWrapper}>
                {imageUri ? (
                    <Image
                        source={{ uri: imageUri }}
                        style={styles.profilePicture}
                    />
                ) : (
                    <View style={styles.placeholder}>
                        <Text style={styles.placeholderText}>Update Profile</Text>
                    </View>
                )}
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
    profilePictureWrapper: {
        marginBottom: 20,
    },
    profilePicture: {
        width: 200,
        height: 200,
        borderRadius: 100,
    },
    placeholder: {
        width: 150,
        height: 150,
        borderRadius: 75,
        backgroundColor: '#ccc',
        alignItems: 'center',
        justifyContent: 'center',
    },
    placeholderText: {
        color: 'black',
        backgroundColor: 'rgba(255, 255, 255, 0.5)', // Transparent background
        fontSize: 10,
        textAlign: 'center',
        width: '100%', // Match the width of the circle
        position: 'absolute',
        bottom: 0, // Position it at the bottom of the circle
        paddingVertical: 10,
        paddingBottom:10,
    },
});

export default ProfilePictureUpdate;
