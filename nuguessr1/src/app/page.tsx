import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function HomePage() {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center bg-cover bg-center bg-no-repeat relative"
      style={{
        backgroundImage:
          "url('https://news.northeastern.edu/wp-content/uploads/2021/08/Northeastern_University_aerial_view.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <main className="text-center z-10 relative">
        <h1 className="text-5xl font-bold mb-4 text-white">NUGuessr</h1>
        <p className="text-xl mb-2 text-gray-200">Think you know your school well?</p>
        <p className="text-xl mb-8 text-gray-200">Want to familiarize yourself with the campus?</p>
        <Button className="mb-4 bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-6 rounded-full text-lg">
          Sign up to play now!
        </Button>
        <div>
         <Link href="/play" className="text-gray-200 hover:text-white underline text-lg">
          Continue as a guest
        </Link>

        </div>
      </main>
    </div>
  )
}