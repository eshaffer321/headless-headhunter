const navigation = {
    main: [], // Foot Links, when those are required
    social: [
      {
        name: 'YouTube',
        href: 'https://www.youtube.com/@headlessheadhunter/',
        icon: (props: React.SVGProps<SVGSVGElement>) => (
          <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
            <path
              fillRule="evenodd"
              d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"
              clipRule="evenodd"
            />
          </svg>
        ),
      },
      {
        name: 'Twitch',
        href: 'https://www.twitch.tv/headlessheadhunter',
        icon: (props: React.SVGProps<SVGSVGElement>) => (
          <svg
            fill="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
          >
            <path d="M2 3.993A2 2 0 0 1 4.006 2h15.988A2 2 0 0 1 22 3.993v12.014A2 2 0 0 1 20.006 18h-4.38L12 21.622V18H7.993L2 12.007V3.993zm5.86 10.95h4.645v3.161l2.262-2.261h3.89V4.858H5.862v7.945l2 2.14-.002.001zm3.51-7.084h1.48v4.976h-1.48V7.86zm3.573 0h1.48v4.976h-1.48V7.86z" />
          </svg>
        ),
      },
      {
        name: 'LinkedIn',
        href: 'https://www.linkedin.com/in/lee-korelitz',
        icon: (props: React.SVGProps<SVGSVGElement>) => (
          <svg
            fill="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
          >
            <path d="M19 0H5C2.24 0 0 2.24 0 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5V5c0-2.76-2.24-5-5-5zM8.34 19H5.67V8.66h2.67V19zM7 7.46a1.54 1.54 0 01-1.54-1.54A1.54 1.54 0 017 4.38a1.54 1.54 0 011.54 1.54A1.54 1.54 0 017 7.46zm12 11.54h-2.67v-5.54c0-1.32-.02-3-1.83-3s-2.1 1.43-2.1 2.91V19H9.67V8.66h2.56v1.4h.04c.36-.68 1.25-1.4 2.57-1.4 2.75 0 3.26 1.81 3.26 4.16V19z" />
          </svg>
        ),
      },
      {
        name: 'X',
        href: 'https://twitter.com/Guntherheadless',
        icon: (props: React.SVGProps<SVGSVGElement>) => (
          <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
            <path d="M13.6823 10.6218L20.2391 3H18.6854L12.9921 9.61788L8.44486 3H3.2002L10.0765 13.0074L3.2002 21H4.75404L10.7663 14.0113L15.5685 21H20.8131L13.6819 10.6218H13.6823ZM11.5541 13.0956L10.8574 12.0991L5.31391 4.16971H7.70053L12.1742 10.5689L12.8709 11.5655L18.6861 19.8835H16.2995L11.5541 13.096V13.0956Z" />
          </svg>
        ),
      }
    ],
  }
  
  export default function Footer() {
    return (
      <footer>
        <div className="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
          <nav aria-label="Footer" className="-mb-6 flex flex-wrap justify-center gap-x-12 gap-y-3 text-sm/6">
            {navigation.main.map((item) => (
              <a key={item.name} href={item.href} className="text-gray-600 hover:text-gray-900">
                {item.name}
              </a>
            ))}
          </nav>
          <div className="mt-16 flex justify-center gap-x-10">
            {navigation.social.map((item) => (
              <a key={item.name} href={item.href} className="text-gray-600 hover:text-gray-800">
                <span className="sr-only">{item.name}</span>
                <item.icon aria-hidden="true" className="size-6" />
              </a>
            ))}
          </div>
          <p className="mt-10 text-center text-sm/6 text-gray-600">&copy; 2025 The Headless Headhunter, Inc. All rights reserved.</p>
        </div>
      </footer>
    )
  }
  