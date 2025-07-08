const logos = [
  { name: "Apex", svg: (
    <svg viewBox="0 0 100 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-8 w-auto">
      <path d="M50 0L0 40h100L50 0z" fill="currentColor" />
      <text x="50" y="30" fontFamily="Poppins, sans-serif" fontSize="12" fill="hsl(var(--background))" textAnchor="middle" dy=".3em">APEX</text>
    </svg>
  )},
  { name: "Nexus", svg: (
     <svg viewBox="0 0 100 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-8 w-auto">
      <circle cx="20" cy="20" r="15" fill="currentColor"/>
      <circle cx="50" cy="20" r="15" fill="currentColor" fillOpacity="0.7"/>
      <circle cx="80" cy="20" r="15" fill="currentColor" fillOpacity="0.4"/>
       <text x="50" y="20" fontFamily="Poppins, sans-serif" fontSize="12" fill="hsl(var(--background))" textAnchor="middle" dy=".3em">NEXUS</text>
    </svg>
  )},
  { name: "Momentum", svg: (
     <svg viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-8 w-auto">
        <path d="M0 20 L20 0 L40 20 L20 40 Z" fill="currentColor"/>
        <text x="80" y="22" fontFamily="Poppins, sans-serif" fontSize="14" fill="currentColor" textAnchor="middle">Momentum</text>
    </svg>
  )},
    { name: "Stellar", svg: (
     <svg viewBox="0 0 100 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-8 w-auto">
        <path d="M50 0 L61.8 19.1 H80.9 L67.55 30.9 L72.36 50 L50 38.2 L27.64 50 L32.45 30.9 L19.1 19.1 H38.2 Z" fill="currentColor"/>
         <text x="50" y="25" fontFamily="Poppins, sans-serif" fontSize="10" fill="hsl(var(--background))" textAnchor="middle" dy=".3em">STELLAR</text>
    </svg>
  )},
  { name: "Quantum", svg: (
    <svg viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-8 w-auto">
        <rect x="0" y="0" width="40" height="40" rx="5" fill="currentColor"/>
        <text x="80" y="22" fontFamily="Poppins, sans-serif" fontSize="14" fill="currentColor" textAnchor="middle">QUANTUM</text>
    </svg>
  )}
];

export default function LogoCarousel() {
  return (
    <div className="bg-background border-b">
      <div className="container max-w-7xl xl:max-w-screen-xl mx-auto py-4">
        <div className="grid grid-cols-3 sm:grid-cols-5 gap-y-4 gap-x-8 text-muted-foreground">
          {logos.map((logo) => (
            <div key={logo.name} className="flex justify-center items-center grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all">
              {logo.svg}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
