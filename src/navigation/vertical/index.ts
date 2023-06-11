// ** Icon imports
import Login from 'mdi-material-ui/Login'
import Table from 'mdi-material-ui/Table'
import CubeOutline from 'mdi-material-ui/CubeOutline'
import HomeOutline from 'mdi-material-ui/HomeOutline'
import FormatLetterCase from 'mdi-material-ui/FormatLetterCase'
import AccountCogOutline from 'mdi-material-ui/AccountCogOutline'
import CreditCardOutline from 'mdi-material-ui/CreditCardOutline'
import AccountPlusOutline from 'mdi-material-ui/AccountPlusOutline'
import AlertCircleOutline from 'mdi-material-ui/AlertCircleOutline'
import GoogleCirclesExtended from 'mdi-material-ui/GoogleCirclesExtended'


// ** Type import
import { VerticalNavItemsType } from 'src/@core/layouts/types'

const navigation = (): VerticalNavItemsType => {
  return [
    {
      title: 'Dashboard',
      icon: HomeOutline,
      path: '/'
    },
    {
      title: 'Dashboard V2',
      icon: HomeOutline,
      path: '/dashboard'
    },
    {
      title: 'Account Settings',
      icon: AccountCogOutline,
      path: '/account-settings'
    },
    {
      sectionTitle: 'Management Siswa'
    },
    {
      title: 'Class',
      icon: Login,
      path: '/class',
    },
    {
      title: 'Student',
      icon: Login,
      path: '/student',
    },
    {
      title: 'Teacher',
      icon: Login,
      path: '/teacher',
    },
    {
      sectionTitle: 'Management Learning'
    },
    {
      title: 'Mata Pelajaran',
      icon: Login,
      path: '/pages/login',
    },
    {
      title: 'Ujian',
      icon: Login,
      path: '/pages/login',
    },
    {
      title: 'Login',
      icon: Login,
      path: '/pages/login',
      openInNewTab: true
    },
    {
      sectionTitle: 'Profil'
    },
    {
      title: 'Setting',
      icon: FormatLetterCase,
      path: '/typography'
    },
    {
      title: 'Logout',
      path: '/pages/login',
      icon: GoogleCirclesExtended
    }
  ]
}

export default navigation
