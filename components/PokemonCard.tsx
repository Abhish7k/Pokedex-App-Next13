"use client";

import Link from "next/link";

interface PokemonCardProps {
  name: string;
}

export const PokemonCard = ({ name }: PokemonCardProps) => {
  return (
    <div>
      <div className="m-3 border rounded-lg border-spacing-3 border-transparent px-5 py-4 transition-colors dark:border-gray-500 hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 ">
        <Link href={name} className="group " key={name + "Card"}>
          <h2 className="text-2xl font-semibold ">
            {name.charAt(0).toUpperCase() + name.slice(1)}
          </h2>
        </Link>
      </div>
    </div>
  );
};
