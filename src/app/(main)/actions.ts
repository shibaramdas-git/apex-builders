import { client } from "@/sanity/lib/client";
import { PAGE_QUERY } from "@/sanity/queries/page";
import { PROJECT_QUERY } from "@/sanity/queries/project";
import { PROJECT_LIST_QUERY } from "@/sanity/queries/projectList";

export default async function fetchSanityPageBySlug({
  slug,
}: {
  slug: string;
}) {
  const data = await client.fetch(PAGE_QUERY, { slug });
  return data;
}
export async function fetchAllProjects() {
  const data = await client.fetch(PROJECT_LIST_QUERY);
  return data;
}
export async function fetchAllServices() {
  const data = await client.fetch(PROJECT_LIST_QUERY);
  return data;
}
export async function fetchAllArticles() {
  const data = await client.fetch(PROJECT_LIST_QUERY);
  return data;
}

export async function fetchSanityProjectBySlug({ slug }: { slug: string }) {
  const data = await client.fetch(PROJECT_QUERY, { slug });

  return data;
}
