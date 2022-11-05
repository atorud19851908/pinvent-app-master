import React, { useState } from "react";
import Card from "../../components/card/Card";
import "./Contact.scss";
import { FaPhoneAlt, FaEnvelope, FaTwitter } from "react-icons/fa";
import { GoLocation } from "react-icons/go";
import { toast } from "react-toastify";
import axios from "axios";
import { BACKEND_URL } from "../../services/authService";

const Contact = () => {
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const data = {
    subject,
    message,
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${BACKEND_URL}/api/contactus`, data);
      setSubject("");
      setMessage("");
      toast.success(response.data.message);
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="contact">
      <h3 className="--mt">Biz bilan bog'lanish</h3>
      <div className="section">
        <form onSubmit={sendEmail}>
          <Card cardClass="card">
            <label>Mavzu</label>
            <input
              type="text"
              name="subject"
              placeholder="Mavzu"
              required
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
            <label>Xabar</label>
            <textarea
              cols="30"
              rows="10"
              name="message"
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            <button className="--btn --btn-primary">Xabar yuborish</button>
          </Card>
        </form>

        <div className="details">
          <Card cardClass={"card2"}>
            <h3>Bizning aloqa ma'lumotlarimiz</h3>
            <p>
              Formani to'ldiring yoki quyida keltirilgan boshqa kanallar orqali
              biz bilan bog'laning
            </p>

            <div className="icons">
              <span>
                <FaPhoneAlt />
                <p>+998972965522</p>
              </span>
              <span>
                <FaEnvelope />
                <p>maksibrain@mail.ru</p>
              </span>
              <span>
                <GoLocation />
                <p>Uzbekiston, Buxoro</p>
              </span>
              <span>
                <FaTwitter />
                <p>@maks</p>
              </span>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Contact;
