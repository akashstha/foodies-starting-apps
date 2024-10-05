"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./NavLink.module.css";
const NavLink = ({href,children}) =>{
    const path = usePathname();
    return(<>
      <Link href={href} className={path.startsWith(href) ? `${styles.links} ${styles.active}` : `${styles.links}`}>{children}</Link>
    </>)
}

export default NavLink;