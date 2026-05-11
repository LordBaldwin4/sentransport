import "./Recherche.css";

function Recherche({ valeur, onChange }) {
  return (
    <div className="recherche">
      <div className="recherche-bar">
        <input
          type="text"
          className="recherche-input"
          placeholder="Rechercher une ligne (depart, arrivee)..."
          value={valeur}
          onChange={(e) => onChange(e.target.value)}
        />
        {valeur && (
          <button
            type="button"
            className="recherche-clear"
            onClick={() => onChange("")}
            aria-label="Effacer la recherche"
          >
            ×
          </button>
        )}
      </div>
    </div>
  );
}

export default Recherche;
