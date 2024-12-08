import React from "react"
import { Link, Outlet } from "react-router-dom"


export const DescribingTheUI = () => {
    return (
        <div>
            <h2> Describing the UI </h2>
            <nav>
                <ul>
                    <li>
                        <Link to="your-first-component"> Your First Component </Link>
                    </li>
                    <li>
                        <Link to="import-export-component"> Import and Export Components </Link>
                    </li>
                </ul>
            </nav>
            <Outlet/>
        </div>
    )
}