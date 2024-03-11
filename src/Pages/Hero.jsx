import React from "react";

export default function Hero() {
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
      <div className="hero-left w-2/5 flex flex-col gap-4 justify-center md:w-11/12">
        <p className="hero-left-heading">Soli</p>
        <div className="hero-left-subheading-div w-fit px-8 md:py-2 flex items-center justify-center">
          <p className="hero-left-subheading-text">$SOLI</p>
        </div>
        <p className="hero-left-description w-3/4 md:w-11/12">
          Get ready to ride the wave of fun, pleasure, and profits with SOLI,
          the latest memecoin sensation on Solana!{" "}
        </p>
        <img
          src="./assets/Herobutton.png"
          className="w-fit cursor-pointer md:hidden"
          alt="buy now"
        />
        <img
          src="./assets/Herobuttonphone.png"
          className="w-fit cursor-pointer hidden md:block"
          alt="buy now"
        />
      </div>
      <img
        src="./assets/Heroimg.png"
        className="w-2/5 md:w-11/12 object-contain h-fit self-end md:self-center pb-16 hero-img md:pb-4"
        alt="Soli"
      />
    </section>
  );
}
