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
import { MClass } from '@models/class/class'
import CircularProgress from '@mui/material/CircularProgress'


const TableClass = () => {
  const classes = useSelector((state: RootState) => state.class.classes)
  const router = useRouter()

  const handleEdit = (id: string) => {
    // router.push(`/class/edit/${id}`)
  }

  classes.forEach(item => {
    console.log(item.name)
  })
  if (classes.length === 0) {
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
          {classes.map((row: MClass) => (
            <TableRow key={row.id}>
              <TableCell component='th' scope='row'>
                {row.id}
              </TableCell>
              <TableCell align='right'>{row.name}</TableCell>
              <TableCell align='right'>00</TableCell>
              <TableCell align='right'>
                <Button variant='contained' color='primary' onClick={() => router.push('/class/edit/tes')}>
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

export default TableClass
