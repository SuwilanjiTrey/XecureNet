import { Lock, Globe, Smartphone, CreditCard } from 'lucide-react';

export default function Features() {
  return (
    <section className="features">
      <div className="feature">
        <Lock size={32} />
        <h3>Secure Transactions</h3>
        <p>Bank with confidence using our advanced security measures.</p>
      </div>
      <div className="feature">
        <Globe size={32} />
        <h3>Global Access</h3>
        <p>Access your account from anywhere in the world.</p>
      </div>
      <div className="feature">
        <Smartphone size={32} />
        <h3>Mobile Banking</h3>
        <p>Manage your finances on the go with our mobile app.</p>
      </div>
      <div className="feature">
        <CreditCard size={32} />
        <h3>Virtual Cards</h3>
        <p>Generate virtual cards for secure online payments.</p>
      </div>
    </section>
  );
}