import Login from "./public/Login";
import SignIn from "./public/SignIn";

import supabase from "./utils/supabase";
import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import { useEffect, useState } from "react";
import Dashboard from "./private/Dashboard";
import NoteDeFrais from "./private/NoteDeFrais";
function ProtectedRoute() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

  useEffect(() => {
    const CkeckSession = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      setIsAuthenticated(!!user);
      console.log(user.id);
    };
    CkeckSession();
  }, []);

  if (isAuthenticated === null) {
    return <div>chargement...</div>;
  }
  if (!isAuthenticated) {
    return <Navigate to="/" />;
  }

  return <Outlet></Outlet>;
}

type User = {
  id: string;
  last_name: string; // ← snake_case comme dans ta table
  first_name: string;
  email: string; // ← null car tu n'as pas renseigné l'email
  phone: string | null;
  password: string;
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/sign-in",
    element: <SignIn />,
  },
  {
    element: <ProtectedRoute />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/note-de-frais",
        element: <NoteDeFrais />,
      },
    ],
  },
]);

function App() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const { data, error } = await supabase.from("user").select("*");
      if (error) {
        console.log("erreur lors de la connexion à la base de données", error);
      } else {
        setUsers(data);
      }
    };
    fetchUsers();
  }, []);

  console.log(users);

  return (
    <div>
      {users.map((user) => (
        <div key={user.id}>
          {user.first_name} {user.last_name} - {user.phone}
        </div>
      ))}
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
