import {Navigate, Route, Routes} from "react-router-dom";
import HomePage from "../pages/HomePage.jsx";
import CategoriesPage from "../pages/CategoriesPage.jsx";
import AboutPage from "../pages/AboutPage.jsx";

export const AppRouter = () => {

    return (
        <>
        <Routes>
            <Route path="home" element={<HomePage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="categories" element={<CategoriesPage />} />
            <Route path="/" element={<Navigate to="home" />} />

        </Routes>
        </>
    )
}