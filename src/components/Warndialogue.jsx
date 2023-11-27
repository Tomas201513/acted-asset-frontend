import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Paper from '@mui/material/Paper';
import Draggable from 'react-draggable';
import propTypes from 'prop-types';

function PaperComponent(props) {
    return (
        <Draggable
            handle="#draggable-dialog-title"
            cancel={'[class*="MuiDialogContent-root"]'}
        >
            <Paper {...props} />
        </Draggable>
    );
}

export default function Warndialogue({  name, open, setOpen, action,setSelectedData, selectedData }) {



    const handleClose = () => {
        setOpen(false);
        try{

            setSelectedData(null);
            setSelectedRows([]);
            // refetch();
       
        } catch(e){
            // console.log(e);
        }
      
    };

    return (
        <div>
            <Dialog
                open={open}
                onClose={handleClose}
                PaperComponent={PaperComponent}
                aria-labelledby="draggable-dialog-title"
            >
                <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
                {`Delete ${name} `}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                    {`Are you sure you want to delete this ${name}?`}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                     <Button autoFocus 
                    onClick={() => {
                         action(selectedData ? selectedData._id: ""); 
                         setSelectedData(null);
                         
                         setOpen(false);
                         handleClose();
                         }}
                         color="error">
                        Delete
                    </Button>

                    <Button onClick={handleClose} color="primary"> Cancel </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

Warndialogue.propTypes = {
    open: propTypes.bool.isRequired,
    setOpen: propTypes.func.isRequired,
    title: propTypes.string.isRequired,
    action: propTypes.func.isRequired,
    selectedData: propTypes.object.isRequired,
    qr: propTypes.bool.isRequired,
    setQr: propTypes.func.isRequired,
    qrId: propTypes.string.isRequired,
    setQrId: propTypes.func.isRequired,
    name: propTypes.string.isRequired,
    selectedRows: propTypes.array.isRequired,
    setSelectedRows: propTypes.func.isRequired,
    setSelectedData: propTypes.func.isRequired,
    

};

// {
//     selectedData ?
//         <QRcode id={selectedData?._id} /> : <></>
// }
