
import './Navbar.css'

export const Navbar = () => {
  return (
    <>
      <nav className="hacker__nav">
        <span className="hacker__nav-branding">Hacker News</span>
      </nav>

      <div className='hacker__section' >
        <div className='hacker__section-item active'>
          <span>All</span>
        </div>
        <div className='hacker__section-item'>
          <span>My faves</span>
        </div>
      </div>
    </>
  );
};
