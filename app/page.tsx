import Link from "next/link";

export default function Home() {
  return (
    <div className="flex gap-10">
      <Link href="/register">Register page</Link>
      <Link href="/login">Login Page</Link>
    </div>
  );
}
