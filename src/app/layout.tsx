"use client"

import LenisSmoothScroll from '@/utils/LenisSmoothScroll'
import './globals.css'
import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import * as React from "react"
import {NextUIProvider} from "@nextui-org/react"
import { Providers } from '../utils/next-ui-providers'

// export const metadata: Metadata = {
//     title: 'Create Next App',
//     description: 'Generated by create next app',
// }

export default function RootLayout({ children}: {children: React.ReactNode}) {

    return (
        <html lang="en">
            <body>

                <Providers>
                    <Nav />
                    <main>
                        {children}
                    </main>
                    <Footer />
                    <LenisSmoothScroll />
                </Providers>

            </body>
        </html>
    )
  }