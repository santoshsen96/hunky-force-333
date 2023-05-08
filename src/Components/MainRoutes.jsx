import { Route, Routes } from "react-router-dom";
import { HomePage } from "../Pages/HomePage";
import { Jewelery } from "../Pages/Jewelery";
import { Gifts } from "../Pages/Gifts";
import { Contact } from "../Pages/Contact";
import { Account } from "../Pages/Account";
import { Bag } from "../Pages/Bag";
import Watches from "../Pages/Watches";
import JwellerySinglePage from "./JwellerySinglePage";
import SingleWatchesPage from "./SingleWatchesPage";

import Admin from "../Pages/Admin";
import { AdminProductsWatches } from "../Pages/AdminProductsWatches";
import { AdminProductsJewellery } from "../Pages/AdminProductsJewellery";
import { AdminProductsGifts } from "../Pages/AdminProductsGifts";
import { AdminAddroduct } from "../Pages/AdminAddroduct";
import { AdminEditProduct } from "../Pages/AdminEditProduct";
import AdminLogin from "../Pages/AdminLogin";
import AdminPrivateRoute from "./AdminPrivateRoute";
import Login from "./Login";
import SignUP from "./SignUP";
import Shipping from "./shippingpage/Shipping";
import Payment from "./shippingpage/payment/Payment";

function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/Jewelery" element={<Jewelery />} />
      <Route path="/Watches" element={<Watches />} />
      <Route path="/Gifts" element={<Gifts />} />
      <Route path="/Contact" element={<Contact />} />
      {/* <Route path="/Account" element={<Account />} /> */}
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUP />} />
      <Route path="/Bag" element={<Bag />} />
      <Route path="/shipping" element={<Shipping />} />
      <Route path="/payment" element={<Payment />} />
      <Route
        path="/admin"
        element={
          <AdminPrivateRoute>
            <Admin />
          </AdminPrivateRoute>
        }
      />
      <Route path="/admin-product-watch" element={<AdminProductsWatches />} />
      <Route
        path="/admin-product-jewellery"
        element={<AdminProductsJewellery />}
      />
      <Route path="admin-product-gift" element={<AdminProductsGifts />} />
      <Route path="/Jewelery/:id" element={<JwellerySinglePage />} />
      <Route path="/Watches/:id" element={<SingleWatchesPage />} />
      <Route path="/adminaddproductwatch" element={<AdminAddroduct />} />
      <Route path="/admin-edit/:id" element={<AdminEditProduct />} />
      <Route path="/admin-login" element={<AdminLogin />} />
    </Routes>
  );
}
export default MainRoutes;
