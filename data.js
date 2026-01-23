const teaShops = [
  {
    id: "floating_leaves",
    name: "Floating Leaves",
    city: "Seattle",
    coords: [47.668845, -122.379285],
    website: "https://floatingleaves.com/",
    google_maps: "https://www.google.com/maps/place/Floating+Leaves+Tea/@47.668985,-122.3796466,131m/data=!3m1!1e3!4m15!1m8!3m7!1s0x549015c5d9cacac3:0xb4410a01c7c69be6!2sFloating+Leaves+Tea!8m2!3d47.6689456!4d-122.3792694!10e1!16s%2Fg%2F1tkf0p22!3m5!1s0x549015c5d9cacac3:0xb4410a01c7c69be6!8m2!3d47.6689456!4d-122.3792694!16s%2Fg%2F1tkf0p22?entry=ttu&g_ep=EgoyMDI2MDEyMS4wIKXMDSoASAFQAw%3D%3D",
    specialty: "Taiwanese oolongs",
    recommendation: "Great selection of roasted and unroasted Taiwanese oolongs. Noah also roasts his own in the PNW!"
  },
  {
    id: "new_century",
    name: "New Century Tea Gallery",
    city: "Seattle",
    coords: [47.5987062,-122.324968],
    website: "https://www.newcenturyteagallery.com/",
    google_maps: "https://www.google.com/maps/place/New+Century+Tea+Gallery/@47.598698,-122.3274727,880m/data=!3m3!1e3!4b1!5s0x54906abc683eb7d3:0xd40533a043eab43f!4m6!3m5!1s0x54906abc68c734d7:0xa53626aecd353bdc!8m2!3d47.598698!4d-122.3248978!16s%2Fg%2F1td37yr1?entry=ttu&g_ep=EgoyMDI2MDEyMS4wIKXMDSoASAFQAw%3D%3D",
    specialty: "Pu'er and general selection Chinese teas",
    recommendation: "Great shop in the International District with a little bit of everything including teaware. The owners especially love their pu'er though, and they often will brew samples!"
  },
  {
    id: "perennial_tea_room",
    name: "Perennial Tea Room",
    city: "Seattle",
    coords: [47.610256, -122.342123],
    website: "https://www.perennialtearoom.com/",
    google_maps: "https://www.google.com/maps/place/Perennial+Tea+Room/@47.6102851,-122.3446386,880m/data=!3m2!1e3!4b1!4m6!3m5!1s0x54906ab2d0024f9f:0x2f1cbe6ec5750d91!8m2!3d47.6102851!4d-122.3420637!16s%2Fg%2F1v6l75vf?entry=ttu&g_ep=EgoyMDI2MDEyMS4wIKXMDSoASAFQAw%3D%3D",
    specialty: "General selection and black tea",
    recommendation: "Great generalist shop in Pike Place with a wide selection of teas. The staff can provide good recommendations!"
  },
  {
    id: "vital_t",
    name: "Vital T Leaf",
    city: "Seattle",
    coords: [47.5984527, -122.3271068],
    website: "https://vtlseattle.com/",
    google_maps: "https://www.google.com/maps/place/Vital+T+Leaf/@47.5984605,-122.3282971,220m/data=!3m1!1e3!4m10!1m2!2m1!1sVital+Tea+Leaf!3m6!1s0x54906b22a07c1427:0xa3f61c3ebe5f1303!8m2!3d47.5984591!4d-122.327104!15sCg5WaXRhbCBUZWEgTGVhZloQIg52aXRhbCB0ZWEgbGVhZpIBCXRlYV9ob3VzZZoBRENpOURRVWxSUVVOdlpFTm9kSGxqUmpsdlQyMUpOVkZzVGxKVmFtUlpVMnByTUZFd1VYbGtSMVl5VTBkV1NrOUZSUkFC4AEA-gEECGEQOw!16s%2Fg%2F11j13lslv6?entry=ttu&g_ep=EgoyMDI2MDEyMS4wIKXMDSoASAFQAw%3D%3D",
    specialty: "General selection Chinese teas, herbals, and teaware",
    recommendation: "Great shop in the International District with a big selection of Chinese teas and Chinese teaware. Great place to get started drinking tea, and you can usually sit and have tea with the owner!"
  },
  {
    id: "friday_tea",
    name: "Friday Afternoon Tea",
    city: "Seattle",
    coords: [47.65893306, -122.3420515],
    website: "http://www.fridaytea.com/",
    google_maps: "https://www.google.com/maps/place/Friday+Afternoon+Tea/@47.6589647,-122.3426613,220m/data=!3m1!1e3!4m6!3m5!1s0x5490145418e5521f:0xc583e7e75652c7d2!8m2!3d47.65894!4d-122.3420128!16s%2Fg%2F11g028chby?entry=ttu&g_ep=EgoyMDI2MDEyMS4wIKXMDSoASAFQAw%3D%3D",
    specialty: "Blends, herbals, and scented teas",
    recommendation: "Large selection of unique and creative tea + herbal blends that they blend themselves!"
  },
  {
    id: "queen_mary",
    name: "Queen Mary Tea Room",
    city: "Seattle",
    coords: [47.66863948, -122.295596],
    website: "https://queenmarytea.com/",
    google_maps: "https://www.google.com/maps/place/Queen+Mary+Tea+Room+%26+Restaurant/@47.6686297,-122.2974141,698m/data=!3m1!1e3!4m6!3m5!1s0x54901480b19720ad:0x89e45be77880a0cf!8m2!3d47.668675!4d-122.295603!16s%2Fg%2F1tf23sjh?entry=ttu&g_ep=EgoyMDI2MDEyMS4wIKXMDSoASAFQAw%3D%3D",
    specialty: "Western style and black teas",
    recommendation: "Great selection of teas geared for western styles of brewing. They also offer an afternoon tea service with pastries!"
  },
  {
    id: "lizzie_kate",
    name: "Lizzie Kate",
    city: "Kirkland",
    coords: [47.675430375, -122.2057079],
    website: "http://lizzykate.com/",
    google_maps: "https://www.google.com/maps/place/LizzyKate/@47.6762136,-122.2071432,1045m/data=!3m1!1e3!4m6!3m5!1s0x549012dd81af2f0b:0xb51a8e7077e24ed6!8m2!3d47.675411!4d-122.2057079!16s%2Fg%2F11c0rn_6j2?entry=ttu&g_ep=EgoyMDI2MDEyMS4wIKXMDSoASAFQAw%3D%3D",
    specialty: "General selection",
    recommendation: "Great selection of all kinds of teas. They also do matcha classes and have a specially themed tea flight every weekend!"
  }
];
