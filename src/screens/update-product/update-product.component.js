import { useRef, useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  KeyboardAvoidingView,
  ScrollView,
  Text,
  View,
  Platform,
  TextInput,
  TouchableOpacity,
} from "react-native";
import PrimaryButton from "../../components/primary-button/primary-button.component";
import { Ionicons } from "@expo/vector-icons";

import styles from "./update-product.style";
import { updateProduct } from "../../redux/products/product.slice";
import {
  getProductThunk,
  updateProductThunk,
} from "../../redux/products/product.thunk";

function ProductUpdate(props) {
  const {
    route: {
      params: { data },
    },
    navigation,
  } = props;

  const name = useRef("");
  const price = useRef(0);
  const image = useRef("");
  const dispatch = useDispatch();
  const productDetail = useSelector((state) => state.products.detail);

  useEffect(() => {
    dispatch(getProductThunk(data.id));
  }, [data.id]);

  useEffect(() => {
    if (productDetail) {
      name.current = productDetail.name;
      price.current = productDetail.price;
      image.current = productDetail.image;
    }
  }, [productDetail]);

  const onSaveProductUpdate = async () => {
    if (name.current === "") {
      alert("Không được bỏ trống!");
      return;
    }
    if (price.current === "") {
      alert("Không được bỏ trống!");
      return;
    }
    if (image.current === "") {
      alert("Không được bỏ trống!");
      return;
    }
    product = {
      id: data.id,
      name: name.current,
      price: parseFloat(price.current),
      image: image.current,
    };

    // console.log(product);
    await dispatch(updateProductThunk(product));
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
        {productDetail && (
          <>
            <Text style={styles.title}>Cập nhật sản phẩm (#{data.id}) </Text>
            <TextInput
              style={styles.input}
              placeholder="Product name ..."
              defaultValue={productDetail.name}
              onChangeText={(text) => (name.current = text)}
            />
            <TextInput
              style={styles.input}
              placeholder="Product price ..."
              inputMode="decimal"
              onChangeText={(text) => (price.current = text)}
              defaultValue={String(productDetail.price)}
            />
            <TextInput
              style={styles.input}
              placeholder="Product image ..."
              onChangeText={(text) => (image.current = text)}
              defaultValue={productDetail.image}
            />
            <PrimaryButton onPress={onSaveProductUpdate}>Save</PrimaryButton>
          </>
        )}
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

export default ProductUpdate;
