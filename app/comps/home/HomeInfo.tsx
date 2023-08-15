import Section from "../Section"
import Row from "../Row"

const tiers = [


    {
      name: 'Sanity.io',
      id: 'tier-basic',
      href: 'https://www.sanity.io/docs/create-a-sanity-project',
      price: { monthly: '$15', annually: '$12' },
      button: 'Sanity Documentation',
      description: 'Everything necessary to get started.',
      features: ['5 products', 'Up to 1,000 subscribers', 'Basic analytics', '48-hour support response time'],
    },
    {
      name: 'tailwind.config.ts',
      id: 'tier-essential',
      href: '#',
      price: { monthly: '$30', annually: '$24' },
      button: 'Tailwind Testing Page',
      description: 'Everything in Basic, plus essential tools for growing your business.',
      features: [
        '25 products',
        'Up to 10,000 subscribers',
        'Advanced analytics',
        '24-hour support response time',
        'Marketing automations',
      ],
    },
    {
      name: 'Growth',
      id: 'tier-growth',
      href: '#',
      price: { monthly: '$60', annually: '$48' },
      button: 'Sanity Documentation',
      description: 'Everything in Essential, plus collaboration tools and deeper insights.',
      features: [
        'Unlimited products',
        'Unlimited subscribers',
        'Advanced analytics',
        '1-hour, dedicated support response time',
        'Marketing automations',
        'Custom reporting tools',
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
                        <span className="text-5xl font-bold tracking-tight text-white">{tier.price.monthly}</span>
                        <span className="text-sm font-semibold leading-6 text-gray-600">/month</span>
                        </p>
                        <p className="mt-3 text-sm leading-6 text-white">{tier.price.annually} per month if paid annually</p>
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
                            X
                            {feature}
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