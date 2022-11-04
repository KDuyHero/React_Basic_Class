import './Nav.scss'


const Nav = () => {
    return (
        <div className="topnav">
            <a className="active" href="#home">Home</a>
            <a href="#news">News</a>
            <a href="#contact">Contact</a>
            <a href="#about">About</a>
        </div>
    );

}

// cần export để có thể import ở nơi khác => tái sử dụng
export default Nav;