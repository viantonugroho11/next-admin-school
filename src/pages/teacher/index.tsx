// ** MUI Imports
import { useRouter } from 'next/router'
import Grid from '@mui/material/Grid'
import Link from '@mui/material/Link'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import CardHeader from '@mui/material/CardHeader'
import Button from '@mui/material/Button'

// ** Demo Components Imports
import TableTeacher from 'src/views/tables/TableTeacher'

const MUITable = () => {
  const router = useRouter()

  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Typography variant='h5'>
          <Link href=''>
            Teacher List
          </Link>
        </Typography>
        <Button size='small' variant='contained' sx={{ marginBottom: 7 }} onClick={() => router.push('/class/create')}>
          Create
        </Button>
      </Grid>
      <Grid item xs={12}>
        <Card>
          <CardHeader title='Teacher Table' titleTypographyProps={{ variant: 'h6' }} />
          <TableTeacher />
        </Card>
      </Grid>
    </Grid>
  )
}

export default MUITable
