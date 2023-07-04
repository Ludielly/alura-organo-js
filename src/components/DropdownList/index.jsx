import "./DropdownList.css";

const DropdownList = ({ label, items, required, onHandleChange, value }) => {
  return (
    <div className="dropdown-list">
      <label>{label}</label>
      <select
        onChange={(e) => onHandleChange(e.target.value)}
        required={required}
        value={value}
      >
        <option value="">-</option>
        {items.map((item) => (
          <option key={item}>{item}</option>
        ))}
      </select>
    </div>
  );
};

export default DropdownList;
