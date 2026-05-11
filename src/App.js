import { useState } from "react";
import "./App.css";

import DetailLigne from "./DetailLigne";
import Footer from "./Footer";
import Header from "./Header";
import LigneBus from "./LigneBus";
import Recherche from "./Recherche";
import StatReseau from "./StatReseau";

function App() {
  const [recherche, setRecherche] = useState("");
  const [ligneSelectionnee, setLigneSelectionnee] = useState(null);
  const [recherches, setRecherches] = useState(0);

  const lignes = [
    {
      id: 1,
      numero: "1",
      depart: "Parcelles Assainies",
      arrivee: "Plateau",
      arrets: 14,
      couleur: "#e74c3c",
      listeArrets: [
        "Parcelles U14",
        "Parcelles U10",
        "Camberene",
        "Patte d'Oie",
        "Grand Dakar",
        "Colobane",
        "Ponty",
        "Plateau",
      ],
    },
    {
      id: 2,
      numero: "7",
      depart: "Guediawaye",
      arrivee: "Place Obélisque",
      arrets: 18,
      couleur: "#3498db",
      listeArrets: [
        "Guediawaye",
        "Pikine",
        "Thiaroye",
        "Keur Massar",
        "Grand Yoff",
        "Parcelles",
        "Liberte 6",
        "Place Obélisque",
      ],
    },
    {
      id: 3,
      numero: "15",
      depart: "Pikine",
      arrivee: "Medina",
      arrets: 12,
      couleur: "#2ecc71",
      listeArrets: [
        "Pikine Centre",
        "Thiaroye Gare",
        "Hann",
        "Colobane",
        "Fass",
        "Medina",
      ],
    },
    {
      id: 4,
      numero: "23",
      depart: "Ouakam",
      arrivee: "Grand Dakar",
      arrets: 10,
      couleur: "#f1c40f",
      listeArrets: [
        "Ouakam Village",
        "Mermoz",
        "Fann",
        "Point E",
        "Liberte 5",
        "Grand Dakar",
      ],
    },
    {
      id: 5,
      numero: "8",
      depart: "Almadies",
      arrivee: "Colobane",
      arrets: 16,
      couleur: "#9b59b6",
      listeArrets: [
        "Almadies",
        "Ngor",
        "Yoff",
        "Ouest Foire",
        "Liberte 6",
        "Colobane",
      ],
    },
    {
      id: 6,
      numero: "12",
      depart: "Yoff",
      arrivee: "Sandaga",
      arrets: 11,
      couleur: "#e67e22",
      listeArrets: [
        "Yoff Village",
        "Aeroport LSS",
        "Parcelles U17",
        "Grand Yoff",
        "HLM",
        "Sandaga",
      ],
    },
    {
      id: 7,
      numero: "3",
      depart: "Fann",
      arrivee: "Thiaroye",
      arrets: 9,
      couleur: "#1abc9c",
      listeArrets: [
        "Fann Residence",
        "Fann Urbain",
        "Point E",
        "Liberte 5",
        "Liberte 6",
        "Thiaroye",
      ],
    },
    {
      id: 8,
      numero: "14",
      depart: "HLM",
      arrivee: "Plateau",
      arrets: 13,
      couleur: "#34495e",
      listeArrets: [
        "HLM Zone A",
        "HLM Zone B",
        "Patte d'Oie",
        "Grand Dakar",
        "Colobane",
        "Plateau",
      ],
    },
    {
      id: 9,
      numero: "25",
      depart: "Sicap",
      arrivee: "Guediawaye",
      arrets: 15,
      couleur: "#c0392b",
      listeArrets: [
        "Sicap Liberte",
        "Sicap Baobab",
        "Liberte 6",
        "Parcelles",
        "Pikine",
        "Guediawaye",
      ],
    },
    {
      id: 10,
      numero: "6",
      depart: "Liberté 6",
      arrivee: "Dakar Port",
      arrets: 8,
      couleur: "#16a085",
      listeArrets: [
        "Liberte 6 Centre",
        "Liberte 5",
        "Fann",
        "Plateau",
        "Dakar Port",
      ],
    },
  ];

  const handleRechercheChange = (valeur) => {
    setRecherche(valeur);
    setRecherches((prev) => prev + 1);
  };

  // 🔍 FILTRE RECHERCHE
  const lignesFiltrees = lignes.filter(
    (l) =>
      l.depart.toLowerCase().includes(recherche.toLowerCase()) ||
      l.arrivee.toLowerCase().includes(recherche.toLowerCase()) ||
      l.numero.includes(recherche),
  );

  // 🖱️ SELECTION LIGNE
  function handleClickLigne(ligne) {
    if (ligneSelectionnee && ligneSelectionnee.id === ligne.id) {
      setLigneSelectionnee(null);
    } else {
      setLigneSelectionnee(ligne);
    }
  }

  return (
    <div className="App">
      <Header />

      <main className="contenu">
        <p>
          Bienvenue ! Cette application vous aide à trouver votre ligne de bus à
          Dakar.
        </p>

        <h2>Le réseau DDD en chiffres</h2>
        <StatReseau lignes={lignes} />

        <p className="compteur-recherche">
          Vous avez effectué {recherches} recherche{recherches !== 1 ? "s" : ""}
          .
        </p>

        {/* 🔎 RECHERCHE */}
        <Recherche valeur={recherche} onChange={handleRechercheChange} />

        {/* 📊 RESULTATS */}
        {recherche && (
          <p className="resultat-recherche">
            {lignesFiltrees.length > 0
              ? `${lignesFiltrees.length} ligne${lignesFiltrees.length !== 1 ? "s" : ""} trouvée${lignesFiltrees.length !== 1 ? "s" : ""}`
              : "Aucune ligne trouvée"}
          </p>
        )}

        {/* 🚍 LISTE FILTRÉE */}
        {lignesFiltrees.map((ligne) => (
          <LigneBus
            key={ligne.id}
            numero={ligne.numero}
            depart={ligne.depart}
            arrivee={ligne.arrivee}
            arrets={ligne.arrets}
            couleur={ligne.couleur}
            estSelectionnee={
              ligneSelectionnee && ligneSelectionnee.id === ligne.id
            }
            onClick={() => handleClickLigne(ligne)}
          />
        ))}

        {/* 📍 DETAIL */}
        {ligneSelectionnee && <DetailLigne ligne={ligneSelectionnee} />}
      </main>

      <Footer />
    </div>
  );
}

export default App;
