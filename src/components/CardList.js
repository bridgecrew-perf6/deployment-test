import React from "react";
import Card from "./Card";
const CardList = ({ robots }) => {
  return (
    <>
      {robots.map((user, i) => {
        return (
          <Card
            id={robots[i].id}
            name={robots[i].name}
            email={robots[i].email}
            key={"card_" + i}
          />
        );
      })}
    </>
  );
};
export default CardList;
