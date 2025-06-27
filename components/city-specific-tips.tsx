import Link from "next/link"
import Image from "next/image"
import { MapPin, Lightbulb, AlertTriangle, CheckCircle, TrendingUp } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

// Clean city tip component
const CityTip = ({ title, cities, challenge, solution, savings, icon: Icon }) => (
  <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow duration-300 bg-white">
    <div className="flex items-start gap-4">
      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
        <Icon className="h-6 w-6 text-blue-600" />
      </div>
      <div className="flex-1">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
        <div className="flex flex-wrap gap-2 mb-3">
          {cities.map((city, index) => (
            <Badge key={index} variant="outline" className="text-xs bg-gray-50">
              {city}
            </Badge>
          ))}
        </div>
        <div className="space-y-3">
          <div>
            <h4 className="text-sm font-medium text-gray-700 mb-1">Challenge:</h4>
            <p className="text-sm text-gray-600">{challenge}</p>
          </div>
          <div>
            <h4 className="text-sm font-medium text-gray-700 mb-1">Smart Solution:</h4>
            <p className="text-sm text-gray-600">{solution}</p>
          </div>
          {savings && (
            <div className="bg-green-50 border border-green-200 p-3 rounded-lg">
              <p className="text-sm font-medium text-green-800">💰 {savings}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  </div>
)

export default function CitySpecificTips() {
  const cityTips = [
    {
      title: "Hard Water Solutions",
      cities: ["Ahmedabad", "Bangalore", "Dwarka", "Ghaziabad"],
      challenge:
        "TDS levels above 1500 ppm destroy regular pumps within 2 years, causing scaling, impeller corrosion, and frequent breakdowns.",
      solution:
        "Use brass/stainless steel pumps like CRI MHBS Series or Asian Pumps Solar Submersible. Clean strainers monthly and avoid budget pumps if TDS >1500 ppm.",
      savings: "Save ₹500/year on repairs + extend pump life by 3-4 years",
      icon: AlertTriangle,
    },
    {
      title: "Voltage Fluctuation Protection",
      cities: ["Jaipur", "Lucknow", "Uttam Nagar", "Indore"],
      challenge:
        "Voltage swings between 160-280V burn standard pump motors rated for 220V±10%, leading to expensive replacements every 2 years.",
      solution:
        "Choose wide-voltage pumps like Kirloskar K-Booster (160–240V) or add a ₹2,000 stabilizer. Thermal protection models offer additional safety.",
      savings: "Avoid ₹3,000-5,000 motor replacement costs",
      icon: CheckCircle,
    },
    {
      title: "Tanker Water Optimization",
      cities: ["Hyderabad", "Ghaziabad", "Chhatarpur", "Najafgarh"],
      challenge:
        "Water comes by tanker 2-3 times weekly. Slow filling wastes water and increases costs when every liter counts.",
      solution:
        "Pair a 0.5 HP self-priming pump like Crompton ULTIMO II with 1000L tank. Fills in 30 minutes, storing 3 days' supply for family of 4.",
      savings: "Reduce tanker frequency from 3x to 2x per week = ₹800/month",
      icon: TrendingUp,
    },
    {
      title: "Silent Operation",
      cities: ["Chandigarh", "Gurgaon", "Mumbai", "Pune"],
      challenge:
        "Noisy pumps at 5 AM wake entire buildings, causing complaints and society issues in premium residential areas.",
      solution:
        "Install silent boosters like Grundfos UPA 15-90 or SCALA1 3-45 with sound-dampening. Operate below 40dB – quieter than libraries.",
      savings: "Maintain neighborly relations + avoid society penalties",
      icon: Lightbulb,
    },
    {
      title: "Monsoon & Coastal Protection",
      cities: ["Mumbai", "Thane", "Chennai", "Kolkata"],
      challenge:
        "Coastal humidity and flooding destroy regular pumps. Salt air corrodes metal parts while flooding damages electrical components.",
      solution:
        "Use corrosion-resistant pumps like CRI MHBS Series with stainless steel construction. Install above flood level with waterproof connections.",
      savings: "Extend pump life from 2 to 6+ years = ₹8,000 savings",
      icon: MapPin,
    },
    {
      title: "Shallow Borewell Efficiency",
      cities: ["Ahmedabad", "Jaipur", "Rohini", "Faridabad"],
      challenge:
        "Over-engineering with expensive submersible pumps for 20-30 foot borewells wastes money without adding performance value.",
      solution:
        "Use jet pumps like CRI SHALO50 for shallow borewells. 40% cheaper than submersibles with easier maintenance access.",
      savings: "Save ₹4,000-6,000 vs submersible + lower maintenance",
      icon: CheckCircle,
    },
    {
      title: "Solar & Subsidy Benefits",
      cities: ["Hyderabad", "Ahmedabad", "Thane", "Bangalore"],
      challenge:
        "Rising electricity costs (₹8-12/unit) make pump operation expensive. 300+ sunny days offer untapped solar potential.",
      solution:
        "Choose solar pumps like Asian Pumps 24V 250W. Apply for PM-KUSUM subsidies covering 60% costs through state agencies.",
      savings: "Zero electricity bills + ₹15,000-25,000 government subsidy",
      icon: TrendingUp,
    },
    {
      title: "Energy Efficiency",
      cities: ["Pune", "Bangalore", "Noida", "Chandigarh"],
      challenge:
        "Inefficient pumps drain wallets in metro cities. 1 HP pump running 3 hours daily costs ₹3,600 annually at ₹10/unit.",
      solution:
        "Choose BEE 5-star pumps like Crompton SP Aquagold 50. Consume 30% less power while delivering same performance.",
      savings: "Save ₹300/month = ₹3,600 annually on electricity",
      icon: Lightbulb,
    },
  ]

  return (
    <section id="city-specific-smart-tips" className="max-w-4xl mx-auto py-12 px-4 md:px-0">
      <div className="space-y-8">
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            City-Specific Smart Tips: Targeted Solutions for Urban Water Challenges
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Every Indian city faces unique water challenges. From Ahmedabad's hard water to Mumbai's monsoon flooding,
            we've analyzed local conditions across 12+ cities to provide targeted <strong>water pump</strong> solutions
            based on thousands of urban homeowner experiences.
          </p>
        </div>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
          <div className="flex items-start gap-3">
            <MapPin className="h-6 w-6 text-blue-700 mt-1 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-blue-800 mb-2">Why Location-Specific Solutions Matter</h3>
              <p className="text-blue-700">
                A <strong>pressure pump</strong> perfect for Chandigarh might fail in Ahmedabad's high-TDS environment.
                A <strong>submersible pump</strong> ideal for Bangalore could corrode in Mumbai's coastal air. Our
                location-based recommendations prevent expensive mistakes and ensure optimal performance.
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          {cityTips.map((tip, index) => (
            <CityTip key={index} {...tip} />
          ))}
        </div>

        {/* Professional Tips Section */}
        <div className="mt-12">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6">Professional Maintenance Tips</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="border border-gray-200">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2 text-gray-800">
                  <CheckCircle className="h-5 w-5 text-blue-600" />
                  Annual Service Schedule
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 text-sm mb-3">
                  Schedule annual servicing via brand networks (Kirloskar, Grundfos, CRI) to extend pump life by 10+
                  years. A ₹500 service prevents ₹5,000 repairs.
                </p>
                <div className="bg-gray-50 p-3 rounded text-xs text-gray-600">
                  Book service before summer peak season for best availability
                </div>
              </CardContent>
            </Card>

            <Card className="border border-gray-200">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2 text-gray-800">
                  <Lightbulb className="h-5 w-5 text-blue-600" />
                  Proper Installation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 text-sm mb-3">
                  Install in covered, ventilated areas with easy access. Use flexible connections to reduce vibration.
                  Professional installation doubles pump lifespan.
                </p>
                <div className="bg-gray-50 p-3 rounded text-xs text-gray-600">
                  Invest in certified technician installation for warranty coverage
                </div>
              </CardContent>
            </Card>

            <Card className="border border-gray-200">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2 text-gray-800">
                  <MapPin className="h-5 w-5 text-blue-600" />
                  Local Service Network
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 text-sm mb-3">
                  Choose brands with strong local presence. Kirloskar dominates North India, CRI rules South India,
                  Grundfos excels in metros.
                </p>
                <div className="bg-gray-50 p-3 rounded text-xs text-gray-600">
                  Verify dealer proximity and service availability before purchase
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Other Cities Guide */}
        <div className="mt-12">
          <Card className="border border-gray-200">
            <CardHeader>
              <CardTitle className="text-gray-800 text-xl">Solutions for Other Cities</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                Don't see your city? Use these guidelines based on similar urban challenges:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">Tier-2 Cities (Indore, Nagpur, Bhopal)</h4>
                  <p className="text-gray-700 text-sm">
                    Voltage issues + moderate TDS. Use <strong>Kirloskar K-Booster</strong> for flats,
                    <strong>CRI DORA50</strong> for houses with wide voltage tolerance.
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">Coastal Areas (Thane, Mysore, Kochi)</h4>
                  <p className="text-gray-700 text-sm">
                    High humidity + salt air. Choose <strong>stainless steel pumps</strong> like Asian Pumps Solar or
                    CRI MHBS Series for corrosion resistance.
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">IT Hubs (Whitefield, Hinjewadi)</h4>
                  <p className="text-gray-700 text-sm">
                    Deep borewells + eco-conscious residents. Opt for <strong>solar submersible pumps</strong>
                    or BEE 5-star efficient models.
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">Industrial Cities (Surat, Rajkot)</h4>
                  <p className="text-gray-700 text-sm">
                    High TDS + pollution. Use <strong>brass impeller pumps</strong> with frequent maintenance. Avoid
                    budget options in harsh conditions.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="relative w-full h-64 md:h-80 rounded-xl overflow-hidden mt-8">
          <Image
            src="/placeholder.svg?height=400&width=800"
            alt="City-specific water pump recommendations across major Indian urban centers"
            fill
            className="object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
            <p className="text-white font-medium">Location-based water pump solutions for urban Indian cities</p>
          </div>
        </div>

        <p className="text-gray-700 mt-8">
          <Link href="#submersible-solar-pumps-for-borewells" className="text-blue-600 font-medium hover:underline">
            ← Back to Submersible & Solar Pumps
          </Link>{" "}
          |{" "}
          <Link href="#your-perfect-pump-next-steps" className="text-blue-600 font-medium hover:underline">
            Next: Your Perfect Pump & Next Steps →
          </Link>
        </p>
      </div>
    </section>
  )
}
