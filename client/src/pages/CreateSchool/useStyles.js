import { makeStyles } from '@mui/styles'

const useStyles = makeStyles({
    main_container:{
        display:'flex',
        flexDirection:'column',
        textAlign:'center',
        background: 'linear-gradient(71deg, rgba(247,248,252,1) 9%, rgba(255,255,255,1) 28%, rgba(237,239,249,1) 75%)',
        height:'100%'
    },
    form:{
        display:'flex',
        flexDirection:'column',
        width:'30%',
        margin:'auto',
        marginTop:'3vh',
        backgroundColor:'white',
        padding:'5vh',
        boxShadow:'0 0 2vh #e6e6e6'
    },
    image_field:{
        display:'flex',
        flexDirection:'column',
        marginBottom:'1vh'
    }
})

export default useStyles;