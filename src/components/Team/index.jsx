import Collaborator from "../Collaborator";
import "./Team.css";

const Team = ({ name, collaborators, primaryColor, secondaryColor }) => {
  return (
    collaborators.length > 0 && (
      <section className="team" style={{ backgroundColor: secondaryColor }}>
        <h3 style={{ borderColor: primaryColor, color: primaryColor }}>
          {name}
        </h3>
        <div className="collaborators">
          {collaborators.map((collaborator) => (
            <Collaborator
              primaryColor={primaryColor}
              secondaryColor={secondaryColor}
              key={collaborator.name}
              image={collaborator.image}
              name={collaborator.name}
              role={collaborator.role}
            />
          ))}
        </div>
      </section>
    )
  );
};

export default Team;
