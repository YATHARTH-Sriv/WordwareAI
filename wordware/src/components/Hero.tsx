"use client";
import Image from "next/image";
import React from "react";
import { Carousel, Card } from "../components/ui/apple-cards-carousel";

const DummyContent = () => {
  return (
    <>
      {[...Array(3)].map((_, index) => (
        <div
          key={"dummy-content" + index}
          className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
        >
          <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
            <span className="font-bold text-neutral-700 dark:text-neutral-200">
              The first rule of Apple club is that you boast about Apple club.
            </span>{" "}
            Keep a journal, quickly jot down a grocery list, and take amazing
            class notes. Want to convert those notes to text? No problem.
            Langotiya jeetu ka mara hua yaar is ready to capture every thought.
          </p>
          <Image
            src="https://assets.aceternity.com/macbook.png"
            alt="Macbook mockup from Aceternity UI"
            height={500}
            width={500}
            className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
          />
        </div>
      ))}
    </>
  );
};

const data = [
  {
    title: "Try all the models for a single question",
    src: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=3556&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <DummyContent />,
  },
  {
    title: "Basic React agent",
    src: "https://images.unsplash.com/photo-1531554694128-c4c6665f59c2?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <DummyContent />,
  },
  {
    title: "Personal Website Creation",
    src: "https://images.unsplash.com/photo-1713869791518-a770879e60dc?q=80&w=2333&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <DummyContent />,
  },
  {
    title: "Turn Yourself into a Lego Figure 🖼️",
    src: "https://images.unsplash.com/photo-1599202860130-f600f4948364?q=80&w=2515&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <DummyContent />,
  },
  {
    title: "🔦 Research founders to help VC prepare for the meeting",
    src: "https://images.unsplash.com/photo-1602081957921-9137a5d6eaee?q=80&w=2793&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <DummyContent />,
  },
  {
    title: "📚 AuthorGPT",
    src: "https://images.unsplash.com/photo-1511984804822-e16ba72f5848?q=80&w=2048&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <DummyContent />,
  },
];

function Hero() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <section className="flex flex-col items-center mt-4 justify-center px-6 py-16 bg-white dark:bg-gray-900">
      {/* Heading Section */}
      <div className="text-center max-w-4xl">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
          Build your AI apps 20x faster
        </h1>
        <p className="text-2xl md:text-3xl text-orange-500 mb-6">
          with Natural Language Programming
        </p>
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300">
          Wordware enables anyone to develop, iterate and deploy useful AI Agents.
        </p>
      </div>

      {/* Call-to-Action Buttons */}
      <div className="flex flex-col md:flex-row items-center mt-8 space-y-4 md:space-y-0 md:space-x-6">
        <button className="px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition">
          Book For Demo
        </button>
        <button className="px-6 py-3 bg-gray-200 text-gray-800 rounded-full hover:bg-gray-300 transition">
          Start For Free
        </button>
      </div>

      <div className="w-full mt-16">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center">
          Try WordApps built by our community
        </h2>
        <Carousel items={cards} />
      </div>

      {/* Centered Informational Text */}
      <div className="text-center max-w-2xl mt-12">
        <p className="text-5xl  text-gray-800 dark:text-gray-200 mb-4">
          Empowering developers, enabling everyone.
        </p>
        <p className="text-md  text-gray-600 dark:text-gray-400">
          Wordware combines the best aspects of software with the power of natural language.
          Remove constraints of traditional no-code tools and empower every team member to
          iterate independently.
        </p>
        <p className="text-2xl text-gray-800 mt-5">Join over 10,000 users from AI tinkerers to large enterprises.</p>
      </div>
    </section>
  );
}

export default Hero;
