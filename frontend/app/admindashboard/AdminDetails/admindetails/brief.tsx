import { Suspense } from "react";
import AdminDetails from "./projectBrief"; // Assuming your component file

export default function Brief() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <AdminDetails />
        </Suspense>
    );
}
