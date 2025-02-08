"use client"

import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function PlayPage() {
  return (
    <div className="min-h-screen flex flex-col bg-neutral-100 text-black">
      {/* Header */}
      <header className="w-full bg-red-600 p-4 text-center">
        <h1 className="text-4xl font-bold text-white">NUGuessr</h1>
      </header>

      {/* Main content */}
      <main className="flex-grow flex flex-col items-center justify-center p-8 relative">
        <Card className="w-full max-w-3xl bg-white border-red-600">
          <CardContent className="p-6">
            <h2 className="text-3xl font-bold mb-4 text-center text-red-600">Guess the Location!</h2>
            <div className="relative w-full mb-6">
              <Image
                src="https://placehold.co/600x400"
                alt="Campus location"
                width={600}
                height={400}
                className="rounded-md w-full h-auto"
              />
            </div>
            <div className="flex justify-center">
              <Button asChild className="bg-red-600 hover:bg-red-700 text-white">
                <Link href="/">Back to Home</Link>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Fake map */}
        <div className="absolute bottom-4 right-4 w-64 h-64 bg-white rounded-md overflow-hidden shadow-lg">
          <Image
            src="https://placehold.co/256x256"
            alt="Map"
            width={256}
            height={256}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <span className="text-lg font-semibold text-white">Campus Map</span>
          </div>
        </div>
      </main>
    </div>
  )
}

