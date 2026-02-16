import { useState } from "react";

import Input from "../component/form/Input";
import Form from "../component/form/Form";
import { Link } from "react-router-dom";

function SignIn() {
  const [mail, setMail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  return (
    <Form>
      <Input
        placeHolder="mail"
        type="email"
        value={mail}
        onChange={(e) => setMail(e.target.value)}
      ></Input>
      <Input
        placeHolder="mot de passe"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      ></Input>
      <Input
        placeHolder="confirmer le mot de passe"
        type="password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      ></Input>

      <p>
        Vous déjà un compte?{" "}
        <Link to="/" className="text-blue-500 hover:underline">
          Connectez-vous
        </Link>
      </p>
    </Form>
  );
}

export default SignIn;
