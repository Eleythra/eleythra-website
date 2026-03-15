import Image from "next/image";
import Link from "next/link";
import { getFeaturedPost, getOtherPosts } from "@/lib/blog-posts";

export const metadata = {
  title: "Blog | Eleythra Derin Teknoloji",
  description:
    "Yapay zekâ, misafir deneyimi ve teknoloji dünyasındaki gelişmeler hakkında içerikler.",
};

export default function BlogPage() {
  const featured = getFeaturedPost();
  const others = getOtherPosts();

  return (
    <div className="bg-brand-bg">
      {/* Hero — lacivert, diğer sayfalarla aynı */}
      <section className="relative overflow-hidden bg-[#0B1320] px-4 py-16 text-white sm:px-6 sm:py-20 lg:px-8">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 70% 60% at 70% 40%, rgba(0,168,232,0.06) 0%, transparent 50%), linear-gradient(180deg, #0B1320 0%, #0F1B2D 100%)",
          }}
        />
        <div className="relative z-10 mx-auto max-w-2xl text-center">
          <h1 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">
            Blog
          </h1>
          <p className="mt-4 text-lg text-white/85">
            Yapay zekâ, misafir deneyimi ve teknoloji dünyasındaki gelişmeler hakkında içerikler.
          </p>
        </div>
      </section>

      {/* Öne çıkan yazı — sol görsel, sağ metin */}
      <section className="px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <h2 className="sr-only">Öne çıkan yazı</h2>
          <Link
            href={`/blog/${featured.slug}`}
            className="group block overflow-hidden rounded-2xl border border-brand-dark/10 bg-white shadow-sm transition-shadow hover:shadow-md"
          >
            <div className="grid gap-0 md:grid-cols-2">
              <div className="relative aspect-[4/3] md:aspect-auto md:min-h-[280px]">
                <Image
                  src={featured.image}
                  alt=""
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  unoptimized
                  priority
                />
              </div>
              <div className="flex flex-col justify-center p-6 sm:p-8 md:p-10">
                <h3 className="font-heading text-xl font-bold text-brand-dark sm:text-2xl lg:text-3xl">
                  {featured.title}
                </h3>
                <p className="mt-3 text-brand-dark/85 leading-relaxed">
                  {featured.excerpt}
                </p>
                <div className="mt-5 flex flex-wrap gap-4 text-sm text-brand-dark/70">
                  <span>{featured.date}</span>
                  <span>·</span>
                  <span>{featured.readTime}</span>
                </div>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-accent group-hover:underline">
                  Yazıyı Oku
                  <span aria-hidden>→</span>
                </span>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Diğer yazılar — grid 3 sütun masaüstü, 1 mobil */}
      {others.length > 0 && (
        <section className="border-t border-brand-dark/10 bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <h2 className="font-heading text-xl font-bold text-brand-dark sm:text-2xl">
              Diğer yazılar
            </h2>
            <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {others.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group flex flex-col overflow-hidden rounded-xl border border-brand-dark/10 bg-brand-bg transition-shadow hover:shadow-md"
                >
                  <div className="relative aspect-[16/10] shrink-0">
                    <Image
                      src={post.image}
                      alt=""
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      unoptimized
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <h3 className="font-heading font-bold text-brand-dark line-clamp-2 group-hover:text-brand-accent">
                      {post.title}
                    </h3>
                    <p className="mt-2 line-clamp-2 text-sm text-brand-dark/80 leading-relaxed">
                      {post.excerpt}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2 text-xs text-brand-dark/60">
                      <span>{post.date}</span>
                      <span>·</span>
                      <span>{post.readTime}</span>
                    </div>
                    <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-brand-accent group-hover:underline">
                      Devamını Oku
                      <span aria-hidden>→</span>
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
