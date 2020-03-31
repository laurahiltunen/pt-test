import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';


export default function Addcustomer(props) {
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    const [customer, setCustomer] = useState({
        firstname: '',
        lastname: '',
        streetaddress: '',
        postcode: '',
        city: '',
        email: '',
        phone: ''
    });

    const handleInputChange = (event) => {
        setCustomer({...customer, [event.target.name]: event.target.value});
    };

    const addCustomer = () => {
        props.saveCustomer(customer);
        handleClose();
    }

    return(
        <div>
        <Button style={{margin:20}} variant='outlined' color="primary" onClick={handleClickOpen}>
          Lisää asiakas
        </Button>
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">Uusi asiakas</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              name="firstname"
              value={customer.firstname}
              onChange={event => handleInputChange(event)}
              label="Etunimi"
              fullWidth
            />
            <TextField
              margin="dense"
              name="lastname"
              value={customer.lastname}
              onChange={event => handleInputChange(event)}
              label="Sukunimi"
              fullWidth
            />
             <TextField
              margin="dense"
              name="streetaddress"
              value={customer.streetaddress}
              onChange={event => handleInputChange(event)}
              label="Katuosoite"
              fullWidth
            />
             <TextField
              margin="dense"
              name="postcode"
              value={customer.postcode}
              onChange={event => handleInputChange(event)}
              label="Postinumero"
              fullWidth
            />
             <TextField
              margin="dense"
              name="city"
              value={customer.city}
              onChange={event => handleInputChange(event)}
              label="Postitoimipaikka"
              fullWidth
            />
             <TextField
              margin="dense"
              name="email"
              value={customer.email}
              onChange={event => handleInputChange(event)}
              label="Sähköposti"
              fullWidth
            />
             <TextField
              margin="dense"
              name="phone"
              value={customer.phone}
              onChange={event => handleInputChange(event)}
              label="Puhelinnumero"
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Peruuta
            </Button>
            <Button onClick={addCustomer} color="primary">
              Tallenna
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
}