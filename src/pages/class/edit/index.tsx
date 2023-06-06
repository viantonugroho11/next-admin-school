// ** MUI Imports
import Grid from '@mui/material/Grid'

// ** Styled Component
import DatePickerWrapper from 'src/@core/styles/libs/react-datepicker'

// ** Demo Components Imports
import FormLayoutsClass from 'src/views/form-layouts/FormLayoutsClass'


// ** Third Party Styles Imports
import 'react-datepicker/dist/react-datepicker.css'

const FormLayouts = () => {
  return (
    <DatePickerWrapper>
      <Grid item spacing={6}>
        <Grid item xs={12} md={6}>
          <FormLayoutsClass />
        </Grid>
      </Grid>
    </DatePickerWrapper>
  )
}

export default FormLayouts
