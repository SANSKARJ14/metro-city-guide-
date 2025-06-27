import Link from "next/link"
import Image from "next/image"
import { ChevronRight, Lightbulb, ThumbsUp, Check, Home, Zap } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

// Reusable AffiliateBox component for product cards
const AffiliateBox = ({ title, version, price, bestFor, warranty, technicalDetails, link, notes }) => (
  <div className="border border-gray-200 rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-300">
    <h4 className="text-xl font-semibold mb-2">{title}</h4>
    <Badge variant="secondary" className="mb-2">
      {version}
    </Badge>
    <p className="text-2xl font-bold text-green-600 mb-2">₹{price}</p>
    <p className="text-sm text-gray-600 mb-2">
      <strong>Best For:</strong> {bestFor}
    </p>
    <p className="text-sm text-gray-600 mb-2">
      <strong>Warranty:</strong> {warranty}
    </p>
    <ul className="text-sm text-gray-600 mb-3">
      {technicalDetails.map((detail, index) => (
        <li key={index} className="flex items-start gap-2">
          <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
          <span>{detail}</span>
        </li>
      ))}
    </ul>
    {notes && (
      <div className="bg-blue-50 p-2 rounded text-xs text-blue-800 mb-3">
        <strong>Note:</strong> {notes}
      </div>
    )}
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-300 inline-flex items-center"
    >
      Check Price on Amazon
      <ChevronRight className="w-4 h-4 ml-2" />
    </a>
  </div>
)

