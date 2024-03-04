const initialState = {
  money: 20000,
  expenses: 0,
  products: [],
};

export const Reducer = (state = initialState, action) => {
  switch (action.type) {
    // case "TAKE_MONEY":
    //   return { ...state, money: state.money - action.payload };
    // case "ADD_MONEY":
    //   return {
    //     ...state,
    //     expenses: state.expenses + action.payload,
    //   };
    case "ToDo":
      if (action.payload.price > state.money) {
        alert("You do not  have enough money!!!");
      } else {
        return {
          ...state,
          products: [...state.products, action.payload],
          money: state.money - +action.payload.price,
          expenses: state.expenses + +action.payload.price,
        };
      }
    case "DELETE":
      let findProduct = state.products.find((el) => el.id === action.payload);
      if (findProduct) {
        let filterProducts = state.products.filter(
          (el) => el.id !== action.payload
        );
        return {
          ...state,
          products: filterProducts,
          money: state.money + +findProduct.price,
          expenses: state.expenses - +findProduct.price,
        };
      }
    case "EDIT":
      console.log(action.payload);
    default:
      return state;
  }
};
// {
//   edit ? "Save Product" : "Buy product";
// }

// onClick={() => {
//   edit?()=>editProduct():()=>
//   getProduct();
// }}
