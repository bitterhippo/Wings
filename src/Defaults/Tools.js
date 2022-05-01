import React, { useState } from 'react';

export const ToolDefaults = {
  WhoisOnline: {
    data:
      <>
        lol
      </>,
    Wings: [
      {
        name: 'wingstest',
        jobs: { whm: 5, rdm: 0, sch: 3, warrior: 2 },
        currentJob: {primary: ['blm', 30], secondary: ['mnk', 15]},
        faction: {faction: 'Windurst', rank: 2},
        zone: 'South Gustaberg',
      }
    ],
    Tonberry: [
      {
        name: 'tonberryTest',
        jobs: { whm: 5, rdm: 0, sch: 3, warrior: 2 },
        currentJob: {blm: 30, mnk: 15},
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