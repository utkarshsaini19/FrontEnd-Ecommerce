import "./App.css";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import { createBrowserRouter, Outlet } from "react-router-dom";
import ProductDetails from "./components/ProductDetails";
import UserContext from "./context/userContext";
import { lazy, useState, Suspense } from "react";
import CartPage from "./components/CartPage";
import Error from "./components/Error";


// Contact Page for Lazy loading / Code Splitting
const Contact = lazy(() => import("./components/Contact"));

function App() {
  // user data structure is taken in form { userName: "Utkarsh", cartData: [] } so that we don't have
  // to take mutiple state for difference user Data
  const [user, setUser] = useState({ userName: "Utkarsh", cartData: [] });
  const [searchValue, setSearchValue] = useState("");
  const [isDataLoaded, setIsDataLoaded] = useState(false);

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        isDataLoaded,
        setIsDataLoaded,
        searchValue,
        setSearchValue,
      }}
    >
      <div>
        <Header />
        {/* Outlet used for replacing with Child elements of App */}
        <Outlet />
      </div>
    </UserContext.Provider>
  );
}

// Using react-router-dom latest version i.e >= 6
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/contact",
        element: (
          // Suspense to handle Asynchronus Page Load to handle Lazy Loading
          <Suspense fallback={<h1>Loading....</h1>}>
            <Contact />
          </Suspense>
        ),
      },
      {
        path: "/cartPage",
        element: <CartPage />,
      },
      {
        path: "/product/:productId",
        element: <ProductDetails />,
      },
    ],
    // Routing to error component/element in case of any unrecognized/random url
    errorElement: <Error />,
  },
]);

export default appRouter;
