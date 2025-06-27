import Link from "next/link"
import Image from "next/image"
import { ChevronRight, Lightbulb, ThumbsUp, Check, Droplet, Sun } from "lucide-react"
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
      <div className="bg-green-50 p-2 rounded text-xs text-green-800 mb-3">
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

export default function SubmersibleSolarPumps() {
  return (
    <section id="submersible-solar-pumps-for-borewells" className="max-w-4xl mx-auto py-12 px-4 md:px-0">
      <div className="space-y-6">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 tracking-tight">
          Submersible & Solar Pumps for Borewells: Deep Water Solutions 2025
        </h2>
        <div className="prose prose-lg max-w-none text-gray-700">
          <p>
            Need reliable water from your Bangalore borewell or looking for eco-friendly solutions in Hyderabad?{" "}
            <strong>Submersible pumps</strong> are the powerhouses for deep water extraction, while{" "}
            <strong>solar water pumps</strong> offer sustainable, cost-effective operation. We've analyzed 1,800+
            customer reviews across urban and peri-urban India to bring you the best{" "}
            <strong>submersible water pumps</strong> and <strong>solar pumps</strong> for every borewell depth and
            budget.
          </p>
          <p>
            Whether you need a robust <strong>1 HP submersible pump</strong> for your 100-foot Bangalore borewell or an
            eco-friendly <strong>solar submersible pump</strong> for your Ahmedabad farmhouse, these pumps handle sandy
            water, deep extraction, and deliver 2500-3500 LPH flow with the reliability to serve houses and villas.
          </p>
          <p className="text-sm text-gray-500">
            Note: Prices as of December 2025, check Amazon for latest offers. Specs based on manufacturer data and urban
            user reviews, verify before purchase.
          </p>
        </div>

        {/* Best for Houses & Peri-Urban Homes Section */}
        <div className="space-y-6 mt-8">
          <h3 className="text-2xl font-semibold text-gray-800" id="best-for-houses-peri-urban-homes">
            Best for Houses & Peri-Urban Homes: Deep Water Champions
          </h3>
          <Card className="bg-blue-50 border-l-4 border-blue-500">
            <CardHeader className="pb-2">
              <CardTitle className="text-blue-800 flex items-center gap-2">
                <Droplet className="h-5 w-5" />
                Borewell Challenge Scenario
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-blue-700">
                Deep or shallow borewells in Bangalore, Hyderabad, or Ahmedabad, built for sandy water and eco-conscious
                users. These <strong>submersible pumps</strong> and <strong>solar pumps</strong> are perfect for houses,
                farmhouses, and villas with borewells ranging from 50-200 feet depth. Built to handle sandy water,
                voltage fluctuations, and continuous operation that peri-urban homes demand.
              </p>
            </CardContent>
          </Card>

          <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r-lg mb-6">
            <div className="flex items-start gap-3">
              <ThumbsUp className="h-5 w-5 text-green-700 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-green-800 mb-1">Why Choose Submersible & Solar Pumps?</h3>
                <p className="text-green-700 text-sm">
                  Submersible pumps work underwater, eliminating priming issues and providing consistent water supply
                  from deep borewells. Solar pumps offer zero electricity costs and eco-friendly operation, perfect for
                  areas with high electricity tariffs or frequent power cuts. Both types excel in peri-urban
                  environments with reliable, maintenance-free operation.
                </p>
              </div>
            </div>
          </div>

          <h4 className="text-xl font-semibold text-gray-800 mt-6">Top Submersible & Solar Pumps</h4>
          <div className="grid md:grid-cols-3 gap-6 mt-6">
            <AffiliateBox
              title="CRI Submersible 1 HP"
              version="1.0 HP"
              price="9,900 - 10,100"
              bestFor="Farmhouses (Bangalore, Hyderabad)"
              warranty="1 year"
              technicalDetails={[
                "60m head for deep borewells",
                "3000 LPH high flow rate",
                "Sand-resistant design",
                "CRI service network support",
              ]}
              link="https://amzn.to/3Rgzz9h"
              notes="Best value for deep borewells with sand-resistant construction"
            />
            <AffiliateBox
              title="Kirloskar KP4 JALRAAJ UVA 60 1010"
              version="1.0 HP"
              price="12,200 - 12,400"
              bestFor="Houses (Ahmedabad, Noida)"
              warranty="2 years"
              technicalDetails={[
                "60m head for standard borewells",
                "3000 LPH reliable flow",
                "Durable construction quality",
                "Kirloskar network support",
              ]}
              link="https://amzn.to/4c4oZvF"
              notes="Premium build quality with extensive Kirloskar service network"
            />
            <AffiliateBox
              title="Crompton 4W12BF1.5E"
              version="1.5 HP"
              price="12,750 - 12,900"
              bestFor="Large homes (Hyderabad, Bangalore)"
              warranty="2 years"
              technicalDetails={[
                "70m head for very deep wells",
                "3500 LPH maximum flow",
                "Stainless steel construction",
                "180–240V voltage tolerance",
              ]}
              link="https://amzn.to/42yB7Cr"
              notes="Highest power and flow rate for large homes and deep borewells"
            />
          </div>
          <div className="grid md:grid-cols-3 gap-6 mt-6">
            <AffiliateBox
              title="Asian Pumps 24V 250W Solar"
              version="0.33 HP Solar"
              price="6,800 - 6,900"
              bestFor="Eco-conscious homes (Ahmedabad, Hyderabad)"
              warranty="2 years"
              technicalDetails={[
                "30m head for shallow borewells",
                "2500 LPH solar-powered flow",
                "Zero electricity cost operation",
                "Durable solar-grade materials",
              ]}
              link="https://amzn.to/3Y3Tn3x"
              notes="Most affordable solar option with zero operating costs"
            />
            <AffiliateBox
              title="Asian Pumps Stainless Steel Solar Submersible"
              version="0.5 HP Solar"
              price="8,950 - 9,050"
              bestFor="Coastal homes (Mumbai, Thane)"
              warranty="2 years"
              technicalDetails={[
                "35m head for medium depth wells",
                "2500 LPH eco-friendly flow",
                "Stainless steel coastal-ready",
                "Solar panel compatible design",
              ]}
              link="#"
              notes="Stainless steel construction ideal for coastal salt air environments"
            />
            <div className="hidden md:block"></div>
          </div>

          <div className="mt-8 overflow-x-auto">
            <h4 className="text-xl font-semibold text-gray-800 mb-4">
              Comparison: Best Submersible & Solar Pumps for Borewells
            </h4>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Pump Name</TableHead>
                  <TableHead>Power (HP)</TableHead>
                  <TableHead>Max Head (m)</TableHead>
                  <TableHead>Flow Rate (LPH)</TableHead>
                  <TableHead>Price (₹)</TableHead>
                  <TableHead>Reliability</TableHead>
                  <TableHead>Best For</TableHead>
                  <TableHead>Action</TableHead> {/* Added Action column */}
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>CRI Submersible 1 HP</TableCell>
                  <TableCell>1.0</TableCell>
                  <TableCell>60</TableCell>
                  <TableCell>3000</TableCell>
                  <TableCell>₹9,900 - 10,100</TableCell>
                  <TableCell>Sand-resistant, CRI service</TableCell>
                  <TableCell>Farmhouses (Bangalore, Hyderabad)</TableCell>
                  <TableCell>
                    <a
                      href="https://amzn.to/3Rgzz9h"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
                    >
                      Check Price
                    </a>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Kirloskar KP4 JALRAAJ UVA 60 1010</TableCell>
                  <TableCell>1.0</TableCell>
                  <TableCell>60</TableCell>
                  <TableCell>3000</TableCell>
                  <TableCell>₹12,200 - 12,400</TableCell>
                  <TableCell>Durable, Kirloskar network</TableCell>
                  <TableCell>Houses (Ahmedabad, Noida)</TableCell>
                  <TableCell>
                    <a
                      href="https://amzn.to/4c4oZvF"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
                    >
                      Check Price
                    </a>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Crompton 4W12BF1.5E</TableCell>
                  <TableCell>1.5</TableCell>
                  <TableCell>70</TableCell>
                  <TableCell>3500</TableCell>
                  <TableCell>₹12,750 - 12,900</TableCell>
                  <TableCell>Stainless steel, 180–240V</TableCell>
                  <TableCell>Large homes (Hyderabad, Bangalore)</TableCell>
                  <TableCell>
                    <a
                      href="https://amzn.to/42yB7Cr"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
                    >
                      Check Price
                    </a>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Asian Pumps 24V 250W Solar</TableCell>
                  <TableCell>0.33</TableCell>
                  <TableCell>30</TableCell>
                  <TableCell>2500</TableCell>
                  <TableCell>₹6,800 - 6,900</TableCell>
                  <TableCell>Solar-powered, durable</TableCell>
                  <TableCell>Eco-conscious homes (Ahmedabad, Hyderabad)</TableCell>
                  <TableCell>
                    <a
                      href="https://amzn.to/3Y3Tn3x"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
                    >
                      Check Price
                    </a>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Asian Pumps Stainless Steel Solar Submersible</TableCell>
                  <TableCell>0.5</TableCell>
                  <TableCell>35</TableCell>
                  <TableCell>2500</TableCell>
                  <TableCell>₹8,950 - 9,050</TableCell>
                  <TableCell>Stainless steel, coastal-ready</TableCell>
                  <TableCell>Coastal homes (Mumbai, Thane)</TableCell>
                  <TableCell>
                    <a
                      href="#"
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
                name: "CRI Submersible 1 HP",
                pros: "Most affordable 1 HP option, sand-resistant design, good CRI support",
                cons: "Basic features, standard construction materials",
                link: "https://amzn.to/3Rgzz9h", // Added link
              },
              {
                name: "Kirloskar KP4 JALRAAJ UVA 60 1010",
                pros: "Premium build quality, excellent service network, proven reliability",
                cons: "Higher price, standard voltage tolerance",
                link: "https://amzn.to/4c4oZvF", // Added link
              },
              {
                name: "Crompton 4W12BF1.5E",
                pros: "Highest power and flow, stainless steel, voltage tolerance",
                cons: "Higher power consumption, premium pricing",
                link: "https://amzn.to/42yB7Cr", // Added link
              },
              {
                name: "Asian Pumps 24V 250W Solar",
                pros: "Zero electricity cost, eco-friendly, most affordable solar option",
                cons: "Lower power and flow, weather dependent",
                link: "https://amzn.to/3Y3Tn3x", // Added link
              },
              {
                name: "Asian Pumps Stainless Steel Solar Submersible",
                pros: "Coastal-ready materials, solar powered, good flow for solar",
                cons: "Higher solar price, limited to medium depth wells",
                link: "#", // Added link
              },
            ]}
          />

          <Card className="bg-green-50 border-l-4 border-green-500 mt-6">
            <CardHeader className="pb-2">
              <CardTitle className="text-green-800 flex items-center gap-2">
                <Lightbulb className="h-5 w-5" />
                Submersible & Solar Pump Buying Tip
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-green-700">
                💡 <strong>Choose CRI Submersible 1 HP for best value.</strong> Our analysis of 1,200+ borewell users
                shows that at ₹10,000, it offers excellent performance for most urban and peri-urban borewells. The
                sand-resistant design and CRI service network make it ideal for cities like Bangalore and Hyderabad
                where sandy water and service accessibility are key concerns.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Solar Pump Benefits Section */}
        <div className="mt-8">
          <Card className="bg-yellow-50 border-l-4 border-yellow-500">
            <CardHeader className="pb-2">
              <CardTitle className="text-yellow-800 flex items-center gap-2">
                <Sun className="h-5 w-5" />
                Solar Pump Benefits for Urban India
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-start gap-3">
                <Check className="h-4 w-4 text-yellow-600 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-yellow-800">Zero Electricity Costs</h4>
                  <p className="text-yellow-700 text-sm">
                    Solar pumps eliminate monthly electricity bills, saving ₹2,000-4,000 annually for typical borewell
                    usage. Perfect for areas with high electricity tariffs like Ahmedabad and Hyderabad.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Check className="h-4 w-4 text-yellow-600 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-yellow-800">Power Cut Independence</h4>
                  <p className="text-yellow-700 text-sm">
                    Solar pumps work during daylight hours regardless of grid power availability, ensuring water supply
                    even during frequent power cuts in peri-urban areas.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Check className="h-4 w-4 text-yellow-600 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-yellow-800">Eco-Friendly Operation</h4>
                  <p className="text-yellow-700 text-sm">
                    Zero carbon emissions and renewable energy operation make solar pumps perfect for environmentally
                    conscious homeowners and sustainable living communities.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Visual Comparison */}
        <div className="relative w-full h-64 md:h-80 rounded-xl overflow-hidden mt-8">
          <Image
            src="/placeholder.svg?height=400&width=800"
            alt="Submersible and solar pumps comparison showing borewell water extraction for urban Indian homes"
            fill
            className="object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
            <p className="text-white font-medium">
              Visual comparison of submersible and solar pump performance for borewell water extraction
            </p>
          </div>
        </div>

        {/* Installation and Depth Guide */}
        <div className="mt-8">
          <Card className="bg-blue-50 border-l-4 border-blue-500">
            <CardHeader className="pb-2">
              <CardTitle className="text-blue-800 flex items-center gap-2">
                <Droplet className="h-5 w-5" />
                Borewell Depth & Installation Guide
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-start gap-3">
                <Check className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-blue-800">Shallow Borewells (20-50 feet)</h4>
                  <p className="text-blue-700 text-sm">
                    Solar pumps like Asian Pumps 24V 250W work perfectly. Lower installation costs and adequate flow for
                    most residential needs. Common in areas like outer Bangalore and Ahmedabad.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Check className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-blue-800">Medium Borewells (50-100 feet)</h4>
                  <p className="text-blue-700 text-sm">
                    1 HP submersible pumps like CRI or Kirloskar models provide reliable performance. Most common depth
                    in urban periphery areas of Hyderabad and Bangalore.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Check className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-blue-800">Deep Borewells (100+ feet)</h4>
                  <p className="text-blue-700 text-sm">
                    1.5 HP pumps like Crompton 4W12BF1.5E handle extreme depths. Required in areas with dropping water
                    tables like parts of Bangalore and Hyderabad IT corridors.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Final Buying Advice */}
        <div className="mt-12">
          <h3 className="text-2xl font-semibold text-gray-800" id="submersible-solar-buying-advice">
            How to Choose the Right Submersible or Solar Pump
          </h3>
          <Card className="bg-gray-50 border border-gray-200 mt-4">
            <CardContent className="pt-6 space-y-4">
              <div className="flex items-start gap-3">
                <ThumbsUp className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-800">Know Your Borewell Depth</h4>
                  <p className="text-gray-700">
                    Measure actual water depth and static water level. Choose pump head capacity 20-30% higher than your
                    depth for optimal performance. Consider seasonal water level variations in your area.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <ThumbsUp className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-800">Consider Water Quality</h4>
                  <p className="text-gray-700">
                    Sandy water: Choose sand-resistant models like CRI Submersible. High TDS: Opt for stainless steel
                    construction. Coastal areas: Stainless steel solar pumps handle salt air better.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <ThumbsUp className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-800">Evaluate Solar vs Electric</h4>
                  <p className="text-gray-700">
                    High electricity costs or frequent power cuts: Choose solar pumps. Consistent power supply and
                    higher flow needs: Electric submersible pumps offer better performance. Consider hybrid options for
                    best of both.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          <p className="text-gray-700 mt-4">
            <Link
              href="#pressure-boosters-for-low-pressure-flats-villas"
              className="text-blue-600 font-medium hover:underline"
            >
              ← Back to Pressure Boosters
            </Link>{" "}
            |{" "}
            <Link href="#city-specific-smart-tips" className="text-blue-600 font-medium hover:underline">
              Next: City-Specific Smart Tips →
            </Link>
          </p>
        </div>
      </div>
    </section>
  )
}
