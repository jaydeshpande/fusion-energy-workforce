// Major plasma physics & fusion academic programs worldwide, grouped by region.
// Curated from the ITER "Worldwide Fusion Links" directory, FuseNet, and program pages.
// For the exhaustive list (200+ institutions) see the directories in `programDirectories`.

export const regions = [
  {
    name: 'United States & Canada',
    flag: '🌎',
    programs: [
      { name: 'MIT — Plasma Science & Fusion Center', country: 'USA', url: 'https://www.psfc.mit.edu/graduate-education/', note: 'Degrees via Nuclear Science & Engineering or Physics; home of SPARC physics.' },
      { name: 'Princeton — Program in Plasma Physics', country: 'USA', url: 'https://plasma.princeton.edu/', note: 'Graduate program based at PPPL, the U.S. national fusion lab.' },
      { name: 'University of Wisconsin–Madison', country: 'USA', url: 'https://plasma.wisc.edu/', note: 'One of the largest university plasma programs (HSX, MST, WHAM).' },
      { name: 'University of Michigan — NERS', country: 'USA', url: 'https://ners.engin.umich.edu/research/plasmas/', note: 'Plasmas & fusion within Nuclear Engineering & Radiological Sciences.' },
      { name: 'Columbia University — Plasma Physics', country: 'USA', url: 'https://fusion.columbia.edu/', note: 'HBT-EP tokamak and applied physics graduate research.' },
      { name: 'UCLA — Plasma Science & Technology', country: 'USA', url: 'https://www.fusion.ucla.edu/', note: 'Basic plasma physics and the Basic Plasma Science Facility.' },
      { name: 'UC San Diego — Center for Energy Research', country: 'USA', url: 'https://cer.ucsd.edu/', note: 'Partner of the DIII-D National Fusion Facility.' },
      { name: 'University of Texas at Austin — IFS', country: 'USA', url: 'https://physics.utexas.edu/research/centers-institutes/institute-fusion-studies', note: 'Institute for Fusion Studies, a leading plasma theory center.' },
      { name: 'University of Rochester — LLE', country: 'USA', url: 'https://www.lle.rochester.edu/', note: 'Laboratory for Laser Energetics, home of the OMEGA laser.' },
      { name: 'Auburn University — Plasma Sciences', country: 'USA', url: 'https://w7-x.auburn.edu/', note: 'Compact stellarator (CTH) and basic plasma research.' },
      { name: 'University of Maryland — IREAP', country: 'USA', url: 'https://ireap.umd.edu/', note: 'Institute for Research in Electronics & Applied Physics.' },
      { name: 'University of Saskatchewan — Plasma Physics Lab', country: 'Canada', url: 'https://research-groups.usask.ca/plasma-physics/index.php', note: 'STOR-M tokamak and Canada’s university fusion research.' },
    ],
  },
  {
    name: 'Europe & UK',
    flag: '🇪🇺',
    programs: [
      { name: 'EPFL — Swiss Plasma Center', country: 'Switzerland', url: 'https://www.epfl.ch/research/domains/swiss-plasma-center/', note: 'TCV tokamak; full plasma physics doctoral school.' },
      { name: 'Max Planck Institute for Plasma Physics', country: 'Germany', url: 'https://www.ipp.mpg.de/', note: 'Wendelstein 7-X & ASDEX Upgrade; runs the IMPRS / HEPP graduate school.' },
      { name: 'Forschungszentrum Jülich — IFN', country: 'Germany', url: 'https://www.fz-juelich.de/en/ifn', note: 'Institute for Fusion Energy & Nuclear Waste Management; plasma-wall interaction and materials.' },
      { name: 'UK Atomic Energy Authority (UKAEA)', country: 'UK', url: 'https://ccfe.ukaea.uk/', note: 'Culham Centre for Fusion Energy; MAST-U and fusion engineering doctorates.' },
      { name: 'University of York — Plasma Institute', country: 'UK', url: 'https://www.york.ac.uk/physics-engineering-technology/ypi/teaching/', note: 'Fusion CDT hub and laser-plasma research.' },
      { name: 'Imperial College London — Plasma Physics', country: 'UK', url: 'https://www.imperial.ac.uk/plasma-physics/', note: 'Inertial fusion, MHD and high-energy-density physics.' },
      { name: 'University of Warwick — CFSA', country: 'UK', url: 'https://warwick.ac.uk/fac/sci/physics/research/cfsa/', note: 'Centre for Fusion, Space & Astrophysics.' },
      { name: 'KIT — Karlsruhe Institute of Technology', country: 'Germany', url: 'https://www.fusion.kit.edu/english/index.php', note: 'Fusion technology, magnets and materials within the EUROfusion program.' },
      { name: 'DIFFER', country: 'Netherlands', url: 'https://www.differ.nl/', note: 'Dutch Institute for Fundamental Energy Research (with TU/e).' },
      { name: 'IST Lisbon — IPFN', country: 'Portugal', url: 'https://www.ipfn.tecnico.ulisboa.pt/', note: 'Institute for Plasmas & Nuclear Fusion (ISTTOK tokamak).' },
      { name: 'CIEMAT — National Fusion Lab', country: 'Spain', url: 'https://www.ciemat.es/', note: 'TJ-II stellarator and Spain’s fusion program.' },
      { name: 'Consorzio RFX', country: 'Italy', url: 'https://www.igi.cnr.it/', note: 'RFX-mod and the SPIDER/MITICA neutral-beam test facility.' },
      { name: 'Ghent University — Applied Physics', country: 'Belgium', url: 'https://nuclearfusion.ugent.be/', note: 'Plasma physics within the Belgian fusion effort.' },
      { name: 'Chalmers University of Technology', country: 'Sweden', url: 'https://www.chalmers.se/en/projects/fusion-power-plant-platform/', note: 'Fusion plasma physics and runaway-electron theory.' },
    ],
  },
  {
    name: 'Asia & Pacific',
    flag: '🌏',
    programs: [
      { name: 'QST — Fusion Energy Directorate', country: 'Japan', url: 'https://www.qst.go.jp/site/jt60-english/', note: 'Operates JT-60SA, the largest superconducting tokamak.' },
      { name: 'National Institute for Fusion Science (NIFS)', country: 'Japan', url: 'https://www.nifs.ac.jp/en/', note: 'Large Helical Device (LHD) and the graduate university SOKENDAI.' },
      { name: 'Kyoto University — Advanced Energy', country: 'Japan', url: 'https://www.iae.kyoto-u.ac.jp/en/', note: 'Heliotron J and fusion energy engineering.' },
      { name: 'Osaka University — ILE', country: 'Japan', url: 'https://www.ile.osaka-u.ac.jp/eng/groups/research03/fps/index.html', note: 'Institute of Laser Engineering for inertial fusion.' },
      { name: 'Korea Institute of Fusion Energy (KFE)', country: 'Korea', url: 'https://www.kfe.re.kr/eng', note: 'Operates KSTAR; partner of the University of Science & Technology.' },
      { name: 'KAIST — Nuclear & Quantum Engineering', country: 'Korea', url: 'https://nuclear.kaist.ac.kr/eng/research/research04.php', note: 'Fusion and plasma graduate education.' },
      { name: 'Seoul National University', country: 'Korea', url: 'https://nucleng.snu.ac.kr/en/research/lab', note: 'Fusion & plasma application laboratory.' },
      { name: 'ASIPP (Hefei) — USTC', country: 'China', url: 'http://english.ipp.cas.cn/', note: 'Institute of Plasma Physics; operates the EAST superconducting tokamak.' },
      { name: 'Southwestern Institute of Physics (SWIP)', country: 'China', url: 'http://www.swip.ac.cn/', note: 'Operates HL-3, China’s newest large tokamak.' },
      { name: 'Institute for Plasma Research (IPR)', country: 'India', url: 'https://www.ipr.res.in/', note: 'ADITYA-U and SST-1; India’s national fusion institute.' },
      { name: 'Australian National University', country: 'Australia', url: 'https://physics.anu.edu.au/', note: 'H-1 heliac heritage and plasma theory.' },
      { name: 'University of Sydney — Applied & Plasma Physics', country: 'Australia', url: 'https://www.sydney.edu.au/science/schools/school-of-physics.html', note: 'Plasma physics within the School of Physics.' },
    ],
  },
];

export const programDirectories = [
  { name: 'ITER — Worldwide Fusion Links', url: 'https://www.iter.org/scientists/worldwide-fusion-links', blurb: 'The master directory: 200+ labs and university programs across 40+ countries.' },
  { name: 'FuseNet — European fusion education', url: 'https://fusenet.eu/', blurb: 'Master’s and PhD programs, internships and events across Europe.' },
  { name: 'GradSchoolShopper — Plasma & Fusion', url: 'https://gradschoolshopper.com/', blurb: 'Searchable database of U.S. graduate physics programs by specialty.' },
  { name: 'IAEA — Fusion education & training', url: 'https://www.iaea.org/topics/fusion', blurb: 'International courses, workshops and the FusionWiki knowledge base.' },
];
