import Banner from "@/components/Banner";
import { fetchAllArticles } from "../actions";
import Custom404 from "@/components/404";
import { Container } from "@/components/ui/container";
import ArticleCard, {
  IArticle,
} from "@/components/modules/articles/articleCard";

export default async function Services() {
  const articles = await fetchAllArticles();
  if (!articles) {
    return <Custom404 />;
  }

  return (
    <>
      <Banner
        heading="Articles"
        path="/articles"
        bgImageSrc="/buildings/photodune-3979102-superb-backyard-m-1024x754.jpg"
      />
      <Container className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-16">
        {articles &&
          articles.map((article: IArticle) => (
            <ArticleCard key={article.slug.current} article={article} />
          ))}
      </Container>
    </>
  );
}
