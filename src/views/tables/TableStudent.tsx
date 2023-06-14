import { useEffect } from 'react'
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableRow from '@mui/material/TableRow'
import TableHead from '@mui/material/TableHead'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import Button from '@mui/material/Button'
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'
import { fetchStudents } from '@actions/student/actions'
import { State } from '@reducers/student'
import { GetStudentsParams } from '@models/student/student'

const TableStudent = () => {
  const router = useRouter()
  const dispatch = useDispatch()
  const students = useSelector((state: State) => state.students)

  useEffect(() => {
    const params: GetStudentsParams = {
      page: 1,
      pageSize: 10
    }

    dispatch(fetchStudents(params))
  }, [dispatch])

  const handleEdit = (id: string) => {
    router.push(`/class/edit/${id}`)
  }

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label='simple table'>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell align='right'>Name</TableCell>
            <TableCell align='right'>NISN</TableCell>
            <TableCell align='right'>No Telp</TableCell>
            <TableCell align='right'>Gender</TableCell>
            <TableCell align='right'>Email</TableCell>
            <TableCell align='right'>Class</TableCell>
            <TableCell align='right'>Status</TableCell>
            <TableCell align='right'>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {students?.data.map(row => (
            <TableRow
              key={row.id}
              sx={{
                '&:last-of-type td, &:last-of-type th': {
                  border: 0
                }
              }}
            >
              <TableCell component='th' scope='row'>
                {row.id}
              </TableCell>
              <TableCell align='right'>{row.full_name}</TableCell>
              <TableCell align='right'>{row.nisn}</TableCell>
              <TableCell align='right'>{row.phone}</TableCell>
              <TableCell align='right'>{row.gender}</TableCell>
              <TableCell align='right'>{row.email}</TableCell>
              <TableCell align='right'>{row.nisn}</TableCell>
              <TableCell align='right'>{row.status}</TableCell>
              <TableCell align='right'>
                <Button variant='contained' color='primary' onClick={() => handleEdit(row.id)}>
                  Edit
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default TableStudent
