import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableRow from '@mui/material/TableRow'
import TableHead from '@mui/material/TableHead'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import Button from '@mui/material/Button'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'
import { RootState } from '@reducers/store'
import { MappingCourse } from '@models/mapping/mapCourse/mappingCourse'
import CircularProgress from '@mui/material/CircularProgress'

const TableScheduleCourse = () => {
  const schedule = useSelector((state: RootState) => state.schedules.mappingCourses)
  const router = useRouter()

  const handleEdit = (id: string) => {
    router.push(`/course/edit/${id}`)
  }

  schedule.forEach(item => {
    console.log(item.class_id)
  })
  if (schedule.length === 0) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <CircularProgress />
      </div>
    )
  }

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label='simple table'>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell align='right'>Name</TableCell>
            <TableCell align='right'>Jurusan</TableCell>
            <TableCell align='right'>Actions</TableCell> {/* Tambahkan kolom Actions */}
          </TableRow>
        </TableHead>
        <TableBody>
          {schedule.map((row: MappingCourse) => (
            <TableRow key={row.class_id}>
              <TableCell component='th' scope='row'>
                {row.id}
              </TableCell>
              <TableCell align='right'>{row.class_id}</TableCell>
              <TableCell align='right'>00</TableCell>
              <TableCell align='right'>
                <Button variant='contained' color='primary' onClick={() => handleEdit(row.id)}>
                  Click
                </Button>{' '}
                {/* Tombol untuk Actions */}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default TableScheduleCourse
