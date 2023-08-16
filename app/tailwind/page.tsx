"use client"
import Section from "../comps/Section"
import Row from "../comps/Row"
import Button from "../comps/Button"
import { useState } from "react"

export default function Tailwind() {
    const [light, setLight] = useState(false)


    return (
        <Section className={light ? "bg-gray-300" : "bg-black"}>
            <Row>
                <a
                onClick={() => setLight(!light)}
                className={"mt-10 max-w-half block rounded-md bg-white px-3 py-2 text-center text-sm font-semibold leading-6 text-black shadow-sm hover:bg-gray-200 hover:text-gray-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" + (light ? " bg-black " : "")}
                >
                {light ? "Dark Mode" : "Light Mode"}
                </a>
            </Row>
            <Row>
                <h1 className="mb-5">Headings</h1>
                <h1>This is an h1</h1>
                <h1 className="text-h1-alt mb-5">This is an alternate h1</h1>
                <h2>This is an h2</h2>
                <h2 className="text-h2-alt mb-5">This is an alternate h2</h2>
                <h3>This is an h3</h3>
            </Row>
            <Row>
                <h1 className="mb-5 text-h1">Body</h1>
                <p>This is body text</p>
                <p className="text-body-alt">This is alternate body text</p>
            </Row>
            <Row>
                <h1>Buttons</h1>
                <p>*Note* button colors will need to be hard set to their hex code in the Tailwind addComponent plugin</p>
                <p className="mb-5">If the buttons are more complicated than simple tailwind, make them into components and disregard</p>
                <div className="flex justify-between max-w-half">
                <Button text="Primary" internal href='/tailwind' ariaLabel="primary button example"/>
                <button className="btn btn-secondary">Secondary</button>
                <button className="btn btn-tertiary">Tertiary</button>
                </div>
            </Row>
            <Row>
                <h1>Colors</h1>

                <h2>Primary</h2>
                <div className="min-h-50 bg-primary mb-10"/>
                <h2>Secondary</h2>
                <div className="min-h-50 bg-secondary mb-10"/>
                <h2>Tertiary</h2>
                <div className="min-h-50 bg-tertiary mb-10"/>
                <h2>Quaternary</h2>
                <div className="min-h-50 bg-quaternary mb-10"/>
                <h2>Black</h2>
                <div className="min-h-50 bg-black mb-10"/>
                <h2>White</h2>
                <div className="min-h-50 bg-white mb-10"/>
            </Row>
        </Section>
    )
}