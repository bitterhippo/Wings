import React from 'react';

//Subcomponents
import { HomeDefaults } from '../Defaults/Home';
import { ContentWrapper } from '../Components/PPC/ContentWrapper';

export const Home = () => {
  return (
    <ContentWrapper>
      <b>Welcome to WingsXI!</b>
      <br />
      <br />
      Wings is a level 75 capped Wings of the Goddess era server focused on providing a Final Fantasy XI experience from the era just before the level cap was raised, with minor quality of life improvements.
      <br />
      <br />
      Our server includes all of the following:
      <ul>
        <li>
          Wings of the Goddess era skill up rates and experience rates.
          All jobs thru Wings of the Goddess expansion.
        </li>
        <li>
          Unrestricted Level Sync.
        </li>
        <li>
          Fully fleshed out Fishing.
        </li>
        <li>
          Once-per Vana'diel day Fields of Valor.
        </li>
        <li>
          Mog Wardrobe and Mog Sack access unlocks via storyline content.
          A completely player-run economy.
        </li>
        <li>
          A completely player-run economy.
        </li>
        <li>
          Absolutely no multiboxing.
        </li>
        <li>
          A completely open-sourced code base that is actively developed by multiple other servers.
        </li>
      </ul>
      For more information, please join our Discord.
      We are currently running a contest to any website designers who might be interested in helping our website look more modern! See details here!
    </ContentWrapper>
  )
};

const styles = {

};