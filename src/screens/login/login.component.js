import { useRef, useContext } from "react";
import { useDispatch } from "react-redux";
import {
  KeyboardAvoidingView,
  ScrollView,
  Text,
  Platform,
  TextInput,
  TouchableOpacity,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";

import styles from "./login.style";
import PrimaryButton from "../../components/primary-button/primary-button.component";
import { loginThunk } from "../../redux/auth/auth.thunk";
const Login = () => {
  const username = useRef("");
  const password = useRef("");
  const dispatch = useDispatch();
  const onLogin = async () => {
    if (username.current === "") {
      alert("Tên đăng nhập không được bỏ trống");
      return;
    }

    if (password.current === "") {
      alert("Mật khẩu không được bỏ trống");
      return;
    }
    const formData = {
      username: username.current,
      password: password.current,
    };
    try {
      await dispatch(loginThunk(formData)).unwrap();
    } catch (error) {
      alert("Username or Password is not valid");
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.avoidingViewContainer}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
      >
        <Text style={styles.title}>Đăng Nhập</Text>
        <TextInput
          style={styles.input}
          placeholder="Tên Đăng Nhập"
          onChangeText={(text) => (username.current = text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Mật khẩu"
          secureTextEntry={true}
          onChangeText={(text) => (password.current = text)}
        />

        <PrimaryButton onPress={onLogin}>Đăng Nhập</PrimaryButton>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Login;
