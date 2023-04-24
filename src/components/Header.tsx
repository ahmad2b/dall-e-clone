import Image from "next/image";
import logo from "../../public/logo.png";
import Link from "next/link";

const Header = () => {
  return (
    <header className="absolute top-0 w-full bg-openAI_Primary p-8 text-white">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <div className="flex items-center space-x-2">
            <Image
              src={logo}
              alt="Dall-E"
              className="object-contain rounded-full h-16 w-16"
            />
            <h1 className="font-bold text-2xl">Dall-E</h1>
          </div>
        </Link>
        {/* tag line */}
        <p className="text-gray-500 text-md hidden xl:block mt-2">
          "I tried drawing a perfect circle, but it ended up looking like a
          potato, so i decided to let the AI for the artwork instead."
        </p>

        <Link className="btn" href="/share">
          Gallery
        </Link>
      </div>
    </header>
  );
};

export default Header;
