'use client'

import { useState } from 'react'

export default function ROICalculator() {
  const [clients, setClients] = useState(100)
  const [avgService, setAvgService] = useState(500)
  const [conversion, setConversion] = useState(30)
  const [gpMargin, setGpMargin] = useState(50)

  // Logic: 60% of client base has upsell opportunity
  // conversion % of those buy an additional service
  const upsellOpportunity = Math.round(clients * 0.6)
  const servicesSold = Math.round(upsellOpportunity * (conversion / 100))
  const revenueGenerated = servicesSold * avgService
  const gpGenerated = revenueGenerated * (gpMargin / 100)
  const hvFee = Math.round(gpGenerated * 0.25)
  const netGP = Math.round(gpGenerated - hvFee)

  const formatCurrency = (n: number) =>
    n >= 1000 ? `£${(n / 1000).toFixed(1)}k` : `£${n}`

  return (
    <div className="bg-[#141b30] border border-white/8 rounded-2xl p-8">
      <div className="flex items-center gap-3 mb-2">
        <div className="w-8 h-8 rounded-lg bg-[#1a6ef5]/20 flex items-center justify-center">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M2 12 L6 8 L9 10 L14 4" stroke="#1a6ef5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <h3 className="text-white font-semibold text-lg">Upsell Opportunity Calculator</h3>
      </div>
      <p className="text-[#8899bb] text-xs mb-6">Estimate what's already in your client base — waiting to be sold.</p>

      <div className="space-y-5">
        <div>
          <div className="flex justify-between mb-2">
            <label className="text-[#8899bb] text-sm">Active clients</label>
            <span className="text-white text-sm font-medium">{clients}</span>
          </div>
          <input type="range" min={20} max={500} step={10} value={clients}
            onChange={e => setClients(Number(e.target.value))}
            className="w-full accent-[#1a6ef5] cursor-pointer" />
          <div className="flex justify-between mt-1">
            <span className="text-[#8899bb] text-xs">20</span>
            <span className="text-[#8899bb] text-xs">500</span>
          </div>
        </div>

        <div>
          <div className="flex justify-between mb-2">
            <label className="text-[#8899bb] text-sm">Avg service value</label>
            <span className="text-white text-sm font-medium">£{avgService}</span>
          </div>
          <input type="range" min={100} max={2000} step={50} value={avgService}
            onChange={e => setAvgService(Number(e.target.value))}
            className="w-full accent-[#1a6ef5] cursor-pointer" />
          <div className="flex justify-between mt-1">
            <span className="text-[#8899bb] text-xs">£100</span>
            <span className="text-[#8899bb] text-xs">£2,000</span>
          </div>
        </div>

        <div>
          <div className="flex justify-between mb-2">
            <label className="text-[#8899bb] text-sm">Upsell conversion rate</label>
            <span className="text-white text-sm font-medium">{conversion}%</span>
          </div>
          <input type="range" min={10} max={60} step={5} value={conversion}
            onChange={e => setConversion(Number(e.target.value))}
            className="w-full accent-[#1a6ef5] cursor-pointer" />
          <div className="flex justify-between mt-1">
            <span className="text-[#8899bb] text-xs">10%</span>
            <span className="text-[#8899bb] text-xs">60%</span>
          </div>
        </div>

        <div>
          <div className="flex justify-between mb-2">
            <label className="text-[#8899bb] text-sm">GP margin</label>
            <span className="text-white text-sm font-medium">{gpMargin}%</span>
          </div>
          <input type="range" min={20} max={80} step={5} value={gpMargin}
            onChange={e => setGpMargin(Number(e.target.value))}
            className="w-full accent-[#1a6ef5] cursor-pointer" />
          <div className="flex justify-between mt-1">
            <span className="text-[#8899bb] text-xs">20%</span>
            <span className="text-[#8899bb] text-xs">80%</span>
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="mt-6 pt-5 border-t border-white/8">
        <div className="grid grid-cols-2 gap-3 mb-4">
          <div className="bg-[#0a0f1e] rounded-xl p-3">
            <div className="text-[#8899bb] text-xs mb-1">Additional services sold</div>
            <div className="text-white font-bold text-xl">{servicesSold}</div>
            <div className="text-[#8899bb] text-xs mt-0.5">{upsellOpportunity} clients in scope</div>
          </div>
          <div className="bg-[#0a0f1e] rounded-xl p-3">
            <div className="text-[#8899bb] text-xs mb-1">Revenue generated</div>
            <div className="text-[#00d68f] font-bold text-xl">{formatCurrency(revenueGenerated)}</div>
            <div className="text-[#8899bb] text-xs mt-0.5">for your business</div>
          </div>
        </div>

        <div className="bg-[#1a6ef5]/10 border border-[#1a6ef5]/20 rounded-xl p-4">
          <div className="flex justify-between items-center mb-2">
            <span className="text-[#8899bb] text-sm">Your GP at {gpMargin}%</span>
            <span className="text-white font-semibold">{formatCurrency(gpGenerated)}</span>
          </div>
          <div className="flex justify-between items-center mb-2">
            <span className="text-[#8899bb] text-sm">Hi-Venture fee (25% of GP)</span>
            <span className="text-[#8899bb] font-medium">−{formatCurrency(hvFee)}</span>
          </div>
          <div className="flex justify-between items-center pt-2 border-t border-white/10">
            <span className="text-white text-sm font-semibold">Your net GP gain</span>
            <span className="text-[#f0a500] font-bold text-lg">{formatCurrency(netGP)}</span>
          </div>
        </div>
        <p className="text-[#8899bb] text-xs mt-2 text-center">Based on 60% of clients having upsell opportunity. Your figures will vary.</p>
      </div>
    </div>
  )
}
