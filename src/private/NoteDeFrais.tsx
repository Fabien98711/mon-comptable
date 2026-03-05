import { useEffect, useState } from "react";
import Input from "../component/form/Input";
import Title from "../component/Title";
import supabase from "../utils/supabase";
import { Form } from "react-router-dom";

function NoteDeFrais() {
  const mois = [
    "janvier",
    "février",
    "mars",
    "avril",
    "mai",
    "juin",
    "juillet",
    "août",
    "septembre",
    "octobre",
    "novembre",
    "decembre",
  ];

  const categorie = ["restauration", "essence", "materiel", "formation"];

  const [userId, setUserId] = useState<string | null>(null);

  const date = new Date().toISOString();

  useEffect(() => {
    const CkeckSession = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      setUserId(user?.id ?? "");
    };
    CkeckSession();
  }, []);

  const [description, setDescription] = useState<string>("");
  const [montant, setMontant] = useState<string>("");
  const [moisSelectionne, setMoisSelectionne] = useState<string>("janvier");
  const [categorieSelectionnee, setCategorieSelectionnee] =
    useState<string>("restauration");
  const [justificatif, setJustificatif] = useState<File | null>(null);
  const [tableauFacture, setTableauFacture] = useState<[]>([]);
  const handleSubmit = async () => {
    const { data, error } = await supabase.from("factures").insert({
      title: description,
      created_at: date,
      montant: montant,
      user_id: userId,
    });
    if (error) {
      console.log("erreur", error);
    } else {
      console.log("facture ajoutée", data);
    }
  };

  return (
    <div>
      <Title>note de frais</Title>
      <div className="flex justify-center ">
        <div className=" w-3/4 flex-col gap-4 bg-base-200 p-8 rounded-2xl">
          <div className="flex gap-4">
            <Input
              placeHolder="nouvelle facture..."
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></Input>

            <Input
              placeHolder="montant..."
              type="text"
              value={montant}
              onChange={(e) => setMontant(e.target.value)}
            ></Input>

            <select
              className="select w-full"
              value={categorieSelectionnee}
              onChange={(e) => setCategorieSelectionnee(e.target.value)}
            >
              {categorie.map((w) => (
                <option>{w}</option>
              ))}
            </select>
            <select
              className="select w-full"
              value={moisSelectionne}
              onChange={(e) => setMoisSelectionne(e.target.value)}
            >
              {mois.map((w) => (
                <option>{w}</option>
              ))}
            </select>
            <Input
              placeHolder=""
              type="file"
              value=""
              onChange={(e) => setJustificatif(e.target.files?.[0] ?? null)}
              accept="image/*"
            ></Input>

            <button className="btn btn-primary" onClick={handleSubmit}>
              ajouter
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NoteDeFrais;
