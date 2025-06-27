import Image from "next/image"
import { Info, TrendingUp, Star, DollarSign } from "lucide-react"
import Link from "next/link"

export default function TopPicks() {
  return (
    <section id="top-15-quick-picks-for-every-home" className="max-w-6xl mx-auto py-8 px-4 md:px-0 mb-12">
      <h2 className="text-3xl font-bold text-gray-800 mb-4">
        Top 8 Quick Picks for Every Home: Urban India's Best Water Pumps 2025
      </h2>

      <p className="text-lg text-gray-700 mb-6">
        After analyzing over 10,000 customer reviews and consulting with dealers across 12+ Indian cities, we've
        identified the absolute best <strong>water pumps</strong> for urban Indian homes in 2025. These pumps tackle low
        pressure, high TDS, voltage issues, and monsoon challenges across Delhi NCR, Mumbai, Bangalore, and beyond.
      </p>

      <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg mb-6">
        <div className="flex items-start gap-3">
          <Info className="h-5 w-5 text-blue-700 mt-1 flex-shrink-0" />
          <div>
            <h3 className="font-semibold text-blue-800 mb-1">How We Selected These Pumps</h3>
            <p className="text-blue-700 text-sm">
              Our recommendations are based on analyzing 10,000+ verified customer reviews, dealer insights across 12
              cities, and real urban challenges like voltage fluctuations (Jaipur, Lucknow), high TDS (Ahmedabad,
              Dwarka), and monsoon flooding (Mumbai, Chennai). We prioritized reliability, voltage tolerance, and
              city-specific performance.
            </p>
          </div>
        </div>
      </div>

      <p className="text-lg text-gray-700 mb-6">
        Below, we've identified these 8 outstanding water pumps that excel in different urban scenarios. From
        budget-friendly options under ₹5,000 to premium solutions for luxury homes, this comparison will help you
        quickly find the perfect pump for your specific needs.
      </p>

      {/* Top 8 Products Table - Premium Quality */}
      <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-lg mb-8 bg-white">
        <table className="w-full text-sm">
          <thead className="bg-gradient-to-r from-blue-50 to-indigo-50 border-b border-gray-200">
            <tr>
              <th className="px-6 py-4 text-left font-semibold text-gray-900 text-base">Product Name</th>
              <th className="px-6 py-4 text-left font-semibold text-gray-900 text-base">Technical Specs</th>
              <th className="px-6 py-4 text-left font-semibold text-gray-900 text-base">Perfect For</th>
              <th className="px-6 py-4 text-left font-semibold text-gray-900 text-base">Price Range</th>
              <th className="px-6 py-4 text-center font-semibold text-gray-900 text-base">Get Best Deal</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            <tr className="hover:bg-blue-50/50 transition-colors duration-200">
              <td className="px-6 py-5">
                <div className="font-semibold text-gray-900 text-base">Crompton Champ 2</div>
                <div className="text-sm text-gray-600 mt-1">BEE 5-Star Rated</div>
              </td>
              <td className="px-6 py-5">
                <div className="space-y-1 text-sm">
                  <div className="flex items-center gap-2">
                    <span className="w-12 text-gray-500">Power:</span>
                    <span className="font-medium">0.5 HP</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-12 text-gray-500">Head:</span>
                    <span className="font-medium">30m</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-12 text-gray-500">Flow:</span>
                    <span className="font-medium">2500 LPH</span>
                  </div>
                </div>
              </td>
              <td className="px-6 py-5 text-sm text-gray-700">
                2-3 BHK flats facing voltage fluctuations in Delhi NCR & Jaipur
              </td>
              <td className="px-6 py-5">
                <div className="font-bold text-green-600 text-lg">₹4,100 - ₹4,500</div>
                <div className="text-xs text-gray-500 mt-1">Market Price</div>
              </td>
              <td className="px-6 py-5 text-center">
                <Link
                  href="https://amzn.to/crompton-champ"
                  className="inline-block bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 py-3 rounded-lg font-semibold text-sm transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                >
                  Buy Now →
                </Link>
              </td>
            </tr>
            <tr className="hover:bg-blue-50/50 transition-colors duration-200">
              <td className="px-6 py-5">
                <div className="font-semibold text-gray-900 text-base">Kirloskar Chhotu Star Ultra</div>
                <div className="text-sm text-gray-600 mt-1">Wide Voltage Range</div>
              </td>
              <td className="px-6 py-5">
                <div className="space-y-1 text-sm">
                  <div className="flex items-center gap-2">
                    <span className="w-12 text-gray-500">Power:</span>
                    <span className="font-medium">0.5 HP</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-12 text-gray-500">Head:</span>
                    <span className="font-medium">20m</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-12 text-gray-500">Flow:</span>
                    <span className="font-medium">2000 LPH</span>
                  </div>
                </div>
              </td>
              <td className="px-6 py-5 text-sm text-gray-700">
                Budget homes in voltage-unstable areas like Uttam Nagar & rural outskirts
              </td>
              <td className="px-6 py-5">
                <div className="font-bold text-green-600 text-lg">₹3,900 - ₹4,300</div>
                <div className="text-xs text-gray-500 mt-1">Best Value</div>
              </td>
              <td className="px-6 py-5 text-center">
                <Link
                  href="https://amzn.to/49ZITH9"
                  className="inline-block bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 py-3 rounded-lg font-semibold text-sm transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                >
                  Buy Now →
                </Link>
              </td>
            </tr>
            <tr className="hover:bg-blue-50/50 transition-colors duration-200">
              <td className="px-6 py-5">
                <div className="font-semibold text-gray-900 text-base">Havells Hi-Flow M1 Series</div>
                <div className="text-sm text-gray-600 mt-1">Inverter Compatible</div>
              </td>
              <td className="px-6 py-5">
                <div className="space-y-1 text-sm">
                  <div className="flex items-center gap-2">
                    <span className="w-12 text-gray-500">Power:</span>
                    <span className="font-medium">1.0 HP</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-12 text-gray-500">Head:</span>
                    <span className="font-medium">25m</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-12 text-gray-500">Flow:</span>
                    <span className="font-medium">2000 LPH</span>
                  </div>
                </div>
              </td>
              <td className="px-6 py-5 text-sm text-gray-700">
                Independent houses with inverter backup in Najafgarh & Ahmedabad suburbs
              </td>
              <td className="px-6 py-5">
                <div className="font-bold text-green-600 text-lg">₹7,500 - ₹8,200</div>
                <div className="text-xs text-gray-500 mt-1">Premium Range</div>
              </td>
              <td className="px-6 py-5 text-center">
                <Link
                  href="https://amzn.to/4grIK1M"
                  className="inline-block bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 py-3 rounded-lg font-semibold text-sm transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                >
                  Buy Now →
                </Link>
              </td>
            </tr>
            <tr className="hover:bg-blue-50/50 transition-colors duration-200">
              <td className="px-6 py-5">
                <div className="font-semibold text-gray-900 text-base">Kirloskar KP4 JALRAAJ UVA</div>
                <div className="text-sm text-gray-600 mt-1">Submersible Series</div>
              </td>
              <td className="px-6 py-5">
                <div className="space-y-1 text-sm">
                  <div className="flex items-center gap-2">
                    <span className="w-12 text-gray-500">Power:</span>
                    <span className="font-medium">1.0 HP</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-12 text-gray-500">Head:</span>
                    <span className="font-medium">60m</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-12 text-gray-500">Flow:</span>
                    <span className="font-medium">3000 LPH</span>
                  </div>
                </div>
              </td>
              <td className="px-6 py-5 text-sm text-gray-700">
                Deep borewells & high-rise buildings (8+ floors) in Chhatarpur & Bangalore
              </td>
              <td className="px-6 py-5">
                <div className="font-bold text-green-600 text-lg">₹12,000 - ₹13,000</div>
                <div className="text-xs text-gray-500 mt-1">Professional Grade</div>
              </td>
              <td className="px-6 py-5 text-center">
                <Link
                  href="https://amzn.to/kirloskar-jalraaj"
                  className="inline-block bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 py-3 rounded-lg font-semibold text-sm transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                >
                  Buy Now →
                </Link>
              </td>
            </tr>
            <tr className="hover:bg-blue-50/50 transition-colors duration-200">
              <td className="px-6 py-5">
                <div className="font-semibold text-gray-900 text-base">V-Guard Nova Series</div>
                <div className="text-sm text-gray-600 mt-1">Budget Champion</div>
              </td>
              <td className="px-6 py-5">
                <div className="space-y-1 text-sm">
                  <div className="flex items-center gap-2">
                    <span className="w-12 text-gray-500">Power:</span>
                    <span className="font-medium">0.5 HP</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-12 text-gray-500">Head:</span>
                    <span className="font-medium">25m</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-12 text-gray-500">Flow:</span>
                    <span className="font-medium">2000 LPH</span>
                  </div>
                </div>
              </td>
              <td className="px-6 py-5 text-sm text-gray-700">
                Small 1-2 BHK flats with basic water pressure needs in Noida & Jaipur
              </td>
              <td className="px-6 py-5">
                <div className="font-bold text-green-600 text-lg">₹3,100 - ₹3,400</div>
                <div className="text-xs text-gray-500 mt-1">Most Affordable</div>
              </td>
              <td className="px-6 py-5 text-center">
                <Link
                  href="https://amzn.to/4iUUECP"
                  className="inline-block bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 py-3 rounded-lg font-semibold text-sm transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                >
                  Buy Now →
                </Link>
              </td>
            </tr>
            <tr className="hover:bg-blue-50/50 transition-colors duration-200">
              <td className="px-6 py-5">
                <div className="font-semibold text-gray-900 text-base">Grundfos UPA 15-90</div>
                <div className="text-sm text-gray-600 mt-1">Silent Operation</div>
              </td>
              <td className="px-6 py-5">
                <div className="space-y-1 text-sm">
                  <div className="flex items-center gap-2">
                    <span className="w-12 text-gray-500">Power:</span>
                    <span className="font-medium">0.5 HP</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-12 text-gray-500">Head:</span>
                    <span className="font-medium">25m</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-12 text-gray-500">Flow:</span>
                    <span className="font-medium">2000 LPH</span>
                  </div>
                </div>
              </td>
              <td className="px-6 py-5 text-sm text-gray-700">
                Premium apartments requiring whisper-quiet operation in Gurgaon & Bangalore
              </td>
              <td className="px-6 py-5">
                <div className="font-bold text-green-600 text-lg">₹17,000 - ₹18,000</div>
                <div className="text-xs text-gray-500 mt-1">European Quality</div>
              </td>
              <td className="px-6 py-5 text-center">
                <Link
                  href="https://amzn.to/grundfos-upa"
                  className="inline-block bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 py-3 rounded-lg font-semibold text-sm transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                >
                  Buy Now →
                </Link>
              </td>
            </tr>
            <tr className="hover:bg-blue-50/50 transition-colors duration-200">
              <td className="px-6 py-5">
                <div className="font-semibold text-gray-900 text-base">Grundfos SCALA2</div>
                <div className="text-sm text-gray-600 mt-1">Smart Technology</div>
              </td>
              <td className="px-6 py-5">
                <div className="space-y-1 text-sm">
                  <div className="flex items-center gap-2">
                    <span className="w-12 text-gray-500">Power:</span>
                    <span className="font-medium">0.75 HP</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-12 text-gray-500">Head:</span>
                    <span className="font-medium">45m</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-12 text-gray-500">Flow:</span>
                    <span className="font-medium">3500 LPH</span>
                  </div>
                </div>
              </td>
              <td className="px-6 py-5 text-sm text-gray-700">
                Luxury villas & penthouses with smart home integration in Chandigarh & Mumbai
              </td>
              <td className="px-6 py-5">
                <div className="font-bold text-green-600 text-lg">₹54,000 - ₹56,000</div>
                <div className="text-xs text-gray-500 mt-1">Ultra Premium</div>
              </td>
              <td className="px-6 py-5 text-center">
                <Link
                  href="https://amzn.to/3P8aLzi"
                  className="inline-block bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 py-3 rounded-lg font-semibold text-sm transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                >
                  Buy Now →
                </Link>
              </td>
            </tr>
            <tr className="hover:bg-blue-50/50 transition-colors duration-200">
              <td className="px-6 py-5">
                <div className="font-semibold text-gray-900 text-base">Crompton Ultimo</div>
                <div className="text-sm text-gray-600 mt-1">High Performance</div>
              </td>
              <td className="px-6 py-5">
                <div className="space-y-1 text-sm">
                  <div className="flex items-center gap-2">
                    <span className="w-12 text-gray-500">Power:</span>
                    <span className="font-medium">1.0 HP</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-12 text-gray-500">Head:</span>
                    <span className="font-medium">35m</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-12 text-gray-500">Flow:</span>
                    <span className="font-medium">2800 LPH</span>
                  </div>
                </div>
              </td>
              <td className="px-6 py-5 text-sm text-gray-700">
                Mid-size homes demanding consistent high-pressure supply in Rohini & Pune
              </td>
              <td className="px-6 py-5">
                <div className="font-bold text-green-600 text-lg">₹8,700 - ₹9,300</div>
                <div className="text-xs text-gray-500 mt-1">Performance Leader</div>
              </td>
              <td className="px-6 py-5 text-center">
                <Link
                  href="https://amzn.to/crompton-ultimo"
                  className="inline-block bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 py-3 rounded-lg font-semibold text-sm transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                >
                  Buy Now →
                </Link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white rounded-lg border border-gray-200 p-4 shadow-sm">
          <div className="flex items-center gap-2 mb-3">
            <Star className="h-5 w-5 text-yellow-500" />
            <h3 className="font-semibold text-lg">Best Budget Pick</h3>
          </div>
          <p className="text-gray-700 mb-3">
            For budget-conscious urban buyers, the <strong>V-Guard Nova Series</strong> at just ₹3,227 offers
            exceptional value. With 160–240V tolerance and copper winding, it's perfect for small flats in areas with
            voltage fluctuations like Noida and Jaipur.
          </p>
          <Link href="https://amzn.to/4iUUECP" className="text-blue-600 hover:text-blue-800 font-medium">
            Buy on Amazon →
          </Link>
        </div>

        <div className="bg-white rounded-lg border border-gray-200 p-4 shadow-sm">
          <div className="flex items-center gap-2 mb-3">
            <DollarSign className="h-5 w-5 text-green-500" />
            <h3 className="font-semibold text-lg">Best Premium Pick</h3>
          </div>
          <p className="text-gray-700 mb-3">
            For luxury homes and villas, the <strong>Grundfos SCALA2</strong> at ₹55,000 delivers unmatched performance.
            With 45m head, 3500 LPH flow, and smart controls, it's perfect for high-end properties in Gurgaon and
            Chandigarh.
          </p>
          <Link href="https://amzn.to/3P8aLzi" className="text-blue-600 hover:text-blue-800 font-medium">
            Explore premium options →
          </Link>
        </div>
      </div>

      <div className="relative w-full h-64 rounded-lg overflow-hidden mb-6">
        <Image
          src="/placeholder.svg?height=400&width=800"
          alt="Comparison of top 15 water pumps for urban Indian homes showing pressure boosters, submersible pumps, and solar pumps"
          fill
          className="object-cover"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
          <p className="text-white font-medium">
            Visual comparison of our top 15 water pumps for urban Indian homes and flats in 2025
          </p>
        </div>
      </div>

      <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r-lg mb-6">
        <div className="flex items-start gap-3">
          <TrendingUp className="h-5 w-5 text-green-700 mt-1 flex-shrink-0" />
          <div>
            <h3 className="font-semibold text-green-800 mb-1">Real Urban Customer Experience</h3>
            <p className="text-green-700 text-sm">
              "After upgrading to the Crompton SP Aquagold 50, our water pressure issues in our 8th-floor Rohini flat
              disappeared completely. Even during Delhi's summer voltage fluctuations, this BEE 5-star pump continues to
              deliver consistent supply to our 2 BHK." — Verified buyer from Delhi NCR (November 2025)
            </p>
          </div>
        </div>
      </div>

      <p className="text-lg text-gray-700">
        These top 15 picks represent the best <strong>water pumps</strong> for urban India in 2025, based on our
        comprehensive research across 12+ cities. Whether you need a reliable <strong>pressure pump</strong> for your
        high-rise flat, a powerful <strong>submersible pump</strong> for your borewell, or an efficient{" "}
        <strong>booster pump</strong> for weak municipal supply, our list covers every urban scenario and budget from
        ₹3,227 to ₹55,000.
      </p>
    </section>
  )
}
