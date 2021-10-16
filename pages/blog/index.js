import next from "next";
import React from "react";
import Link from "next/link";

export default function index() {
  return (
    <div>
      <h1>le Blog</h1>
      <Link href={`/blog/super mega produit`}>
        <a>super mega produit</a>
      </Link>
    </div>
  );
}
