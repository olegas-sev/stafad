import { Link } from 'react-router-dom';

export default function Login() {
  return (
    <>
      <div className="login-container">
        <h2>Login</h2>
        <form>
          <div className="input-container">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="input-container">
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" required />
          </div>
          <button type="submit">Login</button>
        </form>
        <div className="social-login">
          <button className="facebook-login">Sign in with Facebook</button>
        </div>
        <p>
          Don't have an account? <Link to="/register">Register</Link>
        </p>
      </div>
    </>
  );
}
