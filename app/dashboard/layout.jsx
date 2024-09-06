import Sidebar from "../_sidebar/sidebar";
import { Suspense } from "react";

export default function DashboardLayout({ children }) {
  return (
    <Suspense fallback={<div>"LOADING..."</div>}>
      <Sidebar />
      {children}
    </Suspense>
  );
}
