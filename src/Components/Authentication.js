import { useState } from "react";

export const useAuthentication = () => {
  const [auth, setAuth] = useState(
    JSON.parse(localStorage.getItem("authentication")) || false
  );
  const [name, setName] = useState(
    JSON.parse(localStorage.getItem("name")) || ""
  );

  console.log(auth);

  return [auth, name, setAuth, setName];
};
