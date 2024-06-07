"use client";
import Image from "next/image";
import { useSession, signOut } from "next-auth/react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../../../components/ui/carousel";
import { COURSOREL1, COURSOREL2, COURSOREL3, IMAGE1 } from "../../../../public";
import Autoplay from "embla-carousel-autoplay";
import { useRouter } from "next/router";

export default function LandingPage() {
  const { data: session, status } = useSession();

  const handleSignOut = () => {
    signOut({ callbackUrl: "/login" }); // Redirect to the login page after sign out
  };

  if (status === "loading") {
    return (
      <div className="bg-white rounded-lg shadow-md p-4 animate-pulse">
        <div className="w-2/3 h-4 bg-gray-300 rounded mb-2"></div>

        <div className="w-full h-8 bg-gray-300 rounded mb-2"></div>
        <div className="w-full h-8 bg-gray-300 rounded mb-2"></div>
        <div className="w-1/2 h-8 bg-gray-300 rounded"></div>
      </div>
    );
  }

  return (
    <section className="w-full p-3">
      <div className="w-full flex justify-between items-center p-2 mb-12">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 3000,
            }),
          ]}
          className="w-4/5"
        >
          <CarouselContent>
            <CarouselItem className="flex justify-center items-center">
              <Image
                alt="Carousel Image 1"
                src={COURSOREL1}
                width="500"
                height="500"
              />
            </CarouselItem>
            <CarouselItem className="flex justify-center items-center">
              <Image
                alt="Carousel Image 2"
                src={COURSOREL2}
                width="500"
                height="500"
              />
            </CarouselItem>
            <CarouselItem className="flex justify-center items-center">
              <Image
                alt="Carousel Image 3"
                src={COURSOREL3}
                width="500"
                height="500"
              />
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
        <div className="flex flex-col items-center">
          {session && (
            <div className="mb-4 text-lg font-semibold">
              Welcome, {session.user.name}
            </div>
          )}
          <button
            onClick={handleSignOut}
            className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded transition-colors duration-300"
          >
            Sign Out
          </button>
        </div>
      </div>
      <div
        className="flex mt-10 mx-10 justify-between items-center p-12 border-black rounded-md border-[1px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white"
        id="about"
      >
        <div className="mr-10 lg:mr-28 font-bold text-[10px] lg:text-lg">
          <div className="text-3xl mb-8">ABOUT</div>
          Welcome to Doctor.ai, a platform using machine learning to predict
          diseases accurately. Our tools analyze patient data and symptoms to
          identify health issues quickly. With an easy-to-use interface,
          Doctor.ai supports informed decisions for better health outcomes.
          Experience advanced disease prediction with Doctor.ai
        </div>
        <Image
          alt="Doctor.ai Logo"
          src={IMAGE1}
          className="rounded-lg w-24 lg:w-[150px]"
        />
      </div>
    </section>
  );
}
