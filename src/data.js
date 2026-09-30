import HiddenHoldsHero from './imports/hidden_holds_hero.jpg'
import TattooPhoto from './imports/tattoo_shop_hero.png'
import BlasolPhoto from './imports/bla_sol_hero.png'
import IllustrationsPhoto from './imports/illustration_hero.png'
import PortraitPhoto from './imports/me.png'
import AboutHexPeach from './imports/about/hex-peach.svg'
import AboutHexHoney from './imports/about/hex-honey.svg'
import AboutHexLeaf from './imports/about/hex-leaf.svg'
import AboutPhotoPeach from './imports/about/photo-peach.png'
import AboutPhotoHoney from './imports/about/photo-honey.png'
import AboutPhotoLeaf from './imports/about/photo-leaf.png'
import AboutDotIdle from './imports/about/dot-charcoal.svg'
import AboutDotPeach from './imports/about/dot-peach.svg'
import AboutDotHoney from './imports/about/dot-honey.svg'
import AboutDotLeaf from './imports/about/dot-leaf.svg'
import Bee1 from './imports/Bee_1.svg'
import Bee2 from './imports/Bee_2.svg'
import Bee3 from './imports/Bee_3.svg'
import Bee4 from './imports/Bee_4.svg'
import Bee5 from './imports/Bee_5.svg'
import Bee6 from './imports/Bee_6.svg'
import AffinityImg from './imports/hidden-holds/affinity.png'
import ValuesImg from './imports/hidden-holds/values.png'
import PersonaImg from './imports/hidden-holds/persona.png'
import VpcValueImg from './imports/hidden-holds/vpc-value.png'
import VpcCustomerImg from './imports/hidden-holds/vpc-customer.png'
import MoodboardImg from './imports/hidden-holds/moodboard.png'
import StyletileImg from './imports/hidden-holds/styletile.png'
import LofiDesktopHomeImg from './imports/hidden-holds/lofi-desktop-home.png'
import LofiDesktopHome2Img from './imports/hidden-holds/lofi-desktop-home-2.png'
import HifiDesktopImg from './imports/hidden-holds/hifi-desktop.png'
import HifiDesktop2Img from './imports/hidden-holds/hifi-desktop-2.png'
import HifiCommunityImg from './imports/hidden-holds/hifi-community.png'
import HifiGymImg from './imports/hidden-holds/hifi-gym.png'
import HifiTipsImg from './imports/hidden-holds/hifi-tips.png'
import HouseDesign from './imports/skills/house-design.svg'
import HouseDesignFill from './imports/skills/house-design-fill.svg'
import HouseResearch from './imports/skills/house-research.svg'
import HouseResearchFill from './imports/skills/house-research-fill.svg'
import HouseCreative from './imports/skills/house-creative.svg'
import HouseCreativeFill from './imports/skills/house-creative-fill.svg'
import HouseWeb from './imports/skills/house-web.svg'
import HouseWebFill from './imports/skills/house-web-fill.svg'
import TattooPhotoSign from './imports/tattoo-shop/photo-sign.jpg'
import TattooPhotoDesk from './imports/tattoo-shop/photo-desk.jpg'
import TattooPhotoCards from './imports/tattoo-shop/photo-cards.jpg'
import TattooPhotoConversation from './imports/tattoo-shop/photo-conversation.jpg'
import TattooPhotoTattooing from './imports/tattoo-shop/photo-tattooing.jpg'
import TattooPhotoTablet from './imports/tattoo-shop/photo-tablet.jpg'
import TattooPhotoSession from './imports/tattoo-shop/photo-session.jpg'
import TattooTypography from './imports/tattoo-shop/typography.jpg'
import TattooColors from './imports/tattoo-shop/colors.png'
import TattooDoodleMobile from './imports/tattoo-shop/doodle-mobile.png'
import TattooWireframeMobile from './imports/tattoo-shop/wireframe-mobile.png'
import TattooHomepageDesktop from './imports/tattoo-shop/homepage-desktop.png'
import TattooHomepageMobileTop from './imports/tattoo-shop/homepage-mobile-1.png'
import TattooHomepageMobileLower from './imports/tattoo-shop/homepage-mobile-2.png'
import TattooComponents from './imports/tattoo-shop/components.png'
import TattooExterior from './imports/tattoo-shop/exterior.png'
import TattooInterior from './imports/tattoo-shop/interior.jpg'
import TattooMaya from './imports/tattoo-shop/maya.png'

