import { useEffect } from "react";
import { FaLinkedin, FaFacebook, FaGithub } from "react-icons/fa";
import "./Contact.scss";

const Contact = () => {
  const handleLinkedInClick = () => {
    window.open("https://www.linkedin.com/", "_blank");
  };

  const handleFacebookClick = () => {
    window.open("https://www.facebook.com/", "_blank");
  };

  const handleGitHubClick = () => {
    window.open("https://github.com/", "_blank");
  };

  useEffect(() => {
    setTimeout(() => {
      document.querySelector(".contact-container").classList.add("animate-in");
    }, 0.1);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
  };

  return (
    <div className="contact-container">
      <div className="contact-hero">
        <h1>contact</h1>
        <h2>Get in touch with me via social media or email</h2>
        <div className="icons-container">
          <FaLinkedin className="icon-linkedin" onClick={handleLinkedInClick} />
          Linkedin
          <FaFacebook className="icon-facebook" onClick={handleFacebookClick} />
          Facebook
          <FaGithub className="icon-github" onClick={handleGitHubClick} />
          GitHub
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="form-container">
          <h1>Send me an email</h1>
          <label htmlFor="name">Name</label>
          <input type="text" name="" id="name" required />
          <label htmlFor="email">Email</label>
          <input type="email" name="" id="email" required />
          <label htmlFor="area">Messagge</label>
          <textarea name="" id="area" cols="30" rows="5" required></textarea>
          <input type="submit" value="Send email" className="submit-button" />
        </div>
      </form>
    </div>
  );
};

export default Contact;
