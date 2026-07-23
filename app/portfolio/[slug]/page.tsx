import CloudinaryImage from "@/components/CloudinaryImage";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { connectDB } from "@/lib/mongodb";
import Story from "@/models/Story";
import { notFound } from "next/navigation";
import Gallery from "@/models/Gallery";
import GalleryMasonry from "@/components/GalleryMasonry";
import CommentSection from "@/components/CommentSection";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export default async function StoryPage({ params }: Props) {
  await connectDB();

  const { slug } = await params;

  const story = await Story.findOne({ slug }).lean();

    if (!story) {
      notFound();
    }

    const photos = await Gallery.find({
      storyId: story._id,
    })
      .sort({ order: 1 })
      .lean();

  return (
    <>
      <Navbar />

      <main className="bg-[#FAFAF8] pt-28">

        {/* Hero */}

        <section className="relative min-h-[90vh] overflow-hidden">

          <CloudinaryImage
            src={story.coverImage}
            alt={story.title}
            fill
            preload
            optimizationWidth={1600}
            sizes="100vw"
            className="object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/30 to-black/75" />

          <div className="absolute inset-0 flex items-center justify-center px-6">

            <div className="max-w-4xl text-center text-white">

              <p className="uppercase tracking-[8px] text-sm text-[#E8D7B8]">
                {story.category}
              </p>

              <h1 className="mt-6 font-heading text-5xl font-light leading-[1.1] md:text-7xl lg:text-8xl">
                {story.title}
              </h1>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-sm uppercase tracking-[2px] text-white/80 md:text-base">

                <span>{story.location}</span>

                <span className="text-[#C9A96E]">•</span>

                <span>
                  {story.date
                    ? new Date(story.date).toLocaleDateString("en-GB", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })
                    : ""}
                </span>

              </div>

            </div>

          </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-center text-white">
          <p className="text-[11px] uppercase tracking-[6px] text-white/70">
            Scroll
          </p>

          <div className="mt-3 flex justify-center">
            <div className="h-10 w-px bg-white/60 animate-pulse"></div>
          </div>
        </div>

        </section>

        {/* Story */}

        <section className="py-16">
          <div className="mx-auto max-w-[1900px] px-6">

          <div className="mb-12">
            <span className="inline-block uppercase tracking-[8px] text-sm text-[#B79A5F]">
              Story
            </span>

            <h2 className="mt-3 font-heading text-5xl font-light text-[#3F5A4A]">
              Our Story
            </h2>

            <div className="mt-6 h-px w-20 bg-[#D9C9A8]" />
            
          </div>

          <div className="grid grid-cols-1 items-start gap-20 lg:grid-cols-3">

            {/* Story */}

            <div className="lg:col-span-2">
              <p className="text-[19px] leading-[2.2] text-[#4B5563] whitespace-pre-line">
                {story.description}
              </p>
            </div>

            {/* Details */}

            <div className="lg:sticky lg:top-32 p-8">

              <h3 className="mb-8 font-heading text-4xl font-light text-[#3F5A4A]">
                Details
              </h3>

              <div className="space-y-6">

                <div>
                  <p className="text-xs uppercase tracking-[5px] text-[#B79A5F]">
                    Location
                  </p>

                  <p className="mt-2 text-lg text-[#445A4A]">
                    {story.location}
                  </p>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[5px] text-[#B79A5F]">
                    Category
                  </p>

                  <p className="mt-2 text-lg text-[#445A4A]">
                    {story.category}
                  </p>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[5px] text-[#B79A5F]">
                    Date
                  </p>

                  <p className="mt-2 text-lg text-[#445A4A]">
                    {story.date
                      ? new Date(story.date).toLocaleDateString("en-GB", {
                          day: "numeric",
                          month: "long",
                          year: "numeric",
                        })
                      : "-"}
                  </p>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[5px] text-[#B79A5F]">
                    Photography
                  </p>

                  <p className="mt-2 text-lg text-[#445A4A]">
                    Kutti Story Photography
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>

       </section>

        {/* Gallery */}

        <section className="mx-auto max-w-[1900px] px-6 py-24">

          <div className="mb-20 text-center">

            <span className="inline-block uppercase tracking-[8px] text-sm text-[#B79A5F]">
              Portfolio
            </span>

            <h2 className="mt-3 font-heading text-5xl font-light text-[#3F5A4A]">
              Gallery
            </h2>

            <div className="mx-auto mt-6 h-px w-24 bg-[#D9C9A8]" />

          </div>

          {photos.length === 0 ? (

            <p className="text-center text-gray-500">
              No photos available.
            </p>

          ) : (

            <GalleryMasonry
              photos={photos.map((photo: any) => ({
                _id: photo._id.toString(),
                image: photo.image,
                title: photo.title,
              }))}
            />

          )}

        </section>

        {/* Comments */}

        <CommentSection storyId={story._id.toString()} />

      </main>

      <Footer />
    </>
  );
}