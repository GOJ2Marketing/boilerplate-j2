import { getPageData } from "@/utils/fetches/page";
import { notFound } from "next/navigation";

export default async function Page({ params }:any) {
    const data = ((await getPageData(params.slug)).data[0]);

    if(!data) {
        return notFound()
    } else {
        
        console.log("Data:", data);
        console.log("Sections: ", data.sections)

        return (
            <section>
                <div data-row>
                    {JSON.stringify(data)}
                </div>
            </section>
        )
    }

}