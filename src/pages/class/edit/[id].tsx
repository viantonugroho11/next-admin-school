// ** MUI Imports
import Grid from '@mui/material/Grid'

// ** Styled Component
import DatePickerWrapper from 'src/@core/styles/libs/react-datepicker'

// ** Third Party Styles Imports
import 'react-datepicker/dist/react-datepicker.css'
import { useRouter } from 'next/router'
import { fetchClass } from '@actions/class/actions'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import FormLayoutsClassEdit from 'src/views/form-layouts/FormLayoutsClassEdit'
import { fecthMajor } from '@actions/major/actions'

const FormLayouts = () => {
  const router = useRouter()
  const id: string = router.query.id as string

  const dispatch = useDispatch()

  useEffect(() => {
    const fetchClassData = async () => {
      try {
        dispatch<any>(fetchClass(id))
      } catch (error) {
        // Tangani error jika diperlukan
      }
    }
    const fetchMajorData = async () => {
      try {
        dispatch<any>(fecthMajor())
      } catch (error) {
        // Tangani error jika diperlukan
        console.log(error)
      }
    }

    if (id) {
      fetchMajorData()
      fetchClassData()
    }
  }, [dispatch, id])

  return (
    <DatePickerWrapper>
      <Grid item spacing={6}>
        <Grid item xs={12} md={6}>
          <FormLayoutsClassEdit />
        </Grid>
      </Grid>
    </DatePickerWrapper>
  )
}

export default FormLayouts
