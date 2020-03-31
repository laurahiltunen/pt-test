import React, {useState, useEffect} from 'react';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import Snackbar from '@material-ui/core/Snackbar';
import CloseIcon from '@material-ui/icons/Close';
import Addcustomer from './Addcustomer';



export default function Customerlist() {
    const [customers, setCustomers] = useState([]);

    useEffect(()=> fetchData(), []);

    const fetchData = () => {
        fetch('https://customerrest.herokuapp.com/api/customers')
        .then(response => response.json())
        .then(data => setCustomers(data.content))
        .catch(err => console.error(err))
    }

    const deleteCustomer = (link) => {
        if(window.confirm('Haluatko varmasti poistaa asiakkaan?')) {
            fetch(link, {method: 'DELETE'})
            .then(res => fetchData())
            .catch(err => console.error(err))
            handleClick();
        }   
    }

    const saveCustomer = (customer) => {
        fetch('https://customerrest.herokuapp.com/api/customers', {
            method: 'POST',
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify(customer)
        })
        .then(res => fetchData())
        .catch(err => console.error(err))
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
            Header: 'Etunimi',
            accessor: 'firstname'
        },
        {
            Header: 'Sukunimi',
            accessor: 'lastname'
        },
        {
            Header: 'Katuosoite',
            accessor: 'streetaddress'
        },
        {
            Header: 'Postinumero',
            accessor: 'postcode'
        },
        {
            Header: 'Postitoimipaikka',
            accessor: 'city'
        },
        {
            Header: 'Puhelinnumero',
            accessor: 'phone'
        },
        {
            Header: 'Sähköposti',
            accessor: 'email'
        },
        {
            sortable: false,
            filterable: false,
            width: 100,
            accessor: 'links[0].href',
            Cell: row => 
            <IconButton aria-label="delete" onClick={() => deleteCustomer(row.value)}>
            <DeleteIcon color="secondary" />
            </IconButton>
        }

    ]

    return (
        <div>
        <Addcustomer saveCustomer={saveCustomer}/>
        <ReactTable filterable={true} data={customers} columns={columns}/>
       
            <Snackbar
                anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
                }}
                open={open}
                autoHideDuration={6000}
                onClose={handleClose}
                message="Asiakas poistettu"
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
    