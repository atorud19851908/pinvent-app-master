import React from "react";
import { RiProductHuntLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import "./Home.scss";
import heroImg from "../../assets/inv-img.png";
import { ShowOnLogin, ShowOnLogout } from "../../components/protect/HiddenLink";

const Home = () => {
  return (
    <div className="home">
      <nav className="container --flex-between ">
        <div className="logo">
          <RiProductHuntLine size={35} />
        </div>

        <ul className="home-links">
          <ShowOnLogout>
            <li>
              <Link to="/register">Roʻyxatdan oʻtish</Link>
            </li>
          </ShowOnLogout>
          <ShowOnLogout>
            <li>
              <button className="--btn --btn-primary">
                <Link to="/login">Login</Link>
              </button>
            </li>
          </ShowOnLogout>
          <ShowOnLogin>
            <li>
              <button className="--btn --btn-primary">
                <Link to="/dashboard">Boshqaruv paneli</Link>
              </button>
            </li>
          </ShowOnLogin>
        </ul>
      </nav>
      {/* HERO SECTION */}
      <section className="container hero">
        <div className="hero-text">
          <h2>Maxsulotlar majmuyi {"&"} Ombor boshqaruvi tizimi</h2>
          <p>
            Ombordagi mahsulotlarni nazorat qilish va boshqarish uchun
            inventarizatsiya tizimi real vaqtda va biznesingizni
            rivojlantirishni osonlashtirish uchun birlashtirilgan.
          </p>
          <div className="hero-buttons">
            <button className="--btn --btn-secondary">
              <Link to="/dashboard">Bepul sinov muddati 10 kun</Link>
            </button>
          </div>
          <div className="--flex-start">
            <NumberText num="14K" text="Brend egasi" />
            <NumberText num="23K" text="Faol foydalanuvchilar" />
            <NumberText num="500+" text="Hamkorlar" />
          </div>
        </div>

        <div className="hero-image">
          <img src={heroImg} alt="Inventory" />
        </div>
      </section>
    </div>
  );
};

const NumberText = ({ num, text }) => {
  return (
    <div className="--mr">
      <h3 className="--color-white">{num}</h3>
      <p className="--color-white">{text}</p>
    </div>
  );
};

export default Home;
