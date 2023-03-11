import React from "react";

const UserPres = ({nombre, apellido}) => {
  return (
    <div>
      <h2>{nombre}</h2>
      <h3>{apellido}</h3>
    </div>
  );
};

export default UserPres;
