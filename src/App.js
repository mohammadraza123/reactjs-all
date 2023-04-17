import logo from './logo.svg';
import './App.css';
import Todo from "./components/Todo"
import { Route , Routes} from 'react-router-dom';
import AllMeetuppage from './pages/AllMeetup';
import NewMeetuppage from './pages/NewMeetup';
import FovouritesPage from './pages/Favourite';
import MainNavigate from './components/layout/MainNavigation';
function App() {
  return (
   <div>
    <MainNavigate />
     <Routes>
    <Route path='/' element = {<AllMeetuppage/>} />
   </Routes>
   <Routes>
  <Route path='/new-meetup' element = {<NewMeetuppage />} />
   </Routes>
   <Routes>
  <Route path='/favourites' element = {<FovouritesPage />} />
   </Routes>
   </div>
  );
}

export default App;
