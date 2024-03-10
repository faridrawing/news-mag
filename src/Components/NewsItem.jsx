import image from "../assets/news.jpeg";
const NewsItem = ({ title, description, src, url }) => {
  return (
    <div className="card bg-dark text-light m-2 d-inline-block p-1" style={{ maxWidth: "16rem" }}>
      <img src={src ? src : image} style={{ height: "10rem", objectFit: "cover" }} className="card-img-top" alt={title} />
      <div className="card-body">
        <h5 className="card-title">{title.slice(0, 50)}</h5>
        <p className="card-text">{description ? description.slice(0, 90) : "Cool news here"}</p>
        <a href={url} className="btn btn-primary">
          Read More
        </a>
      </div>
    </div>
  );
};

export default NewsItem;
