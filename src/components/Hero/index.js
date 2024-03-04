import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Hero = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [edit, setEdit] = useState(null);
  const { expenses, money, products } = useSelector((s) => s);
  console.log(products);
  // console.log(expenses);
  const dispatch = useDispatch();

  function getProduct() {
    if (name.trim() === "" || price.trim() === "") {
      alert("You must write Sm!");
    } else {
      const newProduct = {
        id: products.length ? products[products.length - 1].id + 1 : 1,
        name,
        price,
      };
      dispatch({ type: "ToDo", payload: newProduct });
      // dispatch({ type: "TAKE_MONEY", payload: newProduct.price });
      // dispatch({ type: "ADD_MONEY", payload: +newProduct.price });

      setName("");
      setPrice("");
    }
  }
  const del = (data) => {
    dispatch({ type: "DELETE", payload: data.id });
  };
  const addEdit = (data) => {
    setName(data.name);
    setPrice(data.price);
    setEdit(data.id);
  };
  const editProduct = () => {
    console.log("change");
  };

  return (
    <div className="container mx-auto">
      <div className="flex items-center justify-around my-8">
        <div className="w-[250px] h-[150px] bg-red-800 flex items-center justify-center text-center flex-col gap-px">
          <h1 className="text-white text-3xl">Expenses:</h1>
          <h1 className="text-white text-3xl">{expenses}$</h1>
        </div>
        <div className="w-[250px] h-[150px] bg-blue-800 flex items-center justify-center text-center flex-col gap-30">
          <h1 className="text-white text-3xl">Cash:</h1>
          <h1 className="text-white text-3xl">{money}$</h1>
        </div>
      </div>
      <div className="w-[40%] mx-auto flex items-center justify-center flex-col gap-6">
        <div class="relative z-0 w-full mb-5 group">
          <input
            onChange={(e) => setName(e.target.value)}
            value={name}
            type="text"
            id="floating_email"
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
          />
          <label
            for="floating_email"
            class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Product Name
          </label>
        </div>
        <div class="relative z-0 w-full mb-5 group">
          <input
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            type="text"
            id="floating_email"
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
          />
          <label
            for="floating_email"
            class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Product Price
          </label>
        </div>
        <button
          onClick={() => getProduct()}
          type="button"
          class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
        >
          Buy product
        </button>

        <div class="relative overflow-x-auto">
          <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" class="px-6 py-3">
                  Product name
                </th>
                <th scope="col" class="px-6 py-3">
                  Price
                </th>
                <th scope="col" class="px-6 py-3">
                  Edit
                </th>
                <th scope="col" class="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {products.map((el) => (
                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {el.name}
                  </th>
                  <td class="px-6 py-4">{el.price}</td>
                  <td class="px-6 py-4">
                    <button
                      onClick={() => addEdit(el)}
                      type="button"
                      class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                    >
                      Edit
                    </button>
                  </td>
                  <td class="px-6 py-4">
                    <button
                      onClick={() => del(el)}
                      type="button"
                      class="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Hero;
