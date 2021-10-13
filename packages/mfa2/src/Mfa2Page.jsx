import React, { useState } from "react";
import { Button } from "@deepakpatil/mfs3/components/Button";

const ShowModal = React.lazy(() => import("app_mfa1/ShowModal"));

export default function Mfa2Page() {
  const [showModal, setshowModal] = useState();

  return (
    <div>
      <h1>Mfa2 Page</h1>
      <Button onClick={() => setshowModal(true)}>Open Modal</Button>
      {showModal && (
        <React.Suspense fallback="LOADING">
          <div>
            <UpsellModal />
          </div>
        </React.Suspense>
      )}
    </div>
  );
}
