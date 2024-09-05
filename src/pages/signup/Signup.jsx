import { useState } from "react";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = (e) => {
    e.preventDefault();
    console.log(email, password);
  };
  return (
    <>
      <form action="" onSubmit={handleSignUp}>
        <div>
          <label htmlFor="" className="block">
            Email
          </label>
          <input
            className="py-3 border outline-none"
            type="text"
            id="email"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="" className="block">
            Password
          </label>
          <input
            className="py-3 border outline-none"
            type="text"
            id="email"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button className="border p-4">Signup</button>
      </form>
    </>
  );
};

export default Signup;
