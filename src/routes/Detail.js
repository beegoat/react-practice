import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function Detail(){
    const [loading, setLoading] = useState(true);
    const [info, setInfo] = useState();
    const { id } = useParams();

    const getMovie = async () => {
      const json = await (
        await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
      ).json();
      setInfo(json.data.movie);
      setLoading(false);
      
    };

    useEffect(() => {
      getMovie();
    }, []);

    return(
        <div>
            {loading? (<h1> Loading .... </h1>) : 
            (
                <div>
                    <img src={info.medium_cover_image} />
                    <h1>{info.title}</h1>
                    <span>{info.genres}</span>
                    <span>{info.rating}</span>
                    <p>{info.description_full}</p>
                    <Link to="/">Home</Link>
                </div>
            )
            
            }
        </div>

    )
}


export default Detail;