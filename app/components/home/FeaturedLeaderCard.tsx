import Image from "next/image";

export default function FeaturedLeaderCard({
  name,
  title,
  image,
}: {
  name: string;
  title: string;
  image: string;
}) {
  return (
    <div className="relative mx-auto w-full max-w-[360px]">
      <div className="relative h-[340px] w-full overflow-hidden rounded-lg sm:h-[400px]">
        <Image
          src={image}
          alt={name}
          fill
          sizes="(max-width: 1024px) 90vw, 360px"
          className="object-cover object-top"
        />
        <div className="absolute inset-x-0 bottom-0 bg-white py-3 pl-4 pr-4">
          <p className="text-[13px] font-bold uppercase leading-tight text-[var(--ink)] break-words">
            {name}
          </p>
          <p className="mt-1 text-[10px] font-medium uppercase leading-snug tracking-wide text-[var(--ink-soft)] break-words">
            {title}
          </p>
        </div>
      </div>
    </div>
  );
}
