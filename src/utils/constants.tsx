export const SITE_NAME = "Website Name";
export const LOGO_HORIZONTAL = "/vercel.svg";

export const DEFAULT_SPACING = 30;

export const BREAKPOINTS = {
  laptop: 1440,
  tablet: 1080,
  phone: 480,
};

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  {
    href: "/services",
    label: "Services",
    subMenu: [
      { href: "/service-1", label: "Service 1" },
      { href: "/service-2", label: "Service 2" },
      { href: "/service-3", label: "Service 3" },
    ],
  },
  { href: "/contact", label: "Contact", subMenu: [
    { href: "/request-a-quote", label: "Request a Quote" }
  ] },
];
