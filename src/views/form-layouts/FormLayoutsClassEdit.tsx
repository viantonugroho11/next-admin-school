import { ChangeEvent, MouseEvent, ReactNode, useState } from 'react'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import CardHeader from '@mui/material/CardHeader'
import InputLabel from '@mui/material/InputLabel'
import CardContent from '@mui/material/CardContent'
import FormControl from '@mui/material/FormControl'
import { postClass } from '@actions/class/actions'
import { useDispatch, useSelector } from 'react-redux'
import { useRouter } from 'next/router'
import { RootState } from '@reducers/store'
import { MenuItem, Select, SelectChangeEvent } from '@mui/material'
import { Major } from '@models/major/major'

interface State {
  name: string
  major: number
}

const FormLayoutsClassEdit: React.FC = () => {
  const [values, setValues] = useState<State>({
    name: '',
    major: 0
  })
  const router = useRouter()
  const dispatch = useDispatch()
  const majors = useSelector((state: RootState) => state.majors.majors)

  const handleChange = (prop: keyof State) => (event: ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [prop]: event.target.value })
  }

  const handleFooChange = (event: SelectChangeEvent<number>) => {
    const value = event.target.value as number
    setValues({ ...values, major: value })
  }

  const handleSubmit = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()

    try {
      const params = {
        name: values.name,
        level: 1,
        major: values.major
      }

      dispatch<any>(postClass(params))
      router.push('/class')
    } catch (error) {
      console.log('Page Failed to login:', error)
    }
  }

  return (
    <Card>
      <CardHeader title='Create Class' titleTypographyProps={{ variant: 'h6' }} />
      <CardContent>
        <form>
          <Grid container spacing={5}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label='Name'
                placeholder='RPL 3'
                name='name'
                value={values.name}
                onChange={handleChange('name')}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth>
                <InputLabel id='form-layouts-separator-select-label'>Jurusan</InputLabel>
                <Select
                  labelId='form-layouts-separator-select-label'
                  id='form-layouts-separator-select'
                  value={values.major}
                  onChange={handleFooChange}
                  name='major'
                >
                  <MenuItem value={0}>Pilih Jurusan</MenuItem>
                  {majors.map((row: Major) => (
                    <MenuItem key={row.id} value={row.id}>
                      {row.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <Box
                sx={{
                  gap: 5,
                  display: 'flex',
                  flexWrap: 'wrap',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}
              >
                <Button type='submit' variant='contained' size='large' onClick={handleSubmit}>
                  Save
                </Button>
              </Box>
            </Grid>
          </Grid>
        </form>
      </CardContent>
    </Card>
  )
}

export default FormLayoutsClassEdit
