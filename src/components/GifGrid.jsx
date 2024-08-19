import { useEffect, useState } from "react";
import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGits";
import { PropTypes } from 'prop-types';


export const GifGrid = ({ category }) => {

    const { images, isLoading } = useFetchGifs(category);

    return (
        <>
            {
              isLoading && (<h2>Loading...</h2>)
            }
            <div className="card-grid">
                {
                    images.map(image => (
                        <GifItem
                            key={image.id}
                            {...image}
                        />
                    ))
                }
            </div>
        </>
    )
}


GifGrid.propTypes = {
    category: PropTypes.string.isRequired,
}