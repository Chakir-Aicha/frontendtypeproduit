import React,{useState,useEffect} from "react";
import '../type.css'
import image from './produit.png'
import {Link} from "react-router-dom";
import axios from "axios";
export default function CreateProduct(){
    const [typeProduits, setTypeProduits] = useState([]);
    const [nouveauTypeProduit, setNouveauTypeProduit] = useState('');
    // Utilisez useEffect pour récupérer les types de produits depuis l'API backend
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
                <select>
                    {typeProduits.map((typeProduit, index) => (
                        <option key={index} className="triangle-icon"> {typeProduit.nom}
                        </option>
                    ))}
                </select>
                <Link to="/create">Ajouter un type de produit</Link>
            </div>
        </div>
    );
}