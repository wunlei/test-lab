"use client";

import { createContext, PropsWithChildren, useContext, useState } from "react";

type AuthContext = {
  isAdmin: boolean;
  setIsAdmin: (isAdmin: boolean) => void;
};

const AuthContext = createContext<AuthContext | null>(null);

function AuthProvider({
  init,
  children,
}: { init?: boolean } & PropsWithChildren) {
  const [isAdmin, setIsAdmin] = useState(init || false);

  return (
    <AuthContext.Provider value={{ isAdmin, setIsAdmin }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within AuthProvider");
  }

  return context;
};

export default AuthProvider;