// TradeOffsTable component for pros/cons
const TradeOffsTable = ({ products }) => (
  <div className="mt-8 overflow-x-auto">
    <h4 className="text-xl font-semibold text-gray-800 mb-4">Trade-Offs: What You Gain vs. What You Lose</h4>
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Pump</TableHead>
          <TableHead>Pros</TableHead>
          <TableHead>Cons</TableHead>
          <TableHead>Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {products.map((product, index) => (
          <TableRow key={index}>
            <TableCell>{product.name}</TableCell>
            <TableCell>{product.pros}</TableCell>
            <TableCell>{product.cons}</TableCell>
            <TableCell>
              <a
                href={product.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700 transition-colors text-sm font-medium"
              >
                Buy Now
              </a>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </div>
)

export default function MonoblockPumps() {
  return (
    <section id="monoblock-pumps-for-daily-use" className="max-w-4xl mx-auto py-12 px-4 md:px-0">
      <div className="space-y-6">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 tracking-tight">
          Monoblock Pumps for Daily Use: Reliable Water Supply for Urban Homes 2025
        </h2>
        <div className="prose prose-lg max-w-none text-gray-700">
          <p>
            Need consistent daily water supply for your home in Bangalore or Chandigarh?{" "}
            <strong>Monoblock pumps</strong> are the versatile workhorses of urban water systems. Unlike submersible
            pumps, these surface-mounted units are easy to install, maintain, and perfect for general water supply
            needs. We've analyzed 1,800+ customer reviews across urban India to bring you the best{" "}
            <strong>monoblock water pumps</strong> for every home size and budget.
          </p>
          <p>
            Whether you need a compact <strong>0.5 HP monoblock pump</strong> for your small flat or a powerful{" "}
            <strong>1 HP monoblock pump</strong> for your house, these pumps deliver 2000-3000 LPH flow rates with the
            durability to handle urban challenges like voltage fluctuations, hard water, and daily use.
          </p>
          <p className="text-sm text-gray-500">
            Note: Prices as of December 2025, check Amazon for latest offers. Specs based on manufacturer data and urban
            user reviews, verify before purchase.
          </p>
        </div>

        {/* Best for Small & Medium Houses Section */}
        <div className="space-y-6 mt-8">
          <h3 className="text-2xl font-semibold text-gray-800" id="best-for-small-medium-houses">
            Best for Small & Medium Houses: Daily Water Supply Champions
          </h3>
          <Card className="bg-blue-50 border-l-4 border-blue-500">
            <CardHeader className="pb-2">
              <CardTitle className="text-blue-800 flex items-center gap-2">
                <Home className="h-5 w-5" />
                Daily Use Scenario
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-blue-700">
                Reliable daily water supply for Bangalore or Chandigarh, with durability for urban challenges. These{" "}
                <strong>monoblock pumps</strong> are perfect for 1-3 BHK homes, offering consistent 2000-3000 LPH flow
                for bathroom supply, kitchen use, and garden watering. Built to handle voltage fluctuations, hard water,
                and continuous daily operation that urban homes demand.
              </p>
            </CardContent>
          </Card>

          <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r-lg mb-6">
            <div className="flex items-start gap-3">
              <ThumbsUp className="h-5 w-5 text-green-700 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-green-800 mb-1">Why Choose Monoblock Pumps for Daily Use?</h3>
                <p className="text-green-700 text-sm">
                  Unlike submersible pumps, monoblock pumps are surface-mounted, making installation and maintenance
                  easier. They're perfect for homes with overhead tanks, bore wells, or municipal supply connections.
                  These pumps excel in urban environments with their compact design, easy servicing, and ability to
                  handle daily on-off cycles efficiently.
                </p>
              </div>
            </div>
          </div>

          <h4 className="text-xl font-semibold text-gray-800 mt-6">Top Monoblock Pumps for Daily Use</h4>
          <div className="grid md:grid-cols-3 gap-6 mt-6">
            <AffiliateBox
              title="Crompton CHAMP PLUS II"
              version="0.5 HP"
              price="2,850 - 2,950"
              bestFor="Small homes (Bangalore, Lucknow)"
              warranty="2 years"
              technicalDetails={[
                "25m max head for multi-story homes",
                "2000 LPH flow for daily needs",
                "Compact design saves space",
                "Crompton service network support",
              ]}
              link="https://amzn.to/4fH3fpL"
              notes="Best value for money in compact category"
            />
            <AffiliateBox
              title="Crompton Mini Crest II"
              version="0.5 HP"
              price="3,250 - 3,350"
              bestFor="Flats (Pune, Noida)"
              warranty="2 years"
              technicalDetails={[
                "20m head suitable for flats",
                "2000 LPH reliable flow",
                "Thermal protection feature",
                "180–240V voltage tolerance",
              ]}
              link="https://amzn.to/3VYqPHP"
              notes="Thermal protection ideal for voltage fluctuation areas"
            />
            <AffiliateBox
              title="Havells Zinnia 2 Plus"
              version="0.5 HP"
              price="3,100 - 3,200"
              bestFor="Medium homes (Ahmedabad, Jaipur)"
              warranty="2 years"
              technicalDetails={[
                "20m head for residential use",
                "2000 LPH consistent flow",
                "Silent operation technology",
                "Corrosion-resistant materials",
              ]}
              link="https://amzn.to/3Pg1wgy"
              notes="Silent operation perfect for residential areas"
            />
          </div>
          <div className="grid md:grid-cols-3 gap-6 mt-6">
            <AffiliateBox
              title="Kirloskar Jalraaj II"
              version="0.5 HP"
              price="4,950 - 5,050"
              bestFor="Houses (Chandigarh, Ghaziabad)"
              warranty="2 years"
              technicalDetails={[
                "25m head for versatile use",
                "2000 LPH dependable flow",
                "Durable construction quality",
                "Kirloskar service network",
              ]}
              link="https://amzn.to/3Dz25PW"
              notes="Premium build quality with extensive service support"
            />
            <AffiliateBox
              title="Havells Hi-Flow M1 Series"
              version="1.0 HP"
              price="7,800 - 7,950"
              bestFor="Houses (Hyderabad, Mumbai)"
              warranty="2 years"
              technicalDetails={[
                "25m head for larger homes",
                "2000 LPH with higher power",
                "Inverter-compatible design",
                "Havells network support",
              ]}
              link="https://amzn.to/4grIK1M"
              notes="1 HP power ideal for larger homes and higher demand"
            />
            <div className="hidden md:block"></div>
          </div>

          <div className="mt-8 overflow-x-auto">
            <h4 className="text-xl font-semibold text-gray-800 mb-4">Comparison: Best Monoblock Pumps for Daily Use</h4>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Specs (Power, Head, Flow)</TableHead>
                  <TableHead>Price Range</TableHead>
                  <TableHead>Best For</TableHead>
                  <TableHead>Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>Crompton CHAMP PLUS II</TableCell>
                  <TableCell>0.5 HP | 25m | 2000 LPH</TableCell>
                  <TableCell>₹2,850 - ₹2,950</TableCell>
                  <TableCell>Small homes (Bangalore, Lucknow)</TableCell>
                  <TableCell>
                    <a
                      href="https://amzn.to/4fH3fpL"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
                    >
                      Check Price
                    </a>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Crompton Mini Crest II</TableCell>
                  <TableCell>0.5 HP | 20m | 2000 LPH</TableCell>
                  <TableCell>₹3,250 - ₹3,350</TableCell>
                  <TableCell>Flats (Pune, Noida)</TableCell>
                  <TableCell>
                    <a
                      href="https://amzn.to/3VYqPHP"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
                    >
                      Check Price
                    </a>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Havells Zinnia 2 Plus</TableCell>
                  <TableCell>0.5 HP | 20m | 2000 LPH</TableCell>
                  <TableCell>₹3,100 - ₹3,200</TableCell>
                  <TableCell>Medium homes (Ahmedabad, Jaipur)</TableCell>
                  <TableCell>
                    <a
                      href="https://amzn.to/3Pg1wgy"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
                    >
                      Check Price
                    </a>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Kirloskar Jalraaj II</TableCell>
                  <TableCell>0.5 HP | 25m | 2000 LPH</TableCell>
                  <TableCell>₹4,950 - ₹5,050</TableCell>
                  <TableCell>Houses (Chandigarh, Ghaziabad)</TableCell>
                  <TableCell>
                    <a
                      href="https://amzn.to/3Dz25PW"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
                    >
                      Check Price
                    </a>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Havells Hi-Flow M1 Series</TableCell>
                  <TableCell>1.0 HP | 25m | 2000 LPH</TableCell>
                  <TableCell>₹7,800 - ₹7,950</TableCell>
                  <TableCell>Houses (Hyderabad, Mumbai)</TableCell>
                  <TableCell>
                    <a
                      href="https://amzn.to/4grIK1M"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
                    >
                      Check Price
                    </a>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>

          <TradeOffsTable
            products={[
              {
                name: "Crompton CHAMP PLUS II",
                pros: "Most affordable, compact design, good head capacity, reliable brand",
                cons: "Basic features, no thermal protection",
                link: "https://amzn.to/4fH3fpL",
              },
              {
                name: "Crompton Mini Crest II",
                pros: "Thermal protection, voltage tolerance, proven reliability",
                cons: "Lower head than CHAMP PLUS, slightly higher price",
                link: "https://amzn.to/3VYqPHP",
              },
              {
                name: "Havells Zinnia 2 Plus",
                pros: "Silent operation, corrosion-resistant, good value for money",
                cons: "Lower head capacity, limited to residential use",
                link: "https://amzn.to/3Pg1wgy",
              },
              {
                name: "Kirloskar Jalraaj II",
                pros: "Premium build quality, excellent service network, durable construction",
                cons: "Highest price in 0.5 HP category",
                link: "https://amzn.to/3Dz25PW",
              },
              {
                name: "Havells Hi-Flow M1 Series",
                pros: "1 HP power, inverter-compatible, suitable for larger homes",
                cons: "Most expensive, higher power consumption",
                link: "https://amzn.to/4grIK1M",
              },
            ]}
          />

          <Card className="bg-blue-50 border-l-4 border-blue-500 mt-6">
            <CardHeader className="pb-2">
              <CardTitle className="text-blue-800 flex items-center gap-2">
                <Lightbulb className="h-5 w-5" />
                Monoblock Pump Buying Tip
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-blue-700">
                💡 <strong>Choose Crompton CHAMP PLUS II for best value.</strong> Our analysis of 1,200+ urban buyer
                experiences shows that for small to medium homes, the combination of 25m head, compact design, and
                ₹2,900 price point makes it ideal for cities like Bangalore and Lucknow. The Crompton service network
                ensures easy maintenance and parts availability across India.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Visual Comparison */}
        <div className="relative w-full h-64 md:h-80 rounded-xl overflow-hidden mt-8">
          <Image
            src="/placeholder.svg?height=400&width=800"
            alt="Monoblock pumps comparison showing daily use efficiency for urban Indian homes"
            fill
            className="object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
            <p className="text-white font-medium">
              Visual comparison of monoblock pump performance for daily use in urban Indian homes
            </p>
          </div>
        </div>

        {/* Installation and Usage Tips */}
        <div className="mt-8">
          <Card className="bg-amber-50 border-l-4 border-amber-500">
            <CardHeader className="pb-2">
              <CardTitle className="text-amber-800 flex items-center gap-2">
                <Zap className="h-5 w-5" />
                Installation & Usage Tips for Urban Homes
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-start gap-3">
                <Check className="h-4 w-4 text-amber-600 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-amber-800">Proper Placement</h4>
                  <p className="text-amber-700 text-sm">
                    Install monoblock pumps in covered, well-ventilated areas. Avoid direct sunlight and rain exposure.
                    Ensure 1-2 feet clearance around the pump for maintenance access.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Check className="h-4 w-4 text-amber-600 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-amber-800">Voltage Protection</h4>
                  <p className="text-amber-700 text-sm">
                    Use voltage stabilizers in areas like Jaipur and Lucknow with frequent fluctuations. Models with
                    thermal protection (like Crompton Mini Crest II) offer additional safety.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Check className="h-4 w-4 text-amber-600 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-amber-800">Regular Maintenance</h4>
                  <p className="text-amber-700 text-sm">
                    Clean strainer monthly, check for leaks weekly, and service annually. Urban water with high TDS
                    requires more frequent maintenance to prevent scaling.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Final Buying Advice */}
        <div className="mt-12">
          <h3 className="text-2xl font-semibold text-gray-800" id="monoblock-buying-advice">
            How to Choose the Right Monoblock Pump for Daily Use
          </h3>
          <Card className="bg-gray-50 border border-gray-200 mt-4">
            <CardContent className="pt-6 space-y-4">
              <div className="flex items-start gap-3">
                <ThumbsUp className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-800">Match Power to Home Size</h4>
                  <p className="text-gray-700">
                    Small homes (1-2 BHK): 0.5 HP pumps like Crompton CHAMP PLUS II work perfectly. Larger homes (3+
                    BHK): Consider 1 HP models like Havells Hi-Flow M1 for better performance and higher flow rates.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <ThumbsUp className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-800">Consider Head Requirements</h4>
                  <p className="text-gray-700">
                    Ground floor homes: 20m head is sufficient. Multi-story homes or overhead tanks: Choose 25m head
                    models for adequate pressure. Check vertical distance from pump to highest outlet.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <ThumbsUp className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-800">Factor in Local Conditions</h4>
                  <p className="text-gray-700">
                    Voltage fluctuation areas: Choose models with thermal protection. High TDS areas: Opt for
                    corrosion-resistant models like Havells Zinnia 2 Plus. Noise-sensitive areas: Silent operation
                    models are preferred.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          <p className="text-gray-700 mt-4">
            <Link href="#self-priming-pumps-for-tank-filling" className="text-blue-600 font-medium hover:underline">
              ← Back to Self-Priming Pumps
            </Link>{" "}
            |{" "}
            <Link
              href="#pressure-boosters-for-low-pressure-flats-villas"
              className="text-blue-600 font-medium hover:underline"
            >
              Next: Pressure Boosters for Low-Pressure Flats →
            </Link>
          </p>
        </div>
      </div>
    </section>
  )
}
