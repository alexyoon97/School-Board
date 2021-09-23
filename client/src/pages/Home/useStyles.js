import { makeStyles } from '@mui/styles'

const useStyles = makeStyles({
    main_container:{
        display:'flex',
        flexDirection:'column',
        background: 'linear-gradient(71deg, rgba(247,248,252,1) 9%, rgba(255,255,255,1) 28%, rgba(237,239,249,1) 75%)',
        height:'100%'
    },
    create_form:{
        display:'flex',
        flexDirection:'column',
        marginTop:'10vh',
        textAlign:'center',
        height:'35vh',
        justifyContent:'space-evenly'
    }
})

export default useStyles;