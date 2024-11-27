function Header() {
  return (
    <header className="px-16 py-6 bg-background bg-opacity-50 drop-shadow-md fixed top-0 z-10 w-full">
      <div className="flex justify-between max-w-screen mx-auto">
        <a href="#" className="text-2xl font-bold">
          Lim GwangSoo
        </a>
        <ul className="flex gap-10 text-xl font-semibold">
          <li>
            <a href="#profile">Profile</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
