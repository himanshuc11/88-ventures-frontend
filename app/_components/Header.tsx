import Image from "next/image";

function Header() {
  return (
    <header className="border-b-primary-white py-4 flex w-full border-b-2">
      <section className="px-10 flex items-center">
        <Image src="/logo.png" alt="company-logo" width="40" height="40" />
        <h1 className="text-text-blue px-5 text-lg">Your Projects</h1>
      </section>
    </header>
  );
}

export default Header;
