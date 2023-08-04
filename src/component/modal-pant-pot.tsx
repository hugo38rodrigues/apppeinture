import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  styled,
  Typography
} from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import React, {FunctionComponent} from 'react'

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

export interface DialogTitleProps {
  id: string;
  children?: React.ReactNode;
  onClose: () => void;
}

const BootstrapDialogTitle = (props: DialogTitleProps) => {
  const {children, onClose, ...other} = props

  return (
    <DialogTitle sx={{m: 0, p: 2}} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500]
          }}
        >
          <CloseIcon/>
        </IconButton>
      ) : null}
    </DialogTitle>
  )
}

const ModalPantPot: FunctionComponent<ModalPaintPotPros> = (props) => {
  const {open, closeModal} = props

  const handleClose = () => {
    return closeModal(false)
  }

  return (
    <>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
          Sélectionner vos pots de peinture
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>
            Toto
          </Typography>
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
export default ModalPantPot
