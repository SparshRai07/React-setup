import { useState } from 'react';


const App = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    name: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
  };

  return (
    <div>
      <nav className="navbar">
        <div>
          Twitter
        </div>
        <div className="nav-links">
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
        </div>
      </nav>
      <div className='main'>
        <div className="container">
          <h1>Create Account</h1>
          <form onSubmit={handleSubmit}>
            <input type="email" placeholder="Email" name="email" value={formData.email} onChange={handleChange} required />
            <input type="password" placeholder="Password" name="password" value={formData.password} onChange={handleChange} required />
            <input type="password" placeholder="Confirm Password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} required />
            <input type="text" placeholder="Name" name="name" value={formData.name} onChange={handleChange} required />
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
      <footer className="footer">
        <p>&copy; 2024 Twitter. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
