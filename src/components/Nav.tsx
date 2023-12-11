import { theme } from "@/app/layoutBody";
import { NAVIGATION } from "@/utils/constants"
import { Switch } from "@nextui-org/react";
import { useAtom } from "jotai";
import Link from "next/link"
import { SunIcon, MoonIcon } from '@heroicons/react/24/solid'

export default function Nav() {
    const [AppTheme, setAppTheme] = useAtom(theme);
    const handleThemeSwitch = (e:any) => {
        // console.log(e);
        e ? setAppTheme('light') : setAppTheme('dark');
    }

    return(
        <header className="fixed top-0 left-0 right-0 z-50">
            <nav className="flex justify-between items-center p-8" aria-label="Navigation">
                <div>
                    <Link href="/">Logo goes here</Link>
                </div>

                <div className="flex gap-8">
                    {NAVIGATION.map((link, i) => (
                        <div key={i}>
                            <Link href={link.url} aria-label={link.url}>{link.title}</Link>
                        </div>
                    ))}

                    <Switch
                        defaultSelected
                        isSelected={AppTheme === "light" ? true : false}
                        size="lg"
                        color="primary"
                        startContent={<SunIcon/>}
                        endContent={<MoonIcon />}
                        onValueChange={handleThemeSwitch}
                    />
                </div>
            </nav>
        </header>
    )
}