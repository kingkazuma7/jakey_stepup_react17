import { createContext, ReactNode, useState } from 'react';

export interface UserInfo {
  isAdmin?: boolean;
}

export interface UserContextType {
  userInfo: UserInfo;
  setUserInfo: React.Dispatch<React.SetStateAction<UserInfo>>;
}

export const UserContext = createContext<UserContextType>({
  userInfo: { isAdmin: false },
  setUserInfo: () => {},
});

interface UserProviderProps {
  children: ReactNode;
}

export const UserProvider = (props: UserProviderProps) => {
  const { children } = props;

  const [userInfo, setUserInfo] = useState<UserInfo>({ isAdmin: false });

  return (
    <>
      <UserContext.Provider value={{ userInfo, setUserInfo }}>
        {children}
      </UserContext.Provider>
    </>
  );
};
