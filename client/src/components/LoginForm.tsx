import React, { useContext, useState } from 'react';
import { Context } from '..';

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const { store } = useContext(Context);

  return (
    <div>
      <input
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        type="text"
        placeholder="Email"
      />
      <input
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        type="text"
        placeholder="Password"
      />
      <button onClick={() => store.login(email, password)}>Log In</button>
      <button onClick={() => store.registration(email, password)}>
        Sign Up
      </button>
    </div>
  );
};

export default LoginForm;
