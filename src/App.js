import "./App.css";
import Footer from "./Footer";
import Header from "./Header";
import ListeLignes from "./ListeLignes";
import StatReseau from "./StatReseau";

function App() {
  const lignes = [
    {
      id: 1,
      numero: "1",
      depart: "Parcelles Assainies",
      arrivee: "Plateau",
      arrets: 14,
      couleur: "#e74c3c",
    },
    {
      id: 2,
      numero: "7",
      depart: "Guediawaye",
      arrivee: "Place Obélisque",
      arrets: 18,
      couleur: "#3498db",
    },
    {
      id: 3,
      numero: "15",
      depart: "Pikine",
      arrivee: "Medina",
      arrets: 12,
      couleur: "#2ecc71",
    },
    {
      id: 4,
      numero: "23",
      depart: "Ouakam",
      arrivee: "Grand Dakar",
      arrets: 10,
      couleur: "#f1c40f",
    },
    {
      id: 5,
      numero: "8",
      depart: "Almadies",
      arrivee: "Colobane",
      arrets: 16,
      couleur: "#9b59b6",
    },
    {
      id: 6,
      numero: "12",
      depart: "Yoff",
      arrivee: "Sandaga",
      arrets: 11,
      couleur: "#e67e22",
    },
    {
      id: 7,
      numero: "3",
      depart: "Fann",
      arrivee: "Liberté",
      arrets: 8,
      couleur: "#1abc9c",
    },
    {
      id: 8,
      numero: "18",
      depart: "HLM",
      arrivee: "Dieuppeul",
      arrets: 9,
      couleur: "#e91e63",
    },
    {
      id: 9,
      numero: "21",
      depart: "Sicap",
      arrivee: "Medina",
      arrets: 13,
      couleur: "#00bcd4",
    },
    {
      id: 10,
      numero: "5",
      depart: "Liberté 6",
      arrivee: "Plateau",
      arrets: 7,
      couleur: "#ff5722",
    },
  ];

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

        <ListeLignes lignes={lignes} />
      </main>

      <Footer />
    </div>
  );
}

export default App;
