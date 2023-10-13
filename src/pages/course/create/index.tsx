// ** MUI Imports
import Grid from '@mui/material/Grid'

// ** Styled Component
import DatePickerWrapper from 'src/@core/styles/libs/react-datepicker'

// ** Demo Components Imports
import FormLayoutsCourse from 'src/views/form-layouts/Course/FormLayoutsCourse'

// ** Third Party Styles Imports
import 'react-datepicker/dist/react-datepicker.css'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { fecthMajor } from '@actions/major/actions'

const FormLayouts = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    const fetchData = async () => {
      try {
        dispatch<any>(fecthMajor())
      } catch (error) {
        // Tangani error jika diperlukan
        console.log(error)
      }
    }

    fetchData()
  }, [dispatch])

  return (
    <DatePickerWrapper>
      <Grid item spacing={6}>
        <Grid item xs={12} md={6}>
          <FormLayoutsCourse editMode={false} />
        </Grid>
      </Grid>
    </DatePickerWrapper>
  )
}

export default FormLayouts
