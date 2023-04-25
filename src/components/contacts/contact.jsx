import "./contact.scss";

const Contact = () => {
  return (
    <div className="contact" id="contact">
      <div className="title">
        <h1>Contact</h1>
        <h2>Let's get in touch</h2>
      </div>
      <form action="https://formspree.io/f/xvondbgd" method="POST">
        <div className="inputs-container">
          <div className="input-1">
            <h2>Name</h2>
            <input type="name" name="name" />
          </div>
          <div className="input-2">
            <h2>Email</h2>
            <input type="email" name="email" />
          </div>
        </div>

        <div className="input-3">
          <h2>Message</h2>
          <textarea type="message" name="message" />
        </div>
        <button type="submit" value="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
