import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import logo from '../src/assets/img/gif-file.png';
import { GifGrid } from './components/GifGrid';

export const GifExpert = () => {
    const [category, setCategory] = useState('');

    const onAddCategory = (newCategory) => {
        if (category === newCategory) return;
        setCategory(newCategory);
    }

    return (
        <div className="container">
            <img src={logo} alt="logo" className="logo" />
            <h1>Gif Expert <span>APP</span></h1>

            <AddCategory onNewCategory={onAddCategory} />

            <div className="gif-container">
                {category && <GifGrid key={category} category={category} />}
            </div>
        </div>
    );
}
