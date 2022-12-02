import PropTypes from "prop-types";

export default function Input({ handleChange }) {
  return (
    <>
      <label htmlFor="feeling">How are you feeling?</label>
      <input
        id="feeling"
        type="range"
        min="0"
        max="2"
        onChange={handleChange}
        defaultValue="1"
      />
    </>
  );
}

Input.propTypes = {
  handleChange: PropTypes.func.isRequired,
};
