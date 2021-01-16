import PropTypes from 'prop-types';

const InputField = (props) => {
  const { type, name, label, value, onChange } = props;
  return (
    <div className="input-container">
      <input
        onChange={onChange}
        type={type}
        name={name}
        value={value}
        className="form-input"
      />
      {label && (
        <label
          className={`form-input-label ${value.length ? 'shrink' : ''}`}
          htmlFor={name}
        >
          {label}
        </label>
      )}
    </div>
  );
};

export default InputField;

InputField.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

InputField.defaultProps = {
  label: '',
  onChange: null,
  value: '',
};
