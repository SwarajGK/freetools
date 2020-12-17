export default function handler(req, res) {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.end(
    JSON.stringify({
      speedlab: {
        header: {
          logo: { imageLink: '', link: '/', title: 'BrowserStack' },
          productName: 'Speedlab',
          mainNav: [
            {
              label: 'Products',
              subMenu: {
                website: {
                  label: 'Test your websites',
                  menus: [
                    { label: 'Live', subLabel: 'interactive cross browser testing', link: '/live', icon: '' },
                    { label: 'Automate', subLabel: 'Selenium testing at scale', link: '/live', icon: '' },
                    { label: 'Percy', subLabel: 'Visual testing & review', link: '/live', icon: '' },
                  ],
                },
                app: {
                  label: 'Test your mobile apps',
                  menus: [
                    { label: 'App Live', subLabel: 'Interactive native & hybrid app testing', link: '/live', icon: '' },
                    {
                      label: 'App Automate',
                      subLabel: 'Test automation for native & hybrid mobile apps',
                      link: '/live',
                      icon: '',
                    },
                  ],
                },
                team: { label: 'For Teams', icon: '', menus: [{ label: 'Enterprise', link: '' }] },
                tools: {
                  label: 'Tools',
                  icon: '',
                  menus: [
                    { label: 'Screenshots', link: '/screenshots' },
                    { label: 'Responsive', link: '/responsive' },
                    { label: 'Speedlab', link: '/speedlab' },
                  ],
                },
              },
              footer: {
                text: 'Use BrowserStack with your favourite products. See our ',
                linkText: 'Integrations',
                link: '/',
                icon: '',
              },
            },
            {
              label: 'Developers',
              subMenus: [
                { label: 'Documentation', link: '' },
                { label: 'Support', link: '' },
                { label: 'Status', link: '' },
                { label: 'Release Notes', link: '' },
                { label: 'Open Source', link: '' },
                { label: 'Events', link: '' },
              ],
            },
            { label: 'Live for Teams', link: '' },
            { label: 'Pricing', link: '' },
            { label: 'Sign in', link: '' },
            { label: 'FREE TRIAL', type: 'hollow-button', link: '/sign_up' },
            { type: 'search' },
          ],
        },
        footer: {
          links: [
            {
              label: 'PRODUCTS',
              menu: [
                {
                  label: 'Live',
                  link: '/live',
                },
                {
                  label: 'Automate',
                  link: '/automate',
                },
                {
                  label: 'Percy',
                  link: '/percy',
                  isNew: true
                },
                {
                  label: 'App Live',
                  link: '/app-live',
                },
                {
                  label: 'App Automate',
                  link: '/app-automate',
                },
                {
                  label: 'Screenshots',
                  link: '/screenshots',
                },
                {
                  label: 'Responsive',
                  link: '/responsive',
                },
                {
                  label: 'Enterprise',
                  link: '/enterprise',
                },
                {
                  label: 'SpeedLab',
                  link: '/speedLab',
                  isNew: true
                },
              ],
            },
            {
              label: 'PLATFORM',
              menu: [
                { label: 'Browsers & Devices', link: 'browsers & devices' },
                { label: 'Data Centers', link: 'data centers' },
                { label: 'Mobile Features', link: 'mobile features' },
                { label: 'Security', link: 'security' },
              ],
            },
            {
              label: 'RESOURCES',
              menu: [
                { label: 'Test on Right Devices', link: 'test on right devices' },
                { label: 'Support', link: 'support' },
                { label: 'Status', link: 'status' },
                { label: 'Release Notes', link: 'release notes' },
                { label: 'Case Studies', link: 'case studies' },
                { label: 'Blog', link: 'blog' },
                { label: 'Events', link: 'events' },
              ],
            },
            {
              label: 'COMPANY',
              menu: [
                { label: 'About Us', link: 'about us' },
                { label: 'Customers', link: 'customers' },
                { label: 'Careers', link: 'careers', isHiring: true },
                { label: 'Open Source', link: 'open source' },
                { label: 'Partners', link: 'partners' },
                { label: 'Press', link: 'press' },
                { label: 'Contact', link: 'contact' },
              ],
            },
            {
              label: 'SOCIAL',
              menu: [],
            },
          ],
          logo: 'https://d2ogrdw2mh0rsl.cloudfront.net/production/images/static/header/header-logo.svg',
          doMore: {
            label: 'Do more with BrowserStack',
            icon: '',
            links: [{
              label: 'Test In IE',
              link: ''
            }, {
              label: 'Mobile Emulators',
              link: ''
            }, {
              label: 'Test on iPhone',
              link: ''
            }, {
              label: 'Test on iPad',
              link: ''
            }, {
              label: 'Test on Galaxy',
              link: ''
            }, {
              label: 'Android Testing',
              link: ''
            }, {
              label: 'iOS Testing',
              link: ''
            }, {
              label: 'Guide',
              link: ''
            }, {
              label: 'Cross Browser Testing',
              link: ''
            }, {
              label: 'Emulators &amp; Simulators',
              link: ''
            }, {
              label: 'Selenium',
              link: ''
            }, {
              label: 'Cypress',
              link: ''
            }, {
              label: 'Android Emulators',
              link: ''
            }, {
              label: 'Responsive Design',
              link: ''
            }]
          },
          bottom: {
            label: '© 2011-2020 BrowserStack - The Most Reliable Mobile App & Cross Browser Testing Company',
            links: [
              {
                label: 'Terms of Service',
                link: '',
              },
              {
                label: 'Privacy Policy',
                link: '',
              },
              {
                label: 'Cookie Policy',
                link: '',
              },
              {
                label: 'Sitemap',
                link: '',
              },
            ],
          },
        },
      },
    })
  );
}
