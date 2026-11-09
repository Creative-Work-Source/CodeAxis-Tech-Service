export type Discipline = {
  title: string;
  summary: string;
  items: string[];
};

/** Built-environment service lines led by co-founder David Nguyen. */
export const disciplines: Discipline[] = [
  {
    title: "Architectural Design",
    summary: "Concept to construction for residential, mixed-use and commercial buildings.",
    items: ["Concept & massing", "Planning & permit drawings", "Elevations & sections", "Photoreal visualisation"],
  },
  {
    title: "BIM Engineering",
    summary: "Coordinated, data-rich building models that keep every trade on the same page.",
    items: ["Revit modelling (LOD 300–400)", "Clash detection", "3D floor plans", "Quantity take-offs"],
  },
  {
    title: "Civil & Structural",
    summary: "Site and structural engineering that turns a design into something buildable.",
    items: ["Site layout & grading", "Drainage & utilities", "Structural coordination", "Construction documentation"],
  },
  {
    title: "Interior Design",
    summary: "Residential, hospitality and workplace interiors with build-ready detailing.",
    items: ["Space planning", "Joinery & lighting design", "Material & FF&E schedules", "Virtual staging"],
  },
];

export const aecTools = ["Revit", "AutoCAD", "Civil 3D", "Navisworks", "SketchUp", "3ds Max", "Lumion", "Enscape"];

export type ArchProject = {
  slug: string;
  title: string;
  category: "Architecture" | "BIM" | "Civil & Documentation" | "Interiors";
  sector: string;
  summary: string;
  scope: string[];
  tools: string[];
  challenge: string;
  approach: string;
  outcome: string;
  imageCount: number;
  /** 1-based index of the image used as the cover. */
  cover?: number;
};

export function archImages(project: ArchProject) {
  return Array.from({ length: project.imageCount }, (_, i) => `/architecture/${project.slug}/${String(i + 1).padStart(2, "0")}.jpg`);
}

export function archCover(project: ArchProject) {
  return archImages(project)[(project.cover ?? 1) - 1];
}

