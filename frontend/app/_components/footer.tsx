import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative bg-[#001A40] text-white py-12 px-6 bg-[linear-gradient(#ffffff03_1px,transparent_1px),linear-gradient(90deg,#ffffff03_1px,transparent_1px)] bg-[size:20px_20px]">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 opacity-50" />

      <div className="relative max-w-7xl mx-auto">
        {/* Top Section */}
        <div className="grid gap-8 lg:grid-cols-2 items-center mb-6">
          {/* Footer Logo */}
          <div className="flex justify-center lg:justify-start">
            <Image
              src="/images/footer.png"
              alt="Footer Logo"
              width={120}
              height={120}
              className="mx-auto lg:mx-0"
            />
          </div>

          {/* Social Media Icons */}
          <div className="flex justify-center lg:justify-end gap-4">
            {["facebook", "google", "linkedin", "youtube"].map((platform) => (
              <Link key={platform} href="#" className="rounded-full w-8 h-8 overflow-hidden">
                <Image
                  src={`/images/${platform}.png`}
                  alt={platform}
                  width={32}
                  height={32}
                  className="w-full h-full object-cover"
                />
              </Link>
            ))}
          </div>
        </div>

        {/* Divider */}
        <hr className="border-white/20 mb-8" />

        {/* Main Content */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {/* Address Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Address</h3>
            <div className="space-y-2 text-sm text-gray-300">
              <p>Email: <Link href="mailto:career@tickets.com" className="hover:text-white">career@tickets.com</Link></p>
              <p>Address: 89 KG 14 Ave, Kigali</p>
              <p>Phone: <Link href="tel:+250700000" className="hover:text-white">+250700000</Link></p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <nav className="space-y-2 text-sm text-gray-300">
              {["Home", "Program", "About", "Contact Us"].map((item) => (
                <Link key={item} href="#" className="block hover:text-white">{item}</Link>
              ))}
            </nav>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              Join our newsletter to stay updated!
            </h3>
            <div className="flex items-center bg-white rounded-md ">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-grow bg-transparent text-black placeholder:text-gray-500 px-4 py-2 focus:outline-none"
              />
              <button className="bg-blue-600 text-white px-4 py-2 hover:bg-blue-700 transition rounded-r-md">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr className="my-12 border-white/10" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>Copyright © All Rights Reserved SawaPay 2024</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link href="#" className="hover:text-white">Privacy Policy</Link>
            <span>|</span>
            <Link href="#" className="hover:text-white">Terms and Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

