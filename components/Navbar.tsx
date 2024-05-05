'use client'
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "./ui/breadcrumb";
import { Button } from "./ui/button";
import Logo from "./Logo";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 bg-transparent backdrop-blur-md">

      <Logo />

      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/movies">Movies</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/drama">Drama</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/more">Explore more</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/contactus">Contact us</BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <Button variant="default">
        Login
      </Button>

    </nav>
  );
}
