// In future , this hook will return dynamic slugs from sanity cms. For now its hardcore data.
export type linksType = {
  label: string;
  href: string;
  items?: {
    label: string;
    href: string;
  }[];
};
export default function useNavigation() {
  return { home, company, projects, services, articles, contact };
}
const home = {
  label: "HOME",
  href: "/",
};

const company = {
  label: "COMPANY",
  href: "/about",
  items: [
    {
      label: "ABOUT US",
      href: "/about",
    },
    {
      label: "OUR TEAM",
      href: "/about/team",
    },
    {
      label: "CAREER",
      href: "/about/career",
    },
    {
      label: "FAQ",
      href: "/about/faq",
    },
  ],
};

const projects = {
  label: "PROJECTS",
  href: "/projects",
};

const services = {
  label: "SERVICES",
  href: "/services",
  items: [
    {
      label: "CONSTRUCTION SERVICES",
      href: "/services/interior-design",
    },
    {
      label: "PRE-CONSTRUCTION SERVICES",
      href: "/services/exterir-design",
    },
    {
      label: "POST-CONSTRUCTION SERVICES",
      href: "/services/construction-consultant",
    },
    {
      label: "CONSULTATION & ADVISORY",
      href: "/services/house-renovation",
    },
    {
      label:
        "INFRASTRUCTURE DEVELOPMENTINFRASTRUCTURE DEVELOPMENTINFRASTRUCTURE DEVELOPMENT",
      href: "/services/house-renovation",
    },
    {
      label: "CUSTOM SERVICES",
      href: "/services/architechture-building",
    },
  ],
};

const articles = {
  label: "ARTICLES",
  href: "/articles",
};

const contact = {
  label: "CONTACTS",
  href: "/contacts",
};
