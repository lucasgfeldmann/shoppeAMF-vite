import {
  createContext,
  useContext,
  useState,
  type ReactNode,
  useEffect,
  type FC,
} from "react";
import { login as loginService, register as registerService } from "../services/auth";

interface AuthContextType {
  token: string | null;
  login: (email: string, password: string) => Promise<void>;
  register: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
}

// 1) Cria o contexto sem precisar forçar com “as”
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// 2) Define o provider como um React.FC (retorna JSX.Element por padrão)
export const AuthProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    const saved = localStorage.getItem("token");
    console.log("LOCAL STORAGE")
    console.log(saved)
    if (saved) setToken(saved);
  }, [token]);

  async function login(email: string, password: string) {
    const t = await loginService(email, password);
    setToken(t);
    localStorage.setItem("token", t);
  }

  async function register(name: string, email: string, password: string) {
    await registerService(name, email, password);
  }

  function logout() {
    setToken(null);
    localStorage.removeItem("token");
  }

  console.log("TOKEN")
  console.log(token)

  return (
    <AuthContext.Provider value={{ token, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// 3) Hook que garante que você use o contexto dentro de um AuthProvider
export function useAuth(): AuthContextType {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
