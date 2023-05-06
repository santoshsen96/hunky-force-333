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
      <Route path="/Account" element={<Account />} />
      <Route path="/Bag" element={<Bag />} />
      <Route path="/Jewelery/:id" element={<JwellerySinglePage />} />
      <Route path="/Watches/:id" element={<SingleWatchesPage />} />
      <Route path="/shipping" element={<Shipping />} />
      <Route path="/payment" element={<Payment />} />
    </Routes>
  );
}
export default MainRoutes;
