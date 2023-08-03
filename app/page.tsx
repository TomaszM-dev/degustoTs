import Link from "next/link";

export default function Home() {
  return (
    <div className="flex gap-10 mt-20">
      <Link href="/dashboard/register">Register page</Link>
      <Link href="/dashboard/login">Login Page</Link>
    </div>
  );
}
