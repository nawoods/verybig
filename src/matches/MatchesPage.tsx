import { useState } from "react";
import { Alert, Box, Button, Grid, Modal, TextField } from "../../node_modules/@mui/material/index";
import AddNewMatchModal from "./AddNewMatchModal";
import UpcomingMatchesTable from "./UpcomingMatchesTable";

function MatchesPage() {
  const [matches, setMatches] = useState([
    {
      id: 1,
      player1: "arbaro",
      player2: "tobs",
      time: Date.parse("2024-02-26T06:30Z")
    },
    {
      id: 2,
      player1: "snowytetris",
      player2: "lapis lazuli",
      time: Date.parse("2024-01-30T06:00Z"),
      restreamer: "sunny"
    }
  ]);
  const defaultNewMatch = {
    id: matches.reduce(((acc, match) => Math.max(acc, match.id) + 1), 0),
    player1: "",
    player2: "",
    time: 0
  }
  const [newMatch, setNewMatch] = useState(defaultNewMatch);
  const [addMatchModalOpen, setAddMatchModalOpen] = useState(false);
  const [addMatchError, setAddMatchError] = useState(false);

  const deleteMatchHandler = (id: number) => {
    setMatches(matches.filter(match => match.id !== id));
  }

  const updateNewMatch = (event: any) => {
    const { name, value } = event.target;
    setNewMatch({
      ...newMatch,
      [name]: value
    });
  }

  const addNewMatch = () => {
    if (newMatch.player1 === ""
      || newMatch.player2 === ""
      || newMatch.time === 0
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
        updateNewMatch={updateNewMatch}
        addNewMatch={addNewMatch}
        addMatchError={addMatchError}
      />
    </>
  )

}

export default MatchesPage