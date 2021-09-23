import { makeStyles } from '@mui/styles'

const useStyles = makeStyles({
    main_container:{
        display:'flex',
        flexDirection:'column',
        textAlign:'center',
        background: 'linear-gradient(71deg, rgba(247,248,252,1) 9%, rgba(255,255,255,1) 28%, rgba(237,239,249,1) 75%)',
        height:'100%',
        margin:'auto'
    },
    school_info:{
        display:'flex',
        flexDirection:'row',
        '& img':{
            height:'100%',
            width:'50vh'
        }
    },
    school_img:{
        display:'flex',
        flexDirection:'column'
    },
    edit_container:{
        backgroundColor:'white',
        boxShadow:'0 0 2vh #e6e6e6',
        width:'60%',
        margin:'5vh auto',
        marginTop:'10vh',
        height:'50%'
    },
    input_container:{
        display:'flex',
        flexDirection:'column',
        width:'30vh',
        color:'black',
        margin:'auto',
        fontSize:'20vh'
    },
    input_field:{
        display: 'flex',
        width:'35vh',
        flexDirection:'row',
        alignItems:'end',
        justifyContent:'space-between',
    }
})

export default useStyles;