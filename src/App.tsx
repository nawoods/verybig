import { createContext, useState } from 'react';
import './App.css';
import MatchesPage from './matches/MatchesPage';
import { AppData, Participant } from './types';


const defaultParticipantList: Participant[] = [
  {
    name: "arbaro",
    twitch: "arbarrro",
    twitchAlt: [],
    discord: "nikvo",
    roles: ["player", "restreamer", "admin"]
  },
  {
    name: "snowytetris",
    twitch: "snowytetris",
    twitchAlt: [],
    discord: "snowytetris",
    roles: ["player", "restreamer"]
  },
  {
    name: "frenchiestfrie",
    twitch: "FrenchiestFrie223",
    twitchAlt: [],
    discord: "frenchiestfrie",
    roles: ["player"]
  },
  {
    name: "gildedlizard",
    twitch: "gildedlizard",
    twitchAlt: [],
    discord: "gildedlizard",
    roles: ["restreamer"]
  },
  {
    name: "burritodad",
    twitch: "burritodad",
    twitchAlt: ["tacomom18"],
    discord: "burritodad",
    roles: ["player", "restreamer"]
  }
]

const DataContext: React.Context<AppData> = createContext({
  participantList: defaultParticipantList
});

function App() {
  const [appData, setAppData] = useState<AppData>({
    participantList: defaultParticipantList
  });

  return (
    <DataContext.Provider value={appData}>
      <MatchesPage />
    </DataContext.Provider>
  )
}

export { App, DataContext };
