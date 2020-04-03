import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';


export default function Addtraining(props) {
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };


    const [training, setTraining] = useState({
      date: '',
      duration: '',
      activity: '',
      customer: props.customer.links[1].href
    });

    const handleInputChange = (event) => {
        setTraining({...training, [event.target.name]: event.target.value});
    };

    const addTraining = () => {
        props.addTraining(training);
        handleClose();
    }


    return(
        <div>
        <Button  color="primary" onClick={handleClickOpen}>
          Lisää treeni
        </Button>
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">Uusi treeni</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              name="date"
              value={training.date}
              onChange={event => handleInputChange(event)}
              label="Päivämäärä"
              fullWidth
            />
            <TextField
              margin="dense"
              name="duration"
              value={training.duration}
              onChange={event => handleInputChange(event)}
              label="Kesto minuutteina"
              fullWidth
            />
             <TextField
              margin="dense"
              name="activity"
              value={training.activity}
              onChange={event => handleInputChange(event)}
              label="Aktiviteetti"
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Peruuta
            </Button>
            <Button onClick={addTraining} color="primary">
              Tallenna
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
}