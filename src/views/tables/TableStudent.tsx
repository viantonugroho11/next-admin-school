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
import { RootState } from '@reducers/store'
import { useSelector } from 'react-redux'
import { Student } from '@models/student/student'

interface StudentTableProps {
  students: Student[]
}

const TableStudent = () => {
  const students = useSelector((state: RootState) => state.students.students)
  const router = useRouter()

  const handleEdit = (id: string) => {
    // router.push(`/class/edit/${id}`)
  }

  students.forEach(item => {
    console.log(item.full_name)
  })
  if (students.length === 0) {
    return <p>Kosong</p>
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
          {students.map((student: Student) => (
            <TableRow key={student.id}>
              <TableCell align='right'>{student.id}</TableCell>
              <TableCell align='right'>{student.full_name}</TableCell>
              <TableCell align='right'>{student.nisn}</TableCell>
              <TableCell align='right'>{student.phone}</TableCell>
              <TableCell align='right'>{student.gender}</TableCell>
              <TableCell align='right'>{student.email}</TableCell>
              <TableCell align='right'>{student.nisn}</TableCell>
              <TableCell align='right'>{student.status}</TableCell>
              <TableCell align='right'>
                <Button variant='contained' color='primary' onClick={() => handleEdit(student.id)}>
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
