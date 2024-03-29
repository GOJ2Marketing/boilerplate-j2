import './globals.css'
import type { Metadata } from 'next'
import * as React from "react"
import { Provider as JotaiProvider } from 'jotai'
import LayoutBody from './layoutBody'

export const metadata: Metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
}

export default function RootLayout({ children}: {children: React.ReactNode}) {
    return (
        <JotaiProvider>
                <LayoutBody>
                    {children}
                </LayoutBody>
        </JotaiProvider>
    )
  }