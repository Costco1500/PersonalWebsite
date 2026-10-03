// Original editorial illustrations, not screenshots of the actual applications.
export function ProjectPreview({ title }: { title: string }) {
  return <div className={`project-preview preview-${title.toLowerCase()}`}>
    <span className="eyebrow preview-label">{title === 'SideQuest' ? 'Make a plan' : title === 'CropCare' ? 'Understand a leaf' : 'A little reminder'}</span>
    <svg viewBox="0 0 520 330" role="img" aria-label={`${title}: original conceptual interface illustration, not an app screenshot`}>
      {title === 'SideQuest' ? <>
        <path d="M0 180L150 100L310 240L520 100M40 310L230 40M250 330L400 0" stroke="#547464" strokeWidth="24" fill="none" opacity=".4" />
        <path d="M110 230Q125 165 190 190T345 100" stroke="#dbea59" strokeWidth="3" strokeDasharray="5 8" fill="none" />
        <g transform="rotate(8 310 180)"><rect x="248" y="35" width="169" height="273" rx="27" fill="#0e251b" stroke="#839886" strokeWidth="2" /><rect x="259" y="47" width="147" height="248" rx="18" fill="#efeddf" /><rect x="303" y="54" width="56" height="8" rx="4" fill="#253d2d" /><text x="274" y="95" fill="#263d30" fontSize="18" fontFamily="Georgia">SideQuest</text><text x="274" y="116" fill="#627262" fontSize="9">A PLAN FOR THE GROUP</text>{[0,1,2].map(i => <g key={i}><rect x="273" y={134+i*42} width="117" height="33" rx="6" fill={i === 0 ? '#cedf61' : '#dedfd0'} /><circle cx="287" cy={151+i*42} r="5" fill="#526a46" /><path d={`M302 ${146+i*42}h66m-66 9h40`} stroke="#72806a" strokeWidth="3" /></g>)}<rect x="273" y="266" width="117" height="16" rx="8" fill="#234332" /></g>
        <g transform="rotate(-8 165 150)"><rect x="68" y="108" width="147" height="91" rx="10" fill="#dce95b" /><text x="84" y="137" fill="#203b28" fontSize="12" fontFamily="monospace">GROUP CHAT →</text><text x="84" y="169" fill="#203b28" fontSize="25" fontFamily="Georgia">A real plan.</text></g>
      </> : title === 'CropCare' ? <>
        <circle cx="235" cy="172" r="122" fill="#cfdbc2" /><path d="M174 248C122 177 173 80 305 63C321 178 269 256 174 248Z" fill="#52794a" /><path d="M157 272L288 87M201 210L189 144M226 174L289 163M249 138L249 97" fill="none" stroke="#b4cd82" strokeWidth="3" />
        <path d="M119 110V79H150M317 79H348V110M348 233V264H317M150 264H119V233" fill="none" stroke="#385336" strokeWidth="3" />
        <rect x="283" y="183" width="177" height="99" rx="6" fill="#183b2c" /><text x="300" y="210" fill="#dcea70" fontSize="10" fontFamily="monospace">LEAF → INSIGHT</text><text x="300" y="238" fill="#f1f0df" fontSize="20" fontFamily="Georgia">CropCare</text><path d="M300 257H424" stroke="#819b76" strokeWidth="4" /><circle cx="395" cy="113" r="22" fill="#dfea63" /><path d="M384 114l7 7 14-17" fill="none" stroke="#355039" strokeWidth="3" />
      </> : <>
        <rect x="84" y="66" width="349" height="218" rx="10" fill="#f4eee1" /><path d="M84 101H433" stroke="#d8cebc" /><circle cx="102" cy="84" r="4" fill="#be7055" /><circle cx="116" cy="84" r="4" fill="#c6b586" /><circle cx="130" cy="84" r="4" fill="#719678" /><text x="108" y="136" fontSize="24" fontFamily="Georgia" fill="#323a2d">PillPOW</text><text x="108" y="154" fontSize="9" fill="#65735e" letterSpacing="1">REMINDERS, MADE CLEAR.</text>{[0,1].map(i => <g key={i}><rect x="106" y={171+i*44} width="241" height="34" rx="5" fill="#e2e4d5" /><circle cx="124" cy={188+i*44} r="7" fill="#788f6a" /><path d={`M145 ${184+i*44}h147m-147 8h94`} stroke="#9da991" strokeWidth="3" /></g>)}
        <circle cx="391" cy="218" r="55" fill="#c2d54f" /><rect x="381" y="191" width="20" height="35" rx="10" fill="#28472c" /><path d="M373 209V219a18 18 0 0036 0v-10M391 237v12m-10 0h20" fill="none" stroke="#28472c" strokeWidth="3" />
      </>}
    </svg>
    <span className="preview-caption">Original concept illustration / {title}</span>
  </div>;
}
