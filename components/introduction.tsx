import Image from "next/image"
import Link from "next/link"
import { AlertCircle, CheckCircle, ThumbsUp, Droplet, Zap, Home, Award } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Introduction() {
  return (
    <section className="max-w-4xl mx-auto px-4 py-8 md:py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
        33+ Best Water Pumps for Urban India 2025: Pressure, Booster, and More for Flats and Villas
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
            and dealer insights across 12 cities to bring you the definitive urban water pump guide
          </p>
        </div>
      </div>

      <p className="text-lg text-gray-700 mb-4">
        Struggling with weak water flow in your Mumbai flat? Facing low pressure in your Gurgaon high-rise? Looking for
        a reliable <strong>submersible pump</strong> for your Bangalore borewell? You're in the right place. After
        analyzing thousands of reviews from urban homeowners and consulting with dealers nationwide, we've created this
        comprehensive guide to the best <strong>water pumps</strong> for Indian homes in 2025.
      </p>

      <p className="text-lg text-gray-700 mb-6">
        Whether you need a powerful <strong>pressure pump</strong> for your high-rise flat, a reliable{" "}
        <strong>booster pump</strong> for consistent water flow, or a <strong>honda water pump</strong> for premium
        performance, we've researched 33 unique models to bring you the perfect options for every urban scenario and
        budget.
      </p>

      {/* Research Methodology Callout Box */}
      <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg mb-6">
        <h2 className="flex items-center text-blue-800 font-semibold mb-2">
          <CheckCircle className="h-5 w-5 mr-2" />
          Our Research Methodology
        </h2>
        <p className="text-blue-800 text-sm mb-2">
          Unlike other sites, we don't just list specifications. Our recommendations are based on:
        </p>
        <ul className="list-disc list-inside text-blue-800 text-sm">
          <li>Analysis of 10,000+ verified customer reviews from Amazon and dealer insights</li>
          <li>Real feedback from homeowners across 12 Indian cities (Delhi NCR, Mumbai, Bangalore, etc.)</li>
          <li>Technical specifications from manufacturers like Crompton, Kirloskar, Havells, and Grundfos</li>
          <li>BEE ratings and urban pain points (TDS levels, voltage fluctuations, space constraints)</li>
        </ul>
      </div>

      {/* Common Problems Callout Box */}
      <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-lg mb-6">
        <h2 className="flex items-center text-amber-800 font-semibold mb-2">
          <AlertCircle className="h-5 w-5 mr-2" />
          Common Urban Water Challenges
        </h2>
        <ul className="list-disc list-inside text-amber-800 text-sm">
          <li>Low water pressure in high-rise flats (especially top floors)</li>
          <li>Irregular municipal supply (30 minutes in Uttam Nagar, 2-3 hours in Hyderabad)</li>
          <li>High TDS levels (600+ ppm in Ahmedabad, Dwarka) corroding pump motors</li>
          <li>Voltage fluctuations in areas like Jaipur and Lucknow burning pumps</li>
          <li>Space constraints in urban flats requiring compact solutions</li>
          <li>Monsoon flooding affecting ground-level pumps in Mumbai and Chennai</li>
        </ul>
      </div>

      {/* Quick Benefits Callout Box */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-blue-50 p-4 rounded-lg shadow-sm">
          <div className="flex items-center text-blue-800 font-semibold mb-2">
            <Zap className="h-5 w-5 mr-2" />
            Pressure Pumps
          </div>
          <p className="text-blue-800 text-sm">
            Perfect for weak municipal supply in flats. Our top <strong>pressure pump</strong> picks deliver 25-40m head
            for strong showers even on the 10th floor of Gurgaon high-rises.
          </p>
        </div>

        <div className="bg-green-50 p-4 rounded-lg shadow-sm">
          <div className="flex items-center text-green-800 font-semibold mb-2">
            <Droplet className="h-5 w-5 mr-2" />
            Submersible Pumps
          </div>
          <p className="text-green-800 text-sm">
            Ideal for borewells in houses and villas. The best <strong>submersible pump</strong> models handle sandy
            water and deliver 60m+ head for deep wells in Bangalore and Hyderabad.
          </p>
        </div>

        <div className="bg-purple-50 p-4 rounded-lg shadow-sm">
          <div className="flex items-center text-purple-800 font-semibold mb-2">
            <Home className="h-5 w-5 mr-2" />
            Monoblock Pumps
          </div>
          <p className="text-purple-800 text-sm">
            Versatile for daily use in houses. <strong>Monoblock pump</strong> models offer reliable 2000-3000 LPH flow
            for tank filling and general water supply needs.
          </p>
        </div>
      </div>

      {/* Key Benefits Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Why Your Water Pump Choice Matters in Urban India 2025
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex gap-3">
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
              <Award className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-1">Consistent Water Pressure</h3>
              <p className="text-gray-600 text-sm">
                The right <strong>booster pump</strong> ensures strong water flow even during peak hours when municipal
                pressure drops, protecting your daily routine and appliance performance in cities like Mumbai and Delhi
                NCR.
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
                Modern BEE 5-star <strong>water pumps</strong> can reduce electricity consumption by up to 30%, saving
                ₹2,000-3,000 annually for typical urban homes compared to older inefficient models.
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
                Quality <strong>submersible pumps</strong> can deliver up to 3000 LPH, ensuring your overhead tank fills
                quickly during limited supply windows, maximizing water security for urban families.
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
                Compact <strong>pressure pumps</strong> and wall-mounted boosters fit perfectly in urban flats,
                providing powerful performance without compromising valuable living space in cities like Pune and
                Chandigarh.
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
        Ready to solve your urban water challenges once and for all? Let's dive into our comprehensive guide to the best{" "}
        <strong>water pumps</strong> for Indian homes in 2025, featuring detailed comparisons of{" "}
        <strong>pressure pumps</strong>, <strong>submersible pumps</strong>, <strong>booster pumps</strong>, and{" "}
        <strong>monoblock pumps</strong> for every urban need and budget.
      </p>

      {/* Download CTA */}
      <div className="bg-blue-50 p-6 rounded-lg mt-6 flex flex-col sm:flex-row items-center justify-between border border-blue-200">
        <div>
          <h3 className="font-semibold text-gray-800 mb-1">Still confused about which water pump to choose?</h3>
          <p className="text-gray-600 text-sm">
            Get our free urban water pump selection guide with city-specific recommendations for Indian homes
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
