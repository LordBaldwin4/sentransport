import "./Statistique.css";

function StatReseau({ lignes }) {
  // Calcul du nombre total de lignes
  const totalLignes = lignes.length;

  // Calcul du nombre total d'arrêts (somme)
  const totalArrets = lignes.reduce((sum, ligne) => sum + ligne.arrets, 0);

  // Calcul de la ligne avec le plus d'arrêts
  const lignePlusArrets = lignes.reduce((max, ligne) =>
    ligne.arrets > max.arrets ? ligne : max,
  );

  return (
    <div className="statistiques">
      <div className="statistique">
        <span className="statistique-chiffre">{totalLignes}</span>
        <span className="statistique-label">lignes</span>
      </div>

      <div className="statistique">
        <span className="statistique-chiffre">{totalArrets}</span>
        <span className="statistique-label">arrêts au total</span>
      </div>

      <div className="statistique">
        <span className="statistique-chiffre">
          Ligne {lignePlusArrets.numero}
        </span>
        <span className="statistique-label">
          ({lignePlusArrets.arrets} arrêts)
        </span>
      </div>
    </div>
  );
}

export default StatReseau;
