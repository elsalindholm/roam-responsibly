export interface BlogPostInfo {
  date: string;
  author: string;
  title: string;
  subtitle?: string;
  blurb: string;
  image: string;
}

export const surfAndTurf: BlogPostInfo = {
  date: 'November 18, 2018',
  author: "Stephanie Cope, Tiree's Community Ranger",
  title: 'SURF AND TURF: ROAMING RESPONSIBLY ON THE ISLE OF TIREE',
  subtitle: "Guest blog by Stephanie Cope, Tiree's Community Ranger.",
  blurb:
    '"For the Isle of Tiree, roaming responsibly is kind of a big deal. On a blustery January morning in 2017, I rolled off MV Clansman to become the island’s new community ranger (to those of you who only visit during the summer jollies - yes, those waxed paper bags are there with good reason). It is a post that I occupy alone; supported by my colleagues at Tiree Community Development Trust." ',
  image: 'surf-and-turf-blog',
};

export const hiddenScotland: BlogPostInfo = {
  date: 'June 22, 2018',
  author: 'Jack Cairney and Elsa Lindholm',
  title: 'AN INTERVIEW WITH HIDDEN SCOTLAND',
  blurb:
    'This week we welcome Hidden Scotland as our newest parter. No doubt many of you might have come across @hiddenscotland Instagram, which features beautiful and dramatic photographs of Scotland. But there is more to it. ',
  image: 'hidden-scotland-blog',
};

export const marineConSoc: BlogPostInfo = {
  date: 'June 13, 2018',
  author: 'Elsa Lindholm',
  title: 'MARINE CONSERVATION SOCIETY',
  blurb:
    'Read about Marine Conservation Society, Susanne Arbuckle’s #ShoreYouCare event and how to sign up to the Plastic Challenge in July to #GoPlasticFree.',
  image: 'mcs-blog',
};

export const collBeachClean: BlogPostInfo = {
  date: 'June 10, 2018',
  author: 'Elsa Lindholm',
  title: 'BEACH CLEANING ON COLL',
  subtitle: 'Introducing An Cridhe and Coll Bunkhouse',
  blurb:
    'Read more about a beach clean that we took part in on Isle of Coll and about our new partners An Cridhe and Coll Bunkhouse.',
  image: 'coll-blog',
};

export const johnMuirTrust: BlogPostInfo = {
  date: 'May 25, 2018',
  author: 'Katrina Stewart and Elsa Lindholm',
  title: 'PARTNERING UP WITH JOHN MUIR TRUST',
  blurb:
    'We welcome our second partnering organisation, John Muir Trust, and join them for a walk up Schiehallion.',
  image: 'jmt-blog',
};

export const calMac: BlogPostInfo = {
  date: 'May 17, 2018',
  author: 'Elsa Lindholm',
  title: 'INTRODUCING OUR FIRST PARTNER: CALMAC FERRIES',
  blurb:
    'Our campaign to #RoamResponsibly has kicked off and we are very excited to introduce our first partnering organisation: CalMac Ferries, who are joining us in a mission to promote responsible outdoor access in Scotland.  ',
  image: 'calmac-blog',
};
