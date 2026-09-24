export interface Article {
  id: string;
  slug: string;
  kicker: string;
  title: string;
  dek: string;
  author: string;
  role: string;
  date: string;
  readMinutes: number;
  district: string;
  coordinates: string;
  plot: string;
  image: string;
  imageCaption: string;
  body: { type: 'p' | 'h2' | 'pull'; text: string }[];
}

export interface EssayFrame {
  image: string;
  caption: string;
  location: string;
}

export interface PhotoEssay {
  id: string;
  title: string;
  photographer: string;
  dek: string;
  date: string;
  district: string;
  cover: string;
  frames: EssayFrame[];
}

export interface ArchiveIssue {
  number: number;
  year: number;
  season: string;
  theme: string;
  summary: string;
  cover: string;
  contents: string[];
}

const px = (id: number, w = 1600) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}`;

export const articles: Article[] = [
  {
    id: 'a1',
    slug: 'the-six-minute-block',
    kicker: 'Feature',
    title: 'The Six-Minute Block',
    dek: 'What happens to a neighborhood when every daily need sits within a short walk — and what gets displaced to make it so.',
    author: 'Mara Ellison',
    role: 'Senior correspondent',
    date: 'July 2026',
    readMinutes: 14,
    district: 'Riverside East',
    coordinates: '41.8919 N, 87.6051 W',
    plot: 'PLT-2214',
    image: px(1519088),
    imageCaption: 'Mixed-use frontage along Halstead Row, rebuilt after the 2019 rezoning.',
    body: [
      { type: 'p', text: 'The bakery opens at six. By six-fifteen the first commuters have crossed its threshold, and by seven the sidewalk outside carries a density of foot traffic that transportation engineers once believed impossible for a street this narrow. Halstead Row is nine meters wide, building face to building face. It works because everything a resident needs — groceries, a clinic, two schools, a hardware counter, the bakery — sits inside a six-minute walk.' },
      { type: 'p', text: 'This is the promise of proximity planning, the design orthodoxy that has quietly rewritten zoning codes in forty cities over the past decade. The pitch is simple: shrink the distance between home and everything else, and you shrink car dependence, emissions, and the loneliness of the commute in one gesture.' },
      { type: 'h2', text: 'The arithmetic of nearness' },
      { type: 'p', text: 'Proximity is not free. To bring a grocer within six minutes of every door, you need residential densities of at least ninety units per hectare — roughly triple what most postwar neighborhoods hold. Riverside East got there by legalizing three-flat conversions and eliminating parking minimums in a single ordinance. Land values responded within eighteen months.' },
      { type: 'pull', text: 'Shrink the distance between home and everything else, and you shrink car dependence, emissions, and the commute in one gesture.' },
      { type: 'p', text: 'The displacement question is where the model gets tested. Rents along Halstead rose 22 percent in three years. The city answered with a community land trust that now holds one parcel in nine — enough, its director argues, to anchor prices for the block. Critics call it a rounding error. The truth, as usual in city-making, is being decided slowly, lease by lease.' },
      { type: 'h2', text: 'What the sidewalk knows' },
      { type: 'p', text: 'Stand at the corner of Halstead and Ninth at dusk and the case for the six-minute block makes itself. Kids cross without a signal because drivers here expect them. The clinic keeps evening hours because the pharmacist upstairs asked. None of this appears in the zoning text. It emerges, the way street life always has, from the simple fact of people being near enough to need each other.' },
    ],
  },
  {
    id: 'a2',
    slug: 'concrete-that-remembers',
    kicker: 'Feature',
    title: 'Concrete That Remembers',
    dek: 'Inside the movement to preserve brutalist civic buildings — not as monuments, but as working infrastructure.',
    author: 'Theo Okafor',
    role: 'Architecture critic',
    date: 'June 2026',
    readMinutes: 11,
    district: 'Civic Center',
    coordinates: '45.5152 N, 122.6784 W',
    plot: 'PLT-0871',
    image: px(2119713),
    imageCaption: 'The Meridian County Administration Building, completed 1974, slated for reuse study.',
    body: [
      { type: 'p', text: 'Nobody loves the Meridian County Administration Building at first sight. Its concrete has weathered to the color of an overcast sky, its entry sequence was designed for a public that arrived by bus, and its floor plates are too deep for modern daylight codes. Three demolition studies have been commissioned since 2015. All three concluded the same thing: tearing it down would be the most expensive option on the table.' },
      { type: 'p', text: 'Embodied carbon has changed the preservation argument. The building holds roughly 11,000 tons of concrete, and every ton represents emissions already spent. Demolish and rebuild, and the replacement structure starts its life with a carbon debt it will take sixty years of efficient operation to repay.' },
      { type: 'h2', text: 'From eyesore to asset' },
      { type: 'p', text: 'The retrofit now underway carves two light wells through the deep floor plates and re-clads the street level in glass — a gesture the original architects would likely have despised and current occupants unambiguously demand. The upper floors keep their board-formed concrete, sandblasted back to its original warm gray.' },
      { type: 'pull', text: 'Every ton of concrete represents emissions already spent. Demolition starts the clock over.' },
      { type: 'p', text: 'The lesson generalizes. Cities hold vast inventories of unloved postwar civic stock — libraries, courthouses, transit headquarters — that pencil out better as retrofits than as rubble. The question is no longer whether these buildings deserve to survive. It is whether we can learn to see them before the wrecking permits clear.' },
    ],
  },
  {
    id: 'a3',
    slug: 'the-bus-lane-wars',
    kicker: 'Field report',
    title: 'The Bus Lane Wars',
    dek: 'Twelve blocks of red paint set off the fiercest policy fight this city has seen in a decade. The buses, meanwhile, got faster.',
    author: 'Priya Raman',
    role: 'Transit reporter',
    date: 'May 2026',
    readMinutes: 9,
    district: 'Corridor 7',
    coordinates: '34.0522 N, 118.2437 W',
    plot: 'PLT-1450',
    image: px(2402235),
    imageCaption: 'Route 7 approaching the Fifth Street queue jump, week one of the pilot.',
    body: [
      { type: 'p', text: 'The paint went down on a Sunday night. By Monday morning, the Route 7 bus — historically the slowest in the system, averaging 11 km/h through the downtown spine — was running 34 percent faster. By Tuesday, the lawsuits were filed.' },
      { type: 'p', text: 'Bus lanes occupy a strange place in urban politics: cheap, fast to build, demonstrably effective, and ferociously contested. Corridor 7 carries 24,000 bus riders a day against 9,000 drivers, yet the drivers held the curb lane for sixty years. Reallocating it required no concrete, no federal grant, no environmental review. Just paint, and the will to hold the line.' },
      { type: 'h2', text: 'Ninety days of data' },
      { type: 'p', text: 'The pilot survived its court challenge on the strength of its numbers. Ridership up 19 percent. On-time performance up 41 percent. Corridor retail sales — the merchants had predicted collapse — flat, then up 3 percent by month three. The city made the lanes permanent in April and announced four more corridors.' },
      { type: 'p', text: 'The deeper shift is procedural. Corridor 7 flipped the burden of proof: the pilot went in first, and the data did the arguing. It is a template other cities are studying closely — govern by demonstration, not by rendering.' },
    ],
  },
  {
    id: 'a4',
    slug: 'daylighting-the-buried-creek',
    kicker: 'Feature',
    title: 'Daylighting the Buried Creek',
    dek: 'A stream entombed in a culvert for ninety years returns to the surface — and redraws the flood map with it.',
    author: 'Jonas Wehrli',
    role: 'Contributing editor',
    date: 'April 2026',
    readMinutes: 12,
    district: 'Millbrook',
    coordinates: '47.6062 N, 122.3321 W',
    plot: 'PLT-0339',
    image: px(158063),
    imageCaption: 'Millbrook Creek, six months after the culvert removal, upstream reach.',
    body: [
      { type: 'p', text: 'For ninety years, Millbrook Creek ran through a concrete pipe beneath a parking lot, surfacing only in the city\u2019s stormwater diagrams and, during heavy rain, in the basements of everything downstream. The pipe was built for a city half this size and a climate that no longer exists.' },
      { type: 'p', text: 'Daylighting — the practice of excavating buried streams and restoring them to open channels — used to be sold as beautification. Millbrook was sold as flood control, and that reframing changed everything about who showed up to support it.' },
      { type: 'h2', text: 'The channel as infrastructure' },
      { type: 'p', text: 'An open, vegetated channel carries roughly four times the peak flow of the culvert it replaced, and its banks absorb what the channel cannot. In the February storms — the wettest on record — the creek crested within its new floodplain and the downstream basements stayed dry for the first time in a generation.' },
      { type: 'pull', text: 'The pipe was built for a city half this size and a climate that no longer exists.' },
      { type: 'p', text: 'The park that came with it was, officially, a side effect. Try telling that to the herons, or to the elementary school that now runs its science curriculum on the banks. Infrastructure that people can love is infrastructure that people will defend at budget time. That, too, is a form of resilience.' },
    ],
  },
];

export const photoEssays: PhotoEssay[] = [
  {
    id: 'e1',
    title: 'Night Shift: The City at 4 A.M.',
    photographer: 'Ines Duarte',
    dek: 'Street cleaners, bakers, transit crews — a portrait of the labor that resets the city before dawn.',
    date: 'July 2026',
    district: 'Central Spine',
    cover: px(315938),
    frames: [
      { image: px(315938), caption: 'The 4:10 sweep. One operator clears eleven kilometers of curb before the first commuters arrive.', location: 'Meridian Ave' },
      { image: px(2603464), caption: 'Platform crews replace 340 meters of rail in a five-hour overnight window.', location: 'Central Station' },
      { image: px(1755693), caption: 'Wholesale flower market at intake hour. The stems reach retail shelves by seven.', location: 'Market District' },
      { image: px(2346289), caption: 'Last light off, first light on. The tower cleaning cycle runs floor by floor, top down.', location: 'Financial Quarter' },
    ],
  },
  {
    id: 'e2',
    title: 'Desire Lines',
    photographer: 'Sam Kowalczyk',
    dek: 'Where feet disagree with planners: the unofficial paths people wear into the designed city.',
    date: 'May 2026',
    district: 'Various',
    cover: px(1141853),
    frames: [
      { image: px(1141853), caption: 'The diagonal across Fairfield Common, sixty meters shorter than the paved route. The grass lost.', location: 'Fairfield Common' },
      { image: px(1601774), caption: 'A gap in the fence becomes a gate becomes, eventually, a paved entrance. Fifteen years of process in one photograph.', location: 'Northgate Yards' },
      { image: px(2129796), caption: 'Stairs the city built after counting eight hundred daily climbers on the dirt slope beside them.', location: 'Hillcrest' },
      { image: px(936722), caption: 'The crossing that exists in behavior but not in paint. A signal is budgeted for next year.', location: 'Dockside' },
    ],
  },
  {
    id: 'e3',
    title: 'Concrete Botany',
    photographer: 'Ren Ishida',
    dek: 'The unplanned ecology of the city: what grows in the cracks, gutters, and rooflines nobody maintains.',
    date: 'March 2026',
    district: 'Ironworks',
    cover: px(1108701),
    frames: [
      { image: px(1108701), caption: 'A fig tree, self-seeded, eleven years old, growing from a warehouse gutter.', location: 'Ironworks' },
      { image: px(1105766), caption: 'Moss colonizing the north face of the viaduct, mapping the drainage pattern in green.', location: 'Viaduct 9' },
      { image: px(1029948), caption: 'The vacant lot at Fenn Street, four years unmowed: forty-one plant species and counting.', location: 'Fenn St' },
      { image: px(1770809), caption: 'Wildflowers in the tram ballast. The transit authority now mows around them.', location: 'Line 3 corridor' },
    ],
  },
];

export const archiveIssues: ArchiveIssue[] = [
  {
    number: 31, year: 2026, season: 'Summer', theme: 'Proximity',
    summary: 'The six-minute block, night labor, and the economics of nearness.',
    cover: px(1519088, 800),
    contents: ['The Six-Minute Block', 'Night Shift: The City at 4 A.M.', 'Interview: pricing the curb', 'Zoning notebook: parking minimums'],
  },
  {
    number: 30, year: 2026, season: 'Spring', theme: 'Water',
    summary: 'Daylighted creeks, sponge districts, and the flood map as a political document.',
    cover: px(158063, 800),
    contents: ['Daylighting the Buried Creek', 'Desire Lines', 'The retention basin as public space', 'Field notes: coastal setbacks'],
  },
  {
    number: 29, year: 2026, season: 'Winter', theme: 'Movement',
    summary: 'Bus lane politics, station design, and the geometry of the transfer.',
    cover: px(2402235, 800),
    contents: ['The Bus Lane Wars', 'Concrete Botany', 'The 90-second transfer', 'Data: induced demand, measured'],
  },
  {
    number: 28, year: 2025, season: 'Autumn', theme: 'Reuse',
    summary: 'Brutalism as carbon bank, adaptive office conversions, and material passports.',
    cover: px(2119713, 800),
    contents: ['Concrete That Remembers', 'The office-to-housing math', 'Salvage yards of the region', 'Essay: patina as policy'],
  },
  {
    number: 27, year: 2025, season: 'Summer', theme: 'Heat',
    summary: 'Shade equity, cool corridors, and the thermal geography of the block.',
    cover: px(1105766, 800),
    contents: ['The shade audit', 'Mapping the heat island', 'Trees as infrastructure', 'Interview: the chief heat officer'],
  },
  {
    number: 26, year: 2025, season: 'Spring', theme: 'Ground',
    summary: 'Land trusts, soil remediation, and who owns the space beneath the street.',
    cover: px(1029948, 800),
    contents: ['One parcel in nine', 'The brownfield ledger', 'Subsurface rights, explained', 'Photo essay: the excavation'],
  },
  {
    number: 25, year: 2025, season: 'Winter', theme: 'Light',
    summary: 'Street lighting standards, dark-sky districts, and the politics of the lumen.',
    cover: px(2346289, 800),
    contents: ['After the sodium lamps', 'The dark-sky ordinance', 'Storefront light as safety', 'Data: lux levels by district'],
  },
  {
    number: 24, year: 2024, season: 'Autumn', theme: 'Edges',
    summary: 'Waterfronts, ring roads, and the seams where districts meet.',
    cover: px(936722, 800),
    contents: ['The harbor line', 'Crossing the ring road', 'Fence typologies', 'Essay: the city limit as fiction'],
  },
  {
    number: 23, year: 2024, season: 'Summer', theme: 'Commons',
    summary: 'Plazas that work, plazas that fail, and the maintenance question nobody budgets.',
    cover: px(1141853, 800),
    contents: ['The plaza audit', 'Benches: a defense', 'Who waters the commons', 'Interview: the market master'],
  },
  {
    number: 22, year: 2024, season: 'Spring', theme: 'Grain',
    summary: 'Lot sizes, fine-grained retail, and why block length is destiny.',
    cover: px(1601774, 800),
    contents: ['The 40-meter block', 'Small lots, small rents', 'The corner store index', 'Field notes: alley retail'],
  },
];
