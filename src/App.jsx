import { useState } from "react";
import reactLogo from "./assets/react.svg";
import Background from "./components/background";
import { TypeAnimation } from "react-type-animation";
import {
  GithubOutlined,
  LinkedinOutlined,
  MailOutlined,
  FilePdfOutlined,
} from "@ant-design/icons";
import "./App.css";

const Link = ({ href, children }) => (
  <a href={href} target="_blank" rel="noreferrer">
    {children}
  </a>
);

function ClipboardMessage({ text, children }) {
  const [showMessage, setShowMessage] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    setShowMessage(true);
    setTimeout(() => {
      setShowMessage(false);
    }, 1000);
  };

  return (
    <>
      <button onClick={handleCopy}>{children}</button>
      {showMessage && <div className="clipboard-message show">copied</div>}
    </>
  );
}
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div className="container-typing">
        <TypeAnimation
          sequence={[
            "Hi", // Types 'One'
            1500, // Waits 2s
            "I'm Felipe,", // Deletes 'Three' and types 'Four'
          ]}
          wrapper="div"
          cursor={false}
          className="typing"
        />
        <TypeAnimation
          sequence={[
            3500, // Types 'One'
            "I'm a Software Developer", // Deletes 'Two' and types 'Three'
            2500, // Waits 2s,
            "Let's build something together!", // Deletes 'Three' and types 'Four
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
        <Link href="https://github.com/felri">
          <FilePdfOutlined className="icon" />
        </Link>
      </div>
      <Background />
    </div>
  );
}

export default App;
