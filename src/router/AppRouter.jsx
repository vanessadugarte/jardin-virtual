import {Navigate, Route, Routes} from "react-router-dom";
import HomePage from "../components/home/HomePage.jsx";
import CategoriesPage from "../components/categories/CategoriesPage.jsx";
import AboutPage from "../components/about/AboutPage.jsx";

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