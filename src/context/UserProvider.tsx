"use client";

import { createContext, ReactNode } from "react";
import { User } from "@supabase/supabase-js";
import { useCurrentUser } from "@/features/auth/hooks/useCurrentUser";

type UserContextType = {
  authUser: User | undefined;
  refetch: () => Promise<void>;
  isAuthLoading: boolean;
};

export const UserContext = createContext<UserContextType>({
  authUser: undefined,
  refetch: async () => {},
  isAuthLoading: false,
});

export function UserProvider({ children }: { children: ReactNode }) {
  const { authUser, refetch, isAuthLoading } = useCurrentUser();

  return (
    <UserContext.Provider value={{ authUser, refetch, isAuthLoading }}>
      {children}
    </UserContext.Provider>
  );
}
