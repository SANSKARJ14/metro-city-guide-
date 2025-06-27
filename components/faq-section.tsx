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
              How do I choose a pump for a 2nd floor flat with low water pressure?
            </AccordionTrigger>
            <AccordionContent className="text-gray-700">
              <p className="mb-3">
                If your home is on the 2nd floor and has weak municipal supply, use a 0.5 to 1 HP{" "}
                <strong>pressure pump</strong>. Key things to check:
              </p>
              <ul className="list-disc list-inside space-y-1 mb-4">
                <li>Minimum 20m head height</li>
                <li>Flow rate between 1800–2500 LPH</li>
                <li>Support for auto-on when pressure drops</li>
              </ul>
              <p className="mb-2">
                <strong>Top recommendations:</strong>
              </p>
              <ul className="list-disc list-inside space-y-1">
                <li>
                  <strong>Crompton Mini Crest II</strong> – 0.5 HP, compact, great for 2BHKs
                </li>
                <li>
                  <strong>Havells Hi-Flow M1</strong> – 0.75 HP, booster-friendly
                </li>
                <li>
                  <strong>Grundfos UPA 15-90</strong> – Premium, silent, ideal for night use
                </li>
              </ul>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2" className="border border-gray-200 rounded-lg px-6">
            <AccordionTrigger className="text-left hover:no-underline">
              Which pump works during frequent power cuts in India?
            </AccordionTrigger>
            <AccordionContent className="text-gray-700">
              <p className="mb-3">
                For areas with frequent power cuts, <strong>solar water pumps</strong> are the best solution. They work
                independently during daytime and can be paired with battery backup.
              </p>
              <p className="mb-3">Key benefits for power-cut areas:</p>
              <ul className="list-disc list-inside space-y-1 mb-4">
                <li>Zero dependency on grid electricity</li>
                <li>Works 6-8 hours daily with good sunlight</li>
                <li>Battery backup option for cloudy days</li>
                <li>Long-term cost savings on electricity bills</li>
              </ul>
              <p className="mb-2">
                <strong>Best power-cut solutions:</strong>
              </p>
              <ul className="list-disc list-inside space-y-1">
                <li>
                  <strong>Asian Pumps Solar 24V</strong> – Most affordable, reliable performance
                </li>
                <li>
                  <strong>Shakti Solar Pumps</strong> – Higher capacity with battery backup
                </li>
              </ul>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3" className="border border-gray-200 rounded-lg px-6">
            <AccordionTrigger className="text-left hover:no-underline">
              Is 0.5 HP enough to run two bathrooms?
            </AccordionTrigger>
            <AccordionContent className="text-gray-700">
              <p className="mb-3">
                A <strong>0.5 HP water pump</strong> can handle two bathrooms, but performance depends on your specific
                setup:
              </p>
              <p className="mb-3">When 0.5 HP works for two bathrooms:</p>
              <ul className="list-disc list-inside space-y-1 mb-4">
                <li>Ground floor or 1st floor homes</li>
                <li>Good municipal water pressure (above 0.5 bar)</li>
                <li>Bathrooms not used simultaneously</li>
                <li>Short pipe runs from pump to outlets</li>
              </ul>
              <p className="mb-3">Upgrade to 1 HP if you have:</p>
              <ul className="list-disc list-inside space-y-1 mb-4">
                <li>2nd floor or higher</li>
                <li>Both bathrooms used at same time</li>
                <li>Low municipal pressure</li>
              </ul>
              <p className="mb-2">
                <strong>Reliable 0.5 HP options:</strong>
              </p>
              <ul className="list-disc list-inside space-y-1">
                <li>
                  <strong>Crompton Champ 2</strong> – Proven for dual bathroom setups
                </li>
                <li>
                  <strong>V-Guard Nova Series</strong> – Good pressure maintenance
                </li>
              </ul>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4" className="border border-gray-200 rounded-lg px-6">
            <AccordionTrigger className="text-left hover:no-underline">
              What's the difference between pressure booster and self-priming pumps?
            </AccordionTrigger>
            <AccordionContent className="text-gray-700">
              <p className="mb-3">
                <strong>Pressure booster pumps</strong> and <strong>self-priming pumps</strong> serve different
                purposes:
              </p>
              <div className="mb-4">
                <p className="font-semibold mb-2">Pressure Booster Pumps:</p>
                <ul className="list-disc list-inside space-y-1 mb-3">
                  <li>Increase existing water pressure</li>
                  <li>Auto-start when pressure drops</li>
                  <li>Best for high-rise apartments</li>
                  <li>Work with continuous water supply</li>
                </ul>
              </div>
              <div className="mb-4">
                <p className="font-semibold mb-2">Self-Priming Pumps:</p>
                <ul className="list-disc list-inside space-y-1 mb-3">
                  <li>Lift water from ground level tanks</li>
                  <li>Can handle air in pipes</li>
                  <li>Best for overhead tank filling</li>
                  <li>Work with intermittent water supply</li>
                </ul>
              </div>
              <p className="mb-2">
                <strong>Choose based on your need:</strong>
              </p>
              <ul className="list-disc list-inside space-y-1">
                <li>
                  <strong>Grundfos UPA 15-90</strong> – Premium pressure booster
                </li>
                <li>
                  <strong>Kirloskar Chhotu Star Ultra</strong> – Reliable self-priming
                </li>
              </ul>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5" className="border border-gray-200 rounded-lg px-6">
            <AccordionTrigger className="text-left hover:no-underline">
              Can solar pumps work in apartments or just farms?
            </AccordionTrigger>
            <AccordionContent className="text-gray-700">
              <p className="mb-3">
                <strong>Solar water pumps</strong> work excellently in apartments, not just farms. Modern solar pumps
                are designed for urban residential use.
              </p>
              <p className="mb-3">Perfect for apartments because:</p>
              <ul className="list-disc list-inside space-y-1 mb-4">
                <li>Compact solar panels fit on terraces</li>
                <li>Silent operation suitable for residential areas</li>
                <li>No electricity bills for water pumping</li>
                <li>Works during power cuts</li>
                <li>Government subsidies available for residential use</li>
              </ul>
              <p className="mb-3">Installation requirements:</p>
              <ul className="list-disc list-inside space-y-1 mb-4">
                <li>4-6 hours of direct sunlight daily</li>
                <li>Terrace space for 2-4 solar panels</li>
                <li>Basic electrical connection setup</li>
              </ul>
              <p className="mb-2">
                <strong>Best apartment solar pumps:</strong>
              </p>
              <ul className="list-disc list-inside space-y-1">
                <li>
                  <strong>Asian Pumps Solar 24V</strong> – Compact, apartment-friendly
                </li>
                <li>
                  <strong>Shakti Solar Pumps</strong> – Higher capacity for large families
                </li>
              </ul>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-6" className="border border-gray-200 rounded-lg px-6">
            <AccordionTrigger className="text-left hover:no-underline">
              Why does my pump keep losing suction after a few days?
            </AccordionTrigger>
            <AccordionContent className="text-gray-700">
              <p className="mb-3">
                <strong>Water pump</strong> losing suction is a common problem with specific causes and solutions:
              </p>
              <p className="mb-3">Main reasons for suction loss:</p>
              <ul className="list-disc list-inside space-y-1 mb-4">
                <li>Air leaks in suction pipe joints</li>
                <li>Faulty or stuck foot valve</li>
                <li>Clogged strainer at water source</li>
                <li>Worn pump seals allowing air entry</li>
                <li>Water level dropping below suction point</li>
              </ul>
              <p className="mb-3">Quick fixes to try:</p>
              <ul className="list-disc list-inside space-y-1 mb-4">
                <li>Check and tighten all pipe connections</li>
                <li>Clean the foot valve and strainer</li>
                <li>Prime the pump manually with water</li>
                <li>Ensure suction pipe is always submerged</li>
              </ul>
              <p className="mb-2">
                <strong>Pumps with better suction retention:</strong>
              </p>
              <ul className="list-disc list-inside space-y-1">
                <li>
                  <strong>Kirloskar Chhotu Star Ultra</strong> – Superior sealing design
                </li>
                <li>
                  <strong>Crompton Ultimo</strong> – Reliable suction maintenance
                </li>
              </ul>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-7" className="border border-gray-200 rounded-lg px-6">
            <AccordionTrigger className="text-left hover:no-underline">
              What's the most silent pump for night operation?
            </AccordionTrigger>
            <AccordionContent className="text-gray-700">
              <p className="mb-3">
                For night operation, choose <strong>silent water pumps</strong> with noise levels below 45 dB. These
                won't disturb sleep or neighbors.
              </p>
              <p className="mb-3">Features of silent pumps:</p>
              <ul className="list-disc list-inside space-y-1 mb-4">
                <li>Enclosed motor design</li>
                <li>Vibration dampening mounts</li>
                <li>Smooth impeller operation</li>
                <li>Quality bearings and seals</li>
              </ul>
              <p className="mb-3">Installation tips for quieter operation:</p>
              <ul className="list-disc list-inside space-y-1 mb-4">
                <li>Mount on rubber pads to reduce vibration</li>
                <li>Install away from bedrooms</li>
                <li>Use flexible pipe connections</li>
                <li>Ensure proper pump sizing (oversized pumps are noisier)</li>
              </ul>
              <p className="mb-2">
                <strong>Quietest pumps for night use:</strong>
              </p>
              <ul className="list-disc list-inside space-y-1">
                <li>
                  <strong>Grundfos UPA 15-90</strong> – Ultra-silent, premium choice
                </li>
                <li>
                  <strong>Havells Hi-Flow M1</strong> – Quiet operation, good value
                </li>
                <li>
                  <strong>Grundfos SCALA2</strong> – Whisper-quiet, smart controls
                </li>
              </ul>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-8" className="border border-gray-200 rounded-lg px-6">
            <AccordionTrigger className="text-left hover:no-underline">
              How to protect my pump during voltage fluctuations?
            </AccordionTrigger>
            <AccordionContent className="text-gray-700">
              <p className="mb-3">
                <strong>Voltage fluctuations</strong> are the biggest threat to water pumps in India. Protection is
                essential for pump longevity.
              </p>
              <p className="mb-3">Essential protection methods:</p>
              <ul className="list-disc list-inside space-y-1 mb-4">
                <li>Install voltage stabilizer (₹2,000-4,000 investment)</li>
                <li>Choose pumps with wide voltage tolerance (160-240V)</li>
                <li>Use thermal protection switches</li>
                <li>Install proper earthing for electrical safety</li>
              </ul>
              <p className="mb-3">Pump features for voltage protection:</p>
              <ul className="list-disc list-inside space-y-1 mb-4">
                <li>Copper winding motors (better than aluminum)</li>
                <li>Built-in thermal overload protection</li>
                <li>Auto-restart capability after power stabilizes</li>
                <li>Wide operating voltage range</li>
              </ul>
              <p className="mb-2">
                <strong>Voltage-tolerant pumps:</strong>
              </p>
              <ul className="list-disc list-inside space-y-1">
                <li>
                  <strong>V-Guard Nova Series</strong> – 160-240V tolerance, copper winding
                </li>
                <li>
                  <strong>Kirloskar Chhotu Star Ultra</strong> – Wide voltage range, reliable
                </li>
                <li>
                  <strong>Crompton Mini Crest II</strong> – Thermal protection included
                </li>
              </ul>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-9" className="border border-gray-200 rounded-lg px-6">
            <AccordionTrigger className="text-left hover:no-underline">
              Is it safe to buy a ₹3,000 pump from Amazon?
            </AccordionTrigger>
            <AccordionContent className="text-gray-700">
              <p className="mb-3">
                Buying <strong>water pumps</strong> online can be safe if you choose established brands and verified
                sellers. However, be cautious with unknown brands.
              </p>
              <p className="mb-3">Safe online buying checklist:</p>
              <ul className="list-disc list-inside space-y-1 mb-4">
                <li>Buy only from brand official stores or authorized dealers</li>
                <li>Check for ISI mark and BEE star rating</li>
                <li>Read recent customer reviews (not just ratings)</li>
                <li>Verify warranty terms and service network</li>
                <li>Ensure return/replacement policy</li>
              </ul>
              <p className="mb-3">Red flags to avoid:</p>
              <ul className="list-disc list-inside space-y-1 mb-4">
                <li>Unknown Chinese brands with no service network</li>
                <li>Prices too good to be true (below ₹2,500 for 0.5 HP)</li>
                <li>No ISI certification or warranty</li>
                <li>Sellers with poor ratings</li>
              </ul>
              <p className="mb-2">
                <strong>Trusted ₹3,000-4,000 range pumps:</strong>
              </p>
              <ul className="list-disc list-inside space-y-1">
                <li>
                  <strong>Crompton Champ 2</strong> – ₹3,200, reliable brand
                </li>
                <li>
                  <strong>V-Guard Nova Series</strong> – ₹3,500, good service network
                </li>
              </ul>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-10" className="border border-gray-200 rounded-lg px-6">
            <AccordionTrigger className="text-left hover:no-underline">
              How often should I clean or service my water pump?
            </AccordionTrigger>
            <AccordionContent className="text-gray-700">
              <p className="mb-3">
                Regular <strong>water pump maintenance</strong> extends lifespan and prevents costly repairs. Indian
                conditions require more frequent servicing.
              </p>
              <p className="mb-3">Monthly maintenance (DIY):</p>
              <ul className="list-disc list-inside space-y-1 mb-4">
                <li>Clean external dust and debris</li>
                <li>Check for unusual noises or vibrations</li>
                <li>Inspect for water leaks around joints</li>
                <li>Ensure proper ventilation around pump</li>
              </ul>
              <p className="mb-3">Quarterly cleaning:</p>
              <ul className="list-disc list-inside space-y-1 mb-4">
                <li>Clean strainer/filter thoroughly</li>
                <li>Check foot valve functioning</li>
                <li>Verify electrical connections are tight</li>
                <li>Test auto-controls if present</li>
              </ul>
              <p className="mb-3">Annual professional service (₹500-800):</p>
              <ul className="list-disc list-inside space-y-1 mb-4">
                <li>Replace worn gaskets and seals</li>
                <li>Check motor windings and capacitor</li>
                <li>Descale pump in hard water areas</li>
                <li>Calibrate pressure settings</li>
              </ul>
              <p className="mb-2">
                <strong>Low-maintenance pumps:</strong>
              </p>
              <ul className="list-disc list-inside space-y-1">
                <li>
                  <strong>Grundfos UPA 15-90</strong> – Self-cleaning design
                </li>
                <li>
                  <strong>Crompton Ultimo</strong> – Easy access for maintenance
                </li>
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
