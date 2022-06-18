import React from "react";
const Card = (props) => {
  const { id, name, email } = props;
  return (
    <>
      <div
        className="bg-light-green dib br3 pa3 grow ma2 bw2 shadow-5"
        key={id}
      >
        <img src={"https://robohash.org/" + id + "?size=200x200"} alt={name} />
        <h2>{name}</h2>
        <a href={"mailto:" + email}>{email}</a>
      </div>
    </>
  );
};
export default Card;
