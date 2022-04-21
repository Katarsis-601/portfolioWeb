import github_icon from "../assets/github.svg";
import linkedin_icon from "../assets/linkedin-app.svg";
export default function Main() {
  console.log(window.innerHeight);
  return (
    <>
      <div className="profile">
        <div className="title-container">
          <h2 className="name">
            <span> Hi!</span> i'm Andriano Wijaya
          </h2>
          <p className="titleName">
            <span className="tag">Junior</span> Web Developer
          </p>
        </div>
      </div>
      <div className="contact">
        <button className="cv">
          <a>Download CV</a>
        </button>
        <img src={github_icon} />
        <img src={linkedin_icon} />
      </div>
    </>
  );
}
