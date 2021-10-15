import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav>
      <Link href="/">
        <a>Acceuil</a>
      </Link>
      <Link href="/blog/article">
        <a> Article</a>
      </Link>
      <Link href="/contact">
        <a> Contact</a>
      </Link>
    </nav>
  );
}
