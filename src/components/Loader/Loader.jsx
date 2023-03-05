import { RotatingLines } from  'react-loader-spinner'
import { LoaderContainer } from './Loader.style'

export const Loader = () => {
    return(
        <LoaderContainer>
    <RotatingLines
    height = "50"
    width = "50"
    // radius = "9"
  strokeColor="grey"
  strokeWidth="5"
  animationDuration="0.75"
  visible={true}
/>
</LoaderContainer>
)}
