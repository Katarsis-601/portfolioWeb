import github_icon from "../assets/github.svg";
import linkedin_icon from "../assets/linkedin-app.svg";
import gmail_icon from "../assets/gmail.png";
import { ContainerLayout } from "../components/mainComponent";
import profile from "../assets/profile-img.png";
export default function Main() {
  return (
    <>
      <ContainerLayout>
        <div className="profile">
          <div className="title-container">
            <h2 className="name">
              <span> Hi!</span> i'm Andriano Wijaya
            </h2>
            <p className="titleName">
              <span className="tag">Junior</span> Web Developer
            </p>
          </div>
          <img src={profile} className="profile-img" />
        </div>
        <div className="contact">
          <button className="cv">
            <a>Download CV</a>
          </button>
          <a target="_blank" href="https://github.com/Andrian-W">
            <img src={github_icon} alt="github icon" />
          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/andriano-wijaya-4a401a218/?trk=public_profile_browsemap&originalSubdomain=id"
          >
            <img src={linkedin_icon} alt="linkedin icon" />
          </a>
          <a target="_blank" href="mailto:andrianow817@gmail.com">
            <img src={gmail_icon} alt="gmail icon" className="gmail_icon" />
          </a>
        </div>
      </ContainerLayout>
    </>
  );
}
