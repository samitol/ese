import SideNav from "../components/sideNav";

export default function Layout({ children }) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden py-2 md:gap-2">
      <div className="flex-none">
        <SideNav />
      </div>
      <div className="grow px-2 md:overflow-y-auto">{children}</div>
    </div>
  );
}
