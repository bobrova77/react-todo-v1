// 7.1 Create Reusable Input with Label Component. Declare and export a new functional React component named InputWithLabel
// 7.2 Move label and input JSX from AddTodoForm.jsx to InputWithLabel.jsx
// 7.3 Reuse this "Input with Label" in a different form? The "Label" is hard-coded as "Title" which isn't very reusable
// 7.6 Refactor Input with Label to use Component Composition
// 7.11 Add Auto-Focus to Input
// 7.12 The input element is focused on every render

// import React from "react";
// 7.17
import React, { useRef, useEffect } from "react";
import PropTypes from "prop-types";

// const InputWithLabel = ({
//   id,
//   value,
//   type = "text",
//   onInputChange,
//   children,
// }) => {
// 7.4 Replace the text inside the label element with a new props variable named label
// const InputWithLabel = ({ id, value, type = "text", onInputChange, label }) => {
// 7.7 Replace label prop with children so that any child node(s) are used as the label text
const InputWithLabel = ({
  id,
  value,
  type = "text",
  onInputChange,
  children,
}) => {
  // Step 13: Create a ref for the input element
  const inputRef = useRef(null);
  // Step 14: Focus the input on every render
  useEffect(() => {
    inputRef.current.focus();
  }, []);
  return (
    <>
      {/* <label htmlFor={id}>{children}</label> */}
      {/* 7.4 Replace the text inside the label element with a new props variable named label */}
      {/* <label htmlFor={id}>{label}</label> */}
      {/* 7.8 Replace label prop with children so that any child node(s) are used as the label text */}
      <label htmlFor={id}>{children}</label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={onInputChange}
        // {/* autoFocus // 7.11 Adds focus to this input on page load */}
        // {/* 7.15 remove autoFocus */}
        ref={inputRef} // 7.16 Attach the ref to the input
      />
    </>
  );
};

// Define PropTypes
InputWithLabel.propTypes = {
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  type: PropTypes.string,
  onInputChange: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};
export default InputWithLabel;
