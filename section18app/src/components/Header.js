import { useSelector ,useDispatch} from 'react-redux';
import classes from './Header.module.css';
import  {authActions}  from '../store/auth';
const Header = () => {
const isLogging = useSelector(state => state.auth.isAuthenticated)
const dispatchLogging= useDispatch()
const logout=()=>{
  dispatchLogging(authActions.logout())
}
  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>

      {
        isLogging &&
        <nav>
          <ul>
            <li>
              <a href='/'>My Products</a>
            </li>
            <li>
              <a href='/'>My Sales</a>
            </li>
            <li>
              <button onClick={logout}>Logout</button>
            </li>
          </ul>
        </nav>
      }
    </header>
  );
};

export default Header;
