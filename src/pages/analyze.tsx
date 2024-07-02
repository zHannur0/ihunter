import Image from "next/image";
import RootLayout from "@/layout/RootLayout";
import FileUpload from "@/components/FileUpload";


export default function Home() {
    return (
        <RootLayout>
                <FileUpload/>
        </RootLayout>
    );
}
