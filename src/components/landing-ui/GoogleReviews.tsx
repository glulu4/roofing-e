import HeaderText from "../HeaderText";
import ReviewsCarouselClient from "./ReviewsCarousel";

export const revalidate = 3600; // cache for 1 hour

type Review = {
  comment: string;
  createdTime: string;
  reviewId: string;
  reviewer: {displayName: string; profilePhotoUrl?: string};
  starRating: string | number;
  updateTime: string;
};

async function getReviews(): Promise<Review[]> {
  const res = await fetch(
    "https://featurable.com/api/v1/widgets/1267cf54-a64c-403f-8fed-1c9d518c78fa",
    {next: {revalidate}}
  );
  if (!res.ok) return [];
  const data = await res.json();
  // keep first 12 for faster render
  return (data.reviews ?? []).slice(0, 12) as Review[];
}

export default async function GoogleReviews() {
  const reviews = await getReviews();

  return (
    <div className="px-6 mx-auto sm:w-5/6">
      <HeaderText className="text-center py-12 mx-auto w-5/6">
        Hear From Our Happy Home Owners
      </HeaderText>
      {/* Client component only handles interactivity */}
      <ReviewsCarouselClient reviews={reviews} />
    </div>
  );
}
