export interface ProjectRecord {
  id: number;
  projectName: string;
  client: string;
  location: string;
  testingType: string;
  depth: number | null;
  quantity: number | null;
}

export const PROJECT_LIBRARY_DATA: ProjectRecord[] = [
  {
    id: 1,
    projectName: "Proposed Eight Units Ten Sty Condo Bldg.",
    client: "JT Moland Novo Homes",
    location: "Brgy. Tambo, Lipa City, Batangas",
    testingType: "Soil Boring",
    depth: 30,
    quantity: 6
  },
  {
    id: 2,
    projectName: "SMC Licaros Elevated Parking",
    client: "NW Steel Technologies, Inc.",
    location: "Mandaluyong City",
    testingType: "Soil Boring",
    depth: 30,
    quantity: 4
  },
  {
    id: 3,
    projectName: "Proposed Const. of Nine (9) Floor Building",
    client: "Urdaneta City Medical Center",
    location: "Urdaneta City, Pangasinan",
    testingType: "Soil Boring",
    depth: 30,
    quantity: 9
  },
  {
    id: 4,
    projectName: "Proposed Circulo Verde Bridge",
    client: "NW Steel Technologies, Inc.",
    location: "Pasig and Quezon City",
    testingType: "Soil Boring",
    depth: 30,
    quantity: 6
  },
  {
    id: 5,
    projectName: "Proposed NW Steel Warehouse",
    client: "NW Steel Technologies, Inc.",
    location: "Pulilan, Bulacan",
    testingType: "Soil Boring",
    depth: 30,
    quantity: 6
  },
  {
    id: 6,
    projectName: "Proposed By Pass Road and Bridge",
    client: "I and E Construction",
    location: "Imus, Cavite",
    testingType: "Soil Boring",
    depth: 30,
    quantity: 6
  },
  {
    id: 7,
    projectName: "Prop. Six (6) Storey San Mateo Mun. College",
    client: "M.E. Sicat Construction, Inc.",
    location: "Brgy. Guinayang, San Mateo, Rizal",
    testingType: "Soil Boring",
    depth: 30,
    quantity: 4
  },
  {
    id: 8,
    projectName: "Plaridel Water Supply Project",
    client: "M.E. Sicat Construction, Inc.",
    location: "Plaridel, Bulacan",
    testingType: "Soil Boring",
    depth: 30,
    quantity: 3
  },
  {
    id: 9,
    projectName: "Proposed Seven (7) Storey Building",
    client: "Pendragon Animal Health Clinic",
    location: "Cubao, Quezon City",
    testingType: "Soil Boring",
    depth: 30,
    quantity: 3
  },
  {
    id: 10,
    projectName: "Proposed 18 Storey Condominium Bldg.",
    client: "Bright Homes Realty Corporation",
    location: "Brgy. Catmon, Sta. Maria, Bulacan",
    testingType: "Soil Boring",
    depth: 30,
    quantity: 6
  },
  {
    id: 11,
    projectName: "Proposed New Pasig City Hall Building",
    client: "Pasig City LGU",
    location: "Pasig City",
    testingType: "Soil Boring",
    depth: 42,
    quantity: 2
  },
  {
    id: 12,
    projectName: "Shanxi Campsite",
    client: "Shanxi Hydraulic Engg. Const. Beu.",
    location: "Brg. Sto Cristo, CSJDM, Bulacan",
    testingType: "Soil Boring",
    depth: 15,
    quantity: 6
  },
  {
    id: 13,
    projectName: "Amaresa 3 Land Development",
    client: "Red Oak Properties, Inc.",
    location: "Brgy. Loma de Gato, Marilao, Bulacan",
    testingType: "Soil Boring",
    depth: 12,
    quantity: 12
  },
  {
    id: 14,
    projectName: "Amaresa Mexico Land Development",
    client: "Red Oak Properties, Inc.",
    location: "Brgy. Divisoria, Mexico, Pampanga",
    testingType: "Soil Boring",
    depth: 12,
    quantity: 9
  },
  {
    id: 15,
    projectName: "Various Sun Cellular Cellsites Towers",
    client: "SMS Global Technologies, Inc.",
    location: "Various Locations in Rizal and NCR",
    testingType: "Soil Boring",
    depth: 12,
    quantity: 12
  },
  {
    id: 16,
    projectName: "Proposed Ajinomoto Warehouse",
    client: "CICJ Gen. Cont. & Bldg Maint. Inc.",
    location: "Brgy. Tabang Guiguinto, Bulacan",
    testingType: "Soil Boring",
    depth: 12,
    quantity: 9
  },
  {
    id: 17,
    projectName: "Various Schools and MPB",
    client: "Dept. of Public Works & Highways",
    location: "Various Locations in Region 3",
    testingType: "Soil Boring",
    depth: 15,
    quantity: 12
  },
  {
    id: 18,
    projectName: "Proposed 3 Sty w/ Roofdeck Res Bldg.",
    client: "Dr. Joseph Cuaresma",
    location: "Sta. Ana, Manila",
    testingType: "Soil Boring",
    depth: 20,
    quantity: 2
  },
  {
    id: 19,
    projectName: "Proposed 2 Storey Commercial Bldg.",
    client: "Mr. and Mrs. Santos",
    location: "Brgy. 183, Caloocan City",
    testingType: "Soil Boring",
    depth: 12,
    quantity: 4
  },
  {
    id: 20,
    projectName: "Proposed Lucena Fish Port",
    client: "RD Talens Const.",
    location: "Brgy. Dalahican, Lucena City, Quezon",
    testingType: "Soil Boring",
    depth: 10,
    quantity: 4
  },
  {
    id: 21,
    projectName: "Proposed Construction of Farm",
    client: "Arch. Law",
    location: "Bamban, Tarlac",
    testingType: "Soil Boring",
    depth: 12,
    quantity: 3
  },
  {
    id: 22,
    projectName: "Proposed Phil Army Live Fire",
    client: "RV Dagalea Construction",
    location: "Fort Magsaysay, Palayan City, N. Ecija",
    testingType: "Soil Boring",
    depth: 12,
    quantity: 3
  },
  {
    id: 23,
    projectName: "Prop. D/B Const of Entry Control Point",
    client: "RV Dagalea Construction",
    location: "Basa Air Base, Florida Blanca, Pampanga",
    testingType: "Soil Boring",
    depth: 12,
    quantity: 6
  },
  {
    id: 24,
    projectName: "Prop. AFCES FRM 1 Sty Extension Building",
    client: "AFPCES FRM",
    location: "Fort Magsaysay, Palayan City, N. Ecija",
    testingType: "Soil Boring",
    depth: 12,
    quantity: 2
  },
  {
    id: 25,
    projectName: "Proposed Sunjin Slope Protection",
    client: "Sunjin Philippines Corporation",
    location: "Brgy. Partida, Norzagaray, Bulacan",
    testingType: "Soil Boring",
    depth: 15,
    quantity: 4
  },
  {
    id: 26,
    projectName: "Port Area, Power Plant & Sheet Pile Onshore",
    client: "Tripartite Engineering and Const.",
    location: "Brgy. Talisay, San Andres, Quezon",
    testingType: "Soil Boring",
    depth: 20,
    quantity: 60
  },
  {
    id: 27,
    projectName: "Port Area, Power Plant & Sheet Pile Offshore",
    client: "Tripartite Engineering and Const.",
    location: "Brgy. Talisay, San Andres, Quezon",
    testingType: "Soil Boring",
    depth: 18,
    quantity: 20
  },
  {
    id: 28,
    projectName: "SBT for Close Carmona Sanitary Landfill",
    client: "Metropolitan Mnl. Devt Authority",
    location: "Carmona Cavite",
    testingType: "Soil Boring",
    depth: 12,
    quantity: 20
  },
  {
    id: 29,
    projectName: "Various Maynilad Pipelaying Project",
    client: "Kidtrans Konstruct, Inc.",
    location: "Various Locations in NCR",
    testingType: "FDT",
    depth: null,
    quantity: null
  },
  {
    id: 30,
    projectName: "Various Maynilad Pipelaying Project",
    client: "Arrcea Builders Co.",
    location: "Various Locations in NCR",
    testingType: "FDT",
    depth: null,
    quantity: null
  },
  {
    id: 31,
    projectName: "Various Maynilad Pipelaying Project",
    client: "Arrcea Builders Co.",
    location: "Various Locations in NCR",
    testingType: "FDT",
    depth: null,
    quantity: null
  },
  {
    id: 32,
    projectName: "Various Maynilad Pipelaying Project",
    client: "Twin Post Construction",
    location: "Various Locations in NCR",
    testingType: "FDT",
    depth: null,
    quantity: null
  },
  {
    id: 33,
    projectName: "Various Maynilad Pipelaying Project",
    client: "Gran Four Dimension Bldrs. Co.",
    location: "Various Locations in NCR",
    testingType: "FDT",
    depth: null,
    quantity: null
  },
  {
    id: 34,
    projectName: "Various Maynilad Pipelaying Project",
    client: "Jress Const. & Devt. Corp.",
    location: "Various Locations in NCR",
    testingType: "FDT",
    depth: null,
    quantity: null
  },
  {
    id: 35,
    projectName: "Structural Assessment",
    client: "IMS Global",
    location: "Las Piñas City",
    testingType: "Schimid Test",
    depth: null,
    quantity: 10
  }
];