import React, { useState } from "react";
import Login from "../Components/Login";
import SignUP from "../Components/SignUP";

export const Account = () => {
  const [login, setLogin] = useState(false);

  return (
    <div>
      {login ? <Login setLogin={setLogin} /> : <SignUP setLogin={setLogin} />}
    </div>
  );
};
