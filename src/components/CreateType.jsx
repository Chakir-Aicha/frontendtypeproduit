import React, {useState} from "react";
import axios from "axios";
import image from "./produit.png";
import {Link} from "react-router-dom";
import '../index.css'
import {faCirclePlus, faSave} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
export default function CreateType(){
    const [typeProduit, setTypeProduit] = useState({
        nom: '',
        caracteristiques: [],
    });
    const [nouvelleCaracteristique, setNouvelleCaracteristique] = useState({
        nom: '',
        typeDonnees: 'integer', // Par défaut, integer est sélectionné
    });
    const [ajouterCaracteristique, setAjouterCaracteristique] = useState(false);

    const handleNomChange = (e) => {
        setTypeProduit({
            ...typeProduit,
            nom: e.target.value,
        });
    };

    const handleCaracteristiqueChange = (e) => {
        if (e.target.name === "type") {
            setNouvelleCaracteristique({
                ...nouvelleCaracteristique,
                typeDonnees: e.target.value,
            });
        } else {
            setNouvelleCaracteristique({
                ...nouvelleCaracteristique,
                [e.target.name]: e.target.value,
            });
        }
    };

    const ajouterCaracteristiqueClick = () => {
        setAjouterCaracteristique(true);
    };

    const ajouterCaracteristiqueSubmit = () => {
        if (nouvelleCaracteristique.nom && nouvelleCaracteristique.typeDonnees) {
            setTypeProduit({
                ...typeProduit,
                caracteristiques: [...typeProduit.caracteristiques, nouvelleCaracteristique],
            });
            setNouvelleCaracteristique({
                nom: '',
                typeDonnees: 'Integer',
            });
            setAjouterCaracteristique(false);
        }
    };

    const handleSubmit = async () => {
        try {
            // Créez un objet de données à envoyer au serveur
            const data = {
                typeProduit:{
                    nom: typeProduit.nom
                },
                caracteristiques: typeProduit.caracteristiques,
            };
        console.log(data);
            // Effectuez une requête POST avec Axios
            const response = await axios.post('http://localhost:8083/typeproduits', data);
            console.log("response",response);
            setTypeProduit({
                nom: '',
                caracteristiques: [],
            });
        } catch (error) {
            // Gérez les erreurs ici, par exemple, affichez un message d'erreur à l'utilisateur
            console.error('Une erreur s\'est produite lors de l\'envoi des données :', error);
        }
    };

    return (
        <div className="container">
            <div className="sidebar">
                <div className="sidebar-image">
                    <img src={image} alt="Sidebar Image" />
                </div>
                <ul>
                    <Link to="/"><li>add product</li></Link>
                    <Link><li to="/list">List products</li></Link>
                </ul>
            </div>
            <div className="content">
                <h2>Create Category</h2>

            <label>Libelle:</label>
            <input type="text" value={typeProduit.nom} onChange={handleNomChange} />
            <h3>Caractéristiques:</h3>
            {ajouterCaracteristique ? (
                <div className="caracteristique">
                    <input
                        type="text"
                        placeholder="Nom de la Caractéristique"
                        name="nom"
                        value={nouvelleCaracteristique.nom}
                        onChange={handleCaracteristiqueChange}
                    />
                    <select
                        name="type"
                        value={nouvelleCaracteristique.typeDonnees}
                        onChange={handleCaracteristiqueChange}
                    >

                        <option value="integer">Entier</option>
                        <option value="float">Float</option>
                        <option value="varchar(255)">Varchar</option>
                        <option value="double">Double</option>
                        <option value="date">Date</option>
                    </select>
                    <button onClick={ajouterCaracteristiqueSubmit}>Ajouter Caractéristique <FontAwesomeIcon icon={faSave} /></button>
                </div>
            ) : (
                <button onClick={ajouterCaracteristiqueClick}>Ajouter Caractéristique<FontAwesomeIcon icon={faCirclePlus} style={{height: '20px'}}/></button>
            )}
            <ul className="liste">
                {typeProduit.caracteristiques.map((caracteristique, index) => (
                    <li key={index}>
                        {caracteristique.nom}
                    </li>
                ))}
            </ul>
            <button onClick={handleSubmit}>Submit</button>
        </div>
        </div>
    );
}