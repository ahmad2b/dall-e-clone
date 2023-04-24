import { Post } from "@prisma/client";
import Image from "next/image";
import Button from "./Button";

const CommunityPost = ({ title, imageUrl, tag }: Post) => {
  return (
    <article className="bg-openAI_Primary flex flex-col p-5 rounded-lg text-white">
      <div className="relative h-[512px] w-auto rounded-lg">
        <Image src={imageUrl} alt={title} fill className="object-contain" />
      </div>

      <h1 className="text-2xl text-white uppercase font-bold tracking-widest sm:mt-2">
        {title}
      </h1>
      <p className="text-yellow-500 mt-2">{tag}</p>
      <Button imageUrl={imageUrl} />
    </article>
  );
};

const Gallery = ({ posts }: GallaryProps) => {
  return (
    <section className="mt-40">
      <h1 className="text-white text-5xl my-4 underline">
        Community Showcases
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        {posts.map((post) => (
          <CommunityPost key={post.id} {...post} />
        ))}
      </div>
    </section>
  );
};

export default Gallery;
