import { Suspense } from "react";
import EditForm from "./EditForm"; // Assuming your component file

export default function Edit() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <EditForm />
        </Suspense>
    );
}
