import React from "react";
import { Wrapper } from "./style";
import { colors } from "../../../../utils/constants";

const About = () => {
  return (
    <Wrapper>
      <div className="maxWidth">
        <h2>Hvem er jeg?</h2>
        <p>
          Jeg er en frontend-utvikler med et øye for detaljer og en middels stor
          kaffeavhegighet. Min lidenskap er å bygge ting ved hjelp av logikk,
          kode og Lofi Jazz på Spotify.
          <br /> Dersom du ikke synes dette var utdypende nok, så finner du
          flere ord og setninger på{" "}
          <a href="/about" style={{ color: colors.accent }}>
            om meg
          </a>{" "}
          siden.
        </p>
      </div>
    </Wrapper>
  );
};

export default About;
