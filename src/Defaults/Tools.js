import React, { useState } from 'react';

export const ToolDefaults = {
  WhoisOnline: {
    data:
      <>
        lol
      </>,
    Wings: [
      {
        name: 'PlayerOneWing',
        jobs: { whm: 5, rdm: 0, sch: 3, warrior: 2 },
        currentJob: {primary: ['blm', 30], secondary: ['mnk', 15]},
        faction: {faction: 'Windurst', rank: 2},
        zone: 'South Gustaberg',
      },
      {
        name: 'PlayerTwoWing',
        jobs: { whm: 5, rdm: 0, sch: 3, warrior: 2 },
        currentJob: {primary: ['blm', 30], secondary: ['mnk', 15]},
        faction: {faction: 'Windurst', rank: 2},
        zone: 'South Gustaberg',
      },
      {
        name: 'PlayerThreeWing',
        jobs: { whm: 5, rdm: 0, sch: 3, warrior: 2 },
        currentJob: {primary: ['blm', 30], secondary: ['mnk', 15]},
        faction: {faction: 'Windurst', rank: 2},
        zone: 'South Gustaberg',
      }
    ],
    Tonberry: [
      {
        name: 'PlayerOneTon',
        jobs: { whm: 5, rdm: 0, sch: 3, warrior: 2 },
        currentJob: {primary: ['blm', 30], secondary: ['mnk', 15]},
        faction: {faction: 'Windurst', rank: 2},
        zone: 'South Gustaberg',
      },
      {
        name: 'PlayerTwoTon',
        jobs: { whm: 5, rdm: 0, sch: 3, warrior: 2 },
        currentJob: {primary: ['blm', 30], secondary: ['mnk', 15]},
        faction: {faction: 'Windurst', rank: 2},
        zone: 'South Gustaberg',
      },
      {
        name: 'PlayerThreeTon',
        jobs: { whm: 5, rdm: 0, sch: 3, warrior: 2 },
        currentJob: {primary: ['blm', 30], secondary: ['mnk', 15]},
        faction: {faction: 'Windurst', rank: 2},
        zone: 'South Gustaberg',
      }
    ]
  },
  Mentors: {
    data:
      <>
        test
      </>
  },
  PlayerSearch: {
    data:
      <>
        PlayerSearch
      </>
  },
  ItemSearch: {
    data: <>
      ItemSearch
    </>
  }
};