export const archProjects: ArchProject[] = [
  {
    slug: "oceanfront-residential-tower",
    title: "Oceanfront Residential Tower",
    category: "Architecture",
    sector: "Multi-family residential",
    summary:
      "A nine-storey residential building with stepped, wraparound balconies, a rooftop infinity pool and resort-style shared amenities, designed to make the most of a corner site facing the coast.",
    scope: ["Concept & massing", "Façade design", "Amenity and rooftop design", "Apartment interiors", "Marketing visualisation"],
    tools: ["Revit", "AutoCAD", "3ds Max", "Lumion"],
    challenge:
      "The developer needed every unit to feel like it had a sea view on a tight corner plot, while keeping the structure regular enough to build economically and meeting setback limits on both street frontages.",
    approach:
      "We rotated and staggered the balcony slabs floor by floor so each apartment gets an outlook and shade, while the columns and cores stay on a clean, repeating grid. The roof became a shared amenity deck with an infinity pool and lounge, and the apartment interiors use warm timber and natural light to carry the coastal theme inside.",
    outcome:
      "A coordinated design package of massing, façade, amenity and interior designs, plus a photoreal visual set that the client used for sales and investor presentations.",
    imageCount: 10,
  },
  {
    slug: "urban-high-rise-amenities",
    title: "Urban High-Rise & Amenity Levels",
    category: "Architecture",
    sector: "High-rise residential",
    summary:
      "A family of slender residential towers with active ground floors and a full stack of resident amenities: gym, co-working, laundry lounge, pet park, sports court, kids' club and rooftop dining.",
    scope: ["Tower architecture", "Amenity programming", "Interior design of shared spaces", "Landscape coordination", "Visualisation"],
    tools: ["Revit", "Navisworks", "3ds Max", "Lumion"],
    challenge:
      "The client wanted amenity-led buildings that would stand out in a crowded rental market, without the amenity floors eroding the net sellable area of the towers.",
    approach:
      "We consolidated amenities onto podium and roof levels and gave each space a distinct identity through colour, joinery and lighting. A single BIM model across architecture and services meant the amenity floors were coordinated with the structure and MEP risers from the start.",
    outcome:
      "A tower and amenity design system the developer can reuse across sites, with a coordinated model and a complete set of resident-facing visuals.",
    imageCount: 14,
  },
  {
    slug: "contemporary-private-residences",
    title: "Contemporary Private Residences",
    category: "Architecture",
    sector: "Single-family homes",
    summary:
      "A collection of bespoke detached homes, from cantilevered modern villas to timber-and-stone mountain lodges, each designed around the site, the views and how the family lives.",
    scope: ["Site analysis", "Architectural design", "Planning drawings", "Interior concepts", "Exterior & interior visualisation"],
    tools: ["Revit", "SketchUp", "Enscape", "Lumion"],
    challenge:
      "Each client brought a different site, budget and brief, from sloping woodland plots to suburban lots, and every home needed to clear local planning while still feeling one-of-a-kind.",
    approach:
      "We start each home with a site and lifestyle study, then develop massing options in 3D so clients can walk through the design before committing. Structure and services are modelled early so the final drawings go to contractors without surprises.",
    outcome:
      "Permit-ready designs and photoreal walkthroughs that gave clients and their builders a shared, unambiguous picture of the finished home.",
    imageCount: 12,
  },
  {
    slug: "mixed-use-commercial",
    title: "Mixed-Use & Commercial Developments",
    category: "Architecture",
    sector: "Mixed-use, retail & hospitality",
    summary:
      "Retail parades, mid-rise apartment blocks over shops, hotels and a terraced mixed-use scheme, designed for investors who need buildings that work commercially from day one.",
    scope: ["Feasibility & massing", "Commercial and residential layouts", "Façade design", "Site & parking layout", "Street-level visualisation"],
    tools: ["Revit", "Civil 3D", "AutoCAD", "Lumion"],
    challenge:
      "Mixed-use schemes have to balance retail frontage, residential privacy, parking and servicing on one plot, while meeting zoning limits on height, density and access.",
    approach:
      "We tested layouts in quick massing studies, then developed the chosen option with site engineering for access, parking and drainage running alongside the architecture. Façades were designed to read clearly at street level, with a distinct identity for shops and homes.",
    outcome:
      "Investor-ready schemes with site layouts, building designs and visuals that supported planning submissions and pre-leasing conversations.",
    imageCount: 14,
  },
  {
    slug: "permit-construction-documents",
    title: "Permit & Construction Drawing Sets",
    category: "Civil & Documentation",
    sector: "Residential new-build & extensions",
    summary:
      "Full permit and construction document sets for new single-family homes, extensions and renovations: site plans, floor plans, elevations, sections, details and schedules.",
    scope: ["Site plans & grading", "Floor plans, elevations & sections", "Structural coordination", "Door/window schedules", "Code compliance notes"],
    tools: ["AutoCAD", "Revit", "Civil 3D"],
    challenge:
      "Permit offices reject incomplete or inconsistent drawings, and every resubmission costs homeowners and builders weeks. Clients needed drawing sets that pass review the first time.",
    approach:
      "We produce drawings from a single model so plans, elevations and sections always agree. Site plans cover setbacks, grading and drainage; structural elements are coordinated with the engineer of record; and each sheet carries the code notes and schedules reviewers look for.",
    outcome:
      "Complete, consistent drawing sets that builders can price and build from, with site and civil information included rather than left for later.",
    imageCount: 15,
  },
  {
    slug: "bim-3d-floor-plans",
    title: "BIM Models & 3D Floor Plans",
    category: "BIM",
    sector: "Residential & commercial",
    summary:
      "Furnished 3D floor plans and cut-away BIM models for houses, apartments and offices, used for design reviews, sales and space planning.",
    scope: ["BIM modelling", "3D floor plans", "Furniture & finishes layouts", "Area take-offs", "Marketing views"],
    tools: ["Revit", "SketchUp", "3ds Max"],
    challenge:
      "Flat 2D plans are hard for clients and buyers to read, and design issues are often found only on site, after they have become expensive.",
    approach:
      "We model the building in BIM and produce furnished, cut-away 3D plans directly from that model. Clients can understand room sizes and flow at a glance, and the same model feeds clash checks and quantity take-offs for the build.",
    outcome:
      "One model used three ways: for design sign-off, for marketing, and as an accurate base for construction coordination.",
    imageCount: 14,
  },
  {
    slug: "hospitality-interiors",
    title: "Hospitality & Lifestyle Interiors",
    category: "Interiors",
    sector: "Cafés, restaurants & boutique living",
    summary:
      "Café, bar and restaurant interiors alongside high-end bedrooms and bathrooms, each with a strong identity built from material, lighting and bespoke joinery.",
    scope: ["Concept & mood", "Space planning", "Joinery & lighting design", "Material schedules", "Photoreal renders"],
    tools: ["3ds Max", "AutoCAD", "SketchUp", "Enscape"],
    challenge:
      "Hospitality operators need interiors that photograph well and build a brand, but that also work hard operationally: seating density, service routes and durable finishes.",
    approach:
      "We design layouts around the service flow first, then layer in the brand through feature joinery, lighting and finishes. Every concept is delivered with detailed renders and drawings so fit-out contractors can quote and build accurately.",
    outcome:
      "Distinctive, buildable interiors with full visual and technical packages, ready for fit-out tendering.",
    imageCount: 12,
  },
  {
    slug: "residential-interiors-renovation",
    title: "Residential Interiors & Renovation",
    category: "Interiors",
    sector: "Homes, apartments & renovations",
    summary:
      "Living rooms, kitchens and bedrooms for new homes and renovations, including before-and-after virtual staging that shows owners and buyers what a space can become.",
    scope: ["Renovation design", "Kitchen & joinery design", "Lighting plans", "Virtual staging", "Interior visualisation"],
    tools: ["3ds Max", "SketchUp", "AutoCAD", "Enscape"],
    challenge:
      "Homeowners and agents struggle to picture the potential of an empty or dated room, which slows decisions and sales.",
    approach:
      "We survey the existing space, design the renovation or furnishing scheme, and render it from the same viewpoints as the original photos, so the before-and-after comparison is direct and convincing.",
    outcome:
      "Clear renovation designs and staging imagery that help owners commit to a scheme and help agents present properties at their best.",
    imageCount: 16,
  },
];
