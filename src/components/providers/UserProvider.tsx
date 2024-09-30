import { createContext, ReactNode } from 'react';

export interface UserContextType {}

export const UserContext = createContext<UserContextType>({});

interface UserProviderProps {
  children: ReactNode;
}

export const UserProvider = (props: UserProviderProps) => {
  const { children } = props;
  const contextName = 'ほげ'; // グローバルなステート
  return (
    <>
      <UserContext.Provider value={{ contextName }}>
        {children}
      </UserContext.Provider>
    </>
  );
};
