"use client";

import {useState} from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google"
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { NavbarSidebar } from "./navbar-sidebar";
import { MenuIcon } from "lucide-react";


const poppins = Poppins ({
    subsets: ["latin"],
    weight: ["700"]
});

interface NavbarItemProps {
    href: string;
    children: React.ReactNode;
    isActive?: boolean;
}

const NavbarItem = ({
    href,
    children,
    isActive,
}: NavbarItemProps) => {
    return (
        <Button
        asChild
        size="sm"
        variant= "ghost"
        className={cn("bg-transparent rounded-full hover:border-primary border-transparent px-3.5 text-lg",
            isActive && "bg-purple-300 text-white hover:bg-purple-400 hover:text-white",
        )}
        >
            <Link href={href}>
                {children}
            </Link>
            

        </Button>
    );
};

const NavbarItems = [
    {href: "/", children: "Home"},
    {href: "/about", children: "About"},
    {href: "/pricing", children: "Pricing"},
    {href: "/contact", children: "Contact"},
    {href: "/features", children: "Features"},
]

export const Navbar = () => {
    const pathname = usePathname()
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    return (
        <nav className="h-15 flex border-b justify-between font-medium bg-white">
            <Link href="/" className="pl-6 flex items-center">
            <span className={cn("font-bold text-3xl", poppins.className)}>
                Haru
            </span>
            </Link>

            <NavbarSidebar
            items={NavbarItems}
            open={isSidebarOpen}
            onOpenChange={setIsSidebarOpen}
            />

            <div className="items-center gap-4 hidden lg:flex">
                {NavbarItems.map((item) => (
                    <NavbarItem
                    key={item.href}
                    href={item.href}
                    isActive={pathname === item.href}
                    >
                        {item.children}
                    </NavbarItem>
                ))}
            </div>

            <div className="items-center hidden lg:flex ">
                <Button
                asChild
                size= "default"
                variant="secondary"
                className="border-0 rounded-2xl px-11 h-11 bg-white hover:bg-purple-400 transition-colors"
                >
                    <Link href="/sign-in">
                    Login
                    </Link>
                </Button>
                <Button
                asChild
                size= "default"
                variant="secondary"
                className="border-0 rounded-2xl px-12 h-11 bg-white hover:bg-purple-400 transition-colors"
                >
                    <Link href="/sign-up">
                    Register
                    </Link>
                </Button>
            </div>
            <div className="flex lg:hidden items-center justify-center">
                <Button
                variant="ghost"
                className="size-12 border-transparent bg-white"
                onClick={() => setIsSidebarOpen(true)}
                >
                    <MenuIcon />
                </Button>
            </div>
        </nav>
    )
}