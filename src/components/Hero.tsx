import type { Component } from "solid-js";

export const Hero: Component = () => (
  <section class="bg-gray-100 py-16">
    <div class="mx-auto flex max-w-screen-xl flex-col-reverse items-center justify-between px-4 lg:flex-row">
      <div class="lg:w-1/2 lg:pr-16">
        <h1 class="mb-4 text-4xl font-bold leading-tight text-gray-800 lg:text-5xl">
          Welcome to Club Name
        </h1>
        <p class="mb-8 text-lg text-gray-700 lg:text-xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget
          mauris vel justo efficitur consequat.
        </p>
        <a
          href="/404"
          class="rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-600"
        >
          Join us now
        </a>
      </div>
      <div class="lg:w-1/2">
        <img
          src="https://source.unsplash.com/random/800x600"
          alt="Hero image"
          class="rounded-lg shadow-md"
        />
      </div>
    </div>
  </section>
);
