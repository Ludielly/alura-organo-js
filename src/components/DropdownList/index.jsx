import "./DropdownList.css";

const DropdownList = ({ label, items }) => {
  return (
    <div className="dropdown-list">
      <label>{label}</label>
      <select>
        {items.map((item) => (
          <option key={item}>{item}</option>
        ))}
      </select>
    </div>
  );
};

export default DropdownList;
