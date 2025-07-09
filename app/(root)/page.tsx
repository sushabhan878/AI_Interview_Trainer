import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

const HomePage = () => {
  return (
    <>
      <section className="card-cta">
        <div className="flex flex-col gap-6 max-w-lg">
          <h2>Get Interview redy with AI-Powered Practice & Feedback</h2>
          <p className="lext-lg">
            practice on real interview questions & get instant feedback from AI
          </p>
          <Button asChild className="btn-primary max-sm:w-full">
            <Link href="/interview">Start an Interview</Link>
          </Button>
        </div>
        <Image src="/robot.png" alt="robot" width={400} height={400} className="max-sm:hidden" />
      </section>
      <section className="flex flex-col gap-6 mt-8">
        <h2>Your Interviews</h2>
        <div className="interviews-section">
          <p>You haven't taken any interviews yet</p>
        </div>
      </section>
      <section className="flex flex-col gap-6 mt-8">
        <h2>Take an Interview</h2>
        <div className="interviews-section">
          <p>There are no interviews available</p>
        </div>
      </section>
    </>
  )
}

export default HomePage
