import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPostBySlug, BLOG_POSTS } from "@/lib/blog-posts";

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Yazı bulunamadı" };
  return {
    title: `${post.title} | Blog | Eleythra Derin Teknoloji`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <div className="bg-brand-bg">
      <article className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm font-medium text-brand-accent hover:underline"
        >
          ← Blog
        </Link>
        <header className="mt-6">
          <h1 className="font-heading break-words text-2xl font-bold tracking-tight text-brand-dark sm:text-3xl lg:text-4xl">
            {post.title}
          </h1>
          <div className="mt-4 flex flex-wrap gap-4 text-sm text-brand-dark/70">
            <span>{post.date}</span>
            <span>·</span>
            <span>{post.readTime}</span>
          </div>
        </header>

        <div className="mt-8 overflow-hidden rounded-2xl border border-brand-dark/10 bg-white">
          <div className="relative aspect-[16/10] w-full">
            <Image
              src={post.image}
              alt=""
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 48rem"
              unoptimized
              priority
            />
          </div>
        </div>

        <div className="mt-10 prose prose-brand max-w-none">
          {post.content.map((block, i) =>
            block.type === "subheading" ? (
              <h2
                key={i}
                className="font-heading mt-10 text-xl font-bold text-brand-dark first:mt-0 sm:text-2xl"
              >
                {block.text}
              </h2>
            ) : (
              <p
                key={i}
                className="mt-4 leading-relaxed text-brand-dark/90"
              >
                {block.text}
              </p>
            )
          )}
        </div>

        {/* Küçük CTA */}
        <div className="mt-14 rounded-xl border border-brand-dark/10 bg-white p-6 text-center">
          <h3 className="font-heading text-lg font-bold text-brand-dark">
            Viona hakkında daha fazla bilgi almak ister misiniz?
          </h3>
          <Link
            href="/projelerimiz"
            className="mt-4 inline-flex items-center justify-center rounded-xl bg-brand-accent px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-accent-hover focus:outline-none focus:ring-2 focus:ring-brand-accent focus:ring-offset-2"
          >
            Projelerimizi İnceleyin
          </Link>
        </div>
      </article>
    </div>
  );
}
