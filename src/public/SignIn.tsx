import { useEffect, useState } from "react";

import Input from "../component/form/Input";
import Form from "../component/form/Form";
import { Link } from "react-router-dom";
import { createClient } from "@supabase/supabase-js";
import supabase from "../utils/supabase";

function SignIn() {
  const handleSubmit = async () => {
    const { data, error } = await supabase.auth.signUp({
      email: mail,
      password: password,
    });
  };
  const [mail, setMail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  return (
    <Form>
      <p>Créer un nouveau compte</p>

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
      <button className="btn btn-primary btn-wide" onClick={handleSubmit}>
        S'inscrire
      </button>
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