const digitalArtFiles = import.meta.glob('./digital_art/*.{png,jpg,jpeg,PNG,JPG,JPEG}', {
  eager: true,
  import: 'default',
})

function digitalArtSrc(filename) {
  const exact = `./digital_art/${filename}`
  if (digitalArtFiles[exact]) return digitalArtFiles[exact]
  const match = Object.keys(digitalArtFiles).find((key) => key.endsWith(`/${filename}`))
  return match ? digitalArtFiles[match] : ''
}

function digitalArtImages(filenames) {
  return filenames.map((filename) => {
    const name = filename.replace(/\.[^.]+$/, '').replace(/\.fin$/i, '')
    return { src: digitalArtSrc(filename), alt: name }
  })
}

function digitalArtSet(title, filenames, featured = false) {
  return { title, featured, images: digitalArtImages(filenames) }
}

export const bees = [Bee1, Bee2, Bee3, Bee4, Bee5, Bee6]
export const portraitPhoto = PortraitPhoto
export const aboutDotIdle = AboutDotIdle
export const aboutGallery = [
  { id: 'peach', frame: AboutHexPeach, photo: AboutPhotoPeach, dot: AboutDotPeach, label: 'About photo 1' },
  { id: 'honey', frame: AboutHexHoney, photo: AboutPhotoHoney, dot: AboutDotHoney, label: 'About photo 2' },
  { id: 'leaf', frame: AboutHexLeaf, photo: AboutPhotoLeaf, dot: AboutDotLeaf, label: 'About photo 3' },
]

export const projects = [
  {
    id: 'hidden-holds',
    title: 'Hidden Holds Aarhus',
    category: 'UX/UI · Visual design · Front-end',
    description:
      'A responsive website that helps international newcomers in Aarhus discover lesser-known climbing spaces, understand how they differ, and feel more confident joining the local climbing community.',
    role: 'UX/UI, Visual design, Photography & Front-end Dev',
    skills: ['User Research', 'Wireframing', 'Prototyping', 'Visual Design', 'HTML/CSS/JS'],
    liveUrl: 'https://bibitonka.github.io/Climbing-places/',
    figmaUrl:
      'https://www.figma.com/design/Tjez2eqBLBatxj5PcAVNha/Hidden-Holds-Aarhus?node-id=1158-1931',
    accent: '#C87D74',
    image: HiddenHoldsHero,
    hasCaseStudy: true,
  },
  {
    id: 'bla-sol',
    title: 'Blå Sol Festival',
    category: 'UX Research · UX/UI · Wayfinding',
    description:
      'Wayfinding system and digital companion app for a Danish music festival. Designed to feel clean for helping visitors explore without getting lost.',
    role: 'UX Researcher & Visual Designer',
    skills: ['Wayfinding Design', 'UX Research', 'Illustration', 'Brand Identity'],
    accent: '#C49820',
    image: BlasolPhoto,
    hasCaseStudy: false,
  },
  {
    id: 'tattoo-shop',
    title: 'Tattoo Shop',
    category: 'UX/UI · Visual design',
    description:
      'A 1-week design sprint focused on capturing the unique atmospheric charm, artist-client relationships, and booking dynamics of Dancy & Daughters, an Aarhus-based tattoo studio.',
    role: 'UX/UI, Visual design',
    skills: ['Figma', 'ClipStudioPaint', 'Adobe Lightroom'],
    figmaUrl:
      'https://www.figma.com/design/JDFP26gT4WLUgQn33VVdWy/Dancy---Daughters-Prototypes?node-id=577-1467',
    accent: '#36322D',
    image: TattooPhoto,
    hasCaseStudy: true,
  },
  {
    id: 'digital-art',
    title: 'Digital art',
    category: 'Digital art',
    description:
      'A personal collection of digital art, character studies and hand-drawn work produced with digital softwares, my hand and imagination.',
    role: 'Digital artist',
    skills: ['Hand-drawing', 'Digital illustration'],
    accent: '#5E7D50',
    image: IllustrationsPhoto,
    hasCaseStudy: false,
    hasCollection: true,
  },
]

