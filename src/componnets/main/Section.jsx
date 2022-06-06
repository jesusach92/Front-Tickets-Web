import useMediaQuery from '@mui/material/useMediaQuery'

const Section = () => {
  const movil = useMediaQuery('(max-width: 600px)')
  const tablet = useMediaQuery('(max-width:900px)') 
  return (
    (movil && tablet) ?(<>Movil</>):(tablet?(<>Tablet</>):(<>Web</>))
  )
}

export default Section