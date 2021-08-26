import React from 'react'
import Card from '../Card/Card'
import movies from '../../movieList.json'

// const movie=
// {
//     "adult": false,
//     "backdrop_path": "/pcDc2WJAYGJTTvRSEIpRZwM3Ola.jpg",
//     "genre_ids": [28, 12, 878, 14],
//     "id": 791373,
//     "original_language": "en",
//     "original_title": "Zack Snyder's Justice League",
//     "overview": "Determined to ensure Superman's ultimate sacrifice was not in vain, Bruce Wayne aligns forces with Diana Prince with plans to recruit a team of metahumans to protect the world from an approaching threat of catastrophic proportions.",
//     "popularity": 2190.931,
//     "poster_path": "/tnAuB8q5vv7Ax9UAEje5Xi4BXik.jpg",
//     "release_date": "2021-03-18",
//     "title": "Zack Snyder's Justice League",
//     "video": false,
//     "vote_average": 8.8,
//     "vote_count": 1837
//   }

function Cards() {
    console.log(movies)
    const moviesFilter=movies.filter(movie=>movie.genre_ids.includes(28))
    return (
        <>
        { moviesFilter.map((movie, index) => <Card props={movie} key={index}/>)}
       
        
        </>
    )
}

export default Cards
