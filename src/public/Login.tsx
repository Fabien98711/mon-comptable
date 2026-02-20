import { useState } from "react";
import Input from "../component/form/Input";
import { Link } from "react-router-dom";

import Form from "../component/form/Form";
import supabase from "../utils/supabase";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [identifiant, setIdentifiant] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const handleSubmit = async () => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: identifiant,
      password: password,
    });
    if (error) {
      console.log("impossible de se connecter");
    } else {
      navigate("/dashboard");
    }
  };
  const isButtonDisabled = identifiant.length < 4 || password.length < 6;

  return (
    <Form>
      <Input
        placeHolder="email"
        type="email"
        value={identifiant}
        onChange={(e) => setIdentifiant(e.target.value)}
      ></Input>
      <Input
        placeHolder="mot de passe"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      ></Input>
      <p>
        <Link to="/sign-in" className="text-blue-500 hover:underline">
          Mot de passe oublié?
        </Link>
      </p>
      <button
        className="btn btn-primary"
        onClick={handleSubmit}
        disabled={isButtonDisabled}
      >
        se connecter
      </button>

      <p>
        Pas encore de compte?{" "}
        <Link to="/sign-in" className="text-blue-500 hover:underline">
          Créez un compte
        </Link>
      </p>
    </Form>
  );
}

export default Login;
