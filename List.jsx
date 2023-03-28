import React from "react";
import Card from "./Card";

function List(props) {
  const users = props.users;
  return (
    <div className="containerList">
      {users.map((user) => (
        <Card
          key={user.id}
          name={user.name}
          job={user.job}
          hobby={user.hobby}
        />
      ))}
    </div>
  );
}

export default List;
