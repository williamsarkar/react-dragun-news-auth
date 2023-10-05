import { Link } from "react-router-dom";


const NewsCard = ({ news }) => {

    const {_id, title, image_url, thumbnail_url, details } = news;


    return (
        <div className="card bg-base-100 shadow-xl">
            <figure><img className="" src={image_url} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                {
                    details.length > 200 ?
                        <p>{details.slice(0, 200)} <Link to={`/news/${_id}`} className="text-green-700 font-medium">Read more...</Link></p> :
                        <p>{details}</p>
                     
                        // to={`/news/${_id}`}

                }

            </div>
        </div>
    );
};

export default NewsCard;