export const digitalArtCollection = [
  {
    id: 'character-development',
    number: '01',
    title: 'Character development',
    sets: [
      digitalArtSet(
        'Boxheadboi',
        [
          'Boxheadboi reference sheet.jpg',
          'Mr. Forgettable.jpg',
          'IMG_20230416_192629_111.jpg',
          'boxheadsketch2.jpg',
          'boxheadsketch3.jpg',
        ],
        true,
      ),
      digitalArtSet('Poncho', ['Poncho.jpg']),
      digitalArtSet('Doxy', ['Doxy.jpg']),
      digitalArtSet('Infinity', ['Infinity.jpg', 'IMG_20230224_212426_973.jpg']),
    ],
  },
  {
    id: 'product-design',
    number: '02',
    title: 'Product design',
    sets: [
      digitalArtSet('bluedress', [
        'bluedress.jpg',
        'bluedress_product.jpg',
        'bluedress_product2.jpg',
        'bluedress_product3.jpg',
      ]),
      digitalArtSet('Backpack design', ['Backpack design.png', 'bag_product.jpg', 'bag_product2.jpg']),
      digitalArtSet('vencekdress', ['vencekdress.jpg', 'vencekdress_product.jpg']),
      digitalArtSet('hoodie', ['hoodie.jpg', 'hoodie_product.jpg']),
    ],
  },
  {
    id: 'illustrations',
    number: '03',
    title: 'Illustrations',
    images: digitalArtImages([
      'Holow.jpg',
      'Keiko Itsuki.jpg',
      'Tighnari.fin.jpg',
      'Pipa a Oscar.jpg',
      'Dragon.jpg',
      'Illustration7.jpg',
      'Be happy.jpg',
      'Sylox.jpg',
      'Bees.png',
    ]),
  },
  {
    id: 'commissions',
    number: '04',
    title: 'Commissions (unpaid)',
    images: digitalArtImages(['Lilith 1.jpg', 'Banana.jpg', 'SK Gymlet3.png']),
    credits: [
      {
        text: 'Album cover and a profile picture for ',
        value: 'Banán-P',
        href: 'https://open.spotify.com/artist/1CuewW9FMJUFj8NZ0s2pzw',
      },
      {
        text: 'School chess club logo for Gymnázium Jozefa Lettricha (vector graphics)',
      },
    ],
  },
]

export const softSkills = [
  'Collaboration & Teamwork',
  'Positive attitude',
  'Attention to detail',
  'Critical thinking',
  'Open-Mindedness',
  'Communication skills',
  'Empathy & Compassion',
]

export const testimonials = [
  {
    name: 'Emil Čavić',
    role: 'Project collaborator, Multimedia design, Aarhus',
    linkedin: 'https://www.linkedin.com/in/emil-cavic/',
    text:
      'Working with Bibiana on our project together was an absolute delight! Her creative energy was the core driving force, from initial conceptualization to drawing sketches and creating the prototype, she was instrumental in shaping the final result of the product. Her expertise in UX & UI paired with her understanding of design and her creative skills are unmatched. On top of that her positive, energetic work ethic was contagious, creating a productive and friendly work atmosphere, which made working together a fun, pleasurable experience.',
  },
  {
    name: 'Elizabeth Rudanovski',
    role: 'Production manager & Hyggetimen Co-founder, Hyggetimen Aarhus',
    linkedin: 'https://www.linkedin.com/company/hyggetimen/',
    text:
      "You bring a positive energy that lifts the mood, and you're always fully engaged in what you're doing. You're naturally attentive to the people around you, noticing small details and offering help before anyone has to ask. Your creativity shines through, whether it's the bees you draw, or just doing production - you have the artists eyes.",
  },
  {
    name: 'Bárbara Borini',
    role: 'Project Collaborator, Multimedia design, Aarhus',
    linkedin: 'https://www.linkedin.com/in/barbara-borini/',
    text:
      'You are always open to hear different perspectives and you come up with out of the box ideas that surprise me (in a good way). You truly bring a positive energy that lifts the mood to every group you work in.',
  },
]

