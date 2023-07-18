import logo from "./logo.svg";
import "./App.css";
import SummaryPage from "./pages/SummayPage";
import OrderPage from "./pages/OrderPage";

function App() {
  return (
    <div style={{ padding: "4rem" }}>
      <OrderPage />
      <SummaryPage />
    </div>
  );
}

export default App;
