const Navigation = ({ onRouteChange, isLoggedIn }) => {
  return(
    <nav className="flex justify-end">
      {
        isLoggedIn 
        ? <div className="flex">
            <a href="#" className="text-md underline py-2 px-4" onClick={() => onRouteChange('login')}>Logout</a>
          </div>
        : <div className="flex">
          <a href="#" className="text-md underline py-2 px-4 mr-4" onClick={() => onRouteChange('signup')}>Register</a>
          <a href="#" className="text-md underline py-2 px-4" onClick={() => onRouteChange('login')}>Login</a>
        </div>
      }
    </nav>
  );
}

export default Navigation;