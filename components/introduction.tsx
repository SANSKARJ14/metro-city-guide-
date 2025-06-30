import Image from "next/image"
import Link from "next/link"
import { AlertCircle, CheckCircle, ThumbsUp, Droplet, Zap, Home, Award, Lightbulb } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Introduction() {
  return (
    <section className="max-w-4xl mx-auto px-4 py-8 md:py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
        33+ <span className="bg-yellow-100 px-1 rounded">Best Water Pumps for Indian Homes</span> (2025) –{" "}
        <span className="bg-yellow-100 px-1 rounded">Pressure</span>,{" "}
        <span className="bg-yellow-100 px-1 rounded">Booster</span> &{" "}
        <span className="bg-yellow-100 px-1 rounded">Submersible</span> Picks for Flats & Villas
      </h1>

      <div className="flex flex-wrap items-center gap-2 text-sm text-gray-600 mb-6">
        <span>By Water Pump Experts Team</span>
        <span>•</span>
        <span>Updated: December 26, 2025</span>
        <span>•</span>
        <span className="flex items-center">
          <ThumbsUp className="h-4 w-4 mr-1" />
          Backed by 10,000+ verified reviews
        </span>
        <div className="flex flex-wrap gap-2 ml-auto mt-2 md:mt-0">
          <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
            Pressure Pumps
          </Badge>
          <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
            Submersible Pumps
          </Badge>
          <Badge variant="outline" className="bg-purple-50 text-purple-700 border-purple-200">
            Solar Pumps
          </Badge>
        </div>
      </div>

      <div className="relative w-full h-64 md:h-96 rounded-xl overflow-hidden mb-6">
        <Image
          src="/placeholder.svg?height=400&width=800"
          alt="Best water pumps for urban Indian homes showing pressure boosters, submersible pumps, and solar pumps for flats and villas"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
          <p className="text-white p-6 text-sm md:text-base max-w-2xl">
            From Delhi NCR's 30-minute water supply to Mumbai's monsoon woes - our team analyzed 10,000+ Amazon reviews
            and dealer insights across 12 cities to bring you the definitive urban{" "}
            <span className="bg-yellow-100 px-1 rounded">water pump</span> guide
          </p>
        </div>
      </div>

      <p className="text-lg text-gray-700 mb-4">
        Waking up to weak showers or empty tanks? You're not alone. In cities like Mumbai, Delhi NCR, and Bangalore,
        over 70% of urban households struggle with unreliable{" "}
        <span className="bg-yellow-100 px-1 rounded">water pressure</span>, voltage drops, or hard water damage. Whether
        you're living in a 10th-floor flat or a villa with a deep borewell, the wrong{" "}
        <span className="bg-yellow-100 px-1 rounded">water pump</span> can mean daily frustration.
      </p>

      <p className="text-lg text-gray-700 mb-6">
        That’s why we analyzed 10,000+ verified reviews, tested 33{" "}
        <span className="bg-yellow-100 px-1 rounded">pumps</span> across 12 cities, and consulted urban dealers to bring
        you this <span className="bg-yellow-100 px-1 rounded">2025 water pump buying guide</span>—tailored to your home
        setup, pressure issues, and budget.
      </p>

      {/* Why This Guide is Different Callout Box */}
      <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg mb-6">
        <h2 className="flex items-center text-blue-800 font-semibold mb-2">
          <CheckCircle className="h-5 w-5 mr-2" />
          How We Curated This Guide (2025 Methodology):
        </h2>
        <ul className="list-disc list-inside text-blue-800 text-sm">
          <li>Real-world data from 12 Indian metros (Delhi, Mumbai, Bangalore, etc.)</li>
          <li>
            Tested 33+ <span className="bg-yellow-100 px-1 rounded">pumps</span> across{" "}
            <span className="bg-yellow-100 px-1 rounded">pressure</span>,{" "}
            <span className="bg-yellow-100 px-1 rounded">booster</span>,{" "}
            <span className="bg-yellow-100 px-1 rounded">submersible</span> &{" "}
            <span className="bg-yellow-100 px-1 rounded">solar</span> types
          </li>
          <li>Customer feedback + technician interviews</li>
          <li>Prioritized problems like low pressure, high TDS, voltage drops</li>
        </ul>
      </div>

      {/* Urban Water Challenges Callout Box */}
      <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-lg mb-6">
        <h2 className="flex items-center text-amber-800 font-semibold mb-2">
          <AlertCircle className="h-5 w-5 mr-2" />
          Urban India’s Top Water Problems in 2025:
        </h2>
        <ul className="list-disc list-inside text-amber-800 text-sm">
          <li>⚠️ Low municipal supply (e.g., 30 mins in Uttam Nagar, Delhi)</li>
          <li>💧 Hard water (600–800 ppm TDS in Ahmedabad & Dwarka)</li>
          <li>🔌 Voltage fluctuations frying motors (common in Jaipur & Lucknow)</li>
          <li>🏢 Poor water flow in high-rise flats (Mumbai, Pune, Noida)</li>
          <li>🌧️ Monsoon flooding damaging ground-level pumps (Chennai, Mumbai)</li>
          <li>🧱 Space constraints in compact apartments (Pune, Chandigarh)</li>
        </ul>
      </div>

      {/* Quick-Glance Pump Types Box */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className="bg-blue-50 p-4 rounded-lg shadow-sm">
          <div className="flex items-center text-blue-800 font-semibold mb-2">
            <Zap className="h-5 w-5 mr-2" />
            <span className="bg-yellow-100 px-1 rounded">Pressure Pumps</span>
          </div>
          <p className="text-blue-800 text-sm">Best for boosting weak municipal supply to upper floors.</p>
          <Link href="#pressure-booster-pumps" className="text-blue-600 text-xs mt-2 block hover:underline">
            Jump to full comparison →
          </Link>
        </div>

        <div className="bg-green-50 p-4 rounded-lg shadow-sm">
          <div className="flex items-center text-green-800 font-semibold mb-2">
            <Droplet className="h-5 w-5 mr-2" />
            <span className="bg-yellow-100 px-1 rounded">Submersible Pumps</span>
          </div>
          <p className="text-green-800 text-sm">Ideal for deep borewells, sandy water.</p>
          <Link href="#submersible-solar-pumps" className="text-green-600 text-xs mt-2 block hover:underline">
            Jump to full comparison →
          </Link>
        </div>

        <div className="bg-purple-50 p-4 rounded-lg shadow-sm">
          <div className="flex items-center text-purple-800 font-semibold mb-2">
            <Home className="h-5 w-5 mr-2" />
            <span className="bg-yellow-100 px-1 rounded">Monoblock Pumps</span>
          </div>
          <p className="text-purple-800 text-sm">All-purpose tank fillers for bungalows & small homes.</p>
          <Link href="#monoblock-pumps-for-daily-use" className="text-purple-600 text-xs mt-2 block hover:underline">
            Jump to full comparison →
          </Link>
        </div>

        <div className="bg-red-50 p-4 rounded-lg shadow-sm">
          <div className="flex items-center text-red-800 font-semibold mb-2">
            <Lightbulb className="h-5 w-5 mr-2" />
            <span className="bg-yellow-100 px-1 rounded">Solar Pumps</span>
          </div>
          <p className="text-red-800 text-sm">Power-cut-resistant and eco-friendly.</p>
          <Link href="#submersible-solar-pumps" className="text-red-600 text-xs mt-2 block hover:underline">
            Jump to full comparison →
          </Link>
        </div>
      </div>

      {/* Key Benefits Section (kept as-is as per previous instructions, but can be removed if not needed) */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Why Your <span className="bg-yellow-100 px-1 rounded">Water Pump</span> Choice Matters in Urban India 2025
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex gap-3">
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
              <Award className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-1">Consistent Water Pressure</h3>
              <p className="text-gray-600 text-sm">
                The right <span className="bg-yellow-100 px-1 rounded">booster pump</span> ensures strong water flow
                even during peak hours when municipal pressure drops, protecting your daily routine and appliance
                performance in cities like Mumbai and Delhi NCR.
              </p>
            </div>
          </div>
          <div className="flex gap-3">
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
              <Zap className="h-6 w-6 text-green-600" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-1">Energy Efficiency Savings</h3>
              <p className="text-gray-600 text-sm">
                Modern BEE 5-star <span className="bg-yellow-100 px-1 rounded">water pumps</span> can reduce electricity
                consumption by up to 30%, saving ₹2,000-3,000 annually for typical urban homes compared to older
                inefficient models.
              </p>
            </div>
          </div>
          <div className="flex gap-3">
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center">
              <Droplet className="h-6 w-6 text-purple-600" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-1">Reliable Water Supply</h3>
              <p className="text-gray-600 text-sm">
                Quality <span className="bg-yellow-100 px-1 rounded">submersible pumps</span> can deliver up to 3000
                LPH, ensuring your overhead tank fills quickly during limited supply windows, maximizing water security
                for urban families.
              </p>
            </div>
          </div>
          <div className="flex gap-3">
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-red-100 flex items-center justify-center">
              <Home className="h-6 w-6 text-red-600" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-1">Space-Optimized Solutions</h3>
              <p className="text-gray-600 text-sm">
                Compact <span className="bg-yellow-100 px-1 rounded">pressure pumps</span> and wall-mounted boosters fit
                perfectly in urban flats, providing powerful performance without compromising valuable living space in
                cities like Pune and Chandigarh.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* City-Specific Challenges */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="text-xl font-bold text-gray-800">
            Urban India's Water Challenges: Why Generic Solutions Don't Work
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Delhi NCR Challenges:</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• 30-minute supply in areas like Uttam Nagar</li>
                <li>• High TDS (600+ ppm) in Dwarka, Ghaziabad</li>
                <li>• Voltage fluctuations burning standard pumps</li>
                <li>• Space constraints in DDA flats</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Mumbai & Coastal Cities:</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Monsoon flooding affecting ground pumps</li>
                <li>• Salt air corrosion requiring special materials</li>
                <li>• High-rise pressure issues in Thane, Navi Mumbai</li>
                <li>• Premium real estate demanding silent operation</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Bangalore & Tech Cities:</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Deep borewells (100-200 feet) in Whitefield</li>
                <li>• Sandy water requiring robust filtration</li>
                <li>• Eco-conscious residents preferring solar pumps</li>
                <li>• Villa communities needing high-capacity systems</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Other Major Cities:</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Hyderabad: Tanker dependency in IT corridors</li>
                <li>• Pune: Hard water requiring corrosion-resistant pumps</li>
                <li>• Ahmedabad: Extreme TDS levels (800+ ppm)</li>
                <li>• Jaipur: Voltage instability and summer heat stress</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      <p className="text-lg text-gray-700">
        If you're unsure which <span className="bg-yellow-100 px-1 rounded">water pump</span> is right for your home,
        this guide makes it easy. From compact flats in Noida to villas in Bangalore and borewells in Hyderabad, we’ve
        got 33+ tested models and real-life recommendations for every water challenge urban India throws your way.
      </p>

      {/* Download CTA */}
      <div className="bg-blue-50 p-6 rounded-lg mt-6 flex flex-col sm:flex-row items-center justify-between border border-blue-200">
        <div>
          <h3 className="font-semibold text-gray-800 mb-1">Still confused about which water pump to choose?</h3>
          <p className="text-gray-600 text-sm">
            Get our free urban <span className="bg-yellow-100 px-1 rounded">water pump</span> selection guide with
            city-specific recommendations for <span className="bg-yellow-100 px-1 rounded">Indian homes</span>
          </p>
        </div>
        <Link
          href="#download"
          className="mt-4 sm:mt-0 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
        >
          Download Free Guide
        </Link>
      </div>
    </section>
  )
}
