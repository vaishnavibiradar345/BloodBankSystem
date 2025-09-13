import { Link } from "react-scroll"; // 👈 new package

function Navbar() {
  return (
    <nav className="bg-white shadow p-4 flex justify-between">
      <h1 className="text-xl font-bold">Blood Bank</h1>
      <div className="space-x-4">
        <Link to="hero" smooth={true} duration={500} className="cursor-pointer">Home</Link>
        <Link to="services" smooth={true} duration={500} className="cursor-pointer">Services</Link>
        <Link to="faq" smooth={true} duration={500} className="cursor-pointer">FAQ</Link>
        <Link to="contact" smooth={true} duration={500} className="cursor-pointer">Contact</Link>
        <a href="/login">Login</a>
        <a href="/register">Register</a>
      </div>
    </nav>
  );
}

export default Navbar;