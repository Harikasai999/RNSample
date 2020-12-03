import React, { useState, useRef, useEffect, useContext } from 'react'
import { View, Text, TouchableOpacity, Platform } from 'react-native'
import {
    TextField,
    FilledTextField,
    OutlinedTextField,
} from 'react-native-material-textfield';
import { UserContext } from "@context/user-context";
import { ThemeContext } from '@context/theme-context'
import { Colors } from "@common";
export default function Login() {
    const { theme, toggle, dark } = useContext(ThemeContext);
    const { user, setUser } = useContext(UserContext);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const passwordInput = useRef(null)
    useEffect(() => {
        passwordInput.current?.setNativeProps({
            style: { fontFamily: Platform.OS === "android" ? "Roboto-Regular" : "" }
        })
    }, [])
    function onLogin() {
        if (email && password) {
            const data = {
                id: "4",
                email: email,
                password: password
            };
            setUser(data);
            // AsyncStorage.setItem(
            //     'userID',
            //     JSON.stringify(data)
            // );
        } else if (!email) {
            alert("Please enter email")
        } else {
            alert("Please enter password")
        }


    }
    return (
        <View style={{ flex: 1, justifyContent: 'center', backgroundColor: theme.backgroundColor }}>
            <View style={{ marginHorizontal: 20 }}>
                <OutlinedTextField
                    label='Email'
                    keyboardType='email-address'
                    onChangeText={(text) => setEmail(text)}
                    value={email}
                    baseColor={theme.borderColor}
                    tintColor={theme.borderColor}
                    style={{ color: theme.color }}
                />
                <OutlinedTextField
                    label='Password'
                    keyboardType='default'
                    onChangeText={(text) => setPassword(text)}
                    value={password}
                    baseColor={theme.borderColor}
                    tintColor={theme.borderColor}
                    secureTextEntry
                    containerStyle={{ marginTop: 10 }}
                    style={{ color: theme.color }}
                // ref={passwordInput}
                />
                <TouchableOpacity style={{
                    height: 50, borderRadius: 5, borderWidth: 1,
                    borderColor: theme.borderColor, backgroundColor: theme.color,
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginTop: 10
                }}
                    onPress={onLogin}
                >
                    <Text style={{ fontSize: 20, color: theme.backgroundColor }}>Login</Text>
                </TouchableOpacity>
                <View style={{
                    justifyContent: 'center',
                    flexDirection: 'row',
                    marginTop: 10
                }}>
                    <Text style={{ fontSize: 16, color: theme.color, }}>Don't have an account?</Text>
                    <TouchableOpacity>
                        <Text style={{ fontSize: 16, color: theme.color, textDecorationLine: "underline" }}> SignUp</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={{
                    alignItems: 'center',
                    marginTop: 10
                }}>
                    <Text style={{ fontSize: 16, color: theme.color, textDecorationLine: "underline" }}>Forgot Password?</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