export const skillGroups = [
  {
    name: 'Design',
    color: '#C87D74',
    outline: HouseDesign,
    fill: HouseDesignFill,
    skills: ['Figma', 'Storytelling', 'Illustration', 'Prototyping', 'UX/UI', 'Wireframing', 'Visual Design'],
  },
  {
    name: 'Research',
    color: '#5E7D50',
    outline: HouseResearch,
    fill: HouseResearchFill,
    skills: ['User Interviews', 'Observation', 'Pattern Recognition', 'User Research'],
  },
  {
    name: 'Creative tools',
    color: '#C49820',
    outline: HouseCreative,
    fill: HouseCreativeFill,
    skills: ['Clip Studio Paint', 'Adobe Lightroom', 'Photography', 'Video Editing'],
  },
  {
    name: 'Web',
    color: '#36322D',
    outline: HouseWeb,
    fill: HouseWebFill,
    skills: ['HTML', 'CSS', 'Basic JavaScript', 'AI-assisted Development'],
  },
]

export const hiddenHoldsCase = {
  liveUrl: 'https://bibitonka.github.io/Climbing-places/',
  figmaUrl:
    'https://www.figma.com/design/Tjez2eqBLBatxj5PcAVNha/Hidden-Holds-Aarhus?node-id=1158-1931',
  title: 'Hidden Holds Aarhus',
  summary:
    'A responsive website that helps international newcomers in Aarhus discover lesser-known climbing spaces, understand how they differ, and feel more confident joining the local climbing community.',
  meta: [
    { label: 'My role', value: 'UX/UI, Visual design, Photography & Front-end Dev' },
    { label: 'Duration', value: '3,5 weeks' },
    { label: 'Tools', value: 'Figma, VSCode' },
    { label: 'Type', value: 'Semester Solo Project' },
  ],
  phases: [
    {
      id: 'discover',
      number: '01',
      title: 'Discover',
      quote:
        'How might we help new international climbers discover different climbing spaces in Aarhus and feel more comfortable navigating the local climbing community?',
      listTitle: 'What I wanted to understand',
      list: [
        'How do new climbers find climbing spaces?',
        'What makes a place feel approachable?',
        'What information do beginners need?',
        'How important is the social side of climbing?',
      ],
      methods: ['Desk research', 'Observations', 'Interviews', 'Affinity mapping'],
      insightsTitle: 'Main insights',
      insights: [
        {
          title: "Finding a gym wasn't the biggest problem.",
          text: 'Most climbing spaces were relatively easy to find online. The harder part was knowing what to expect once you got there.',
        },
        {
          title: 'Confidence comes from information.',
          text: "Grading, techniques, safety and social norms can feel unclear when you're new. How am I even supposed to move my body without ending up with three fractures?",
        },
        {
          title: 'Climbing is social.',
          text: "People aren't only looking for somewhere to climb — they're looking for a climbing buddy, a good community, and the social side of what climbing can offer.",
        },
      ],
      images: [
        { src: AffinityImg, alt: 'Affinity map of interview notes grouped by theme', caption: 'Affinity map', size: 'wide' },
      ],
    },
    {
      id: 'define',
      number: '02',
      title: 'Define',
      paragraphs: [
        'After talking to climbers, observing different climbing spaces and participating in the climbing community myself, a pattern began to emerge.',
        "The challenge wasn't simply finding climbing gyms. Most could already be found online. The harder part was understanding which place might feel right, knowing what to expect as a beginner, and feeling comfortable enough to step through the entrance door.",
        'This helped me narrow the audience to international newcomers in Aarhus who are still finding their feet in both climbing and the local community.',
      ],
      methods: ['Persona', 'Value Proposition Canvas', 'Requirements', 'Values', 'Problem statement'],
      listTitle: 'What the solution needed to do',
      list: [
        { title: 'Help Lola explore', text: 'Make different climbing spaces easier to discover and compare.' },
        { title: 'Help her feel prepared', text: 'Give beginners practical information before they arrive.' },
        { title: 'Help her connect', text: 'Reflect the social and welcoming side of climbing.' },
      ],
      images: [
        { src: PersonaImg, alt: 'Persona board for Lola, a beginner climber in Aarhus', caption: 'Persona — Lola', size: 'main' },
        { src: ValuesImg, alt: 'Values diagram with fun at the centre of climbing', caption: 'Core values', size: 'side' },
        {
          src: VpcValueImg,
          alt: 'Value proposition canvas showing products, gain creators and pain relievers',
          caption: 'VPC — value map',
          size: 'vpc',
        },
        {
          src: VpcCustomerImg,
          alt: 'Value proposition canvas showing customer gains, pains and jobs',
          caption: 'VPC — customer profile',
          size: 'vpc',
        },
      ],
    },
    {
      id: 'develop',
      number: '03',
      title: 'Develop',
      text: 'With the direction defined, I started exploring how the experience could work both functionally and visually to fit the challenging nature of climbing.',
      methods: ['Moodboard', 'Style tile', 'Lo-fi wireframes', 'Usability testing'],
      images: [
        { src: MoodboardImg, alt: 'Moodboard of climbing photos and keywords', caption: 'Moodboard' },
        { src: StyletileImg, alt: 'Style tile with type, tags, buttons and colour palette', caption: 'Style tile' },
      ],
      lofi: [
        {
          src: LofiDesktopHomeImg,
          alt: 'Greyscale desktop homepage wireframe with map and gym cards',
          caption: 'Desktop homepage',
        },
        {
          src: LofiDesktopHome2Img,
          alt: 'Greyscale desktop wireframe of community, education and events sections',
          caption: 'Desktop homepage — lower',
        },
      ],
    },
    {
      id: 'deliver',
      number: '04',
      title: 'Deliver',
      text: 'The final experience is built around three core needs: exploring different climbing spaces, feeling connected to the community and gaining confidence as a beginner. The result is a digital companion for starting climbers, which combines practical information, visual guidance and community-oriented content into one place. And yes, it is all in service of the beautiful art of touching plastic rocks on a wall.',
      screens: [
        { src: HifiDesktopImg, alt: 'High-fidelity desktop homepage for Hidden Holds Aarhus', caption: 'Desktop homepage' },
        { src: HifiDesktop2Img, alt: 'Desktop community, safety and events sections', caption: 'Community, safety & events' },
        { src: HifiGymImg, alt: 'Aarhus Klatreklub gym detail page', caption: 'Gym detail' },
        { src: HifiCommunityImg, alt: 'Belong on the Wall community page with QR code', caption: 'Community' },
        { src: HifiTipsImg, alt: 'Climb Smart, Climb Safe educational profiles and videos', caption: 'Climb smart, climb safe' },
      ],
    },
  ],
}

