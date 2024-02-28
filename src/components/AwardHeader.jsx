import Logo from "../assets/logo.png";
import "../styles/AwardHeader.css";

export default function AwardHeader() {
  return (
    <div className="logo-header">
      <img src={Logo} alt="logo" />
    </div>
  );
}
