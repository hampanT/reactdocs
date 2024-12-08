import React from "react";
import { Link } from "react-router-dom";


export const Navbar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/describing-the-ui"> Describing the UI </Link>
                </li>
                <li>
                    <Link to="/adding-interactivity"> Adding Interactivity </Link>
                </li>
                <li>
                    <Link to="/managing-state"> Managing State </Link>
                </li>
                <li>
                    <Link to="/escape-hatches"> Escape Hatches </Link>
                </li>
            </ul>
        </nav>
    )
}