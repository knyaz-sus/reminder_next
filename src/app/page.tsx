import { Button } from "@/components/Button";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-svh flex-col gap-2 w-full flex items-center justify-center">
      <h1>Home</h1>
      <div className="flex gap-2">
        <Button asChild>
          <Link href="/auth">Auth</Link>
        </Button>
        <Button asChild>
          <Link href="/app">App</Link>
        </Button>
      </div>
    </div>
  );
}
