import React,{useState,useEffect} from "react";
import '../type.css'
import image from './produit.png'
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import axios from "axios";
import {faCirclePlus} from "@fortawesome/free-solid-svg-icons";
export default function CreateProduct(){
    const [typeProduits, setTypeProduits] = useState([]);
    const [nouveauTypeProduit, setNouveauTypeProduit] = useState('');
    //  récupérer les types de produits
    useEffect(() => {
        axios.get("http://localhost:8083/typeproduits")
            .then((response) => {
                setTypeProduits(response.data);
            })
            .catch((error) => {
                console.error("Erreur lors de la récupération des types de produits :", error);
            });
    }, []);

    const ajouterTypeProduit = () => {
        if (nouveauTypeProduit.trim() !== '') {
            setTypeProduits([...typeProduits, nouveauTypeProduit]);
            setNouveauTypeProduit('');
        }
    };

    return (
        <div className="container">
            <div className="sidebar">
                <div className="sidebar-image">
                    <img src={image} alt="Sidebar Image" />
                </div>
                <ul>
                    <li >add product</li>
                    <li>List products</li>
                </ul>
            </div>
            <div className="content">
                <h1>Create a product</h1>
                Type<select className="triangle-icon">
                    {typeProduits.map((typeProduit, index) => (
                        <option key={index} > {typeProduit.nom}
                        </option>
                    ))}
                </select>
                <span> Créer Type de Produit</span>
                <Link to="/create">

                    <FontAwesomeIcon icon={faCirclePlus} />
                </Link>
            </div>
        </div>
    );
}