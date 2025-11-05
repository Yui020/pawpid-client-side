import Image from "next/image";
import PawBackground from '@/components/pawBackground';

export default function Faqs() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center bg-bgColor relative z-10 overflow-y:hidden">
      <Image src="/assets/paw-top.png" alt="Coming Soon" width={120} height={120} className="mb-4" />
      <h1 className="text-3xl md:text-3xl font-extrabold text-crimsonRed mb-4"> SOMETHING PAWSOME IS COMING SOON! </h1>
      <p className="text-sm md:text-sm font-poppins text-gray-700 max-w-2xl text-center">
        We’re working on an exciting new Pawpid feature to help more stray animals<br />
        find their forever homes. Check back soon to see how you can make a difference!
      </p>
    </div>
  );
}
