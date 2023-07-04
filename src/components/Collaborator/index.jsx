import "./Collaborator.css";
import defaultUser from "./default-image.svg";

const Collaborator = ({ primaryColor, secondaryColor, image, name, role }) => {
  const onImageError = (e) => {
    e.target.src = defaultUser;
    e.target.style.backgroundColor = secondaryColor;
  };

  return (
    <div className="collaborator">
      <div className="header" style={{backgroundColor: primaryColor}}>
        <img src={image} alt={name} onError={onImageError} />
      </div>
      <div className="footer">
        <h4 style={{ color: primaryColor }}>{name}</h4>
        <h5>{role}</h5>
      </div>
    </div>
  );
};

export default Collaborator;
