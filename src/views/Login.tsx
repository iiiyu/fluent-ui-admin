import React from 'react';
import {Stack, IStackTokens} from '@fluentui/react';
import {DefaultButton, PrimaryButton} from '@fluentui/react/lib/Button';

export interface IButtonExampleProps {
  // These are set based on the toggles shown above the examples (not needed in real code)
  disabled?: boolean;
  checked?: boolean;
}

// Example formatting
const stackTokens: IStackTokens = {childrenGap: 40};

function Login() {
  return (
    <Stack horizontal tokens={stackTokens}>
      <h1>Login NotFound!</h1>
      <DefaultButton text="Standard" />
      <PrimaryButton text="Primary" />
    </Stack>
  );
}

export default Login;
