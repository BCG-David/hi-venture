'use client'

import { useState, useCallback } from 'react'

export default function ROICalculator() {
  const [revenue, setRevenue] = useState(500000)
  const [team, setTeam] = useState(3)
  const [conversion, setConversion] = useState(20)

  const currentRevenue = revenue
  const improvedConversion = Math.min(conversion + 15, 60)
  const upliftFactor = improvedConversion / conversion
  const projectedRevenue = Math.round(currentRevenue * upliftFactor)
  const uplift = projectedRevenue - currentRevenue
  const roiMultiple = Math.round((uplift / 18000) * 10) / 10

  const formatCurrency = (n: number) =>
    n >= 1000000
      ? `£${(n / 1000000).toFixed(1)}m`
      : `£${(n / 1000).toFixed(0)}k`

  return (
    <div className="bg-[#141b30] border border-white/8 rounded-2xl p-8">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-8 h-8 rounded-lg bg-[#1a6ef5]/20 flex items-center justify-center">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M2 12 L6 8 L9 10 L14 4" stroke="#1a6ef5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <h3 className="text-white font-semibold text-lg">Revenue Uplift Calculator</h3>
      </div>

      <div className="space-y-6">
        {/* Current revenue */}
        <div>
          <div className="flex justify-between mb-2">
            <label className="text-[#8899bb] text-sm">Current annual revenue</label>
            <span className="text-white text-sm font-medium">{formatCurrency(revenue)}</span>
          </div>
          <input
            type="range"
            min={100000}
            max={5000000}
            step={50000}
            value={revenue}
            onChange={e => setRevenue(Number(e.target.value))}
            className="w-full accent-[#1a6ef5] cursor-pointer"
          />
          <div className="flex justify-between mt-1">
            <span className="text-[#8899bb] text-xs">£100k</span>
            <span className="text-[#8899bb] text-xs">£5m</span>
          </div>
        </div>

        {/* Team size */}
        <div>
          <div className="flex justify-between mb-2">
            <label className="text-[#8899bb] text-sm">Sales team size</label>
            <span className="text-white text-sm font-medium">{team} {team === 1 ? 'person' : 'people'}</span>
          </div>
          <input
            type="range"
            min={1}
            max={20}
            step={1}
            value={team}
            onChange={e => setTeam(Number(e.target.value))}
            className="w-full accent-[#1a6ef5] cursor-pointer"
          />
          <div className="flex justify-between mt-1">
            <span className="text-[#8899bb] text-xs">1</span>
            <span className="text-[#8899bb] text-xs">20</span>
          </div>
        </div>

        {/* Conversion rate */}
        <div>
          <div className="flex justify-between mb-2">
            <label className="text-[#8899bb] text-sm">Current close rate</label>
            <span className="text-white text-sm font-medium">{conversion}%</span>
          </div>
          <input
            type="range"
            min={5}
            max={45}
            step={1}
            value={conversion}
            onChange={e => setConversion(Number(e.target.value))}
            className="w-full accent-[#1a6ef5] cursor-pointer"
          />
          <div className="flex justify-between mt-1">
            <span className="text-[#8899bb] text-xs">5%</span>
            <span className="text-[#8899bb] text-xs">45%</span>
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="mt-6 pt-6 border-t border-white/8 grid grid-cols-3 gap-4">
        <div className="text-center">
          <div className="text-[#8899bb] text-xs mb-1">Current</div>
          <div className="text-white font-bold text-xl">{formatCurrency(currentRevenue)}</div>
        </div>
        <div className="text-center">
          <div className="text-[#8899bb] text-xs mb-1">Projected</div>
          <div className="text-[#00d68f] font-bold text-xl">{formatCurrency(projectedRevenue)}</div>
        </div>
        <div className="text-center">
          <div className="text-[#8899bb] text-xs mb-1">Uplift</div>
          <div className="text-[#f0a500] font-bold text-xl">+{formatCurrency(uplift)}</div>
        </div>
      </div>

      <div className="mt-4 bg-[#1a6ef5]/10 border border-[#1a6ef5]/20 rounded-xl p-4 text-center">
        <p className="text-[#8899bb] text-sm">
          Estimated ROI: <span className="text-white font-semibold">{roiMultiple}× return</span> on a standard engagement
        </p>
        <p className="text-[#8899bb] text-xs mt-1">Based on typical 15pp close-rate improvement</p>
      </div>
    </div>
  )
}
