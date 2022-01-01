import OrderForm from "./components/OrderForm";

function App() {
  return (
    <div className="container my-3 d-flex justify-content-center">
      <div class="card shadow-lg" style={{ width: "600px" }}>
        <div class="card-header bg-primary text-white">Food Menu Order</div>
        <img
          style={{ height: "160px", width: "100%", objectFit: "cover" }}
          src="https://images.unsplash.com/photo-1625220194771-7ebdea0b70b9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        />
        <div class="card-body">
          <OrderForm />
        </div>
      </div>
    </div>
  );
}

export default App;
