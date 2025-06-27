import Introduction from "@/components/introduction"
import TableOfContents from "@/components/table-of-contents"
import TopPicks from "@/components/top-picks"
import SelfPrimingPumps from "@/components/self-priming-pumps"
import MonoblockPumps from "@/components/monoblock-pumps"
import PressureBoosters from "@/components/pressure-boosters"
import SubmersibleSolarPumps from "@/components/submersible-solar-pumps"
import CitySpecificTips from "@/components/city-specific-tips"
import FAQSection from "@/components/faq-section"
import PerfectPumpConclusion from "@/components/perfect-pump-conclusion"

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Introduction />
      <TableOfContents />
      <TopPicks />
      <SelfPrimingPumps />
      <MonoblockPumps />
      <PressureBoosters />
      <SubmersibleSolarPumps />
      <CitySpecificTips />
      <FAQSection />
      <PerfectPumpConclusion />
    </main>
  )
}
