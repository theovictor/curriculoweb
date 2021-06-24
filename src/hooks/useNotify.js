// import React, { useState } from 'react'
// import Button from '@material-ui/core/Button';
// import Snackbar from '@material-ui/core/Snackbar';
// import IconButton from '@material-ui/core/IconButton';
// import CloseIcon from '@material-ui/icons/Close';

// export const useNotify = () => {

//   const [openSuccess, setOpenSuccess] = useState(false);
//   const [openDanger, setOpenDanger] = useState(false);

//   const success = (msg) => {
//     setOpenSuccess(true);
//     return <Snackbar
//     severity="success"
//     anchorOrigin={{
//       vertical: 'bottom',
//       horizontal: 'left',
//     }}
//     open={openSuccess}
//     autoHideDuration={6000}
//     onClose={() => setOpenSuccess(false)}
//     message={msg}
//     action={
//       <React.Fragment>
//         <IconButton size="small" aria-label="close" color="inherit" onClick={() => setOpenSuccess(false)}>
//           <CloseIcon fontSize="small" />
//         </IconButton>
//       </React.Fragment>
//     }
//   /> 
//   }

//   const danger = (msg) => {
//     setOpenDanger(true);
//     return <Snackbar
//     severity="error"
//     anchorOrigin={{
//       vertical: 'bottom',
//       horizontal: 'left',
//     }}
//     open={openDanger}
//     autoHideDuration={6000}
//     onClose={() => setOpenDanger(false)}
//     message={msg}
//     action={
//       <React.Fragment>
//         <IconButton size="small" aria-label="close" color="inherit" onClick={() => setOpenDanger(false)}>
//           <CloseIcon fontSize="small" />
//         </IconButton>
//       </React.Fragment>
//     }
//   /> 
//   }

//   return {
//     success,
//     danger
//   }
// }
