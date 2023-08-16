import Section from "../Section"
import Row from "../Row"

const tiers = [


    {
      name: 'Sanity.io',
      id: 'tier-basic',
      href: 'https://www.sanity.io/docs/create-a-sanity-project',
      task: { taskDesc: 'CMS Setup', subDesc: 'View the docs below' },
      button: 'Sanity Documentation',
      description: 'npm create sanity@latest',
      features: [
        'login type Google, use info@goj2.com',
        'create a new project',
        'name project to client',
        'start from clean template, or blog',
      ],
    },
    {
      name: 'tailwind.config.ts',
      id: 'tier-essential',
      href: '/tailwind',
      task: { taskDesc: 'Style Defaults', subDesc: 'Use the testing page below to configure your default styles' },
      button: 'Tailwind Testing Page',
      description: 'Use design system from Figma',
      features: ['heading fonts', 'body fonts', 'buttons', 'colors'],
    },
    {
      name: 'Organize Assets',
      id: 'tier-growth',
      href: 'https://j2marketing.teamwork.com/spaces/web-sops/page/home',
      task: { taskDesc: 'Asset Checklist', subDesc: 'Double check you have everything you need' },
      button: 'Web SOPs',
      description: 'Keep track of assets by asking the Project Manager to add them to the project descripton',
      features: [
        'figma link',
        'dropbox link',
        'domain location',
        'any additional notes from the client',
        'any additional notes from the designer',
        'any additional notes from the lead developer',
      ],
    },
  ]
  
export default function Example() {
    return (
        <Section className="py-32">
            <Row>
                <div className="mx-auto max-w-4xl sm:text-center">
                <h2 className="text-base font-semibold leading-7 text-white">Getting Started</h2>
                <p className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">
                    Hey, You&apos;ve got some work to do.
                </p>
                </div>
                <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white sm:text-center">
                    Complete the steps outlined below and get rolling on the new build.
                </p>
                <div className="mt-20 flow-root">
                <div className="isolate -mt-16 grid max-w-sm grid-cols-1 gap-y-16 divide-y divide-gray-100 sm:mx-auto lg:-mx-8 lg:mt-0 lg:max-w-none lg:grid-cols-3 lg:divide-x lg:divide-y-0 xl:-mx-4">
                    {tiers.map((tier) => (
                    <div key={tier.id} className="pt-16 lg:px-8 lg:pt-0 xl:px-14">
                        <h3 id={tier.id} className="text-base font-semibold leading-7 text-white">
                        {tier.name}
                        </h3>
                        <p className="mt-6 flex items-baseline gap-x-1">
                        <span className="text-5xl font-bold tracking-tight text-white">{tier.task.taskDesc}</span>
                        </p>
                        <p className="mt-3 text-sm leading-6 text-white">{tier.task.subDesc}</p>
                        <a
                        href={tier.href}
                        aria-describedby={tier.id}
                        className="mt-10 block rounded-md bg-white px-3 py-2 text-center text-sm font-semibold leading-6 text-black shadow-sm hover:bg-gray-200 hover:text-gray-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                        {tier.button}
                        </a>
                        <p className="mt-10 text-sm font-semibold leading-6 text-white">{tier.description}</p>
                        <ul role="list" className="mt-6 space-y-3 text-sm leading-6 text-white">
                        {tier.features.map((feature) => (
                            <li key={feature} className="flex gap-x-3">
                            -{feature}
                            </li>
                        ))}
                        </ul>
                    </div>
                    ))}
                </div>
                </div>
            </Row>
        </Section>
    )
}