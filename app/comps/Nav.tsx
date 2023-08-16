"use client"
import Link from "next/link"

import Row from "./Row"

export default function Nav () {
  return (
    <Row className="flex justify-between items-center">
        <div className="max-w-150">
        <Link href="/">
            <img src="/logo.png" alt="logo" />
        </Link>
        </div>
        <div className="flex">
            <Link href="/" className="mr-4">Home</Link>
            <Link href="/tailwind" className="mr-4">Tailwind</Link>
        </div>
    </Row>
  )
}