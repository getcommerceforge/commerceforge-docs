export type DocLink = {
  href: string;
  label: string;
  description?: string;
};

export type DocSection = {
  title: string;
  items: DocLink[];
};

export const docSections: DocSection[] = [
  {
    title: 'Overview',
    items: [
      {
        href: '/',
        label: 'Introduction',
        description: 'What CommerceForge includes and how the docs are organized.',
      },
    ],
  },
  {
    title: 'Getting Started',
    items: [
      {
        href: '/guides/installation',
        label: 'Installation',
        description: 'Local setup, environment, and first run.',
      },
      {
        href: '/guides/environment',
        label: 'Environment Variables',
        description: 'Required env vars and where to find them in Shopify.',
      },
    ],
  },
  {
    title: 'Storefront Features',
    items: [
      {
        href: '/guides/b2b',
        label: 'B2B Setup',
        description: 'Company locations, buyer context, and quote flows.',
      },
      {
        href: '/guides/internationalization',
        label: 'Internationalization',
        description: 'Locales, RTL, and Shopify Markets routing.',
      },
      {
        href: '/guides/theming',
        label: 'Theming',
        description: 'Tokens, colors, typography, and shadcn/ui customization.',
      },
    ],
  },
  {
    title: 'Deployment',
    items: [
      {
        href: '/guides/deployment',
        label: 'Deploy to Oxygen',
        description: 'CLI, GitHub integration, and production deployment.',
      },
    ],
  },
];

export const docsHomeCards: DocLink[] = docSections.flatMap((section) => section.items);

export function getDocMeta(pathname: string) {
  const normalized = pathname.replace(/\/$/, '') || '/';

  for (const section of docSections) {
    for (const item of section.items) {
      const itemPath = item.href.replace(/\/$/, '') || '/';
      if (itemPath === normalized) {
        return {
          sectionTitle: section.title,
          item,
        };
      }
    }
  }

  return null;
}