export const tattooShopCase = {
  imageGallery: 'tiles',
  figmaUrl:
    'https://www.figma.com/design/JDFP26gT4WLUgQn33VVdWy/Dancy---Daughters-Prototypes?node-id=577-1467',
  title: 'Bringing the tattoo studio experience online',
  summary:
    'A 1-week design sprint focused on capturing the unique atmospheric charm, artist-client relationships, and booking dynamics of Dancy & Daughters, an Aarhus-based tattoo studio.',
  meta: [
    { label: 'Role', value: 'UX/UI, Visual design' },
    { label: 'Duration', value: '1 week' },
    { label: 'Tools', value: 'Figma, ClipStudioPaint, Adobe Lightroom' },
    { label: 'Team', value: 'Group Project' },
    { label: 'Type', value: 'SPRINT project' },
  ],
  phases: [
    {
      id: 'discover',
      number: '01',
      title: 'Discover',
      quote:
        'How might we align Dancy & Daughters’ website experience with its intimate, welcoming studio atmosphere and simplify client communication without losing the personal touch that builds trust?',
      listTitle: 'What We Wanted to Understand',
      list: [
        'What drives client decision-making when choosing a tattoo studio out of hundreds of options?',
        'How do tattoo artists manage client expectations, consultation dynamics, and booking channels?',
        'What role does physical atmosphere (“hygge”, safety, comfort) play in alleviating client anxiety or cold feet?',
      ],
      methods: [
        'Mind Mapping',
        'Interview Scripting',
        'On-Site Studio Observations',
        'Client & Artist Interviews',
        'Empathy Mapping & User Profiling',
      ],
      insightsTitle: 'Key Insights',
      insights: [
        {
          title: 'Atmosphere builds trust',
          text: "Dancy & Daughters' playful 80s-inspired atmosphere, artwork and personal environment were a major part of what made the studio feel welcoming.",
        },
        {
          title: 'Clients are diverse',
          text: 'The studio attracts people across ages, professions and backgrounds, but friendliness and a non-judgemental environment were common expectations.',
        },
        {
          title: 'People want direct communication',
          text: 'Clients often discovered artists through social media or word-of-mouth and valued being able to talk directly before booking',
        },
        {
          title: 'First tattoos come with questions',
          text: 'Pricing, pain and aftercare can create uncertainty, making clear information and easy consultation important (talk to us, we don’t bite).',
        },
      ],
      images: [
        { src: TattooPhotoSign, alt: 'Dancy & Daughters heart-shaped studio sign', caption: 'Studio sign' },
        { src: TattooPhotoDesk, alt: 'Artist at the studio desk in front of framed flash', caption: 'Front desk' },
        { src: TattooPhotoConversation, alt: 'Conversation in the studio waiting area', caption: 'Studio visit' },
        { src: TattooPhotoCards, alt: 'Illustrated artist cards at the front desk', caption: 'Artist cards' },
        { src: TattooPhotoSession, alt: 'Tattoo session by the studio window', caption: 'In session' },
        { src: TattooPhotoTablet, alt: 'Tablet showing piercing work at the front desk', caption: 'Booking desk' },
        { src: TattooPhotoTattooing, alt: 'Close-up of tattooing in the studio', caption: 'On-site photography' },
      ],
    },
    {
      id: 'define',
      number: '02',
      title: 'Define',
      paragraphs: [
        'We were finding the balance',
        'The research revealed a clear tension: the website needed to make booking and communication easier, but without turning a highly personal experience into a cold, automated transaction.',
      ],
      listTitle: 'The design therefore needed to',
      list: [
        {
          title: 'Preserve the personality',
          text: "Reflect the studio's distinctive atmosphere rather than replacing it with a generic tattoo aesthetic.",
        },
        {
          title: 'Build trust',
          text: 'Give potential clients enough information to feel comfortable reaching out.',
        },
        {
          title: 'Make communication easy',
          text: 'Create clear entry points for consultation without overcomplicating the booking process.',
        },
      ],
    },
    {
      id: 'develop',
      number: '03',
      title: 'Develop',
      paragraphs: [
        "With only one week, there wasn't time to endlessly explore. We had to make decisions quickly and let the studio itself guide the visual direction.",
        'I visited Dancy & Daughters in person and photographed the space, capturing the details that made the studio feel like itself - the artwork, materials, lighting and atmosphere.',
        "Since strictly preserving the existing visual identity wasn't a requirement, we experimented with the visual direction while keeping the personality of the studio at its core.",
      ],
      images: [
        { src: TattooTypography, alt: 'Typography board with Miltonian, Alegreya SC and Montserrat', caption: 'Typography' },
        { src: TattooColors, alt: 'Colour palette with ecru, licorice, seasalt, midnight green and redwood', caption: 'Colors' },
      ],
      doodle: {
        src: TattooDoodleMobile,
        alt: 'Repeating doodle pattern for mobile',
        caption: 'Background doodles',
      },
      lofi: [
        { src: TattooWireframeMobile, alt: 'Hand-drawn mobile wireframe of the homepage and gallery', caption: 'Mobile wireframe' },
      ],
    },
    {
      id: 'deliver',
      number: '04',
      title: 'Deliver',
      paragraphs: [
        'The final prototype brings the warmth and personality of Dancy & Daughters into a digital experience.',
        'Authentic photography, photos of real-made tattoos and clear consultation entry points help potential clients understand the studio before reaching out, while keeping the experience personal rather than overly transactional.',
        'A website that feels less like a booking system and more like an invitation into the studio.',
      ],
      screens: [
        { src: TattooHomepageDesktop, alt: 'Desktop homepage prototype for Dancy & Daughters', caption: 'Homepage — desktop' },
        { src: TattooHomepageMobileTop, alt: 'Mobile homepage prototype — hero, gallery, artists and FAQ', caption: 'Homepage — mobile' },
        { src: TattooHomepageMobileLower, alt: 'Mobile homepage prototype — visit, hours and contact', caption: 'Homepage — mobile, lower' },
        { src: TattooComponents, alt: 'UI components, navigation and gallery pieces', caption: 'Components' },
        { src: TattooExterior, alt: 'Designed exterior photograph with studio lettering', caption: 'Exterior' },
        { src: TattooInterior, alt: 'Designed interior photograph with studio lettering', caption: 'Interior' },
        { src: TattooMaya, alt: 'Designed photograph of tattooing with studio lettering', caption: 'In the studio' },
      ],
    },
  ],
}

export const caseStudies = {
  'hidden-holds': hiddenHoldsCase,
  'tattoo-shop': tattooShopCase,
}

