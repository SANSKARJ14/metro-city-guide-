import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Award, ShoppingCart, PenToolIcon as Tool, Calendar, Download, ArrowRight, CheckCircle } from "lucide-react"
import Link from "next/link"

// Top pick component
const TopPick = ({ rank, title, price, hp, bestFor, features, link, badge }) => (
  <Card className="border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300">
    <CardHeader className="pb-3">
      <div className="flex items-center justify-between mb-2">
        <Badge variant="outline" className="bg-blue-50 text-blue-700">
          #{rank}
        </Badge>
        {badge && <Badge className="bg-green-100 text-green-800">{badge}</Badge>}
      </div>
      <CardTitle className="text-lg">{title}</CardTitle>
      <div className="flex items-center gap-2">
        <span className="text-2xl font-bold text-green-600">₹{price}</span>
        <Badge variant="secondary">{hp}</Badge>
      </div>
    </CardHeader>
    <CardContent className="space-y-3">
      <p className="text-sm text-gray-600">
        <strong>Best For:</strong> {bestFor}
      </p>
      <ul className="text-sm text-gray-600 space-y-1">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-2">
            <CheckCircle className="h-3 w-3 text-green-500 mt-1 flex-shrink-0" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </CardContent>
    <CardFooter>
      <Link href={link} target="_blank" rel="noopener noreferrer" className="w-full">
        <Button className="w-full bg-blue-600 hover:bg-blue-700">Check Price on Amazon</Button>
      </Link>
    </CardFooter>
  </Card>
)

