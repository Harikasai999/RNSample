import React, { Component, useState } from 'react';
import { View, TouchableOpacity, Text, Alert } from 'react-native';
import { LoginButton, AccessToken, LoginManager, GraphRequest, GraphRequestManager } from 'react-native-fbsdk';
import { GoogleSignin, statusCodes } from '@react-native-community/google-signin';

export default function LoginWithFacebook() {
    const [user, setUser] = useState(null);
    const [gmailUser, setGmailUser] = useState(null);

    async function facebookIn() {
        await LoginManager.logOut()

        LoginManager.logInWithPermissions(['public_profile', 'email']).then(
            login => {
                if (login.isCancelled) {
                    console.log('Login Canceled');
                } else {
                    AccessToken.getCurrentAccessToken().then(
                        (data) => {
                            const accessToken = data.accessToken.toString()
                            getInfoFromToken(accessToken)
                        })
                }
            },
            error => {
                console.log('Error no login ', error)
            }
        )
    }

    function getInfoFromToken(token) {
        const PROFILE_REQUEST_PARAMS = {
            fields: {
                string: 'id, name, first_name, last_name,  email, picture.type(large)'
            },
        }
        const profileRequest = new GraphRequest('/me', { token, parameters: PROFILE_REQUEST_PARAMS },
            (error, result) => {
                if (error) {
                    console.log('Login Info has an error:', error)
                }

                else {
                    if (result.isCancelled) {
                        console.log("Login cancelled");
                    }
                    // if (result.email === undefined) {
                    //     Alert.alert("Error", "To contiune MyApp plase allow access to your email", "Ok")
                    // }
                    else {
                        console.log(result)
                        // alert(JSON.stringify(result) + " result")
                        setUser(result)
                    }
                }
            },
        )
        new GraphRequestManager().addRequest(profileRequest).start()
    }
    const signIn = async () => {
        try {
            console.log("trye")
            await GoogleSignin.hasPlayServices();
            const userInfo = await GoogleSignin.signIn();
            //   this.setState({ userInfo });
            console.log(userInfo, "userInfo")
            setGmailUser(userInfo)
        } catch (error) {
            console.log("error", error)
            if (error.code === statusCodes.SIGN_IN_CANCELLED) {
                // user cancelled the login flow
            } else if (error.code === statusCodes.IN_PROGRESS) {
                // operation (e.g. sign in) is in progress already
            } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
                // play services not available or outdated
            } else {
                // some other error happened
            }
        }
    };
    signOut = async () => {
        try {
            await GoogleSignin.revokeAccess();
            await GoogleSignin.signOut();
            setGmailUser(null)
            //   this.setState({ user: null }); // Remember to remove the user from your app's state as well
        } catch (error) {
            console.error(error);
        }
    };
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }}>
            {/* <LoginButton
                permissions={["email"]}
                onLoginFinished={
                    (error, result) => {
                        if (error) {
                            console.log("login has error: ", error);
                        } else if (result.isCancelled) {
                            console.log("login is cancelled.");
                        } else {
                            AccessToken.getCurrentAccessToken().then(
                                (data) => {
                                    console.log("datttaaaa--", data)
                                }
                            )
                        }
                    }
                }
                onLogoutFinished={() => console.log("logout.")} /> */}

            {user ? (
                <TouchableOpacity onPress={() => {
                    setUser(null)
                    LoginManager.logOut()
                }}>
                    <Text>Facebook Logout</Text>
                </TouchableOpacity>
            ) : (

                    <TouchableOpacity onPress={() => facebookIn()}>
                        <Text>Facebook Login</Text>
                    </TouchableOpacity>
                )}
            {gmailUser ? (
                <TouchableOpacity onPress={() => signOut()} style={{ marginTop: 20 }}>
                    <Text>Gmail Logout</Text>
                </TouchableOpacity>
            ) : (
                    <TouchableOpacity onPress={() => signIn()} style={{ marginTop: 20 }}>
                        <Text>Gmail Login</Text>
                    </TouchableOpacity>
                )}


        </View>
    );
}
