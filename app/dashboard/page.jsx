import { Suspense } from "react";

export default function Dashboard() {
  return (
    <Suspense fallback={<div>"LOADING..."</div>}>
      <main className="flex-1">test app</main>
    </Suspense>
  );
}
