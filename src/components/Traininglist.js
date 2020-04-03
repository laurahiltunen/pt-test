import React, {useState, useEffect} from 'react';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import moment from 'moment';
import Snackbar from '@material-ui/core/Snackbar';
import CloseIcon from '@material-ui/icons/Close';



export default function Traininglist() {
    const [training, setTrainings] = useState([]);

    useEffect(()=> fetchData(), []);

    const fetchData = () => {
        fetch('https://customerrest.herokuapp.com/gettrainings')
        .then(response => response.json())
        .then(data => setTrainings(data))
        .catch(err => console.error(err))
    }

    const deleteTraining = (link) => {
        if(window.confirm('Haluatko varmasti poistaa treenin?')) {
        const osoite = 'https://customerrest.herokuapp.com/api/trainings/' + link;
        fetch(osoite, {method: 'DELETE'})
        .then(res => fetchData())
        .catch(err => console.error(err))
        handleClick();
        }
    }
    const [open, setOpen] = React.useState(false); //snackbar

    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
        return;
        }

        setOpen(false);
    };

    const columns = [
        {
            Header: 'Aika',
            accessor: 'date',
            Cell: row => (moment(row.value).format('MM/DD/YYYY'))
        },
        {
            Header: 'Treeni',
            accessor: 'activity'
        },
        {
            Header: 'Kesto',
            accessor: 'duration'
        },
        {
            Header: 'Asiakkaan etunimi',
            accessor: 'customer.firstname'
        },
        {
            Header: 'Asiakkaan sukunimi',
            accessor: 'customer.lastname'
        },
        {
            sortable: false,
            filterable: false,
            width: 100,
            accessor: 'id',
            Cell: row => 
            <IconButton aria-label="delete" onClick={() => deleteTraining(row.value)}>
            <DeleteIcon color="secondary" />
            </IconButton>
        }

    ]

    return (
        <div>
            <ReactTable filterable={true} data={training} columns={columns}/>
        
            <Snackbar
            anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
            }}
            open={open}
            autoHideDuration={6000}
            onClose={handleClose}
            message="Treeni poistettu"
            action={
            <React.Fragment>
                <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
                <CloseIcon fontSize="small" />
                </IconButton>
            </React.Fragment>
            }
            />
         </div>
    );
  }
    