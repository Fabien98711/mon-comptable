import { useState, type ReactNode } from "react";
import Input from "../component/form/Input";
import { Link } from "react-router-dom";
import SignIn from "./SignIn";
import Form from "../component/form/Form";

function Login() {
  const [identifiant, setIdentifiant] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const handleSubmit = () => {
    console.log(password.length, identifiant.length);
  };
  const isButtonDisabled = identifiant.length < 4 || password.length < 6;

  return (
    <Form>
      <Input
        placeHolder="identifiant"
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
      <button
        className="btn btn-primary"
        onClick={handleSubmit}
        disabled={isButtonDisabled}
      >
        se connecter
      </button>

      <p>
        Vous n'avez pas de compte?{" "}
        <Link to="/sign-in" className="text-blue-500 hover:underline">
          Inscrivez-vous
        </Link>
      </p>
    </Form>
  );
}

export default Login;
