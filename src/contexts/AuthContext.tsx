import {
  createContext,
  useContext,
  useState,
  type ReactNode,
  useEffect,
  type FC,
} from "react";
import {
  login as loginService,
  register as registerService,
  type AuthUser,
} from "../services/auth";


const userLocalStorage = {
  check: (): boolean => {
    return (
      !!localStorage.getItem("id") &&
      !!localStorage.getItem("name") &&
      !!localStorage.getItem("email") &&
      !!localStorage.getItem("admin") &&
      !!localStorage.getItem("token")
    );
  },
  get: (): AuthUser => {
    const id = parseInt(localStorage.getItem("id") ?? "0", 10);
    const name = localStorage.getItem("name") ?? "";
    const email = localStorage.getItem("email") ?? "";
    const admin = localStorage.getItem("admin") === "true";
    const token = localStorage.getItem("token") ?? "";
    return { id, name, email, admin, token };
  },
  set: (data: AuthUser): void => {
    localStorage.setItem("id", data.id.toString());
    localStorage.setItem("name", data.name);
    localStorage.setItem("email", data.email);
    localStorage.setItem("admin", data.admin.toString());
    localStorage.setItem("token", data.token);
  },
  clear: (): void => {
    localStorage.removeItem("id");
    localStorage.removeItem("name");
    localStorage.removeItem("email");
    localStorage.removeItem("admin");
    localStorage.removeItem("token");
  },
};

interface AuthContextType {
  user: AuthUser | null;
  login: (email: string, password: string) => Promise<void>;
  register: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
  isLoading: boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setAuthUser] = useState<AuthUser | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true); // novo estado

  useEffect(() => {
    if (userLocalStorage.check()) {
      const storedUser = userLocalStorage.get();
      setAuthUser(storedUser);
    }
    setIsLoading(false);
  }, []);

  async function login(email: string, password: string) {
    const authUser = await loginService(email, password);
    userLocalStorage.set(authUser);
    setAuthUser(authUser);
  }

  async function register(name: string, email: string, password: string) {
    await registerService(name, email, password);
  }

  function logout() {
    userLocalStorage.clear();
    setAuthUser(null);
  }

  return (
    <AuthContext.Provider value={{ user, login, register, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth(): AuthContextType {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
