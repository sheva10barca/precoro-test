import { SetStateAction, createContext, useState } from 'react';

type ProviderProps = {
  children: React.ReactNode;
};

type ContextProps = {
  authToken: string | null;
  setAuthToken: React.Dispatch<SetStateAction<string | null>>;
};

export const AuthContext = createContext<ContextProps>({
  authToken: null,
  setAuthToken: () => {},
});

export const AuthProvider: React.FC<ProviderProps> = ({ children }) => {
  const [authToken, setAuthToken] = useState<string | null>(null);

  return (
    <AuthContext.Provider value={{ authToken, setAuthToken }}>
      {children}
    </AuthContext.Provider>
  );
};
