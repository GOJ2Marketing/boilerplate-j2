import Hero1 from "./Hero/Hero1";
import Hero2 from "./Hero/Hero2";

export default function SectionSelector({ data }:any) {
    // console.log("Hero Data: ", data);

    return (
        <>
            {/* Hero Selection */}
            {data.section == 'hero' && data.heroType == 'hero1' && <Hero1 data={data} />}
            {data.section == 'hero' && data.heroType == 'hero2' && <Hero2 data={data} />}
        </>
    )
}