import { Home, Shield, CreditCard, User, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom'; // Import Link for routing

export default function Header() {
  return (
    <header className="header">
      <div className="logo">
        <Home size={24} />
        <h1>XecureNet</h1>
      </div>
      <nav>
        <ul>
          <li><Shield size={18} /> Security</li>
          <li><CreditCard size={18} /> Cards</li>
          <li><User size={18} /> Login</li>
          <li>
            <Link to="/pos" className="transaction-link">
              <ArrowRight size={18} /> Make Transaction
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}