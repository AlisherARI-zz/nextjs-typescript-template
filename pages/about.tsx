import React from "react";
import Link from "next/link";
import { Main } from "~/layouts/Main";

const AboutPage: React.FC = () => (
  <Main title="About | Next.js + TypeScript Example">
    <h1>About</h1>
    <p>This is the about page</p>
    <p>
      <Link href="/">
        <a>Go home</a>
      </Link>
    </p>
  </Main>
);

export default AboutPage;
