import { useState } from "react"
import { AddCategory } from "./components/AddCategory";
import logo from '../src/assets/img/gif-file.png';
import { GifGrid } from './components/GifGrid';


export const GifExpert = () => {

    const [categories, setCategories] = useState([]);

    // const capitalizeLetters = (category) => {
    //     const firstLetter = category.substring(0, 1).toUpperCase();
    //     const restOfLetters = category.slice(1, category.length);
    //     return firstLetter + restOfLetters;
    // }

    const onAddCategory = (newCategory) => {
        if (categories.includes(newCategory)) return;

        setCategories([...categories, newCategory]);
    }

    return (
        <>
            <div className="container">
                <img src={logo} alt="logo" className="logo" />
                <h1>Gif Expert  <span>APP</span></h1>

                <AddCategory
                    onNewCategory={onAddCategory}

                />

                {
                    categories.map((category) => (
                        <GifGrid
                            key={category}
                            category={category} />
                    ))
                }

            </div>

        </>
    )
}