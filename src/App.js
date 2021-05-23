import * as HiIcons from "react-icons/hi";
import * as MdIcons from "react-icons/md";
import * as RiIcons from "react-icons/ri";
import * as IoIcons from "react-icons/io5";

function App() {

  
  return (
    <div>
      <header className="header-youtube">
        <nav className="nav-logo">
          <HiIcons.HiOutlineMenu className="nav-logo__barra" />
          <img
            className="nav-logo__youtube"
            src="/assets/youtube.png"
            alt="youtube"
          />
          <span className='nav-logo__pe' >PE</span>
        </nav>










        <nav className="nav-search">

          <div className="nav-search__content">

            <input className='nav-search__content--input' type="text" placeholder="Buscar" />

            <span className='nav-search__content--span'>
              <HiIcons.HiOutlineSearch />
            </span>

          </div>

          <MdIcons.MdMic className="nav-search__micro" />

        </nav>







        <nav className="nav-icons">
          <div className="content-icons">

              <RiIcons.RiVideoAddFill className='video' />

              <RiIcons.RiGridFill className='icons' />

            <div id='campana' >
              <IoIcons.IoNotificationsSharp  />
              <span className='numero' >7</span>
            </div>

          </div>

          <img className="avatar" src="/assets/avatar2.jpg" alt="avatar" />
        </nav>

      </header>
    </div>
  );
}

export default App;
