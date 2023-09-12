import React from "react";
import { Wrapper } from "./style";
import headshot from "./Portrett.jpg";
import { colors } from "../../utils/constants";

const About = () => {
  return (
    <Wrapper className="maxWidth headerStyling">
      <h1>Om Meg</h1>
      <span>Om Meg</span>
      <div id="content">
        <div>
          <div>
            Jeg har alltid trivdes med å tenke litt utenfor boksen og likt å
            gjøre ting på min måte. Kreativitet har vært en god venn gjennom
            hele livet mitt, men det har også vært den vennen som hele tiden
            distraherer deg og hindrer deg i å få med deg det læreren prøver å
            formidle. Det er bare å ta en titt i en av mine gamle skolebøker.
            Sannsynligheten er stor for at bøkene inneholder flere tegninger enn
            nynorske bøyninger og tyske gloser.
          </div>
          <div>
            Men de siste årene har jeg endelig funnet et utløp for denne
            kreative energien. Gjennom et studieløp ved Noroff University
            College i Bergen fant jeg kjærligheten for programmering og
            webutvikling. Jeg har nå gjennom dette studiet, egne prosjekter og
            en deltidsjobb som utvikler hos Exuma opparbeidet meg solid
            kompetanse innen webutvikling. Frontend-utvikling er virkelig noe
            jeg trives med, og det har blitt en hobby som jeg bruker mye tid på.
            Jeg elsker å fordype meg i ny teknologi og finne nye måter å løse
            problemer på.
          </div>
          <div>
            Målet med denne nettsiden er å vise frem hva jeg kan, samtidig som
            det er en sandkasse hvor jeg kan leke meg med ny og moderne
            teknologi. Ta en titt på{" "}
            <a href="/projects" style={{ color: colors.accent }}>
              prosjektsiden
            </a>{" "}
            for å se noen av det jeg har jobbet med.
          </div>
          <div>Espen</div>
        </div>
        <div>
          <img src={headshot} alt="Portrait of Espen" />
        </div>
      </div>
    </Wrapper>
  );
};

export default About;
