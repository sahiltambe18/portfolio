import "./toggle.css";

const Toggle = () => {
  return (
    <div className="wrapper absolute left-2 top-2">
      <input type="checkbox" name="checkbox" className="switch" />
    </div>
  );
};

export default Toggle;
