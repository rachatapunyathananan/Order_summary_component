import "./App.css";
import { Container } from "reactstrap";
import OrderSumCard from "./OrderSumCard/Index";

function App() {
  return (
    <Container className="bg-dark" style={{ height: "100%", padding: "1rem" }}>
      <OrderSumCard />
    </Container>
  );
}

export default App;
