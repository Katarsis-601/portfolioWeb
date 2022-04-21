import React from "react";
import { ContainerLayout } from "./component";
export default function Repo() {
  React.useEffect(() => {
    const fetchApi = async () => {
      const API = "https://api.github.com/users/Andrian-W/repos";
      const fetchApi = await fetch(API).then((data) => data.json());
    };
    fetchApi();
  }, []);
  return (
    <ContainerLayout>
      <p>tes</p>
    </ContainerLayout>
  );
}
