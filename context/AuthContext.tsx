'use client';
import React, { createContext, useContext, useEffect, useState } from 'react';
type User = { id: string; email: string } | null;
const AuthContext = createContext({ user: null as User, setUser: (u: User) => {} });

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User>(null);
  useEffect(() => { /* hydrate if needed */ }, []);
  return <AuthContext.Provider value={{ user, setUser }}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
