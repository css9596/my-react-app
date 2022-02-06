import {Link, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import "../css/Detail.css"

function Detail(){
    const { id } = useParams();
    const [movieDetails, setMovieDetails] = useState([]);
    const [loading, setLoading] = useState(true);
    const getDetails = async () => {
        const json = await(
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json();
        setMovieDetails(json.data.movie);
        console.log(json.data.movie);
        setLoading(false);
    }
    useEffect(() => {
       getDetails();
    }, []);
    return (
        <div>
            {loading ? (
                    "Loading..."
                ) : (
                    <div key={movieDetails.id}
                         style={{
                             backgroundImage:
                                 `url(${movieDetails.background_image_original})`,
                         }}
                         className="backGroundImage"
                    >

                        <img src={movieDetails.large_cover_image}/>
                        <h1>{movieDetails.title_long}</h1>
                        <p>{movieDetails.description_full}</p>
                    </div>
            )}
        </div>
    );
}

export default Detail;