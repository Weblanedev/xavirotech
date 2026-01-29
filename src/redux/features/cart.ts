import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getLocalStorage, setLocalStorage } from "@/utils/localstorage";
import { IProduct } from "@/types/product-d-t";



interface CartState {
  cart_products: IProduct[];
  orderQuantity: number;
}

let initialState: CartState = {
  cart_products: [],
  orderQuantity: 1,
};


export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add_cart_product: (state, action: PayloadAction<IProduct>) => {
      const isExist = state.cart_products.some((i) => i.id === action.payload.id);
      if(action.payload.quantity === 0){
        // no-op: UI can show an error toast if needed
      }
      else if (!isExist) {
        const newItem = {
          ...action.payload,
          orderQuantity: 1,
        };
        state.cart_products.push(newItem);
      } else {
        state.cart_products.map((item) => {
          if (item.id === action.payload.id) {
            if (typeof item.orderQuantity !== "undefined") {
              if (item.quantity >= item.orderQuantity + state.orderQuantity) {
                item.orderQuantity =
                  state.orderQuantity !== 1
                    ? state.orderQuantity + item.orderQuantity
                    : item.orderQuantity + 1;
              } else {
                state.orderQuantity = 1;
              }
            }
          }
          return { ...item };
        });
      }
      localStorage.setItem("cart_products", JSON.stringify(state.cart_products));
    },

    increment: (state) => {
      state.orderQuantity = state.orderQuantity + 1;
    },
    decrement: (state) => {
      state.orderQuantity =
        state.orderQuantity > 1
          ? state.orderQuantity - 1
          : (state.orderQuantity = 1);
    },
    quantityDecrement: (state, action: PayloadAction<IProduct>) => {
      state.cart_products.map((item) => {
        if (item.id === action.payload.id) {
          if (item.orderQuantity && item.orderQuantity > 1) {
            item.orderQuantity = item.orderQuantity - 1;
          }
        }
        return { ...item };
      });
      setLocalStorage("cart_products", state.cart_products);
    },
    remove_product: (state, action: PayloadAction<{ id: number; title: string }>) => {
      state.cart_products = state.cart_products.filter(
        (item) => item.id !== action.payload.id
      );
      setLocalStorage("cart_products", state.cart_products);
    },
    initialOrderQuantity: (state) => {
      state.orderQuantity = 1;
    },
    clearCart: (state) => {
      state.cart_products = [];
      setLocalStorage("cart_products", state.cart_products);
    },
    getCartProducts:(state) => {
      state.cart_products = getLocalStorage('cart_products');
    }
  },
});

export const {
  add_cart_product,
  increment,
  decrement,
  remove_product,
  quantityDecrement,
  initialOrderQuantity,
  clearCart,
  getCartProducts,
} = cartSlice.actions;

export default cartSlice.reducer;
