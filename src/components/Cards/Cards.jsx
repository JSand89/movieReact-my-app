import React from 'react'
import Card from '../Card/Card'
import movies from '../../movieList.json'

function Cards() {
    console.log(movies)
    return (
        <>
        {movies.map((m)=> <Card/>)}
        </>
    )
}

export default Cards
