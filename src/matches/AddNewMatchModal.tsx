import { useContext } from "react";
import { Modal, Box, Grid, TextField, Button, Alert, Autocomplete } from "../../node_modules/@mui/material/index";
import { Participant } from "../types";
import { DataContext } from "../App"

type AddNewMatchModalProps = {
  addMatchModalOpen: boolean;
  setAddMatchModalOpen: (value: React.SetStateAction<boolean>) => void;
  updateMatchPlayer: (player: "player1" | "player2", value: any) => void;
  updateMatchTime: (event: any) => void;
  addNewMatch: () => void;
  addMatchError: boolean;
}

function AddNewMatchModal(props: AddNewMatchModalProps) {
  const data = useContext(DataContext);
  const getPlayerNames = () => {
    if (!data) return [];
    return data.participantList
      .filter(p => p.roles.includes("player"))
      .map(p => p.name);
  }
  return (
    <Modal
      open={props.addMatchModalOpen}
      onClose={() => props.setAddMatchModalOpen(false)}
    >
      <Box sx={{ backgroundColor: 'white' }}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            {/* <TextField
              required
              id="player1"
              name="player1"
              label="Player 1"
              onChange={props.updateNewMatch}
            /> */}
            <Autocomplete
              disablePortal
              id="player1"
              options={getPlayerNames()}
              onChange={(x: any) => props.updateMatchPlayer("player1", x)}
              renderInput={(params: any) => 
                <TextField 
                  {...params} 
                  label="Player 1" 
                />}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Autocomplete
              disablePortal
              id="player2"
              options={getPlayerNames()}
              onChange={(x: any) => props.updateMatchPlayer("player2", x)}
              renderInput={(params: any) => <TextField {...params} label="Player 2" />}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="time"
              name="time"
              label="time"
              onChange={props.updateMatchTime}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Button onClick={props.addNewMatch}>Add match</Button>
          </Grid>
        </Grid>
        {props.addMatchError ? <Alert severity="error">nope</Alert> : <></>}
      </Box>
    </Modal>
  )
}

export default AddNewMatchModal;