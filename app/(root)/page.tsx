"use client"; // Mark this file as a client component

import { signOut } from "next-auth/react";
import { Button } from "@/components/ui/button";

const Home = () => {
  return (
    <>
      <h1 className="text-3xl font-black text-black">
        Welcome to Next.js World
      </h1>
      <form
        className="px-10 pt-[100px]"
        onSubmit={(e) => {
          e.preventDefault();
          signOut({ callbackUrl: "/sign-in" }); // Use callbackUrl for redirection
        }}
      >
        <Button type="submit">Log out</Button>
      </form>
    </>
  );
};

export default Home;
