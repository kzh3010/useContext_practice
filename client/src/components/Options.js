import React from "react";

export const Options = ({ name }) => {
  return (
    <form>
      <input type="checkbox" id={`${name} option`} />{" "}
      <label htmlFor={`${name} option`}>{name}</label>
    </form>
  );
};
