import { Provider } from "react-redux";
import "./App.css";
import Header from "./components/Header";
import Product from "./components/Product";
import Shop from "./components/Shop";
import { DUMMY_PRODUCTS } from "./dummy-products";
import { store } from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <Header />

      <Shop>
        {DUMMY_PRODUCTS.map((pro) => (
          <li key={pro.id}>
            <Product {...pro} />
          </li>
        ))}
      </Shop>
    </Provider>
  );
}

export default App;
