
const App = () => {

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="container">
      <h1>Create Account</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          name="email"
          required
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          required
        />
        <input
          type="password"
          placeholder="Confirm Password"
          name="confirmPassword"
          required
        />
        <input
          type="text"
          placeholder="Name"
          name="name"
          required
        />
        <div>
          <input
            type="checkbox"
            name="terms"
            required
          />
          <label htmlFor="terms">I agree to the Terms and Conditions</label>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default App;
