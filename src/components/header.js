const Header = ({ name }) => {
  return (
    <header className="header">
      <h1>Hello, {name || "Guest"}</h1>
    </header>
  );
};

export default Header;
