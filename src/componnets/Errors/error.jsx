import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material'
import { useState } from 'react'

function Error({flag}) {
const [open, setOpen] = useState(flag ? flag : false)

  return (
    <Dialog
    open={open}
    onClose={e=> setOpen(false)}
    >
        <DialogTitle>
            Contraseña incorrecta
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
           Contraseña Incorrecta vuelve a iniciar sesion
          </DialogContentText>
          <DialogActions>
            <Button onClick={e=> setOpen(false)}>Ok</Button>
          </DialogActions>
        </DialogContent>
    </Dialog>
  )
}

export default Error