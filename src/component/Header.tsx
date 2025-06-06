interface HeaderProps {
  open: boolean;
  setOpen: (value: boolean) => void;
}

const Header = ({ open, setOpen }:HeaderProps) => {
  return <>
    <header>
            <a href="#">
                <div className="logo">Travel</div>
            </a>
            <div className={!open ? 'menu-logo':'menu-logo active'} onClick={()=>{
              setOpen(!open)
            }}></div>
        </header>
  </>
}
export default Header;