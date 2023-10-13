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
import { postCourse, updateCourse } from '@actions/course/actions'

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
  useEffect(() => {
    if (editMode) {
      setValues({
        id: router.query.id as string,
        name: router.query.name as string,
        major: 0
      })
    }
  }, [editMode])

  const handleChange = (prop: keyof State) => (event: ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [prop]: event.target.value })
  }

  const handleSubmit = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()

    try {
      const params = {
        name: values.name,
        type: 1,
      }

      if (editMode) {
        dispatch<any>(updateCourse(values.id, params))
      } else {
        dispatch<any>(postCourse(params))
      }
      router.push('/course')
    } catch (error) {
      console.log('Failed to save class:', error)
    }
  }

  return (
    <Card>
      <CardHeader title={editMode ? 'Edit Course' : 'Create Course'} titleTypographyProps={{ variant: 'h6' }} />
      <CardContent>
        <form>
          <Grid container spacing={5}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label='Name'
                placeholder='Name Course'
                name='name'
                value={values.name}
                onChange={handleChange('name')}
              />
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
