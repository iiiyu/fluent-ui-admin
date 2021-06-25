import React, {useState, useContext, createContext} from 'react';

interface User {
  email: string;
  name: string;
}

type ContextProps = {
  user: User | null;
  signin: (email: string, password: string) => Promise<User>;
  signout: () => Promise<void>;
};

const authContext = createContext<ContextProps | null>(null);

export const useAuth = () => {
  return useContext(authContext);
};

// fake auth user api
const fakeAuth = {
  signin(email: string, password: string): Promise<User> {
    const user: User = {email: email, name: email};
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(user);
      }, 100);
    });
  },
  signout(): Promise<boolean> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(true);
      }, 100);
    });
  },
};

function userProvideAuth() {
  const initUser: User = {email: 'email', name: 'email'};
  const [user, SetUser] = useState<User | null>(initUser);

  const signin = async (email: string, password: string) => {
    const user = await fakeAuth.signin(email, password);
    SetUser(user);
    return user;
  };

  const signout = async () => {
    const flag = await fakeAuth.signout();
    if (flag) {
      SetUser(null);
    }
  };
  return {
    user,
    signin,
    signout,
  };
}

export function ProvideAuth({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  const auth = userProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}
