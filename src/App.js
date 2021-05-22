import * as HiIcons from "react-icons/hi";
import * as MdIcons from "react-icons/md";
import * as RiIcons from "react-icons/ri";
import * as IoIcons from "react-icons/io5";

function App() {

  
  return (
    <div>
      <header className="header-youtube">
        <nav className="nav-logo">
          <HiIcons.HiOutlineMenu className="barra" />
          <img
            className="logo-youtube"
            src="/assets/youtube.png"
            alt="youtube"
          />
          <span>PE</span>
        </nav>

        <nav className="nav-search">
          <div className="content-input">
            <input type="text" placeholder="Buscar" />
            <span>
              <HiIcons.HiOutlineSearch />
            </span>
          </div>
          <MdIcons.MdMic className="micro" />
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
