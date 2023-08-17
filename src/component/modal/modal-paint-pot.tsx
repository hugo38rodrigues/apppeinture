import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  styled
} from '@mui/material'
import {DataGrid, GridColDef} from '@mui/x-data-grid'
import React, {FunctionComponent} from 'react'
import ModalCustomTitle from './modal-custom-title'

const BootstrapDialog = styled(Dialog)(({theme}) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2)
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1)
  }
}))

interface ModalPaintPotPros {
  open: boolean
  closeModal: (stateModal: boolean) => void
}

const ModalPaintPot: FunctionComponent<ModalPaintPotPros> = (props) => {
  const {open, closeModal} = props

  const handleClose = () => {
    return closeModal(false)
  }

  const columns: GridColDef[] = [
    {field: 'id', headerName: 'ID', width: 200},
    {field: 'StatusPot', headerName: 'Status du pot', width: 200},
    {field: 'color', headerName: 'Couleur', width: 200},
    {field: 'type', headerName: 'Type', width: 200},
    {field: 'code', headerName: 'Code de référence', width: 200},
    {field: 'marque', headerName: 'Marque', width: 200}
  ]

  const rows = [
    {id: 1, StatusPot: 'vert', color: 'Snow', type: 'Jon', code: 35, marque: 'italery'},
    {id: 2, StatusPot: 'orange', color: 'Lannister', type: 'Cersei', code: 42, marque: 'italery'},
    {id: 3, StatusPot: 'rouge', color: 'Lannister', type: 'Jaime', code: 45, marque: 'italery'},
    {id: 4, StatusPot: 'vert', color: 'Stark', type: 'Arya', code: 16, marque: 'italery'},
    {id: 5, StatusPot: 'orange', color: 'Targaryen', type: 'Daenerys', code: null, marque: 'italery'},
    {id: 6, StatusPot: 'vert', color: 'Melisandre', type: null, code: 150, marque: 'italery'},
    {id: 7, StatusPot: 'vert', color: 'Clifford', type: 'Ferrara', code: 44, marque: 'italery'},
    {id: 8, StatusPot: 'rouge', color: 'Frances', type: 'Rossini', code: 36, marque: 'italery'},
    {id: 9, StatusPot: 'vert', color: 'Roxie', type: 'Harvey', code: 65, marque: 'italery'}
  ]

  return (
    <>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="dialog-paint-pot"
        open={open}
        maxWidth={false}
        sx={{width: 1964}}
      >
        <ModalCustomTitle id="customized-dialog-title" onClose={handleClose}>
          Sélectionner vos pots de peinture
        </ModalCustomTitle>
        <DialogContent dividers>
          <div style={{height: 400, width: '100%'}}>
            <DataGrid
              rows={rows}
              columns={columns}
              initialState={{
                pagination: {
                  paginationModel: {page: 0, pageSize: 5}
                }
              }}
              pageSizeOptions={[5, 10]}
              checkboxSelection
            />
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>
            Save changes
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </>
  )
}
export default ModalPaintPot
