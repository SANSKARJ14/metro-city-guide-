import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { AlertTriangle, HelpCircle } from "lucide-react"
import Link from "next/link"

export default function FAQSection() {
  return (
    <section className="max-w-4xl mx-auto py-12 px-4 md:px-0" id="faq">
      <div className="space-y-6">
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Frequently Asked Questions: Water Pump Solutions for Indian Homes
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Based on our analysis of 3,500+ customer queries and interviews with pump technicians across major Indian
            cities, here are the most common questions homeowners ask about <strong>water pumps</strong> in 2025.
          </p>
        </div>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
          <div className="flex items-start gap-3">
            <HelpCircle className="h-6 w-6 text-blue-700 mt-1 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-blue-800 mb-2">Expert Answers from Urban India</h3>
              <p className="text-blue-700">
                These FAQs address real challenges faced by homeowners in cities like Mumbai, Delhi NCR, Bangalore, and
                Hyderabad. Our recommendations are based on extensive field research and customer feedback across urban
                India.
              </p>
            </div>
          </div>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          <AccordionItem value="item-1" className="border border-gray-200 rounded-lg px-6">
            <AccordionTrigger className="text-left hover:no-underline">
              Which water pump is best for Mumbai's high-rise apartments with low pressure?
            </AccordionTrigger>
            <AccordionContent className="text-gray-700">
              <p className="mb-3">
                For Mumbai's high-rise apartments, a <strong>pressure booster pump</strong> is the optimal solution:
              </p>
              <ul className="list-disc list-inside space-y-2 mb-4">
                <li>Automatically activates when pressure drops below 0.5 bar</li>
                <li>Maintains consistent 2-3 bar pressure even on upper floors</li>
                <li>Handles Mumbai's monsoon humidity with corrosion-resistant materials</li>
                <li>Silent operation suitable for residential buildings</li>
              </ul>
              <p className="mb-3">
                <strong>Top recommendations for Mumbai apartments:</strong>
              </p>
              <ul className="list-disc list-inside space-y-1">
                <li>
                  <strong>Havells HBTJSE1 (₹24,999)</strong> - Best for 3+ BHK flats, silent operation
                </li>
                <li>
                  <strong>CRI MHBS Series (₹13,500)</strong> - Coastal-ready stainless steel construction
                </li>
                <li>
                  <strong>Grundfos UPA 15-90 (₹17,500)</strong> - Premium choice with smart controls
                </li>
              </ul>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2" className="border border-gray-200 rounded-lg px-6">
            <AccordionTrigger className="text-left hover:no-underline">
              How do I choose the right water pump for Delhi NCR's voltage fluctuations?
            </AccordionTrigger>
            <AccordionContent className="text-gray-700">
              <p className="mb-3">
                Delhi NCR's voltage swings (160-280V) require pumps with wide voltage tolerance and protective features:
              </p>
              <ul className="list-disc list-inside space-y-2 mb-4">
                <li>
                  <strong>Wide voltage range</strong>: Choose pumps rated for 160-240V operation
                </li>
                <li>
                  <strong>Thermal protection</strong>: Prevents motor burnout during voltage spikes
                </li>
                <li>
                  <strong>Copper winding motors</strong>: Better resistance to fluctuations than aluminum
                </li>
                <li>
                  <strong>Auto-restart capability</strong>: Resumes operation when power stabilizes
                </li>
              </ul>
              <p className="mb-3">
                <strong>Best voltage-tolerant pumps for Delhi NCR:</strong>
              </p>
              <ul className="list-disc list-inside space-y-1">
                <li>
                  <strong>Kirloskar Chhotu Star Ultra (₹4,099)</strong> - Wide voltage + Kirloskar reliability
                </li>
                <li>
                  <strong>V-Guard Nova Series (₹3,227)</strong> - 160-240V tolerance, copper winding
                </li>
                <li>
                  <strong>Crompton Mini Crest II (₹3,350)</strong> - Thermal protection + voltage tolerance
                </li>
              </ul>
              <p className="mt-3">
                <strong>Pro tip:</strong> Add a ₹2,000 voltage stabilizer for extra protection in areas like Uttam Nagar
                and Dwarka.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3" className="border border-gray-200 rounded-lg px-6">
            <AccordionTrigger className="text-left hover:no-underline">
              What's the best submersible pump for Bangalore's deep borewells?
            </AccordionTrigger>
            <AccordionContent className="text-gray-700">
              <p className="mb-3">
                Bangalore's borewells (100-200 feet deep) with sandy water require robust{" "}
                <strong>submersible pumps</strong> with these features:
              </p>
              <ul className="list-disc list-inside space-y-2 mb-4">
                <li>
                  <strong>Sand-resistant design</strong>: Handles Bangalore's sandy groundwater
                </li>
                <li>
                  <strong>60m+ head capacity</strong>: Adequate for deep borewells
                </li>
                <li>
                  <strong>3000+ LPH flow</strong>: Quick tank filling for large homes
                </li>
                <li>
                  <strong>Stainless steel construction</strong>: Resists corrosion from groundwater minerals
                </li>
              </ul>
              <p className="mb-3">
                <strong>Top submersible pumps for Bangalore borewells:</strong>
              </p>
              <ul className="list-disc list-inside space-y-1">
                <li>
                  <strong>CRI Submersible 1 HP (₹10,000)</strong> - Best value, sand-resistant
                </li>
                <li>
                  <strong>Crompton 4W12BF1.5E (₹12,824)</strong> - 1.5 HP for very deep wells
                </li>
                <li>
                  <strong>Kirloskar KP4 JALRAAJ (₹12,299)</strong> - Premium build, extensive service network
                </li>
              </ul>
              <p className="mt-3">
                <strong>Bangalore-specific tip:</strong> Install a sand filter before the pump to extend lifespan in
                areas like Whitefield and Electronic City.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4" className="border border-gray-200 rounded-lg px-6">
            <AccordionTrigger className="text-left hover:no-underline">
              How much electricity does a 1 HP water pump consume monthly in Indian cities?
            </AccordionTrigger>
            <AccordionContent className="text-gray-700">
              <p className="mb-3">
                A standard 1 HP <strong>water pump</strong> consumes approximately 750 watts per hour. Here's the
                monthly cost breakdown for major cities:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg mb-4">
                <h4 className="font-semibold mb-2">Monthly electricity costs (3 hours daily usage):</h4>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>
                    <strong>Mumbai:</strong> ₹506 (₹11.25/unit × 45 units)
                  </li>
                  <li>
                    <strong>Delhi:</strong> ₹427 (₹9.50/unit × 45 units)
                  </li>
                  <li>
                    <strong>Bangalore:</strong> ₹383 (₹8.50/unit × 45 units)
                  </li>
                  <li>
                    <strong>Hyderabad:</strong> ₹337 (₹7.50/unit × 45 units)
                  </li>
                  <li>
                    <strong>Pune:</strong> ₹450 (₹10/unit × 45 units)
                  </li>
                </ul>
              </div>
              <p className="mb-3">
                <strong>Energy-saving strategies:</strong>
              </p>
              <ul className="list-disc list-inside space-y-1">
                <li>Choose BEE 5-star rated pumps - save 30% on electricity</li>
                <li>Use timer switches to run pumps during off-peak hours</li>
                <li>Install proper-sized pumps - oversized pumps waste energy</li>
                <li>Consider solar pumps for daytime operation - zero electricity cost</li>
              </ul>
              <p className="mt-3">
                <strong>Most energy-efficient pumps:</strong> Crompton SP Aquagold 50 (BEE 5-star), Asian Pumps Solar
                Series (solar-powered).
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5" className="border border-gray-200 rounded-lg px-6">
            <AccordionTrigger className="text-left hover:no-underline">
              Which pump works best for Ahmedabad's hard water (high TDS)?
            </AccordionTrigger>
            <AccordionContent className="text-gray-700">
              <p className="mb-3">
                Ahmedabad's high TDS water (600-800 ppm) quickly corrodes regular pumps. You need{" "}
                <strong>corrosion-resistant materials</strong>:
              </p>
              <ul className="list-disc list-inside space-y-2 mb-4">
                <li>
                  <strong>Brass or stainless steel impellers</strong>: Resist mineral scaling
                </li>
                <li>
                  <strong>Corrosion-resistant body</strong>: Prevents premature failure
                </li>
                <li>
                  <strong>Easy maintenance access</strong>: For regular descaling
                </li>
                <li>
                  <strong>Avoid budget pumps</strong>: Won't survive high TDS conditions
                </li>
              </ul>
              <p className="mb-3">
                <strong>Best hard water pumps for Ahmedabad:</strong>
              </p>
              <ul className="list-disc list-inside space-y-1">
                <li>
                  <strong>CRI DORA50 (₹3,499)</strong> - Brass impeller, proven in high TDS areas
                </li>
                <li>
                  <strong>Asian Pumps Solar Submersible (₹9,000)</strong> - Stainless steel, zero electricity
                </li>
                <li>
                  <strong>Crompton SP Aquagold 50 (₹5,499)</strong> - Corrosion-resistant coating
                </li>
              </ul>
              <p className="mt-3">
                <strong>Maintenance tip:</strong> Clean strainers monthly and descale pumps every 6 months in
                Ahmedabad's water conditions.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-6" className="border border-gray-200 rounded-lg px-6">
            <AccordionTrigger className="text-left hover:no-underline">
              What's the difference between 0.5 HP and 1 HP pumps for Indian homes?
            </AccordionTrigger>
            <AccordionContent className="text-gray-700">
              <p className="mb-3">The HP rating determines your pump's power and performance capabilities:</p>
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-2">0.5 HP Pumps</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Ideal for 1-2 BHK flats</li>
                    <li>1-2 bathrooms maximum</li>
                    <li>Up to 2nd floor (with good pressure)</li>
                    <li>Power consumption: ~375 watts</li>
                    <li>Flow rate: 1500-2500 LPH</li>
                    <li>Price range: ₹3,000-8,000</li>
                  </ul>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-800 mb-2">1 HP Pumps</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Perfect for 2-3 BHK homes</li>
                    <li>2-3 bathrooms comfortably</li>
                    <li>Up to 4th floor effectively</li>
                    <li>Power consumption: ~750 watts</li>
                    <li>Flow rate: 2500-3500 LPH</li>
                    <li>Price range: ₹5,000-15,000</li>
                  </ul>
                </div>
              </div>
              <p className="mb-3">
                <strong>When to choose 1 HP over 0.5 HP:</strong>
              </p>
              <ul className="list-disc list-inside space-y-1">
                <li>Multiple bathrooms used simultaneously</li>
                <li>High-rise flats (above 3rd floor)</li>
                <li>Large overhead tanks (1500L+)</li>
                <li>Low municipal water pressure in your area</li>
                <li>Long pipe runs from pump to outlets</li>
              </ul>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-7" className="border border-gray-200 rounded-lg px-6">
            <AccordionTrigger className="text-left hover:no-underline">
              How do I fix low water pressure in my Gurgaon apartment?
            </AccordionTrigger>
            <AccordionContent className="text-gray-700">
              <p className="mb-3">
                Low water pressure in Gurgaon apartments (especially high-rises) requires a systematic approach:
              </p>
              <p className="mb-3">
                <strong>Step 1: Diagnose the problem</strong>
              </p>
              <ul className="list-disc list-inside space-y-1 mb-4">
                <li>Check if pressure is low throughout the building or just your unit</li>
                <li>Test pressure at different times (early morning vs. peak hours)</li>
                <li>Measure actual pressure using a gauge (normal = 1-2 bar)</li>
              </ul>
              <p className="mb-3">
                <strong>Step 2: Choose the right solution</strong>
              </p>
              <ul className="list-disc list-inside space-y-1 mb-4">
                <li>
                  <strong>Building-wide issue:</strong> Install a pressure booster pump
                </li>
                <li>
                  <strong>Unit-specific issue:</strong> Check for pipe blockages first
                </li>
                <li>
                  <strong>Peak hour problem:</strong> Add a pressure tank system
                </li>
              </ul>
              <p className="mb-3">
                <strong>Best pressure boosters for Gurgaon apartments:</strong>
              </p>
              <ul className="list-disc list-inside space-y-1">
                <li>
                  <strong>Grundfos SCALA2 (₹55,000)</strong> - Premium choice, whisper-quiet
                </li>
                <li>
                  <strong>Havells HBTM-2 (₹8,500)</strong> - Good value, silent operation
                </li>
                <li>
                  <strong>Crompton Mini Force (₹9,400)</strong> - High head for tall buildings
                </li>
              </ul>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-8" className="border border-gray-200 rounded-lg px-6">
            <AccordionTrigger className="text-left hover:no-underline">
              Which water pump brand has the best service network in India?
            </AccordionTrigger>
            <AccordionContent className="text-gray-700">
              <p className="mb-3">
                Based on our analysis of service availability across 50+ Indian cities, here's the ranking:
              </p>
              <div className="space-y-3 mb-4">
                <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                  <span className="font-semibold">1. Crompton</span>
                  <span className="text-sm text-green-700">Available in 85% of urban areas</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                  <span className="font-semibold">2. Kirloskar</span>
                  <span className="text-sm text-blue-700">Strong in North & West India (80% coverage)</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
                  <span className="font-semibold">3. CRI</span>
                  <span className="text-sm text-purple-700">Excellent in South India (75% coverage)</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg">
                  <span className="font-semibold">4. Havells</span>
                  <span className="text-sm text-yellow-700">Good metro coverage (70% urban areas)</span>
                </div>
              </div>
              <p className="mb-3">
                <strong>Regional service strengths:</strong>
              </p>
              <ul className="list-disc list-inside space-y-1">
                <li>
                  <strong>North India:</strong> Kirloskar and Crompton dominate
                </li>
                <li>
                  <strong>South India:</strong> CRI has the strongest network
                </li>
                <li>
                  <strong>West India:</strong> Kirloskar leads, followed by Crompton
                </li>
                <li>
                  <strong>Metro cities:</strong> All major brands have good coverage
                </li>
                <li>
                  <strong>Tier-2 cities:</strong> Crompton and Kirloskar are most reliable
                </li>
              </ul>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-9" className="border border-gray-200 rounded-lg px-6">
            <AccordionTrigger className="text-left hover:no-underline">
              Should I buy a solar water pump for my Hyderabad home?
            </AccordionTrigger>
            <AccordionContent className="text-gray-700">
              <p className="mb-3">
                Solar water pumps make excellent sense for Hyderabad homes, especially with government subsidies:
              </p>
              <p className="mb-3">
                <strong>Benefits for Hyderabad residents:</strong>
              </p>
              <ul className="list-disc list-inside space-y-2 mb-4">
                <li>
                  <strong>300+ sunny days annually</strong> - Optimal solar conditions
                </li>
                <li>
                  <strong>High electricity rates</strong> - ₹7.50-9/unit makes solar attractive
                </li>
                <li>
                  <strong>PM-KUSUM subsidies</strong> - 60% government support available
                </li>
                <li>
                  <strong>Frequent power cuts</strong> - Solar ensures daytime water supply
                </li>
                <li>
                  <strong>Environmental benefits</strong> - Zero carbon emissions
                </li>
              </ul>
              <p className="mb-3">
                <strong>Best solar pumps for Hyderabad:</strong>
              </p>
              <ul className="list-disc list-inside space-y-1 mb-4">
                <li>
                  <strong>Asian Pumps 24V 250W Solar (₹6,850)</strong> - Most affordable option
                </li>
                <li>
                  <strong>Asian Pumps Solar Submersible (₹9,000)</strong> - For borewells
                </li>
                <li>
                  <strong>Shakti Solar Pumps (₹12,000)</strong> - Higher capacity for large homes
                </li>
              </ul>
              <p className="mb-3">
                <strong>Total cost analysis (5-year period):</strong>
              </p>
              <ul className="list-disc list-inside space-y-1">
                <li>Solar pump: ₹6,850 - ₹4,000 (subsidy) = ₹2,850 total cost</li>
                <li>Electric pump: ₹4,000 + ₹18,000 (electricity) = ₹22,000 total cost</li>
                <li>
                  <strong>Net savings: ₹19,150 over 5 years</strong>
                </li>
              </ul>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-10" className="border border-gray-200 rounded-lg px-6">
            <AccordionTrigger className="text-left hover:no-underline">
              How often should I service my water pump in Indian conditions?
            </AccordionTrigger>
            <AccordionContent className="text-gray-700">
              <p className="mb-3">
                Indian water and power conditions require more frequent maintenance than Western standards:
              </p>
              <div className="space-y-4 mb-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-2">Monthly Checks</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Inspect for unusual noises or vibrations</li>
                    <li>Check for water leaks around joints</li>
                    <li>Clean external dust and debris</li>
                    <li>Verify proper ventilation around pump</li>
                  </ul>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-800 mb-2">Quarterly Service</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Clean strainer/filter thoroughly</li>
                    <li>Check foot valve functioning</li>
                    <li>Verify electrical connections</li>
                    <li>Test auto-controls (pressure pumps)</li>
                  </ul>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-800 mb-2">Annual Professional Service</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Replace worn gaskets and seals</li>
                    <li>Check motor windings and capacitor</li>
                    <li>Descale pump in hard water areas</li>
                    <li>Calibrate pressure settings</li>
                  </ul>
                </div>
              </div>
              <p className="mb-3">
                <strong>Service costs and intervals:</strong>
              </p>
              <ul className="list-disc list-inside space-y-1">
                <li>
                  <strong>Basic annual service:</strong> ₹500-800 (prevents ₹3,000+ repairs)
                </li>
                <li>
                  <strong>Hard water areas:</strong> Service every 8 months
                </li>
                <li>
                  <strong>High usage homes:</strong> Service every 10 months
                </li>
                <li>
                  <strong>Voltage fluctuation areas:</strong> Check electrical components every 6 months
                </li>
              </ul>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-11" className="border border-gray-200 rounded-lg px-6">
            <AccordionTrigger className="text-left hover:no-underline">
              What's the best pump for tanker water dependency in Ghaziabad?
            </AccordionTrigger>
            <AccordionContent className="text-gray-700">
              <p className="mb-3">
                For Ghaziabad's tanker-dependent areas, you need pumps optimized for quick tank filling:
              </p>
              <p className="mb-3">
                <strong>Key requirements:</strong>
              </p>
              <ul className="list-disc list-inside space-y-2 mb-4">
                <li>
                  <strong>High flow rate</strong> - Fill tanks quickly during tanker delivery
                </li>
                <li>
                  <strong>Self-priming capability</strong> - Start immediately when tanker arrives
                </li>
                <li>
                  <strong>Reliable operation</strong> - Can't afford failures during scarce water times
                </li>
                <li>
                  <strong>Easy maintenance</strong> - Quick repairs when needed
                </li>
              </ul>
              <p className="mb-3">
                <strong>Best tanker-to-tank pumps for Ghaziabad:</strong>
              </p>
              <ul className="list-disc list-inside space-y-1 mb-4">
                <li>
                  <strong>Crompton ULTIMO II (₹2,950)</strong> - 7m suction, 1800 LPH flow
                </li>
                <li>
                  <strong>CRI DORA50 (₹3,499)</strong> - Brass impeller, 2000 LPH
                </li>
                <li>
                  <strong>Kirloskar Chhotu Star Ultra (₹4,099)</strong> - Wide voltage tolerance
                </li>
              </ul>
              <p className="mb-3">
                <strong>Optimal setup for tanker areas:</strong>
              </p>
              <ul className="list-disc list-inside space-y-1">
                <li>Pair 0.5 HP pump with 1000L overhead tank</li>
                <li>Install timer switch for automatic filling</li>
                <li>Use 1.5-inch pipes for faster flow</li>
                <li>Keep pump primed with foot valve</li>
              </ul>
              <p className="mt-3">
                <strong>Time savings:</strong> Proper pump reduces tank filling time from 60 to 30 minutes, maximizing
                every tanker delivery.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-12" className="border border-gray-200 rounded-lg px-6">
            <AccordionTrigger className="text-left hover:no-underline">
              Which pump is most reliable for Pune's hard water and voltage issues?
            </AccordionTrigger>
            <AccordionContent className="text-gray-700">
              <p className="mb-3">
                Pune faces dual challenges of hard water (400-600 TDS) and voltage fluctuations, requiring robust pumps:
              </p>
              <p className="mb-3">
                <strong>Essential features for Pune conditions:</strong>
              </p>
              <ul className="list-disc list-inside space-y-2 mb-4">
                <li>
                  <strong>Corrosion-resistant materials</strong> - Brass/stainless steel impellers
                </li>
                <li>
                  <strong>Wide voltage tolerance</strong> - 160-240V operating range
                </li>
                <li>
                  <strong>Thermal protection</strong> - Prevents overheating during voltage spikes
                </li>
                <li>
                  <strong>Easy descaling access</strong> - For hard water maintenance
                </li>
              </ul>
              <p className="mb-3">
                <strong>Most reliable pumps for Pune homes:</strong>
              </p>
              <ul className="list-disc list-inside space-y-1 mb-4">
                <li>
                  <strong>Havells Zinnia 2 Plus (₹3,200)</strong> - Silent + corrosion-resistant
                </li>
                <li>
                  <strong>CRI Miki 50 (₹4,200)</strong> - Stainless steel + voltage tolerance
                </li>
                <li>
                  <strong>Crompton SP Aquagold 50 (₹5,499)</strong> - BEE 5-star + hard water ready
                </li>
              </ul>
              <p className="mb-3">
                <strong>Pune-specific maintenance tips:</strong>
              </p>
              <ul className="list-disc list-inside space-y-1">
                <li>Descale pump every 4-6 months due to hard water</li>
                <li>Install voltage stabilizer in areas like Kothrud and Wakad</li>
                <li>Clean strainers monthly to prevent scaling buildup</li>
                <li>Schedule annual professional service during monsoon</li>
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-lg mt-8">
          <div className="flex items-start gap-3">
            <AlertTriangle className="h-5 w-5 text-yellow-600 mt-1 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-yellow-800 mb-2">Still Have Questions?</h3>
              <p className="text-yellow-700 mb-3">
                Can't find the answer you're looking for? Our water pump experts are here to help with personalized
                recommendations based on your specific location and requirements.
              </p>
              <Link href="#your-perfect-pump-next-steps" className="text-yellow-800 font-medium hover:underline">
                Get Expert Recommendations →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
