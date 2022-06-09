//  //import React from 'react'
//  import * as React from 'react';
// import TextField from '@mui/material/TextField';
// import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { DatePicker } from '@mui/x-date-pickers/DatePicker';
// import Stack from '@mui/material/Stack';
// //import { MuiPickersUtilsProvider, KeyboardTimePicker, KeyboardDatePicker } from '@material-ui/pickers';



// function ViewsDatePicker() {

//   const [value, setValue] = React.useState(new Date());



//   return (
//     <div>
//       <LocalizationProvider dateAdapter={AdapterDateFns}>
//       <Stack spacing={3}>
//         <DatePicker
//           views={['year']}
//           label="Year only"
//           value={value}
//           onChange={(newValue) => {
//             setValue(newValue);
//           }}
//           renderInput={(params) => <TextField {...params} helperText={null} />}
//         />


// <DatePicker
//           openTo="year"
//           views={['year', 'month', 'day']}
//           label="Year, month and date"
//           value={value}
//           onChange={(newValue) => {
//             setValue(newValue);
//           }}
//           renderInput={(params) => <TextField {...params} helperText={null} />}
//         />
//         </Stack>
//         </LocalizationProvider>
//     </div>
//   )
// }

// export default ViewsDatePicker




