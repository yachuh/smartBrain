import Navigation from "./header/Navigation"
import Logo from "./header/Logo"

const Header = ({ onRouteChange, isLoggedIn }) => {
  return(
    <div className="flex justify-between p-4">
      <Logo />
      <Navigation onRouteChange={onRouteChange} isLoggedIn={isLoggedIn} />
    </div>
  )
}

export default Header