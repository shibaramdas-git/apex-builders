// ONLY TYPE DECLARATIONS AND INTERFACES GO HERE
export type NavItem = {
  label: string;
  href: string;
  target: boolean;
};

export type BreadcrumbLink = {
  label: string;
  href: string;
};

export type link = {
  label: string;
  href: string;
  target?: boolean;
  buttonVariant?: "default" | "secondary" | "outline" | null | undefined;
};
