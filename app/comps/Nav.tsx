"use client"
import Link from "next/link"

import Row from "./Row"

export default function Nav () {
  return (
    <Row className="flex justify-between items-center">
        <div className="max-w-150">
            <img src="/logo.png" alt="logo" />
        </div>
        <div className="flex">
            <Link href="/" className="mr-4">Home</Link>
            <Link href="/about" className="mr-4">About</Link>
            <Link href="/contact">Contact</Link>
        </div>
    </Row>
  )
}