import { Routes, Route } from "react-router-dom";
import Account from "./views/Account";
import Analytics from "./views/Analytics";
import Home from "./views/Home";
import Invoices from "./views/Invoices";
import Settings from "./views/Settings";
import Wallets from "./views/Wallets";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="analytics" element={<Analytics />} />
        <Route path="wallet" element={<Wallets />} />
        <Route path="invoices" element={<Invoices />} />
        <Route path="account" element={<Account />} />
        <Route path="settings" element={<Settings />} />
      </Routes>
    </div>
  );
}

export default App;
