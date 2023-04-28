import { Component, For } from "solid-js";

export interface CardProps {
  collection: string;
  title: string;
  subtitle: string;
  content: string;
}

const Card: Component<CardProps> = ({
  title,
  subtitle,
  content,
  collection,
}) => (
  <div
    class="rounded-md bg-white p-6 shadow-md transition ease-in-out
  hover:scale-105 hover:bg-gray-300 hover:-outline-offset-1"
  >
    <div class="mb-2 text-lg font-medium">
      <a href={`/${collection}/${title}`} class="underline underline-offset-1">
        {title}
      </a>
    </div>
    <div class="mb-4 text-gray-500">{subtitle}</div>
    <div>{content}</div>
  </div>
);

export interface SidebarProps {
  title: string;
  content: string;
}

const Sidebar: Component<SidebarProps> = ({ title, content }) => (
  <div class="h-screen bg-white p-6 shadow-md">
    <div class="mb-2 text-lg font-medium">{title}</div>
    <div>{content}</div>
  </div>
);

export const Dashboard: Component<{ cards: CardProps[] }> = (props) => (
  <div class="grid w-full grid-cols-4">
    <div class="col-span-1">
      <Sidebar
        title="Sidebar"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce non leo non nibh cursus ultrices."
      />
    </div>
    <div class="container col-span-3 py-6 px-4">
      <div class="col-span-3 grid grid-cols-1 gap-4 md:grid-cols-3">
        <For each={props.cards}>{(card) => <Card {...card} />}</For>
      </div>
    </div>
  </div>
);
