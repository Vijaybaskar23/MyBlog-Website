import { Link } from "react-router-dom";

export default function Card({ id, image, title, description, price }) {
  return (
    <div className="card">
      <div className="card-media">
        <img src={image} alt={title} />
      </div>
      <div className="card-body">
        <h3 className="card-title">{title}</h3>
        <p className="card-desc">{description}</p>
        <p className="card-price">{price}</p>

        <Link to={`/technology/${id}`} className="read-more-btn">
          Read More
        </Link>
      </div>
    </div>
  );
}
