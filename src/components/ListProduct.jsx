import image from "./produit.png";
import {Link} from "react-router-dom";
import React, {useEffect, useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFolder} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
export default function ListProduct(){
    const [typeProduits, setTypeProduits] = useState([]);
    const [typeSelectionne, setTypeSelectionne] = useState("");

    //  récupérer les types de produits
    useEffect(() => {
        axios
            .get("http://localhost:8083/typeproduits")
            .then((response) => {
                setTypeProduits(response.data);
            })
            .catch((error) => {
                console.error("Erreur lors de la récupération des types de produits :", error);
            });
    }, []);


    const handleTypeSelection = (e) => {
        setTypeSelectionne(e.target.value); // Mettre à jour le type sélectionné
    };
    return (
        <div className="container">
            <div className="sidebar">
                <div className="sidebar-image">
                    <img src={image} alt="Sidebar Image" />
                </div>
                <ul>
                    <Link to="/"><li>add product</li></Link>
                    <Link to="/list"><li>List products</li></Link>
                </ul>
            </div>
            <div className="content">
                <h2>Liste des produits</h2>
                <div>
                    <label>Category :</label>
                    <select className="triangle-icon" onChange={handleTypeSelection}>
                        <option> <FontAwesomeIcon icon={faFolder} />Toutes les catégories</option>
                        {typeProduits.map((typeProduit, index) => (
                            <option key={index}>{typeProduit.nom}</option>
                        ))}
                    </select>
                </div>
            </div>
         </div>
         );
}