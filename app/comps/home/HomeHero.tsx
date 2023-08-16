import Section from "../Section"
import Row from "../Row"
import SwipeText from "../SwipeText"
import Marquee from "../Marquee"

export default function HomeHero() {
    return (
    <>
    <Section className="flex flex-col items-center justify-between p-24">
      <Row className="flex flex-col items-center justify-center">
        <h1 className="text-6xl font-bold text-center">
          J2 Marketing X Mindscrape
        </h1>
        <SwipeText text="npm i big dawg" className="mt-5"/>
      </Row>
    </Section>
    <Marquee baseVelocity={.7}>
          <p className="text-5xl font-bold text-center">
           YOU&apos;RE USING THE J2 BOILERPLATE   YOU&apos;RE USING THE J2 BOILERPLATE
          </p>
    </Marquee>
    </>
)}