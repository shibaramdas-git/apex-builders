import Link from "next/link";

type IBreadScrumb = {
  path: string;
};

export default function BreadScrumb({ path }: IBreadScrumb) {
  const pathSegment = path
    .split("/")
    .filter((segment) => segment)
    .map((segment) => ({
      name: segment.toUpperCase(),
      href: `/${segment.toLowerCase()}`,
    }));

  return (
    <nav className="text-xs md:text-sm font-medium underline-offset-4">
      <Link href="/" className="hover:underline">
        HOME
      </Link>
      {pathSegment.map((crumb, index) => (
        <span key={index}>
          <span className="mx-2">/</span>
          {index === pathSegment.length - 1 ? (
            <span>{crumb.name}</span>
          ) : (
            <Link href={crumb.href} className="hover:underline">
              {crumb.name}
            </Link>
          )}
        </span>
      ))}
    </nav>
  );
}
