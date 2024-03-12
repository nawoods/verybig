import { useState } from "react";
import { Alert, Box, Button, Grid, Modal, TextField } from "../../node_modules/@mui/material/index";
import { Participant, UpcomingMatch } from "../types";
import AddNewMatchModal from "./AddNewMatchModal";
import UpcomingMatchesTable from "./UpcomingMatchesTable";
import { DateTime } from "luxon";

type MatchesPageProps = {
  // participants: Participant[]
}

function MatchesPage(props: MatchesPageProps) {
  const [matches, setMatches] = useState<UpcomingMatch[]>([
    {
      id: 1,
      player1: "arbaro",
      player2: "burritodad",
      time: DateTime.fromISO("2024-02-26T06:30Z")
    },
    {
      id: 2,
      player1: "snowytetris",
      player2: "frenchiestfrie",
      time: DateTime.fromISO("2024-01-30T06:00Z"),
      restreamer: "gildedlizard"
    }
  ]);
  const defaultNewMatch: UpcomingMatch = {
    id: matches.reduce(((acc, match) => Math.max(acc, match.id) + 1), 0),
    player1: "",
    player2: "",
    time: DateTime.now()
  }
  const [newMatch, setNewMatch] = useState<UpcomingMatch>(defaultNewMatch);
  const [addMatchModalOpen, setAddMatchModalOpen] = useState<boolean>(false);
  const [addMatchError, setAddMatchError] = useState<boolean>(false);

  const deleteMatchHandler = (id: number): void => {
    setMatches(matches.filter(match => match.id !== id));
  }

  const updateMatchPlayer = (player: "player1" | "player2", value: any) => {
    setNewMatch({
      ...newMatch,
      [player]: value.target.outerText
    });
  };

  const updateMatchTime = (value: DateTime) => {
    setNewMatch({
      ...newMatch,
      time: value
    })
  }

  const addNewMatch = () => {
    if (newMatch.player1 === ""
      || newMatch.player2 === ""
      || newMatch.time < DateTime.now()
      || newMatch.time === undefined) {
      setAddMatchError(true);
      return;
    }
    const id = Math.max(...matches.map(match => match.id)) + 1;
    setMatches([...matches, {
      ...newMatch,
      id: id
    }]);
    setNewMatch(defaultNewMatch);
    setAddMatchError(false);
    setAddMatchModalOpen(false);
  };

  return (
    <>
      <UpcomingMatchesTable matches={matches} deleteMatchHandler={deleteMatchHandler} />
      <Button onClick={() => setAddMatchModalOpen(true)}>Add match</Button>
      <AddNewMatchModal
        addMatchModalOpen={addMatchModalOpen}
        setAddMatchModalOpen={setAddMatchModalOpen}
        updateMatchPlayer={updateMatchPlayer}
        updateMatchTime={updateMatchTime}
        addNewMatch={addNewMatch}
        addMatchError={addMatchError}
      />
    </>
  )

}

export default MatchesPage