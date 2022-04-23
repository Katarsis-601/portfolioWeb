import { CardLayout, ContainerLayout } from "../components/mainComponent";
import html from "../assets/html.svg";
import css from "../assets/css.svg";
import nodejs from "../assets/node-js.svg";
import js from "../assets/js.svg";
import sass from "../assets/sass.svg";
import python from "../assets/python.svg";
import ps from "../assets/ps.svg";
import react from "../assets/react-js.svg";

export default function Skills() {
  return (
    <ContainerLayout>
      <div className="skills">
        <CardLayout>
          <img src={html} alt="html" />
          <p>HTML</p>
        </CardLayout>
        <CardLayout>
          <img src={css} alt="css" />
          <p>CSS3</p>
        </CardLayout>
        <CardLayout>
          <img src={nodejs} alt="html" />
          <p>NodeJs</p>
        </CardLayout>
        <CardLayout>
          <img src={sass} alt="html" />
          <p>Sass</p>
        </CardLayout>
        <CardLayout>
          <img src={react} alt="html" />
          <p>ReactJs</p>
        </CardLayout>
        <CardLayout>
          <img src={js} alt="js" />
          <p>JavaScript</p>
        </CardLayout>
        <CardLayout>
          <img src={ps} alt="photosop" />
          <p>Photosop</p>
        </CardLayout>
        <CardLayout>
          <img src={python} alt="python" />
          <p>Python</p>
        </CardLayout>
      </div>
    </ContainerLayout>
  );
}
