import { ChangeEvent, MouseEvent, ReactNode, useEffect, useState } from 'react'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import CardHeader from '@mui/material/CardHeader'
import InputLabel from '@mui/material/InputLabel'
import CardContent from '@mui/material/CardContent'
import FormControl from '@mui/material/FormControl'
import { postClass, updateClass } from '@actions/class/actions'
import { useDispatch, useSelector } from 'react-redux'
import { useRouter } from 'next/router'
import { RootState } from '@reducers/store'
import { MenuItem, Select, SelectChangeEvent } from '@mui/material'
import { Major } from '@models/major/major'

interface State {
  id: string
  name: string
  major: number
}

interface Props {
  editMode: boolean
}

const FormLayoutsClass: React.FC<Props> = ({ editMode }) => {
  const [values, setValues] = useState<State>({
    id: '',
    name: '',
    major: 0
  })
  const router = useRouter()
  const dispatch = useDispatch()
  const majors = useSelector((state: RootState) => state.majors.majors)
  const selectedClass = useSelector((state: RootState) => state.class.class)
  var idClass: string = ''
  useEffect(() => {
    if (editMode) {
      idClass = router.query.id as string
      setValues({
        id: idClass,
        name: selectedClass.name,
        major: 0
      })
    }
  }, [editMode, selectedClass])

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

      if (editMode) {
        dispatch<any>(updateClass(idClass, params))
      } else {
        dispatch<any>(postClass(params))
      }
      router.push('/class')
    } catch (error) {
      console.log('Failed to save class:', error)
    }
  }

  return (
    <Card>
      <CardHeader title={editMode ? 'Edit Class' : 'Create Class'} titleTypographyProps={{ variant: 'h6' }} />
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
                  {editMode ? 'Update' : 'Save'}
                </Button>
              </Box>
            </Grid>
          </Grid>
        </form>
      </CardContent>
    </Card>
  )
}

export default FormLayoutsClass
