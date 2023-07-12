import React from "react";
import { Wrapper } from "./style";

const About = () => {
  return (
    <Wrapper className="maxWidth headerStyling">
      <h1>About</h1>
      <span>About</span>
      <div>
        <div>
          Jeg er en frontend-utvikler som nylig har fullført mitt utdanningsløp
          på Noroff i Bergen. Gjennom studiene har jeg fått erfaring med å bygge
          responsive og brukervennlige løsninger, med fokus på universell
          utforming i tråd med WCAG-retningslinjer. Jeg har også lært å jobbe
          med rammeverk som React, og har en god forståelse for
          versjonskontrollsystemer som Git.
        </div>
        <div>
          Ved siden av studiene har jeg hatt en deltidsjobb som konsulent i
          Exuma. Her har jeg bistått i opprettelse, oppdatering og modernisering
          av ulike nettsider. Dette har gitt meg verdifull erfaring med å jobbe
          selvstendig, kommunisere effektivt og løse problemer under tidspress.
        </div>
        <div>
          Med en sterk lidenskap for webutvikling og teknologi, er jeg nå på
          utkikk etter en fulltidsjobb hvor jeg kan fortsette å utvikle meg selv
          og mine ferdigheter.
        </div>
      </div>
    </Wrapper>
  );
};

export default About;
