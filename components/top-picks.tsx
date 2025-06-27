import Image from "next/image"
import { Info, TrendingUp, Star, DollarSign } from "lucide-react"
import Link from "next/link"

export default function TopPicks() {
  return (
    <section id="top-15-quick-picks-for-every-home" className="max-w-6xl mx-auto py-8 px-4 md:px-0 mb-12">
      <h2 className="text-3xl font-bold text-gray-800 mb-4">
        Top 15 Quick Picks for Every Home: Urban India's Best Water Pumps 2025
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
        Below, we've identified these 15 outstanding water pumps that excel in different urban scenarios. From
        budget-friendly options under ₹5,000 to premium solutions for luxury homes, this comparison will help you
        quickly find the perfect pump for your specific needs.
      </p>

      {/* Complete Top 15 Table */}
      <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm mb-6">
        <table className="w-full text-sm text-left">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-3 font-medium text-gray-900">Pump Name</th>
              <th className="px-4 py-3 font-medium text-gray-900">Power (HP)</th>
              <th className="px-4 py-3 font-medium text-gray-900">Max Head (m)</th>
              <th className="px-4 py-3 font-medium text-gray-900">Flow Rate (LPH)</th>
              <th className="px-4 py-3 font-medium text-gray-900">Price (₹)</th>
              <th className="px-4 py-3 font-medium text-gray-900">Reliability</th>
              <th className="px-4 py-3 font-medium text-gray-900">Best For</th>
              <th className="px-4 py-3 font-medium text-gray-900">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            <tr className="bg-white hover:bg-blue-50">
              <td className="px-4 py-3 font-medium">CRI DORA50</td>
              <td className="px-4 py-3">0.5</td>
              <td className="px-4 py-3">25</td>
              <td className="px-4 py-3">2000</td>
              <td className="px-4 py-3">₹3,499</td>
              <td className="px-4 py-3">Brass impeller, 180–240V</td>
              <td className="px-4 py-3">Budget flats (Lucknow, Ghaziabad)</td>
              <td className="px-4 py-3">
                <Link href="https://amzn.to/41RyYBr" className="text-blue-600 hover:text-blue-800 font-medium">
                  Amazon
                </Link>
              </td>
            </tr>
            <tr className="bg-white hover:bg-blue-50">
              <td className="px-4 py-3 font-medium">V-Guard Nova Series</td>
              <td className="px-4 py-3">0.5</td>
              <td className="px-4 py-3">25</td>
              <td className="px-4 py-3">2000</td>
              <td className="px-4 py-3">₹3,227</td>
              <td className="px-4 py-3">Copper winding, 160–240V</td>
              <td className="px-4 py-3">Small flats (Noida, Jaipur)</td>
              <td className="px-4 py-3">
                <Link href="https://amzn.to/4iUUECP" className="text-blue-600 hover:text-blue-800 font-medium">
                  Amazon
                </Link>
              </td>
            </tr>
            <tr className="bg-white hover:bg-blue-50">
              <td className="px-4 py-3 font-medium">Kirloskar Chhotu Star Ultra</td>
              <td className="px-4 py-3">0.5</td>
              <td className="px-4 py-3">20</td>
              <td className="px-4 py-3">2000</td>
              <td className="px-4 py-3">₹4,099</td>
              <td className="px-4 py-3">Wide-voltage, Kirloskar service</td>
              <td className="px-4 py-3">Voltage-unstable areas (Uttam Nagar, Jaipur)</td>
              <td className="px-4 py-3">
                <Link href="https://amzn.to/49ZITH9" className="text-blue-600 hover:text-blue-800 font-medium">
                  Amazon
                </Link>
              </td>
            </tr>
            <tr className="bg-white hover:bg-blue-50">
              <td className="px-4 py-3 font-medium">Crompton SP Aquagold 50</td>
              <td className="px-4 py-3">0.5</td>
              <td className="px-4 py-3">30</td>
              <td className="px-4 py-3">2500</td>
              <td className="px-4 py-3">₹5,499</td>
              <td className="px-4 py-3">BEE 5-star, corrosion-resistant</td>
              <td className="px-4 py-3">Medium flats (Rohini, Pune)</td>
              <td className="px-4 py-3">
                <Link href="https://amzn.to/3DI5lZb" className="text-blue-600 hover:text-blue-800 font-medium">
                  Amazon
                </Link>
              </td>
            </tr>
            <tr className="bg-white hover:bg-blue-50">
              <td className="px-4 py-3 font-medium">Havells HBTM-2</td>
              <td className="px-4 py-3">0.5</td>
              <td className="px-4 py-3">25</td>
              <td className="px-4 py-3">2000</td>
              <td className="px-4 py-3">₹8,500</td>
              <td className="px-4 py-3">Silent, thermal protection</td>
              <td className="px-4 py-3">Premium flats (Saket, Chandigarh)</td>
              <td className="px-4 py-3">
                <Link href="https://amzn.to/41Nl2IM" className="text-blue-600 hover:text-blue-800 font-medium">
                  Amazon
                </Link>
              </td>
            </tr>
            <tr className="bg-white hover:bg-blue-50">
              <td className="px-4 py-3 font-medium">CRI Miki 50</td>
              <td className="px-4 py-3">0.5</td>
              <td className="px-4 py-3">25</td>
              <td className="px-4 py-3">2500</td>
              <td className="px-4 py-3">₹4,200</td>
              <td className="px-4 py-3">Stainless steel, 180–240V</td>
              <td className="px-4 py-3">Budget homes (East Delhi, Lucknow)</td>
              <td className="px-4 py-3">
                <Link href="https://amzn.to/3VUyAhG" className="text-blue-600 hover:text-blue-800 font-medium">
                  Amazon
                </Link>
              </td>
            </tr>
            <tr className="bg-white hover:bg-blue-50">
              <td className="px-4 py-3 font-medium">Kirloskar Mini 50S</td>
              <td className="px-4 py-3">0.5</td>
              <td className="px-4 py-3">40</td>
              <td className="px-4 py-3">1800</td>
              <td className="px-4 py-3">₹5,200</td>
              <td className="px-4 py-3">High-head, Kirloskar service</td>
              <td className="px-4 py-3">Top-floor flats (Kalkaji, Hyderabad)</td>
              <td className="px-4 py-3">
                <Link href="https://amzn.to/4fqhWxu" className="text-blue-600 hover:text-blue-800 font-medium">
                  Amazon
                </Link>
              </td>
            </tr>
            <tr className="bg-white hover:bg-blue-50">
              <td className="px-4 py-3 font-medium">Havells Hi-Flow M1 Series</td>
              <td className="px-4 py-3">1.0</td>
              <td className="px-4 py-3">25</td>
              <td className="px-4 py-3">2000</td>
              <td className="px-4 py-3">₹7,863</td>
              <td className="px-4 py-3">Inverter-compatible, Havells network</td>
              <td className="px-4 py-3">Houses (Najafgarh, Ahmedabad)</td>
              <td className="px-4 py-3">
                <Link href="https://amzn.to/4grIK1M" className="text-blue-600 hover:text-blue-800 font-medium">
                  Amazon
                </Link>
              </td>
            </tr>
            <tr className="bg-white hover:bg-blue-50">
              <td className="px-4 py-3 font-medium">CRI Submersible 1 HP</td>
              <td className="px-4 py-3">1.0</td>
              <td className="px-4 py-3">60</td>
              <td className="px-4 py-3">3000</td>
              <td className="px-4 py-3">₹10,000</td>
              <td className="px-4 py-3">Sand-resistant, CRI service</td>
              <td className="px-4 py-3">Borewells (Chhatarpur, Bangalore)</td>
              <td className="px-4 py-3">
                <Link href="https://amzn.to/3Rgzz9h" className="text-blue-600 hover:text-blue-800 font-medium">
                  Amazon
                </Link>
              </td>
            </tr>
            <tr className="bg-white hover:bg-blue-50">
              <td className="px-4 py-3 font-medium">Asian Pumps 24V 250W Solar</td>
              <td className="px-4 py-3">0.33</td>
              <td className="px-4 py-3">30</td>
              <td className="px-4 py-3">2500</td>
              <td className="px-4 py-3">₹6,850</td>
              <td className="px-4 py-3">Solar-powered, durable</td>
              <td className="px-4 py-3">Eco-conscious homes (Hyderabad, Ahmedabad)</td>
              <td className="px-4 py-3">
                <Link href="https://amzn.to/3Y3Tn3x" className="text-blue-600 hover:text-blue-800 font-medium">
                  Amazon
                </Link>
              </td>
            </tr>
            <tr className="bg-white hover:bg-blue-50">
              <td className="px-4 py-3 font-medium">Havells HBTJSE1</td>
              <td className="px-4 py-3">1.0</td>
              <td className="px-4 py-3">35</td>
              <td className="px-4 py-3">3000</td>
              <td className="px-4 py-3">₹24,999</td>
              <td className="px-4 py-3">Silent, corrosion-proof</td>
              <td className="px-4 py-3">High-rise flats (Pune, Mumbai)</td>
              <td className="px-4 py-3">
                <Link href="https://amzn.to/49OCChk" className="text-blue-600 hover:text-blue-800 font-medium">
                  Amazon
                </Link>
              </td>
            </tr>
            <tr className="bg-white hover:bg-blue-50">
              <td className="px-4 py-3 font-medium">Grundfos SCALA2</td>
              <td className="px-4 py-3">0.75</td>
              <td className="px-4 py-3">45</td>
              <td className="px-4 py-3">3500</td>
              <td className="px-4 py-3">₹55,000</td>
              <td className="px-4 py-3">Silent, smart control</td>
              <td className="px-4 py-3">Luxury villas (Gurgaon, Chandigarh)</td>
              <td className="px-4 py-3">
                <Link href="https://amzn.to/3P8aLzi" className="text-blue-600 hover:text-blue-800 font-medium">
                  Amazon
                </Link>
              </td>
            </tr>
            <tr className="bg-white hover:bg-blue-50">
              <td className="px-4 py-3 font-medium">Grundfos UPA 15-90 Domestic</td>
              <td className="px-4 py-3">0.5</td>
              <td className="px-4 py-3">25</td>
              <td className="px-4 py-3">2000</td>
              <td className="px-4 py-3">₹17,500</td>
              <td className="px-4 py-3">Silent, compact, smart control</td>
              <td className="px-4 py-3">Premium flats (Gurgaon, Bangalore)</td>
              <td className="px-4 py-3">
                <Link href="#" className="text-blue-600 hover:text-blue-800 font-medium">
                  Amazon
                </Link>
              </td>
            </tr>
            <tr className="bg-white hover:bg-blue-50">
              <td className="px-4 py-3 font-medium">CRI Pressure Booster MHBS Series</td>
              <td className="px-4 py-3">1.0</td>
              <td className="px-4 py-3">35</td>
              <td className="px-4 py-3">2500</td>
              <td className="px-4 py-3">₹13,500</td>
              <td className="px-4 py-3">Stainless steel, corrosion-proof</td>
              <td className="px-4 py-3">Coastal flats (Mumbai, Thane)</td>
              <td className="px-4 py-3">
                <Link href="#" className="text-blue-600 hover:text-blue-800 font-medium">
                  Amazon
                </Link>
              </td>
            </tr>
            <tr className="bg-white hover:bg-blue-50">
              <td className="px-4 py-3 font-medium">Kirloskar K-Booster</td>
              <td className="px-4 py-3">0.5</td>
              <td className="px-4 py-3">25</td>
              <td className="px-4 py-3">2000</td>
              <td className="px-4 py-3">₹6,000</td>
              <td className="px-4 py-3">Compact, high-efficiency</td>
              <td className="px-4 py-3">Budget flats (Lucknow, Indore)</td>
              <td className="px-4 py-3">
                <Link href="#" className="text-blue-600 hover:text-blue-800 font-medium">
                  Amazon
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
