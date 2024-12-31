import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="font-bold text-xl text-gray-900">ChessProgress</div>
        <Button variant="outline">Sign In</Button>
      </div>
    </header>
  );
}
