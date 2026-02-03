import { Suspense } from "react";
import PawrfectMatchContent from "./PawrfectMatchContent";

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <PawrfectMatchContent />
    </Suspense>
  );
}
