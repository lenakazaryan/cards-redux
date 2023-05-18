import "./style.css";

const Card = ({ id, title }) => {
  return (
    <div className="card">
      <h3>Title:</h3>
      <p>{title}</p>
    </div>
  );
};

export default Card;
