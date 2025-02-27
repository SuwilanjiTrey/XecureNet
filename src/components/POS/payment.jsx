import { CreditCard } from 'lucide-react';
import { useState } from 'react';

export default function Payment({ total }) {
  const [cardDetails, setCardDetails] = useState({
    cardNumber: '',
    expirationDate: '',
    cvv: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCardDetails({
      ...cardDetails,
      [name]: value,
    });
  };

  const handlePayment = (e) => {
    e.preventDefault();
    if (!cardDetails.cardNumber || !cardDetails.expirationDate || !cardDetails.cvv) {
      alert('Please fill in all card details.');
      return;
    }
    alert(`Payment of $${total} processed via XecureNet.\nCard Number: ${cardDetails.cardNumber}`);
  };

  return (
    <div className="payment">
      <form onSubmit={handlePayment}>
        <div className="form-group">
          <label htmlFor="cardNumber">Card Number</label>
          <input
            type="text"
            id="cardNumber"
            name="cardNumber"
            placeholder="1234 5678 9012 3456"
            value={cardDetails.cardNumber}
            onChange={handleInputChange}
            maxLength="16"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="expirationDate">Expiration Date</label>
          <input
            type="text"
            id="expirationDate"
            name="expirationDate"
            placeholder="MM/YY"
            value={cardDetails.expirationDate}
            onChange={handleInputChange}
            maxLength="5"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="cvv">CVV</label>
          <input
            type="text"
            id="cvv"
            name="cvv"
            placeholder="123"
            value={cardDetails.cvv}
            onChange={handleInputChange}
            maxLength="3"
            required
          />
        </div>
        <button type="submit">
          <CreditCard size={18} /> Pay with XecureNet
        </button>
      </form>
    </div>
  );
}