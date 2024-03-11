import React, { useState } from "react";

export default function Hero() {
  const [scale, setscale] = useState({ scale: 1 });

  const scalehandleClick = () => {
    setscale((prevState) => ({
      scale: 0.9,
    }));
  };
  return (
    <section
      id="hero"
      className="h-screen w-screen flex justify-center items-center md:flex-col md:justify-end"
    >
      <img
        src="./assets/Designs/herostar1.png"
        className="hero-star1 w-fit"
        alt=""
      />
      <img
        src="./assets/Designs/herostar2.png"
        className="hero-star2 w-fit"
        alt=""
      />
      <img
        src="./assets/Designs/herophonestar2.png"
        className="hero-phone-star2 w-fit"
        alt=""
      />
      <img
        src="./assets/Designs/herostar3.png"
        className="hero-star3 w-fit"
        alt=""
      />
      <p className="hero-scrolldown-text md:hidden">SCROLL DOWN</p>
      <div className="hero-scrollicon-div md:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="38"
          height="38"
          viewBox="0 0 38 38"
          fill="none"
          className="md:hidden"
        >
          <path
            d="M9.5 23.75C9.5 26.2696 10.5009 28.6859 12.2825 30.4675C14.0641 32.2491 16.4804 33.25 19 33.25C21.5196 33.25 23.9359 32.2491 25.7175 30.4675C27.4991 28.6859 28.5 26.2696 28.5 23.75V14.25C28.5 11.7304 27.4991 9.31408 25.7175 7.53248C23.9359 5.75089 21.5196 4.75 19 4.75C16.4804 4.75 14.0641 5.75089 12.2825 7.53248C10.5009 9.31408 9.5 11.7304 9.5 14.25V23.75Z"
            stroke="white"
            stroke-width="1.5"
            stroke-linejoin="round"
          />
          <path
            d="M19 26.918V20.5846"
            stroke="white"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
      <div className="hero-left w-2/5 flex flex-col gap-4 justify-center md:w-11/12">
        <p className="hero-left-heading">Soli</p>
        <div className="hero-left-subheading-div w-fit px-8 md:py-2 flex items-center justify-center">
          <p className="hero-left-subheading-text">$SOLI</p>
        </div>
        <p className="hero-left-description w-3/4 md:w-11/12">
          Get ready to ride the wave of fun, pleasure, and profits with SOLI,
          the latest memecoin sensation on Solana!{" "}
        </p>
        <a href="https://www.google.com/" onClick={scalehandleClick}>
          <img
            src="./assets/Herobutton.png"
            className="w-fit cursor-pointer md:hidden"
            alt="buy now"
            style={{
              transform: `scale(${scale.scale})`,
              transition: "transform 0.3s ease",
            }}
          />
        </a>
        <a href="https://www.google.com/" onClick={scalehandleClick}>
          <img
            src="./assets/Herobuttonphone.png"
            className="w-fit cursor-pointer hidden md:block"
            alt="buy now"
            style={{
              transform: `scale(${scale.scale})`,
              transition: "transform 0.3s ease",
            }}
          />
        </a>
      </div>
      <img
        src="./assets/Heroimg.png"
        className="w-2/5 md:w-11/12 object-contain h-fit self-end md:self-center pb-16 hero-img md:pb-4"
        alt="Soli"
      />
    </section>
  );
}
