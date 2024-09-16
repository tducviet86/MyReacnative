// import { useState, useContext } from "react";
import { useSelector } from "react-redux";
import { View, FlatList, Text } from "react-native";
import Item from "./item/item.component";
import styles from "./cart.style";
// import { AppContext } from "../../../AppContext";
// hooks -> function
function Cart() {
  // const { cart } = useContext(AppContext);
  const cart = useSelector((state) => state.carts.list);

  // console.log(cart);
  return (
    <View style={styles.container}>
      {cart.length == 0 ? (
        <Text>Không có sản phẩm</Text>
      ) : (
        <FlatList
          style={styles.container}
          data={cart}
          renderItem={({ item }) => <Item data={item} />}
          keyExtractor={(item) => item.id}
        />
      )}
    </View>
  );
}

export default Cart;
