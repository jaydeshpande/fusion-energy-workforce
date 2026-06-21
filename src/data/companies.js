// Commercial fusion companies. Approach buckets are used for filtering.
// Sources: Fusion Industry Association, company sites, Wikipedia "List of nuclear fusion companies".
// This is a curated, representative set; see the FIA for the full and current membership.

export const approaches = [
  'Tokamak',
  'Stellarator',
  'Inertial / Laser',
  'Magnetized Target',
  'Field-Reversed Config',
  'Other / Alternative',
  'Fuel & Suppliers',
];

export const companies = [
  // Tokamak
  { name: 'Commonwealth Fusion Systems', country: 'USA', flag: '🇺🇸', approach: 'Tokamak', url: 'https://cfs.energy/', blurb: 'High-field SPARC tokamak using HTS magnets; building the ARC power plant in Virginia.' },
  { name: 'Tokamak Energy', country: 'UK', flag: '🇬🇧', approach: 'Tokamak', url: 'https://tokamakenergy.com/', blurb: 'Compact spherical tokamaks paired with high-temperature superconducting magnets.' },
  { name: 'Energy Singularity', country: 'China', flag: '🇨🇳', approach: 'Tokamak', url: 'https://www.energysingularity.cn/en', blurb: 'Built HH70, the first fully high-temperature-superconducting tokamak; pursuing compact HTS machines.' },
  { name: 'ENN Energy Research', country: 'China', flag: '🇨🇳', approach: 'Tokamak', url: 'https://www.enn.cn/', blurb: 'Energy firm building the EHL-2 spherical torus for aneutronic proton-boron fusion.' },
  { name: 'Startorus Fusion', country: 'China', flag: '🇨🇳', approach: 'Tokamak', url: 'https://startorus.jobs.feishu.cn/419527/', blurb: 'Xi’an-based spherical tokamak developer growing out of China’s university SUNIST program.' },
  { name: 'Firefly Fusion', country: 'France', flag: '🇫🇷', approach: 'Tokamak', url: 'https://fireflyfusion.energy/', blurb: 'Compact, high-field tokamaks built with copper and HTS magnet coils.' },

  // Stellarator
  { name: 'Type One Energy', country: 'USA', flag: '🇺🇸', approach: 'Stellarator', url: 'https://www.typeoneenergy.com/', blurb: 'Optimized stellarator power plants building on Wendelstein 7-X physics.' },
  { name: 'Proxima Fusion', country: 'Germany', flag: '🇩🇪', approach: 'Stellarator', url: 'https://www.proximafusion.com/', blurb: 'Spin-out of the Max Planck IPP pursuing high-performance quasi-isodynamic stellarators.' },
  { name: 'Renaissance Fusion', country: 'France', flag: '🇫🇷', approach: 'Stellarator', url: 'https://stellarator.energy/', blurb: 'Simplified stellarators using liquid-metal walls and HTS magnets.' },
  { name: 'Thea Energy', country: 'USA', flag: '🇺🇸', approach: 'Stellarator', url: 'https://www.thea.energy/', blurb: 'Planar-coil stellarator using arrays of simple magnets to shape the field.' },
  { name: 'Gauss Fusion', country: 'Europe', flag: '🇪🇺', approach: 'Stellarator', url: 'https://gauss-fusion.com/', blurb: 'Pan-European consortium engineering a demonstration stellarator power plant.' },
  { name: 'Helical Fusion', country: 'Japan', flag: '🇯🇵', approach: 'Stellarator', url: 'https://www.helical-fusion.com/en/', blurb: 'Steady-state heliotron/stellarator drawing on Japan’s LHD program.' },

  // Inertial / Laser
  { name: 'Marvel Fusion', country: 'Germany', flag: '🇩🇪', approach: 'Inertial / Laser', url: 'https://marvelfusion.com/', blurb: 'Short-pulse laser-driven inertial fusion with nanostructured targets.' },
  { name: 'Focused Energy', country: 'Germany / USA', flag: '🇩🇪', approach: 'Inertial / Laser', url: 'https://focused-energy.world/', blurb: 'Direct-drive, fast-ignition laser fusion building on NIF-era physics.' },
  { name: 'Xcimer Energy', country: 'USA', flag: '🇺🇸', approach: 'Inertial / Laser', url: 'https://www.xcimer.com/', blurb: 'Low-cost, high-energy excimer laser architecture for inertial fusion plants.' },
  { name: 'First Light Fusion', country: 'UK', flag: '🇬🇧', approach: 'Inertial / Laser', url: 'https://firstlightfusion.com/', blurb: 'Projectile-driven inertial fusion; now licensing its amplifier targets.' },
  { name: 'HB11 Energy', country: 'Australia', flag: '🇦🇺', approach: 'Inertial / Laser', url: 'https://hb11.energy/', blurb: 'Aneutronic hydrogen-boron laser fusion, with no tritium and minimal neutrons.' },
  { name: 'EX-Fusion', country: 'Japan', flag: '🇯🇵', approach: 'Inertial / Laser', url: 'https://ex-fusion.com/', blurb: 'Direct-drive laser inertial fusion; also commercializing laser tech for space-debris removal.' },
  { name: 'Blue Laser Fusion', country: 'USA', flag: '🇺🇸', approach: 'Inertial / Laser', url: 'https://www.bluelaserfusion.com/', blurb: 'Founded by Nobel laureate Shuji Nakamura; pulsed-laser fusion targeting proton-boron fuel.' },
  { name: 'Longview Fusion Energy Systems', country: 'USA', flag: '🇺🇸', approach: 'Inertial / Laser', url: 'https://www.longviewfusion.com/', blurb: 'Laser inertial-fusion power plants designed to build directly on the NIF ignition result.' },

  // Magnetized Target
  { name: 'General Fusion', country: 'Canada', flag: '🇨🇦', approach: 'Magnetized Target', url: 'https://generalfusion.com/', blurb: 'Magnetized target fusion using a liquid-metal liner compressed by pistons.' },
  { name: 'Pacific Fusion', country: 'USA', flag: '🇺🇸', approach: 'Magnetized Target', url: 'https://pacificfusion.com/', blurb: 'Pulser-driven inertial/magnetized fusion using efficient impedance-matched Marx generators.' },
  { name: 'Fuse Energy Technologies', country: 'USA', flag: '🇺🇸', approach: 'Magnetized Target', url: 'https://www.f.energy/', blurb: 'Pulsed-power fusion with Marx generators and MagLIF-style targets; also a high-yield neutron-source supplier.' },
  { name: 'NearStar Fusion', country: 'USA', flag: '🇺🇸', approach: 'Magnetized Target', url: 'https://nearstarfusion.com/', blurb: 'Hypervelocity “plasma railgun” firing magnetized plasmoids into a target; magneto-inertial fusion.' },

  // Field-Reversed Configuration
  { name: 'TAE Technologies', country: 'USA', flag: '🇺🇸', approach: 'Field-Reversed Config', url: 'https://tae.com/', blurb: 'Beam-driven field-reversed configuration aiming at aneutronic p-B11 fuel.' },
  { name: 'Helion Energy', country: 'USA', flag: '🇺🇸', approach: 'Field-Reversed Config', url: 'https://www.helionenergy.com/', blurb: 'Pulsed magneto-inertial FRC with direct electricity recovery; D-He3 fuel.' },
  { name: 'Princeton Fusion Systems', country: 'USA', flag: '🇺🇸', approach: 'Field-Reversed Config', url: 'https://psatellite.com/technology/fusion/', blurb: 'Small field-reversed-configuration reactors (PFRC) for grid power and space propulsion.' },

  // Other / Alternative
  { name: 'Zap Energy', country: 'USA', flag: '🇺🇸', approach: 'Other / Alternative', url: 'https://www.zapenergy.com/', blurb: 'Sheared-flow-stabilized Z-pinch, with no large magnets or lasers.' },
  { name: 'Avalanche Energy', country: 'USA', flag: '🇺🇸', approach: 'Other / Alternative', url: 'https://www.avalanchenergy.com/', blurb: 'Electrostatic "Orbitron" microfusion devices the size of a lunchbox.' },
  { name: 'Realta Fusion', country: 'USA', flag: '🇺🇸', approach: 'Other / Alternative', url: 'https://realtafusion.com/', blurb: 'Magnetic-mirror fusion spun out of the University of Wisconsin–Madison.' },
  { name: 'Novatron Fusion', country: 'Sweden', flag: '🇸🇪', approach: 'Other / Alternative', url: 'https://novatronfusion.com/', blurb: 'A magnetostatically stable magnetic-mirror configuration.' },
  { name: 'LPPFusion', country: 'USA', flag: '🇺🇸', approach: 'Other / Alternative', url: 'https://lppfusion.com/', blurb: 'Dense plasma focus device pursuing aneutronic hydrogen-boron fusion.' },
  { name: 'Acceleron Fusion', country: 'USA', flag: '🇺🇸', approach: 'Other / Alternative', url: 'https://www.acceleronfusion.com/', blurb: 'Reviving muon-catalyzed fusion, using muon beams to fuse fuel at low temperature.' },
  { name: 'OpenStar Technologies', country: 'New Zealand', flag: '🇳🇿', approach: 'Other / Alternative', url: 'https://www.openstar.tech/', blurb: 'Levitated-dipole reactor: a floating superconducting magnet confines the plasma like a planet’s magnetosphere.' },
  { name: 'MIFTI', country: 'USA', flag: '🇺🇸', approach: 'Other / Alternative', url: 'https://www.mifti.com/', blurb: 'Staged Z-pinch magneto-inertial fusion spun out of UC Irvine.' },
  { name: 'Helicity Space', country: 'USA', flag: '🇺🇸', approach: 'Other / Alternative', url: 'https://www.helicityspace.com/', blurb: 'Magneto-inertial fusion for deep-space propulsion using twisted plasma jets.' },
  { name: 'Astral Systems', country: 'UK', flag: '🇬🇧', approach: 'Other / Alternative', url: 'https://www.astralsystems.co.uk/', blurb: 'Compact “Multi-State Fusion” reactors aimed at neutron and medical-isotope production.' },
  { name: 'Crossfield Fusion', country: 'UK', flag: '🇬🇧', approach: 'Other / Alternative', url: 'https://crossfieldfusion.com/', blurb: 'The “Epicyclotron” concept targeting compact ~1 MW machines.' },
  { name: 'Electric Fusion Systems', country: 'USA', flag: '🇺🇸', approach: 'Other / Alternative', url: 'https://electricfusionsystems.com/', blurb: 'Compact generator concept built around a lithium-proton fuel cycle.' },
  { name: 'Deutelio', country: 'Switzerland', flag: '🇨🇭', approach: 'Other / Alternative', url: 'https://www.deutelio.com/', blurb: 'Developing the “Polomac” magnetic-confinement configuration.' },

  // Fuel & Suppliers
  { name: 'Kyoto Fusioneering', country: 'Japan', flag: '🇯🇵', approach: 'Fuel & Suppliers', url: 'https://kyotofusioneering.com/en/', blurb: 'Fusion plant technologies: tritium fuel cycle, blankets and heating systems for developers.' },
  { name: 'Shine Technologies', country: 'USA', flag: '🇺🇸', approach: 'Fuel & Suppliers', url: 'https://www.shinefusion.com/', blurb: 'A step-wise fusion company today supplying neutrons, isotopes and detection.' },
  { name: 'Marathon Fusion', country: 'USA', flag: '🇺🇸', approach: 'Fuel & Suppliers', url: 'https://www.marathonfusion.com/', blurb: 'Tritium fuel-cycle and fuel-breeding technology to make fusion plants fuel-self-sufficient.' },
];

// Key ecosystem links for the "everything commercial fusion" hub.
export const ecosystemLinks = [
  { name: 'Fusion Energy Base — Organizations', url: 'https://www.fusionenergybase.com/organizations', blurb: 'The most comprehensive directory: 70+ machine developers plus suppliers, investors and people, each with a detailed profile.' },
  { name: 'Fusion Industry Association', url: 'https://www.fusionindustryassociation.org/about/members/', blurb: 'The industry body; full member directory and the annual "Global Fusion Industry" report.' },
  { name: 'Fusion Industry Report (annual)', url: 'https://www.fusionindustryassociation.org/fusion-industry-reports/', blurb: 'Investment, headcount and timeline data across every private fusion company.' },
  { name: 'DOE Milestone-Based Fusion Program', url: 'https://www.energy.gov/science/fes/articles/department-energy-announces-46-million-accelerate-fusion-energy-developments', blurb: 'U.S. public-private partnerships funding pilot-plant designs.' },
  { name: 'Wikipedia: List of fusion companies', url: 'https://en.wikipedia.org/wiki/List_of_nuclear_fusion_companies', blurb: 'A continually updated table of companies, countries and approaches.' },
];
