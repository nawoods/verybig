import { Modal, Box, Grid, TextField, Button, Alert } from "../../node_modules/@mui/material/index";

type AddNewMatchModalProps = {
  addMatchModalOpen: boolean;
  setAddMatchModalOpen: (value: React.SetStateAction<boolean>) => void;
  updateNewMatch: (event: any) => void;
  addNewMatch: () => void;
  addMatchError: boolean;
}

function AddNewMatchModal(props: AddNewMatchModalProps) {
  return (
    <Modal
      open={props.addMatchModalOpen}
      onClose={() => props.setAddMatchModalOpen(false)}
    >
      <Box sx={{ backgroundColor: 'white' }}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="player1"
              name="player1"
              label="Player 1"
              onChange={props.updateNewMatch}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="player2"
              name="player2"
              label="Player 2"
              onChange={props.updateNewMatch}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="time"
              name="time"
              label="time"
              onChange={props.updateNewMatch}
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