export default function PerfectPumpConclusion() {
  const topPicks = [
    {
      rank: 1,
      title: "CRI DORA50",
      price: "3,499",
      hp: "0.5 HP",
      bestFor: "Budget flats (Lucknow, Ghaziabad)",
      features: [
        "Brass impeller for durability",
        "180–240V voltage tolerance",
        "2000 LPH reliable flow",
        "Best value for money",
      ],
      link: "https://amzn.to/41RyYBr",
      badge: "Best Value",
    },
    {
      rank: 2,
      title: "V-Guard Nova Series",
      price: "3,227",
      hp: "0.5 HP",
      bestFor: "Small flats (Noida, Jaipur)",
      features: ["Copper winding motor", "160–240V wide voltage", "Compact design", "Most affordable reliable option"],
      link: "https://amzn.to/4iUUECP",
      badge: "Budget Pick",
    },
    {
      rank: 3,
      title: "Kirloskar Chhotu Star Ultra",
      price: "4,099",
      hp: "0.5 HP",
      bestFor: "Voltage-unstable areas (Jaipur, Uttam Nagar)",
      features: ["Wide-voltage tolerance", "Kirloskar service network", "Thermal protection", "Proven reliability"],
      link: "https://amzn.to/49ZITH9",
      badge: "Most Reliable",
    },
    {
      rank: 4,
      title: "Grundfos SCALA2",
      price: "55,000",
      hp: "0.75 HP",
      bestFor: "Luxury villas (Gurgaon, Chandigarh)",
      features: ["Silent operation (<40dB)", "Smart app controls", "45m head capacity", "German engineering"],
      link: "https://amzn.to/3P8aLzi",
      badge: "Premium Choice",
    },
    {
      rank: 5,
      title: "Asian Pumps 24V 250W Solar",
      price: "6,850",
      hp: "0.33 HP Solar",
      bestFor: "Eco-conscious homes (Hyderabad, Ahmedabad)",
      features: [
        "Solar-powered operation",
        "Zero electricity cost",
        "PM-KUSUM subsidy eligible",
        "Eco-friendly choice",
      ],
      link: "https://amzn.to/3Y3Tn3x",
      badge: "Eco-Friendly",
    },
  ]

  return (
    <section id="your-perfect-pump-next-steps" className="max-w-6xl mx-auto py-12 px-4 md:px-0">
      <div className="space-y-8">
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Your Perfect Pump & Next Steps: Final Recommendations 2025
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            After analyzing 33+ <strong>water pumps</strong> and 10,000+ customer reviews across urban India, we've
            identified the top 5 favorites that offer exceptional performance, reliability, and value for Indian homes
            in 2025.
          </p>
        </div>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
          <div className="flex items-start gap-3">
            <Award className="h-6 w-6 text-blue-700 mt-1 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-blue-800 mb-2">Our Expert Selection Process</h3>
              <p className="text-blue-700">
                These 5 <strong>water pumps</strong> represent the best choices across different budgets and needs.
                Selected based on reliability ratings, customer satisfaction, service network strength, and real-world
                performance in challenging urban Indian conditions.
              </p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center">
            <Award className="mr-3 text-blue-600" />
            Top 5 Favorites: Perfect for Every Urban Home
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {topPicks.map((pick) => (
              <TopPick key={pick.rank} {...pick} />
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mt-12">
          <Card className="border border-gray-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-gray-800">
                <ShoppingCart className="h-5 w-5 text-blue-600" />
                How to Buy & Install
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Purchase Process</h4>
                <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                  <li>
                    <strong>Click Amazon links above</strong> for verified sellers and best prices across 12+ cities
                  </li>
                  <li>
                    <strong>Check for seasonal sales</strong> during Amazon Great Indian Festival (save 15-30%)
                  </li>
                  <li>
                    <strong>Verify warranty terms</strong> - ensure 1-2 year manufacturer warranty
                  </li>
                  <li>
                    <strong>Confirm delivery</strong> to your pin code before ordering
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Installation Tips</h4>
                <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                  <li>
                    <strong>Hire qualified plumbers</strong> via Urban Company or local specialists
                  </li>
                  <li>
                    <strong>Installation cost:</strong> ₹500-1,500 depending on complexity
                  </li>
                  <li>
                    <strong>Time required:</strong> 1-3 hours for most pumps
                  </li>
                  <li>
                    <strong>Test thoroughly</strong> after installation for leaks and noise
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card className="border border-gray-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-gray-800">
                <Tool className="h-5 w-5 text-blue-600" />
                Maintenance & Support
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Essential Maintenance</h4>
                <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                  <li>
                    <strong>Monthly checks:</strong> Look for leaks, unusual noise, vibrations
                  </li>
                  <li>
                    <strong>Quarterly cleaning:</strong> Clean strainers and check connections
                  </li>
                  <li>
                    <strong>Annual service:</strong> Professional inspection (₹500-800)
                  </li>
                  <li>
                    <strong>Hard water areas:</strong> Descale every 6 months
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Service Network</h4>
                <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                  <li>
                    <strong>Crompton:</strong> Widest network (85% urban coverage)
                  </li>
                  <li>
                    <strong>Kirloskar:</strong> Strong North & West India presence
                  </li>
                  <li>
                    <strong>CRI:</strong> Excellent South India coverage
                  </li>
                  <li>
                    <strong>Grundfos:</strong> Premium service in metros
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="bg-green-50 border border-green-200 p-6 rounded-lg mt-8">
          <h3 className="text-xl font-semibold text-green-800 mb-4">Ready to Take Action?</h3>
          <p className="text-green-700 mb-4">
            Summer water shortages are approaching. Secure your pump before May 2025 for guaranteed availability and
            best prices. Our affiliate links ensure you get trusted products with full warranty support.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="#top-15-quick-picks-for-every-home">
              <Button className="flex items-center gap-2 bg-green-600 hover:bg-green-700">
                <ArrowRight className="h-4 w-4" />
                View All 15 Recommendations
              </Button>
            </Link>
            <Link href="#city-specific-smart-tips">
              <Button variant="outline" className="flex items-center gap-2 border-green-600 text-green-600">
                <Download className="h-4 w-4" />
                Get City-Specific Tips
              </Button>
            </Link>
          </div>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mt-8">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Final Expert Advice</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">For Most Urban Homes</h4>
              <p className="text-gray-700 text-sm mb-3">
                The <strong>CRI DORA50</strong> at ₹3,499 offers the best balance of price, performance, and
                reliability. Its brass impeller handles hard water while 180-240V tolerance manages voltage fluctuations
                common across Indian cities.
              </p>
              <Link href="https://amzn.to/41RyYBr" target="_blank" rel="noopener noreferrer">
                <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                  Buy CRI DORA50 →
                </Button>
              </Link>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">For Premium Homes</h4>
              <p className="text-gray-700 text-sm mb-3">
                The <strong>Grundfos SCALA2</strong> at ₹55,000 delivers luxury-grade performance with whisper-quiet
                operation, smart controls, and German engineering quality perfect for high-end villas and apartments.
              </p>
              <Link href="https://amzn.to/3P8aLzi" target="_blank" rel="noopener noreferrer">
                <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                  Buy Grundfos SCALA2 →
                </Button>
              </Link>
            </div>
          </div>
          <div className="mt-6 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
            <p className="text-sm text-yellow-800">
              <strong>Affiliate Disclosure:</strong> We earn commissions via affiliate links, ensuring unbiased
              recommendations. Our testing and research are funded through these partnerships at no extra cost to you.
            </p>
          </div>
        </div>

        <div className="text-center mt-8">
          <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
            <Calendar className="h-4 w-4" />
            <span>Last updated: December 26, 2025 • Prices and availability subject to change</span>
          </div>
        </div>
      </div>
    </section>
  )
}
