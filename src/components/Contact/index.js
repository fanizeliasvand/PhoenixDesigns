
import contactImg from "../../assets/3.jpg";
import { useState } from "react";

export default function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  return (
    <>
      <h1 className="p1">Contact Us</h1>
      <div className="row">
        <div className="grow p1" style={{ maxWidth: "25%" }}>
          <img src={contactImg} style={{ maxWidth: "100%" }} />
        </div>
        <div className="row grow p1">
          <div className="column grow">
            <input
              name="name"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              name="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <textarea
              name="message"
              placeholder="Your message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <a
              href={`mailto:eliasvandfaniz@gmail.com?body=${message}`}
              target="_blank"
              rel="noreferrer"
            >
              Submit
            </a>
          </div>
          <div className="grow" style={{ marginLeft: "0.5rem" }}>
            <section style={{ marginBottom: "0.25rem" }}>
              <h2>Contact</h2>
              <div>
                <h3>Email</h3>eliasvandfaniz@gmail.com
              </div>
              <div>
                <h3>Phone</h3>1-201-927-9345
              </div>
            </section>
            <section>
              <h2>Based In</h2>
              <p>272 Beech St.</p>
              <p>Hackensack, NJ 07601</p>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
