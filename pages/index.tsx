import React from "react";
import Link from "next/link";
import { Main } from "~/layouts/Main";

const IndexPage: React.FC = () => {
  return (
    <Main title="Home | Next.js + TypeScript Example">
      <h1>Hello Next.js 👋</h1>
      <p>
        <Link href="/about">
          <a>About</a>
        </Link>
      </p>
    </Main>
  );
};

export default IndexPage;
