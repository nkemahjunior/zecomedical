import Image from "next/image";
import Link from "next/link";

 
 
export default function LogoBlack() {
    return (
      <Link href={"/"} className="block">
        <div className="logo-parent relative h-[4rem] w-[20rem]  ml-8 mt-8">
          <Image
            src={"/logo_email.png"}
            alt="zecomedical logo"
            fill
            style={{ objectFit: "contain" }}
          />
        </div>
      </Link>
    );
}