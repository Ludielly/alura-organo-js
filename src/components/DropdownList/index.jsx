import "./DropdownList.css";

const DropdownList = ({ label, items, required }) => {
  return (
    <div className="dropdown-list">
      <label>{label}</label>
      <select required={required}>
        {items.map((item) => (
          <option key={item}>{item}</option>
        ))}
      </select>
    </div>
  );
};

export default DropdownList;
