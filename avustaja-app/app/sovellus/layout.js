import SideNav from "../components/sideNav";

export default function Layout({ children }) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="flex-none">
        <SideNav />
      </div>
      <div className="grow md:overflow-y-auto">{children}</div>
    </div>
  );
}
