import image from "./produit.png";
import {Link} from "react-router-dom";
import React from "react";
export default function ListProduct(){
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
            </div>
         </div>
         );
}