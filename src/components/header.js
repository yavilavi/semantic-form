const Header = ({ name }) => {
  return (
    <header className="header">
      <h1>{name || "Header"}</h1>
    </header>
  );
};

export default Header;
