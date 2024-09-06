import { createContext, useEffect, useState } from "react";
import { checkLogin, userLogin, userLogout, userSignup } from "../../apis";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(
    JSON.parse(localStorage.getItem("orders"))
  );
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

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

  const handleRemove = (id) => {
    const carts = JSON.parse(localStorage.getItem("orders"));
    const filteredCartItems = carts.filter((item) => item.id !== id);
    localStorage.setItem("orders", JSON.stringify(filteredCartItems));

    setCartItems(filteredCartItems);
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
        cartItems,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
