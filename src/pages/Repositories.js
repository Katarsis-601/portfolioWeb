import { useEffect, useState } from "react";
import { CardLayout, ContainerLayout } from "../components/mainComponent";
export default function Repo() {
  const [repo, setRepo] = useState([]);
  useEffect(() => {
    async function fetchApi() {
      await fetch("https://api.github.com/users/Andrian-W/repos")
        .then((data) => data.json())
        .then((value) => {
          console.log(value);
          setRepo(value);
        });
    }
    fetchApi();
  }, []);
  return (
    <ContainerLayout>
      <div className="repo">
        {repo.map((data, i) => {
          if ((data.private != "false") & (data.archived != "false")) {
            return (
              <CardLayout key={i}>
                <a href={data.html_url} target="_blank">
                  {data.name}
                </a>
                <p className="lang-project">
                  <span>Language : </span>
                  {data.language}
                </p>
              </CardLayout>
            );
          }
        })}
      </div>
    </ContainerLayout>
  );
}
