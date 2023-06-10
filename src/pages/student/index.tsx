// ** MUI Imports
import { useRouter } from 'next/router'
import Grid from '@mui/material/Grid'
import Link from '@mui/material/Link'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import CardHeader from '@mui/material/CardHeader'
import Button from '@mui/material/Button'

// ** Demo Components Imports
import TableStudent from 'src/views/tables/TableStudent'

const MUITable = () => {
  const router = useRouter()

  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Typography variant='h5'>
          <Link href='https://mui.com/components/tables/' target='_blank'>
            Table Student
          </Link>
        </Typography>
        <Button size='small' variant='contained' sx={{ marginBottom: 7 }} onClick={() => router.push('/student/create')}>
          Create
        </Button>
      </Grid>
      <Grid item xs={12}>
        <Card>
          <CardHeader title='Collapsible Table' titleTypographyProps={{ variant: 'h6' }} />
          <TableStudent />
        </Card>
      </Grid>
    </Grid>
  )
}

export default MUITable
