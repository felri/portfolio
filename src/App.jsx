import { useState } from "react";
import Background from "./components/background";
import { ClipboardMessage } from "./components/utils";
import CV from "./components/cv";
import { TypeAnimation } from "react-type-animation";
import {
  GithubOutlined,
  LinkedinOutlined,
  MailOutlined,
} from "@ant-design/icons";
import "./App.css";

const Link = ({ href, children }) => (
  <a href={href} target="_blank" rel="noreferrer">
    {children}
  </a>
);

function App() {
  const [showCv, setShowCv] = useState(false);

  const handleShowCv = () => {
    setShowCv(true);
  };

  const handleHideCv = () => {
    setShowCv(false);
  };

  return (
    <div className="App">
      <div className="container-typing">
        <TypeAnimation
          sequence={["Hi", 1500, "I'm Felipe,"]}
          wrapper="div"
          cursor={false}
          className="typing"
        />
        <TypeAnimation
          sequence={[
            3500,
            "I'm a Software Developer",
            2500,
            "Let's build something together!",
          ]}
          deletionSpeed={100}
          wrapper="div"
          cursor={false}
          className="typing"
        />
      </div>
      <div className="container-icons">
        <Link href="https://github.com/felri">
          <GithubOutlined className="icon" viewBox="0 0 1024 1024" />
        </Link>
        <Link href="https://www.linkedin.com/in/frcm/">
          <LinkedinOutlined className="icon" />
        </Link>
        <ClipboardMessage text="https://github.com/felri">
          <MailOutlined className="icon" />
        </ClipboardMessage>
        <div className="modal-action" onClick={handleShowCv}>
          <span className="icon">CV</span>
        </div>
      </div>
      <CV
        show={showCv}
        handleShowCv={handleShowCv}
        handleHideCv={handleHideCv}
      />
    </div>
  );
}

function AppWrapper() {
  return (
    <>
      <Background />
      <App />
    </>
  );
}

export default AppWrapper;
