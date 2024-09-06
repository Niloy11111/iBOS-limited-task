import { createContext, useEffect, useState } from "react";
import { checkLogin, userLogin, userLogout, userSignup } from "../../apis";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(
    JSON.parse(localStorage.getItem("orders"))
  );
  const [filteredCartItems, setFilteredCartItems] = useState([]);
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [products, setProducts] = useState([]);
  const login = (email, password) => {
    const data = userLogin(email, password);
    if (data) {
      setUser({ email, name: "Niloy" });
      return true;
    } else {
      setError("Email or Password is incorrect");
      return false;
    }
  };
  const signup = (email, password) => {
    const isSignup = userSignup(email, password);
    if (isSignup) {
      return true;
    } else {
      setUser({ email, name: "Niloy" });
      setError("Email already exist");
      return false;
    }
  };
  const logOut = () => {
    userLogout();
    setUser(null);
  };

  useEffect(() => {
    const user = checkLogin();
    if (user) {
      setUser({ email: user, name: "Niloy" });
    }
  }, []);

  const handleAddToCart = (id, product) => {
    let orderedItems = JSON.parse(localStorage.getItem("orders")) || [];
    const newId = orderedItems?.length + 1;

    const isExist = orderedItems.find((item) => item.id === id);

    if (isExist) {
      orderedItems.push({ ...product, id: newId, email: user?.email });
    } else {
      orderedItems.push({ ...product, email: user?.email });
    }

    localStorage.setItem("orders", JSON.stringify(orderedItems));

    const myCart = orderedItems.filter((item) => item.email === user?.email);
    setFilteredCartItems(myCart);
  };
  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem("orders"));
    if (storedItems && user) {
      const myCart = storedItems.filter((item) => item.email === user.email);
      setFilteredCartItems(myCart);
    }
  }, [user]);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const handleRemove = (id) => {
    const carts = JSON.parse(localStorage.getItem("orders"));
    const filteredCartItems = carts.filter((item) => item.id !== id);
    localStorage.setItem("orders", JSON.stringify(filteredCartItems));
    const myCart = filteredCartItems.filter(
      (item) => item.email === user.email
    );
    setFilteredCartItems(myCart);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        error,
        logOut,
        login,
        signup,
        handleRemove,
        handleAddToCart,
        products,
        filteredCartItems,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
