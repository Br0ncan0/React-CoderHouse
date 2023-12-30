import React, { useState } from "react";

const Counter = () => {
  const [contador, setContador] = useState(1);

  const sumar = () => {
    setContador(contador + 1);
  }

  return (
    <>
      <span class="position-absolute start-99 translate-middle badge border border-light rounded-circle bg-danger p-2" onClick={ sumar }><a class="align-bottom link-offset-2 link-underline link-underline-opacity-0 link-light">{ contador }</a><span class="visually-hidden">unread messages</span></span>
    </>
  );
}

export default Counter;