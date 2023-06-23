import "./InputText.css";

const InputText = ({ label, placeholder }) => {
  return (
    <div className="input-text">
      <label>{label}</label>
      <input placeholder={placeholder} />
    </div>
  );
};

export default InputText;
