import { Link } from "react-router-dom";


export default function Navbar() {
  return (
    <nav className="flex items-center justify-between border-b border-slate-800 bg-slate-900 px-6 py-4 text-white">
      <Link to="/" className="text-xl font-bold tracking-tight text-red-400">StudentPortal</Link>
      <div className="flex gap-6 text-sm font-medium text-slate-300">
        <Link to="/" className="hover:text-red-400">Home</Link>
        <Link to="/students" className="hover:text-red-400">Students</Link>
        <Link to="/faculties" className="hover:text-red-400">Faculty</Link>
      </div>
    </nav>
  );
}