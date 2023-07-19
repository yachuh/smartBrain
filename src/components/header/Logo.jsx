import Tilt from 'react-parallax-tilt';
import sbLogo from '../../assets/images/sb_logo.png'

const Logo = () => {
  return(
    <div className='py-2 px-4'>
      <Tilt>
        <div>
          <h1><img className="h-[50px]" src={sbLogo}></img></h1>
        </div>
      </Tilt>
    </div>
  );
}

export default Logo;