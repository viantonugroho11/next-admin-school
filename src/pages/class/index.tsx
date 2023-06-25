// ** MUI Imports
import { useRouter } from 'next/router'
import Grid from '@mui/material/Grid'
import Link from '@mui/material/Link'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import CardHeader from '@mui/material/CardHeader'
import Button from '@mui/material/Button'

// ** Demo Components Imports
import TableClass from 'src/views/tables/TableClass'
import { useDispatch } from 'react-redux'
import { fetchClasses } from '@actions/class/actions'
import { useEffect } from 'react'

const MUITable = () => {
  const router = useRouter()

  const dispatch = useDispatch()

  useEffect(() => {
    const fetchData = async () => {
      try {
        dispatch<any>(fetchClasses())
      } catch (error) {
        // Tangani error jika diperlukan
      }
    }

    fetchData()
    
  }, [dispatch])

  return (

    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Typography variant='h5'>
          <Link href='https://mui.com/components/tables/' target='_blank'>
            MUI Tables
          </Link>
        </Typography>
        <Button size='small' variant='contained' sx={{ marginBottom: 7 }} onClick={() => router.push('/class/create')}>
          Create Class
        </Button>
      </Grid>
      <Grid item xs={12}>
        <Card>
          <CardHeader title='Class Table' titleTypographyProps={{ variant: 'h6' }} />
          <TableClass />
        </Card>
      </Grid>
    </Grid>
  )
}

export default MUITable
