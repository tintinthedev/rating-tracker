import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="font-bold text-xl text-gray-900">ChessProgress</div>
        <Link
          href="https://x.com/tim_is_coding"
          target="_blank"
          className="text-purple-600"
        >
          Meet the maker
        </Link>
      </div>
    </header>
  );
}
