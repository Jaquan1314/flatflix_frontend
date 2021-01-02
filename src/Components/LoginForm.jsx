import React from 'react';

function LoginForm() {
  return (
    <>
      <form>
        <input type="text" placeholder="username" />
        <input type="text" placeholder="email" />
        <input type="text" placeholder="password" />
        <button>Login</button>
      </form>
    </>
  );
}

export default LoginForm;
