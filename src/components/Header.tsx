import Image from "next/image";
import logo from "../../public/img/Logo.svg";

export default function Header (){
    return (
        <div className={"flex h-[90px] w-full justify-between items-center px-20"}>
            <Image src={logo} alt={"logo"}></Image>
        </div>
    )
}