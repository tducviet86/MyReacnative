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

import styles from "./add-product.styles";
import { AppContext } from "../../../AppContext";
import PrimaryButton from "../../components/primary-button/primary-button.component";
// import { addProduct } from "../../redux/products/product.slice";
import { addProductThunk } from "../../redux/products/product.thunk";
function ProductAdd(props) {
  const {
    // route: {
    //   params: { data },
    // },
    navigation,
  } = props;

  const name = useRef("");
  const price = useRef(0);
  const image = useRef("");
  const dispatch = useDispatch();

  const onSave = async () => {
    if (name.current === "") {
      alert("Tên không được bỏ trống");
      return;
    }
    if (price.current === 0) {
      alert("Giá trị không được bỏ trống");
      return;
    }
    if (image.current === "") {
      alert("Ảnh không được bỏ trống");
      return;
    }

    let product = {
      name: name.current,
      price: price.current,
      image: image.current,
    };
    await dispatch(addProductThunk(product));
    navigation.goBack();
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
        <Text style={styles.title}>Thêm sản phẩm</Text>
        <TextInput
          style={styles.input}
          placeholder="Product name ..."
          onChangeText={(text) => (name.current = text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Product price ..."
          inputMode="decimal"
          onChangeText={(text) => (price.current = text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Product image ..."
          onChangeText={(text) => (image.current = text)}
        />
        <PrimaryButton onPress={onSave}>Save</PrimaryButton>
      </ScrollView>
      <TouchableOpacity
        hitSlop={10}
        style={styles.closeButton}
        onPress={() => navigation.goBack()}
      >
        <Ionicons name="close" size={25} color={"#495057"} />
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
}

export default ProductAdd;
