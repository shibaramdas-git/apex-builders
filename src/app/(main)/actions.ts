import { client } from "@/sanity/lib/client";
import { PAGE_QUERY } from "@/sanity/queries/page";

export default async function fetchSanityPageBySlug({
  slug,
}: {
  slug: string;
}) {
  const data = await client.fetch(PAGE_QUERY, { slug });
  return data;
}
