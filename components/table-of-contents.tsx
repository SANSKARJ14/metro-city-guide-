import { BookOpen, ChevronRight } from "lucide-react"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Search, Filter, ArrowDownToLine } from "lucide-react"

export default function TableOfContents() {
  return (
    <section className="max-w-4xl mx-auto py-8 px-4 md:px-0">
      <div className="mb-6 flex flex-col md:flex-row gap-4 items-center justify-between">
        <div className="relative w-full md:w-2/3">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
          <input
            type="text"
            placeholder="Search pumps by brand, HP, or type..."
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="flex gap-2 w-full md:w-auto">
          <Button variant="outline" className="flex items-center gap-2">
            <Filter className="h-4 w-4" />
            <span>Filters</span>
          </Button>
          <Button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700">
            <ArrowDownToLine className="h-4 w-4" />
            <span>Download PDF</span>
          </Button>
        </div>
      </div>
      <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
        <CardHeader className="pb-2">
          <CardTitle className="flex items-center text-blue-800 text-2xl">
            <BookOpen className="h-6 w-6 mr-3" />
            What You'll Learn in This Guide
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4 text-gray-700">
            We've organized this comprehensive guide to help you navigate the complex world of water pumps for urban
            Indian homes and flats. From understanding city-specific challenges to finding the perfect match for your
            apartment or villa:
          </p>

          <div className="grid gap-6 mt-6">
            {/* Section 1 */}
            <div>
              <Link
                href="#why-urban-india-needs-the-right-pump"
                className="text-blue-700 hover:text-blue-900 font-semibold text-lg no-underline flex items-center"
              >
                <ChevronRight className="h-5 w-5 mr-1" />
                Why Urban India Needs the Right Pump
              </Link>
              <ul className="ml-7 mt-1 space-y-1 text-gray-700">
                <li className="list-disc text-sm">Delhi NCR's 290 MGD deficit and voltage fluctuations</li>
                <li className="list-disc text-sm">Mumbai's monsoon flooding and high-rise pressure issues</li>
                <li className="list-disc text-sm">Bangalore's deep borewells and sandy water challenges</li>
              </ul>
            </div>

            {/* Section 2 */}
            <div>
              <Link
                href="#top-15-quick-picks-for-every-home"
                className="text-blue-700 hover:text-blue-900 font-semibold text-lg no-underline flex items-center"
              >
                <ChevronRight className="h-5 w-5 mr-1" />
                Top 15 Quick Picks for Every Home
              </Link>
              <ul className="ml-7 mt-1 space-y-1 text-gray-700">
                <li className="list-disc text-sm">Complete comparison table with prices ₹3,200-₹55,000</li>
                <li className="list-disc text-sm">Best for flats, houses, and high-rise apartments</li>
                <li className="list-disc text-sm">Voltage tolerance, TDS resistance, and city-specific picks</li>
              </ul>
            </div>

            {/* Section 3 */}
            <div>
              <Link
                href="#self-priming-pumps-for-tank-filling"
                className="text-blue-700 hover:text-blue-900 font-semibold text-lg no-underline flex items-center"
              >
                <ChevronRight className="h-5 w-5 mr-1" />
                Self-Priming Pumps for Tank Filling
              </Link>
              <ul className="ml-7 mt-1 space-y-1 text-gray-700">
                <li className="list-disc text-sm">Budget Picks Under ₹5,000 for small flats</li>
                <li className="list-disc text-sm">Reliable Picks for Medium Homes (2-3 BHK)</li>
                <li className="list-disc text-sm">Best for overhead tank filling and low-pressure areas</li>
              </ul>
            </div>

            {/* Section 4 */}
            <div>
              <Link
                href="#monoblock-pumps-for-daily-use"
                className="text-blue-700 hover:text-blue-900 font-semibold text-lg no-underline flex items-center"
              >
                <ChevronRight className="h-5 w-5 mr-1" />
                Monoblock Pumps for Daily Use
              </Link>
              <ul className="ml-7 mt-1 space-y-1 text-gray-700">
                <li className="list-disc text-sm">Best for Small & Medium Houses (1-3 BHK)</li>
                <li className="list-disc text-sm">Versatile pumps for general water supply needs</li>
                <li className="list-disc text-sm">2000-3000 LPH flow for reliable daily use</li>
              </ul>
            </div>

            {/* Section 5 */}
            <div>
              <Link
                href="#pressure-boosters-for-low-pressure-flats-villas"
                className="text-blue-700 hover:text-blue-900 font-semibold text-lg no-underline flex items-center"
              >
                <ChevronRight className="h-5 w-5 mr-1" />
                Pressure Boosters for Low-Pressure Flats & Villas
              </Link>
              <ul className="ml-7 mt-1 space-y-1 text-gray-700">
                <li className="list-disc text-sm">Budget Boosters for 1–2 BHK Flats</li>
                <li className="list-disc text-sm">Premium Boosters for 3+ BHK & Luxury Homes</li>
                <li className="list-disc text-sm">Perfect for high-rise apartments and weak municipal supply</li>
              </ul>
            </div>

            {/* Section 6 */}
            <div>
              <Link
                href="#submersible-solar-pumps-for-borewells"
                className="text-blue-700 hover:text-blue-900 font-semibold text-lg no-underline flex items-center"
              >
                <ChevronRight className="h-5 w-5 mr-1" />
                Submersible & Solar Pumps for Borewells
              </Link>
              <ul className="ml-7 mt-1 space-y-1 text-gray-700">
                <li className="list-disc text-sm">Best for Houses & Peri-Urban Homes</li>
                <li className="list-disc text-sm">Deep borewell solutions for Bangalore, Hyderabad</li>
                <li className="list-disc text-sm">Eco-friendly solar options for sustainable homes</li>
              </ul>
            </div>

            {/* Section 7 */}
            <div>
              <Link
                href="#city-specific-smart-tips"
                className="text-blue-700 hover:text-blue-900 font-semibold text-lg no-underline flex items-center"
              >
                <ChevronRight className="h-5 w-5 mr-1" />
                City-Specific Smart Tips
              </Link>
              <ul className="ml-7 mt-1 space-y-1 text-gray-700">
                <li className="list-disc text-sm">Delhi NCR: Voltage fluctuations and high TDS solutions</li>
                <li className="list-disc text-sm">Mumbai: Monsoon-proof pumps and salt air resistance</li>
                <li className="list-disc text-sm">Bangalore: Deep borewell and sandy water handling</li>
              </ul>
            </div>

            {/* Section 8 */}
            <div>
              <Link
                href="#your-perfect-pump-next-steps"
                className="text-blue-700 hover:text-blue-900 font-semibold text-lg no-underline flex items-center"
              >
                <ChevronRight className="h-5 w-5 mr-1" />
                Your Perfect Pump & Next Steps
              </Link>
              <ul className="ml-7 mt-1 space-y-1 text-gray-700">
                <li className="list-disc text-sm">Final recommendations for every urban scenario</li>
                <li className="list-disc text-sm">Installation tips and maintenance guide</li>
                <li className="list-disc text-sm">Where to buy and warranty considerations</li>
              </ul>
            </div>
          </div>

          <div className="flex justify-center mt-4">
            <Button variant="outline" className="text-blue-700 border-blue-300 hover:bg-blue-50">
              View All Categories
            </Button>
          </div>

          <div className="mt-6 bg-white p-4 rounded-lg border border-blue-200 shadow-sm">
            <p className="text-gray-700 font-medium">
              Using this guide, you'll be able to identify the perfect water pump for your specific urban requirements,
              whether you live in a small flat in Mumbai or own a villa in Gurgaon. We've researched extensively across
              12+ cities so you don't have to!
            </p>
            <div className="mt-3 flex items-center justify-between">
              <p className="text-sm text-gray-500">Last updated: December 2025</p>
              <div className="flex items-center gap-1">
                <span className="text-sm font-medium text-gray-700">Share:</span>
                <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="text-blue-600"
                    viewBox="0 0 16 16"
                  >
                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                  </svg>
                </Button>
                <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="text-blue-400"
                    viewBox="0 0 16 16"
                  >
                    <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                  </svg>
                </Button>
                <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="text-green-600"
                    viewBox="0 0 16 16"
                  >
                    <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a7.29.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
                  </svg>
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  )
}
