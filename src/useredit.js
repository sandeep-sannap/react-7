import React from "react";

export default function Useredit(props) {
  console.log({ props });
  return (
    <div>
      <h1>Useredit{props.match.params.id}</h1>
    </div>
  );
}
