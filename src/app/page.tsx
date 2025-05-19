import Link from "next/link";

export default function Home() {
  return (
      <div className="flex w-screen w-100 justify-end items-center gap-2 p-5">
          <Link href="/auth/login">Login</Link>
          <Link href="/auth/register">Register</Link>
      </div>
  );
}
