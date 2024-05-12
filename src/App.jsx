
const App = () => {

  return (
    <div>
      <h1>Create Account</h1>
      <form
        >
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
          type="text"
          placeholder="Name"
          name="name"
       
          required
        />
        <button type="submit">
            Submit
        </button>
      </form>
    </div>
  );
};

export default App;