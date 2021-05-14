import React from 'react';
import {Stack, IStackTokens} from '@fluentui/react';
import {DefaultButton, PrimaryButton} from '@fluentui/react/lib/Button';
import {TextField} from '@fluentui/react/lib/TextField';

export interface IButtonExampleProps {
  // These are set based on the toggles shown above the examples (not needed in real code)
  disabled?: boolean;
  checked?: boolean;
}

// Example formatting
const stackTokens: IStackTokens = {childrenGap: 40};

function Login() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-r from-green-400 to-blue-500">
      <div className="mx-4 p-8 bg-white shadow-xl w-full md:w-3/5 lg:w-2/5">
        <h1 className="text-xl">Welcome Fluent Admin Dashboard</h1>
        <TextField
          label="Login Email"
          placeholder="Input your login email"
          required
        />
        <TextField
          label="Password"
          type="password"
          placeholder="Input your password"
          canRevealPassword
          revealPasswordAriaLabel="Show password"
          required
        />
        <div className="pt-6 flex flex-auto justify-between">
          <DefaultButton text="Forget Password" />
          <PrimaryButton text="Login" />
        </div>
      </div>
    </div>
  );
}

export default Login;
