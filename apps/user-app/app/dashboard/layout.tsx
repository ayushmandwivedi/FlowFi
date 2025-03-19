import { Sidebar } from "components/Sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex w-full h-screen">
      <Sidebar />
      <main className="h-full w-full">{children}</main>
    </div>
  );
}
