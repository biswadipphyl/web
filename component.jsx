/**
 * v0 by Vercel.
 * @see https://v0.dev/t/cdpgls4pZuw
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"

export default function Component() {
  return (
    <div key="1" className="flex flex-col min-h-[100dvh] dark:bg-gray-950 dark:text-gray-50">
      <header className="px-4 lg:px-6 h-14 flex items-center justify-between">
        <Link className="flex items-center justify-center" href="#">
          <SchoolIcon className="h-6 w-6 text-yellow-500" />
          <span className="ml-2 text-lg font-bold">SchoolHub</span>
          <span className="ml-2 text-yellow-500 dark:text-yellow-400">Empowering Education</span>
        </Link>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-950 dark:bg-gray-900">
          <div className="container px-4 md:px-6">
            <div className="grid items-center gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-gray-950 px-3 py-1 text-sm dark:bg-gray-700 text-yellow-500">
                  School Management
                </div>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-yellow-500">
                  Streamline Your School's Operations
                </h1>
                <p className="max-w-[600px] text-gray-400 md:text-xl dark:text-gray-300">
                  SchoolHub is a comprehensive software solution that helps schools manage their day-to-day operations,
                  from student enrollment to staff management and financial tracking.
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button
                    className="border-yellow-500 hover:bg-yellow-500 hover:text-gray-950 dark:border-yellow-400 dark:hover:bg-yellow-400 dark:hover:text-gray-950"
                    variant="secondary"
                  >
                    Learn More
                  </Button>
                </div>
              </div>
              <img
                alt="School Management"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
                height="310"
                src="/placeholder.svg"
                width="550"
              />
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-950 dark:bg-gray-900" id="features">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-gray-950 px-4 py-2 text-2xl font-bold dark:bg-gray-700 text-yellow-500">
                  Key Features
                </div>
                <h3 className="text-3xl font-bold tracking-tighter sm:text-5xl text-yellow-500">
                  Streamline Your School's Operations
                </h3>
                <p className="max-w-[900px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-300">
                  SchoolHub offers a comprehensive suite of tools to help schools manage their day-to-day operations,
                  from student enrollment to staff management and financial tracking.
                </p>
              </div>
            </div>
            <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
              <div className="grid gap-1">
                <h3 className="text-lg font-bold text-yellow-500">Student Management</h3>
                <p className="text-sm text-gray-400 dark:text-gray-300">
                  Easily manage student enrollment, attendance, and academic records.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold text-yellow-500">Teacher and Staff Management</h3>
                <p className="text-sm text-gray-400 dark:text-gray-300">
                  Streamline staff onboarding, payroll, and performance tracking.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold text-yellow-500">Exam Management</h3>
                <p className="text-sm text-gray-400 dark:text-gray-300">
                  Manage exam scheduling, seating plans, marksheets, and report cards.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold text-yellow-500">Class Management</h3>
                <p className="text-sm text-gray-400 dark:text-gray-300">
                  Manage class routines, subject management, and teacher assignments.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold text-yellow-500">Communication Tools</h3>
                <p className="text-sm text-gray-400 dark:text-gray-300">
                  Manage notice boards for holidays, events, messaging, and emailing.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold text-yellow-500">Fees Management</h3>
                <p className="text-sm text-gray-400 dark:text-gray-300">
                  Manage fee collection, discounts, and tracking of due fees.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold text-yellow-500">Accounting Features</h3>
                <p className="text-sm text-gray-400 dark:text-gray-300">
                  Manage profit/loss statements, income/expense tracking, and various payment methods.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold text-yellow-500">Comprehensive Reports</h3>
                <p className="text-sm text-gray-400 dark:text-gray-300">
                  Generate detailed reports for classes, students, attendance, and progress.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold text-yellow-500">System Customization</h3>
                <p className="text-sm text-gray-400 dark:text-gray-300">
                  Tailor the system to meet specific client needs.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-950 dark:bg-gray-900" id="pricing">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-gray-950 px-3 py-1 text-sm dark:bg-gray-700 text-yellow-500">
                  Pricing
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-yellow-500">
                  Affordable Pricing for Schools
                </h2>
                <p className="max-w-[900px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-300">
                  SchoolHub offers flexible pricing plans to fit the needs of schools of all sizes.
                </p>
              </div>
              <div className="mx-auto grid w-full max-w-4xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2">
                <Card className="space-y-4 rounded-lg border border-gray-800 bg-gray-950 p-6 shadow-md dark:border-gray-800 dark:bg-gray-900">
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-yellow-500">Basic</h3>
                    <p className="text-4xl font-bold text-yellow-500">₨20,000</p>
                    <p className="text-sm text-gray-400 dark:text-gray-300">per month + ₨5,000 installation fee</p>
                  </div>
                  <ul className="space-y-2 text-sm text-gray-400 dark:text-gray-300">
                    <li>
                      <CheckIcon className="mr-2 inline-block h-4 w-4 text-green-500" />
                      Student Management
                    </li>
                    <li>
                      <CheckIcon className="mr-2 inline-block h-4 w-4 text-green-500" />
                      Teacher and Staff Management
                    </li>
                    <li>
                      <CheckIcon className="mr-2 inline-block h-4 w-4 text-green-500" />
                      Exam Management
                    </li>
                    <li>
                      <CheckIcon className="mr-2 inline-block h-4 w-4 text-green-500" />
                      Class Management
                    </li>
                    <li>
                      <CheckIcon className="mr-2 inline-block h-4 w-4 text-green-500" />
                      Communication Tools
                    </li>
                    <li>
                      <CheckIcon className="mr-2 inline-block h-4 w-4 text-green-500" />
                      Fees Management
                    </li>
                    <li>
                      <CheckIcon className="mr-2 inline-block h-4 w-4 text-green-500" />
                      Accounting Features
                    </li>
                    <li>
                      <CheckIcon className="mr-2 inline-block h-4 w-4 text-green-500" />
                      Comprehensive Reports
                    </li>
                    <li>
                      <XIcon className="mr-2 inline-block h-4 w-4 text-red-500" />
                      iOS and Android App
                    </li>
                    <li>
                      <XIcon className="mr-2 inline-block h-4 w-4 text-red-500" />
                      Website CMS
                    </li>
                    <li>
                      <CheckIcon className="mr-2 inline-block h-4 w-4 text-green-500" />
                      System Customization
                    </li>
                  </ul>
                </Card>
                <Card className="space-y-4 rounded-lg border border-gray-800 bg-gray-950 p-6 shadow-md dark:border-gray-800 dark:bg-gray-900">
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-yellow-500">Pro</h3>
                    <p className="text-4xl font-bold text-yellow-500">₨30,000</p>
                    <p className="text-sm text-gray-400 dark:text-gray-300">per month + ₨8,000 installation fee</p>
                  </div>
                  <ul className="space-y-2 text-sm text-gray-400 dark:text-gray-300">
                    <li>
                      <CheckIcon className="mr-2 inline-block h-4 w-4 text-green-500" />
                      Student Management
                    </li>
                    <li>
                      <CheckIcon className="mr-2 inline-block h-4 w-4 text-green-500" />
                      Teacher and Staff Management
                    </li>
                    <li>
                      <CheckIcon className="mr-2 inline-block h-4 w-4 text-green-500" />
                      Exam Management
                    </li>
                    <li>
                      <CheckIcon className="mr-2 inline-block h-4 w-4 text-green-500" />
                      Class Management
                    </li>
                    <li>
                      <CheckIcon className="mr-2 inline-block h-4 w-4 text-green-500" />
                      Communication Tools
                    </li>
                    <li>
                      <CheckIcon className="mr-2 inline-block h-4 w-4 text-green-500" />
                      Fees Management
                    </li>
                    <li>
                      <CheckIcon className="mr-2 inline-block h-4 w-4 text-green-500" />
                      Accounting Features
                    </li>
                    <li>
                      <CheckIcon className="mr-2 inline-block h-4 w-4 text-green-500" />
                      Comprehensive Reports
                    </li>
                    <li>
                      <CheckIcon className="mr-2 inline-block h-4 w-4 text-green-500" />
                      iOS and Android App
                    </li>
                    <li>
                      <CheckIcon className="mr-2 inline-block h-4 w-4 text-green-500" />
                      Website CMS
                    </li>
                    <li>
                      <CheckIcon className="mr-2 inline-block h-4 w-4 text-green-500" />
                      System Customization
                    </li>
                  </ul>
                </Card>
              </div>
              <div className="mt-8 w-full max-w-4xl">
                <Card className="bg-gray-900 dark:bg-gray-900">
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-yellow-500">Get in Touch</h3>
                    <p className="text-sm text-gray-400 dark:text-gray-300">
                      Fill out the form below and we'll get back to you as soon as possible.
                    </p>
                  </div>
                  <form className="grid gap-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Name</Label>
                        <Input id="name" placeholder="Enter your name" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="organization">Organization</Label>
                        <Input id="organization" placeholder="Enter your organization name" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" placeholder="Enter your email" type="email" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone</Label>
                      <Input id="phone" placeholder="Enter your phone number" type="tel" />
                    </div>
                    <Button className="w-full" type="submit">
                      Submit
                    </Button>
                  </form>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

function CheckIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  )
}


function SchoolIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14 22v-4a2 2 0 1 0-4 0v4" />
      <path d="m18 10 4 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-8l4-2" />
      <path d="M18 5v17" />
      <path d="m4 6 8-4 8 4" />
      <path d="M6 5v17" />
      <circle cx="12" cy="9" r="2" />
    </svg>
  )
}


function XIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  )
}