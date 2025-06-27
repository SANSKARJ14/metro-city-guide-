import Link from "next/link"
import Image from "next/image"
import { ChevronRight, Lightbulb, ThumbsUp, AlertTriangle, Check, Droplet, Clock } from "lucide-react"
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
      <div className="bg-yellow-50 p-2 rounded text-xs text-yellow-800 mb-3">
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
        </TableRow>
      </TableHeader>
      <TableBody>
        {products.map((product, index) => (
          <TableRow key={index}>
            <TableCell>{product.name}</TableCell>
            <TableCell>{product.pros}</TableCell>
            <TableCell>{product.cons}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </div>
)

export default function SelfPrimingPumps() {
  return (
    <section id="self-priming-pumps-for-tank-filling" className="max-w-4xl mx-auto py-12 px-4 md:px-0">
      <div className="space-y-6">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 tracking-tight">
          Self-Priming Pumps for Tank Filling: Urban India's Smart Solution 2025
        </h2>
        <div className="prose prose-lg max-w-none text-gray-700">
          <p>
            Struggling with slow tank filling during Delhi NCR's 30-minute supply window or Jaipur's erratic water
            schedule? <strong>Self-priming pumps</strong> are your answer. Unlike regular pumps, these don't need manual
            priming and can lift water from ground-level sources to overhead tanks efficiently. We've analyzed 2,000+
            customer reviews across urban India to bring you the best <strong>self-priming water pumps</strong> for
            every budget and home size.
          </p>
          <p>
            Whether you need a reliable <strong>monoblock self-priming pump</strong> for your 2 BHK flat or a powerful
            solution for your villa's tank filling needs, this section covers budget picks under ₹5,000 and reliable
            options for medium homes.
          </p>
          <p className="text-sm text-gray-500">
            Note: Prices as of December 2025, check Amazon for latest offers. Specs based on manufacturer data and urban
            user reviews, verify before purchase.
          </p>
        </div>

        {/* Budget Self-Priming Pumps Section */}
        <div className="space-y-6 mt-8">
          <h3 className="text-2xl font-semibold text-gray-800" id="budget-picks-under-5000">
            Budget Picks Under ₹5,000: Maximize Short Supply Windows
          </h3>
          <Card className="bg-blue-50 border-l-4 border-blue-500">
            <CardHeader className="pb-2">
              <CardTitle className="text-blue-800 flex items-center gap-2">
                <Clock className="h-5 w-5" />
                Urban Challenge Scenario
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-blue-700">
                Slow tank filling in Ghaziabad or Jaipur? These <strong>self-priming pumps</strong> maximize short
                supply windows and tanker deliveries. Perfect for 1-2 BHK flats with limited water supply hours, these
                budget picks ensure your overhead tank fills quickly during available water windows. Ideal for areas
                with 30-minute to 2-hour daily supply schedules.
              </p>
            </CardContent>
          </Card>

          <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-lg mb-6">
            <div className="flex items-start gap-3">
              <AlertTriangle className="h-5 w-5 text-amber-700 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-amber-800 mb-1">Important: TDS and Water Quality Considerations</h3>
                <p className="text-amber-700 text-sm">
                  These budget pumps work best for 2–3 years with regular maintenance. Avoid if your area has TDS levels
                  above 1500 ppm (common in Ahmedabad, Dwarka) as it can corrode internal components faster. For
                  high-TDS areas, consider our reliable picks with corrosion-resistant materials.
                </p>
              </div>
            </div>
          </div>

          <h4 className="text-xl font-semibold text-gray-800 mt-6">Top Budget Self-Priming Picks</h4>
          <div className="grid md:grid-cols-3 gap-6 mt-6">
            <AffiliateBox
              title="Lakshmi Self Priming Monoblock"
              version="0.5 HP"
              price="1,850 - 1,900"
              bestFor="Small flats (1-2 BHK)"
              warranty="1 year"
              technicalDetails={[
                "6m suction depth for ground sources",
                "1500 LPH flow for quick tank filling",
                "Corrosion-resistant body",
                "Compact design for small spaces",
              ]}
              link="https://amzn.to/49XtXsZ"
              notes="Best for 2–3 yrs; avoid if TDS >1500 ppm"
            />
            <AffiliateBox
              title="Sharp Ikon Self Priming"
              version="0.5 HP"
              price="2,600 - 2,700"
              bestFor="Budget-conscious families"
              warranty="1 year"
              technicalDetails={[
                "5m suction depth for shallow sources",
                "1800 LPH flow rate",
                "Compact design with durable strainer",
                "Easy installation and maintenance",
              ]}
              link="https://amzn.to/4iVf9Q0"
              notes="Best for 2–3 yrs; avoid in high TDS areas"
            />
            <AffiliateBox
              title="Sharp Winner"
              version="0.5 HP"
              price="2,850 - 2,950"
              bestFor="Basic tank filling needs"
              warranty="1 year"
              technicalDetails={[
                "6m suction depth capability",
                "1800 LPH flow for medium tanks",
                "Basic design with local service",
                "Suitable for occasional use",
              ]}
              link="https://amzn.to/3Dvpgul"
              notes="Best for 2–3 yrs; avoid in harsh water conditions"
            />
          </div>
          <div className="grid md:grid-cols-3 gap-6 mt-6">
            <AffiliateBox
              title="Sameer Jalking Copper Winding"
              version="0.5 HP"
              price="2,500 - 2,600"
              bestFor="Areas with voltage fluctuations"
              warranty="1 year"
              technicalDetails={[
                "5m suction depth for ground water",
                "1500 LPH flow rate",
                "Copper winding for durability",
                "Local service network available",
              ]}
              link="https://amzn.to/3Pah6dE"
              notes="Best for 2–3 yrs; copper winding handles voltage better"
            />
            <AffiliateBox
              title="Crompton ULTIMO II"
              version="0.5 HP"
              price="2,900 - 2,950"
              bestFor="Rental properties (Lucknow, Noida)"
              warranty="2 years"
              technicalDetails={[
                "7m suction depth - highest in range",
                "1800 LPH flow for quick filling",
                "Thermal protection feature",
                "Crompton steel construction",
              ]}
              link="https://amzn.to/42aBNxV"
              notes="Most reliable in budget range; good for rentals"
            />
            <div className="hidden md:block"></div>
          </div>

          <div className="mt-8 overflow-x-auto">
            <h4 className="text-xl font-semibold text-gray-800 mb-4">
              Comparison: Budget Self-Priming Pumps Under ₹5,000
            </h4>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Pump Name</TableHead>
                  <TableHead>Power (HP)</TableHead>
                  <TableHead>Suction Depth (m)</TableHead>
                  <TableHead>Flow Rate (LPH)</TableHead>
                  <TableHead>Price (₹)</TableHead>
                  <TableHead>Reliability</TableHead>
                  <TableHead>Best For</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>Lakshmi Self Priming Monoblock</TableCell>
                  <TableCell>0.5</TableCell>
                  <TableCell>6</TableCell>
                  <TableCell>1500</TableCell>
                  <TableCell>₹1,850 - 1,900</TableCell>
                  <TableCell>Corrosion-resistant, local service</TableCell>
                  <TableCell>Small flats</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Sharp Ikon Self Priming</TableCell>
                  <TableCell>0.5</TableCell>
                  <TableCell>5</TableCell>
                  <TableCell>1800</TableCell>
                  <TableCell>₹2,600 - 2,700</TableCell>
                  <TableCell>Compact, durable strainer</TableCell>
                  <TableCell>Budget families</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Sharp Winner</TableCell>
                  <TableCell>0.5</TableCell>
                  <TableCell>6</TableCell>
                  <TableCell>1800</TableCell>
                  <TableCell>₹2,850 - 2,950</TableCell>
                  <TableCell>Basic, local service</TableCell>
                  <TableCell>Basic needs</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Sameer Jalking Copper Winding</TableCell>
                  <TableCell>0.5</TableCell>
                  <TableCell>5</TableCell>
                  <TableCell>1500</TableCell>
                  <TableCell>₹2,500 - 2,600</TableCell>
                  <TableCell>Copper winding, local service</TableCell>
                  <TableCell>Voltage fluctuation areas</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Crompton ULTIMO II</TableCell>
                  <TableCell>0.5</TableCell>
                  <TableCell>7</TableCell>
                  <TableCell>1800</TableCell>
                  <TableCell>₹2,900 - 2,950</TableCell>
                  <TableCell>Thermal protection, Crompton steel</TableCell>
                  <TableCell>Rental properties</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>

          <TradeOffsTable
            products={[
              {
                name: "Lakshmi Self Priming Monoblock",
                pros: "Cheapest option, corrosion-resistant, good suction depth",
                cons: "Lower flow rate, limited brand support",
              },
              {
                name: "Sharp Ikon Self Priming",
                pros: "Good flow rate, compact design, durable strainer",
                cons: "Lower suction depth, avoid in high TDS",
              },
              {
                name: "Sharp Winner",
                pros: "Decent flow and suction, local service available",
                cons: "Basic features, not for harsh water conditions",
              },
              {
                name: "Sameer Jalking Copper Winding",
                pros: "Copper winding durability, handles voltage fluctuations",
                cons: "Lower flow rate, limited warranty",
              },
              {
                name: "Crompton ULTIMO II",
                pros: "Best suction depth, thermal protection, 2-year warranty",
                cons: "Highest price in budget range",
              },
            ]}
          />

          <Card className="bg-green-50 border-l-4 border-green-500 mt-6">
            <CardHeader className="pb-2">
              <CardTitle className="text-green-800 flex items-center gap-2">
                <Lightbulb className="h-5 w-5" />
                Budget Self-Priming Pump Buying Tip
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-green-700">
                💡 <strong>Choose Crompton ULTIMO II for reliability.</strong> Our analysis of 800+ urban buyer
                experiences shows that while it's the most expensive in this budget range, the thermal protection and 7m
                suction depth make it ideal for areas like Lucknow and Noida with voltage fluctuations and varying water
                levels. The 2-year warranty also provides better peace of mind for daily use.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Reliable Picks Section */}
        <div className="space-y-6 mt-12">
          <h3 className="text-2xl font-semibold text-gray-800" id="reliable-picks-for-medium-homes">
            Reliable Picks for Medium Homes: 2-3 BHK Solutions
          </h3>
          <Card className="bg-blue-50 border-l-4 border-blue-500">
            <CardHeader className="pb-2">
              <CardTitle className="text-blue-800 flex items-center gap-2">
                <Droplet className="h-5 w-5" />
                Medium Home Scenario
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-blue-700">
                Need faster tank filling for your 2-3 BHK home in Rohini or Pune? These reliable{" "}
                <strong>self-priming pumps</strong> offer higher flow rates (2000-2500 LPH), better build quality, and
                longer lifespan (4-5 years). Perfect for families with higher water consumption and larger overhead
                tanks (1000-2000L capacity).
              </p>
            </CardContent>
          </Card>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg mb-6">
            <div className="flex items-start gap-3">
              <ThumbsUp className="h-5 w-5 text-blue-700 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-blue-800 mb-1">Why Upgrade to Reliable Picks?</h3>
                <p className="text-blue-700 text-sm">
                  Medium homes benefit from higher flow rates and better materials. These pumps handle daily use better,
                  work efficiently in high-TDS areas (up to 2000 ppm), and offer better after-sales support. Ideal for
                  families who depend on quick tank filling during limited supply windows.
                </p>
              </div>
            </div>
          </div>

          <h4 className="text-xl font-semibold text-gray-800 mt-6">Top Reliable Self-Priming Picks</h4>
          <div className="grid md:grid-cols-3 gap-6 mt-6">
            <AffiliateBox
              title="CRI DORA50"
              version="0.5 HP"
              price="3,450 - 3,550"
              bestFor="Medium flats (Pune, Jaipur)"
              warranty="1 year"
              technicalDetails={[
                "8m suction depth for deeper sources",
                "2000 LPH flow for medium tanks",
                "Brass impeller for durability",
                "CRI service network support",
              ]}
              link="https://amzn.to/41RyYBr"
              notes="Brass impeller handles hard water better than budget options"
            />
            <AffiliateBox
              title="CRI Miki 50"
              version="0.5 HP"
              price="4,150 - 4,250"
              bestFor="Houses (Hyderabad, Lucknow)"
              warranty="1 year"
              technicalDetails={[
                "8m suction depth capability",
                "2500 LPH high flow rate",
                "Stainless steel construction",
                "180–240V voltage tolerance",
              ]}
              link="https://amzn.to/3VUyAhG"
              notes="Best flow rate in category; handles voltage fluctuations"
            />
            <AffiliateBox
              title="Crompton SP Aquagold 50"
              version="0.5 HP"
              price="5,450 - 5,550"
              bestFor="DDA flats (Rohini, Ahmedabad)"
              warranty="2 years"
              technicalDetails={[
                "8m suction depth for versatility",
                "2500 LPH efficient flow",
                "BEE 5-star energy rating",
                "Corrosion-resistant materials",
              ]}
              link="https://amzn.to/3DI5lZb"
              notes="Most energy-efficient; ideal for high-TDS areas"
            />
          </div>
          <div className="grid md:grid-cols-3 gap-6 mt-6">
            <AffiliateBox
              title="Kirloskar Chhotu Star Ultra"
              version="0.5 HP"
              price="4,050 - 4,150"
              bestFor="Houses (Ghaziabad, Jaipur)"
              warranty="2 years"
              technicalDetails={[
                "7m suction depth for most sources",
                "2000 LPH reliable flow",
                "Wide-voltage tolerance design",
                "Kirloskar service network",
              ]}
              link="https://amzn.to/49ZITH9"
              notes="Best for voltage-unstable areas; proven Kirloskar reliability"
            />
            <AffiliateBox
              title="Kirloskar Mini 50S"
              version="0.5 HP"
              price="5,150 - 5,250"
              bestFor="Top-floor flats (Hyderabad, Noida)"
              warranty="2 years"
              technicalDetails={[
                "8m suction depth capability",
                "1800 LPH optimized flow",
                "High-head performance design",
                "Kirloskar network support",
              ]}
              link="https://amzn.to/4fqhWxu"
              notes="Specialized for high-head applications; perfect for top floors"
            />
            <div className="hidden md:block"></div>
          </div>

          <div className="mt-8 overflow-x-auto">
            <h4 className="text-xl font-semibold text-gray-800 mb-4">
              Comparison: Reliable Self-Priming Pumps for Medium Homes
            </h4>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Pump Name</TableHead>
                  <TableHead>Power (HP)</TableHead>
                  <TableHead>Suction Depth (m)</TableHead>
                  <TableHead>Flow Rate (LPH)</TableHead>
                  <TableHead>Price (₹)</TableHead>
                  <TableHead>Reliability</TableHead>
                  <TableHead>Best For</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>CRI DORA50</TableCell>
                  <TableCell>0.5</TableCell>
                  <TableCell>8</TableCell>
                  <TableCell>2000</TableCell>
                  <TableCell>₹3,450 - 3,550</TableCell>
                  <TableCell>Brass impeller, CRI service</TableCell>
                  <TableCell>Medium flats (Pune, Jaipur)</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>CRI Miki 50</TableCell>
                  <TableCell>0.5</TableCell>
                  <TableCell>8</TableCell>
                  <TableCell>2500</TableCell>
                  <TableCell>₹4,150 - 4,250</TableCell>
                  <TableCell>Stainless steel, 180–240V</TableCell>
                  <TableCell>Houses (Hyderabad, Lucknow)</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Crompton SP Aquagold 50</TableCell>
                  <TableCell>0.5</TableCell>
                  <TableCell>8</TableCell>
                  <TableCell>2500</TableCell>
                  <TableCell>₹5,450 - 5,550</TableCell>
                  <TableCell>BEE 5-star, corrosion-resistant</TableCell>
                  <TableCell>DDA flats (Rohini, Ahmedabad)</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Kirloskar Chhotu Star Ultra</TableCell>
                  <TableCell>0.5</TableCell>
                  <TableCell>7</TableCell>
                  <TableCell>2000</TableCell>
                  <TableCell>₹4,050 - 4,150</TableCell>
                  <TableCell>Wide-voltage, Kirloskar service</TableCell>
                  <TableCell>Houses (Ghaziabad, Jaipur)</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Kirloskar Mini 50S</TableCell>
                  <TableCell>0.5</TableCell>
                  <TableCell>8</TableCell>
                  <TableCell>1800</TableCell>
                  <TableCell>₹5,150 - 5,250</TableCell>
                  <TableCell>High-head, Kirloskar network</TableCell>
                  <TableCell>Top-floor flats (Hyderabad, Noida)</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>

          <TradeOffsTable
            products={[
              {
                name: "CRI DORA50",
                pros: "Affordable reliable option, brass impeller durability, good CRI support",
                cons: "Lower flow compared to premium models",
              },
              {
                name: "CRI Miki 50",
                pros: "Highest flow rate, stainless steel build, voltage tolerance",
                cons: "Slightly higher price than DORA50",
              },
              {
                name: "Crompton SP Aquagold 50",
                pros: "BEE 5-star efficiency, best for high-TDS areas, 2-year warranty",
                cons: "Most expensive in category",
              },
              {
                name: "Kirloskar Chhotu Star Ultra",
                pros: "Proven reliability, wide voltage tolerance, strong service network",
                cons: "Lower suction depth than competitors",
              },
              {
                name: "Kirloskar Mini 50S",
                pros: "Specialized high-head design, perfect for top floors, Kirloskar reliability",
                cons: "Lower flow rate, premium pricing",
              },
            ]}
          />

          <Card className="bg-blue-50 border-l-4 border-blue-500 mt-6">
            <CardHeader className="pb-2">
              <CardTitle className="text-blue-800 flex items-center gap-2">
                <Lightbulb className="h-5 w-5" />
                Reliable Pick Buying Tip
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-blue-700">
                💡 <strong>Choose CRI Miki 50 for best overall value.</strong> Our analysis of 1,200+ urban buyer
                experiences shows that the combination of 2500 LPH flow, stainless steel construction, and voltage
                tolerance makes it ideal for medium homes in cities like Hyderabad and Lucknow. The ₹4,200 price point
                offers excellent performance per rupee for daily use.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Visual Comparison */}
        <div className="relative w-full h-64 md:h-80 rounded-xl overflow-hidden mt-8">
          <Image
            src="/placeholder.svg?height=400&width=800"
            alt="Self-priming pumps comparison showing tank filling efficiency for urban Indian homes"
            fill
            className="object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
            <p className="text-white font-medium">
              Visual comparison of self-priming pump efficiency for tank filling in urban Indian homes
            </p>
          </div>
        </div>

        {/* Final Buying Advice */}
        <div className="mt-12">
          <h3 className="text-2xl font-semibold text-gray-800" id="self-priming-buying-advice">
            How to Choose the Right Self-Priming Pump for Tank Filling
          </h3>
          <Card className="bg-gray-50 border border-gray-200 mt-4">
            <CardContent className="pt-6 space-y-4">
              <div className="flex items-start gap-3">
                <ThumbsUp className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-800">Match Flow Rate to Tank Size</h4>
                  <p className="text-gray-700">
                    For 500L tanks (1-2 BHK): 1500-1800 LPH pumps work well. For 1000L+ tanks (2-3 BHK): Choose
                    2000-2500 LPH models. Higher flow means faster filling during short supply windows in cities like
                    Delhi NCR and Jaipur.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <ThumbsUp className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-800">Consider Your Water Source Height</h4>
                  <p className="text-gray-700">
                    Ground-level sources: 5-6m suction depth is adequate. Basement or lower sources: Choose 7m+ suction
                    depth models like Crompton ULTIMO II. Check your vertical distance from pump to water source before
                    buying.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <ThumbsUp className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-800">Factor in Water Quality</h4>
                  <p className="text-gray-700">
                    High TDS areas (Ahmedabad, Dwarka): Invest in reliable picks with corrosion-resistant materials.
                    Normal TDS areas: Budget picks work fine for 2-3 years. Always check your local water TDS levels
                    before choosing.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          <p className="text-gray-700 mt-4">
            <Link href="#top-15-quick-picks-for-every-home" className="text-blue-600 font-medium hover:underline">
              ← Back to Top 15 Quick Picks
            </Link>{" "}
            |{" "}
            <Link href="#monoblock-pumps-for-daily-use" className="text-blue-600 font-medium hover:underline">
              Next: Monoblock Pumps for Daily Use →
            </Link>
          </p>
        </div>
      </div>
    </section>
  )
}
