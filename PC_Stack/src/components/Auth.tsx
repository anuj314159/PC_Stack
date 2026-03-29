import React, { useState } from 'react';
import Container from './Container';
import { authService } from '../api/authService';

interface AuthProps {
  onLoginSuccess: () => void;
}

const Auth: React.FC<AuthProps> = ({ onLoginSuccess }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    try {
      if (isLogin) {
        await authService.login(email, password);
      } else {
        await authService.register({ email, password });
        await authService.login(email, password);
      }
      onLoginSuccess();
      window.location.hash = '#home';
    } catch (err: any) {
      if (!err.response) {
        setError('Network error: Unable to reach the server. Please check if the backend is running.');
      } else if (err.response.status === 401 || err.response.status === 403) {
        setError('Invalid email or password.');
      } else {
        setError(err.response?.data?.detail || 'An unexpected error occurred. Please try again later.');
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Container title={isLogin ? "Login" : "Register"} iconName="person-outline">
      <div className="auth-container" style={{ maxWidth: '400px', margin: '0 auto', padding: '2rem' }}>
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {error && <div style={{ color: 'red', marginBottom: '1rem' }}>{error}</div>}
          <div className="form-group">
            <label>Email</label>
            <input 
              type="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              required 
              disabled={isLoading}
              style={{ width: '100%', padding: '0.5rem' }}
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input 
              type="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              required 
              disabled={isLoading}
              style={{ width: '100%', padding: '0.5rem' }}
            />
          </div>

          <button 
            type="submit" 
            className="btn-primary" 
            disabled={isLoading}
            style={{ padding: '0.75rem', cursor: isLoading ? 'not-allowed' : 'pointer', background: 'var(--accent-color)', border: 'none', borderRadius: '4px', color: 'white', opacity: isLoading ? 0.7 : 1 }}
          >
            {isLoading ? "Processing..." : (isLogin ? "Sign In" : "Sign Up")}
          </button>
        </form>

        <p style={{ marginTop: '1.5rem', textAlign: 'center' }}>
          {isLogin ? "Don't have an account? " : "Already have an account? "}
          <span 
            onClick={() => setIsLogin(!isLogin)} 
            style={{ color: 'var(--accent-color)', cursor: 'pointer', textDecoration: 'underline' }}
          >
            {isLogin ? "Register here" : "Login here"}
          </span>
        </p>
      </div>
    </Container>
  );
};

export default Auth;
