import { useLocation } from "react-router-dom";
import { useState } from "react";
import './Buynow.css'
function BuyNow() {
  const location = useLocation();
  const product = location.state;

  const [orderPlaced, setOrderPlaced] = useState(false);

  if (!product) {
    return (
      <div className="container text-center mt-5">
        <h4>Product not found</h4>
      </div>
    );
  }

  const handleConfirm = () => {
    setOrderPlaced(true);

    setTimeout(() => {
      setOrderPlaced(false);
    }, 2500);
  };

  return (
    <div className="container d-flex justify-content-center mt-4">

      {/* CARD */}
  <div className="order-page">
  <div className="card order-card shadow-lg border-0">

    <h4 className="text-center mb-4">Order Summary</h4>

    <img
      src={product.image}
      alt={product.name}
      className="order-img mx-auto d-block"
    />

    <h5 className="text-center mt-3">{product.name}</h5>

    <p className="text-center mb-2">
      Price: ₹{product.price}
    </p>

    <p className="text-center mb-2">
      Quantity: 1
    </p>

    <h6 className="text-center fw-bold mb-4">
      Total: ₹{product.price}
    </h6>

    <div className="d-flex justify-content-center gap-3">
      <button
        className="btn btn-outline-success rounded-4 px-2 py-1"
        onClick={handleConfirm}
      >
        Confirm Order
      </button>

      <button
        className="btn btn-success rounded-5 px-4 py-1"
        onClick={() => window.history.back()}
      >
        Back
      </button>
    </div>

  </div>
</div>

      {/* POPUP MODAL */}
      {orderPlaced && (
        <div className="position-fixed top-50 start-50 translate-middle">
          <div className="bg-success  bg-opacity-75 text-white p-4 rounded-4 shadow text-center">
            <h5>🎉 Order Confirmed!</h5>
            <p className="mb-0">Thank you for your purchase 🌿</p>
          </div>
        </div>
      )}

    </div>
  );
}

export default BuyNow;