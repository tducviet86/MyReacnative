import { useState, useContext, useEffect } from "react";
import { View, FlatList, TextInput } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import FloatButton from "../../components/float-button/float-button.components";
import Item from "./item/item.component";
import styles from "./product-list.styles";
import { AppContext } from "../../../AppContext";
import { fetchProductsThunk } from "../../redux/products/product.thunk";

// hooks -> function
function ProductList({ navigation }) {
  // const { list } = useContext(AppContext);
  const list = useSelector((state) => state.products.list);
  const dispatch = useDispatch();

  const onSearch = (text) => {
    dispatch(fetchProductsThunk({ name: text }));
  };

  useEffect(() => {
    dispatch(fetchProductsThunk());
  }, []);
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Tìm Kiếm Theo Tên"
        onChangeText={onSearch}
      />
      <FlatList
        style={styles.container}
        data={list}
        renderItem={({ item }) => <Item data={item} />}
        keyExtractor={(item) => item.id}
      />
      <FloatButton onPress={() => navigation.navigate("product-add")} />
    </View>
  );
}

export default ProductList;
