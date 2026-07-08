// All course content lives here. Home grid + single pages render from this.

export const courses = [
  {
    slug: "digital-marketing-fundamentals",
    title: "Digital Marketing Fundamentals",
    tagline: "From zero to job-ready in 8 weeks",
    badge: "8-week beginner course",
    image: "/images/digital-marketing.jpeg",
    heroSummary:
      "Learn social media, SEO, email, ads and analytics — hands-on, from scratch.",
    duration: "8 Weeks",
    level: "Complete beginners — no experience needed",
    priceUSD: 350,
    priceNGN: 484750,
    priceNote: "per student · full 8-week program · certificate included",
    description:
      "An 8-week, beginner-friendly foundation in digital marketing. You’ll learn how businesses attract, engage and convert customers online — and actually execute a full campaign from scratch, ready to market for a small business, freelance, or specialise further.",
    outcomes: [
      "Explain core digital marketing concepts and how they fit together (funnel, channels, customer journey)",
      "Set up and manage business profiles on major social media platforms",
      "Create simple content calendars and plan campaigns",
      "Write basic marketing copy (captions, ad copy, email copy)",
      "Understand SEO fundamentals and optimize simple content for search",
      "Run a basic paid ad campaign (Meta Ads focus, Nigerian SMB context)",
      "Use email marketing tools to build and send campaigns",
      "Read and interpret basic marketing analytics and metrics",
      "Put together a complete digital marketing plan for a real or sample business",
    ],
    highlights: [
      { icon: "Share2", label: "Social media strategy" },
      { icon: "Search", label: "SEO fundamentals" },
      { icon: "Mail", label: "Email campaigns" },
      { icon: "Target", label: "Meta ads basics" },
      { icon: "BarChart", label: "Analytics reading" },
      { icon: "Award", label: "Portfolio + certificate" },
    ],
    weeks: [
      {
        n: 1,
        title: "Introduction to Digital Marketing",
        topics: [
          "What is digital marketing vs traditional marketing",
          "The marketing funnel (Awareness → Consideration → Conversion → Loyalty)",
          "Overview of digital channels (social, search, email, ads, content)",
          "Understanding target audience & customer personas",
        ],
        deliverable: "Create a simple customer persona for a sample business",
      },
      {
        n: 2,
        title: "Social Media Marketing Foundations",
        topics: [
          "Choosing the right platforms (Instagram, Facebook, TikTok, WhatsApp Business)",
          "Setting up professional business profiles",
          "Content types: reels, posts, stories, carousels",
          "Posting consistency & content calendars",
        ],
        deliverable: "Build a 2-week content calendar for a sample brand",
      },
      {
        n: 3,
        title: "Content Creation & Copywriting Basics",
        topics: [
          "Writing captions that convert",
          "Basic graphic/video content principles (no design skills needed)",
          "Hooks, storytelling, and call-to-actions (CTAs)",
          "Intro to Canva for beginners",
        ],
        deliverable:
          "Create 5 sample social media posts (caption + visual concept)",
      },
      {
        n: 4,
        title: "Search Engine Optimization (SEO) Basics",
        topics: [
          "How search engines work (simplified)",
          "Keywords: what they are and how to find them",
          "On-page SEO basics (titles, descriptions, headings)",
          "Local SEO for small businesses (Google Business Profile)",
        ],
        deliverable:
          "Optimize a sample business's Google Business Profile + 3 keyword suggestions",
      },
      {
        n: 5,
        title: "Email Marketing",
        topics: [
          "Why email marketing still matters",
          "Building an email list (ethically)",
          "Writing subject lines & email copy",
          "Intro to email tools (Mailchimp/Brevo basics)",
        ],
        deliverable: "Design one email campaign (welcome email or promo email)",
      },
      {
        n: 6,
        title: "Paid Advertising Basics (Meta Ads Focus)",
        topics: [
          "How paid ads work (reach, targeting, budget)",
          "Setting up a Meta (Facebook/Instagram) ad campaign",
          "Ad objectives: awareness, traffic, engagement, conversions",
          "Budgeting for Nigerian SMBs (small budget strategy)",
        ],
        deliverable:
          "Create a mock ad campaign brief (objective, audience, budget, creative)",
      },
      {
        n: 7,
        title: "Analytics & Measuring Success",
        topics: [
          "Key metrics: reach, engagement, CTR, conversion rate",
          "Reading Meta Business Suite / Google Analytics basics",
          "Making sense of data — what's working, what's not",
          "Adjusting strategy based on results",
        ],
        deliverable: "Analyze a sample report and write 3 recommendations",
      },
      {
        n: 8,
        title: "Final Project: Full Digital Marketing Plan",
        topics: [
          "Bringing it all together",
          "Choosing a real or sample business",
          "Presenting a complete plan: audience, channels, content, ads, budget, timeline",
          "Course wrap-up, certification, next steps (freelancing/job readiness)",
        ],
        deliverable:
          "Full Digital Marketing Plan document + presentation (final capstone)",
      },
    ],
  },

  {
    slug: "social-media-management",
    title: "Social Media Management",
    tagline: "From beginner to confident social media manager in 6 weeks",
    badge: "6-week beginner course",
    image: "/images/social-media.jpeg",
    heroSummary:
      "Plan, create, publish and report on social media for real businesses.",
    duration: "6 Weeks",
    level: "Complete beginners — no experience required",
    priceUSD: 200,
    priceNGN: 277000,
    priceNote: "full program · certificate included",
    description:
      "A 6-week program that takes a complete beginner and turns them into a confident, employable Social Media Manager — able to plan, create, publish and report on social media for real businesses, as a freelancer, in-house hire, or for their own brand.",
    outcomes: [
      "The fundamentals of social media marketing and how each major platform (Instagram, Facebook, TikTok, X/Twitter, LinkedIn) works and who uses it",
      "How to build a social media strategy and content calendar from scratch for any brand or niche",
      "How to design engaging graphics and short-form videos using accessible tools like Canva and CapCut",
      "How to write captions and hooks that drive engagement",
      "Hashtag research and audience targeting, with a focus on the Nigerian market",
      "How to schedule and manage content using tools like Meta Business Suite and Buffer",
      "The basics of paid social media advertising — boosting posts and targeting the right audience",
      "How to read analytics and insights, and turn them into simple client reports",
      "Community management — responding to comments and DMs, and handling complaints professionally",
      "How to price your services, pitch to clients, and win your first social media management contracts",
    ],
    highlights: [
      { icon: "Calendar", label: "Strategy & content calendar" },
      { icon: "Image", label: "Graphics & short-form video" },
      { icon: "MessageSquare", label: "Captions that convert" },
      { icon: "MessageCircle", label: "Community management" },
      { icon: "LineChart", label: "Analytics & reporting" },
      { icon: "Award", label: "Portfolio + certificate" },
    ],
    weeks: [
      {
        n: 1,
        title: "Foundations of Social Media Marketing",
        topics: [
          "Introduction to social media platforms and their unique audiences",
          "The role and responsibilities of a Social Media Manager",
          "Setting SMART social media goals",
          "Overview of the industry's core tools",
        ],
        deliverable:
          "Audit an existing business page and identify 3 areas for improvement",
      },
      {
        n: 2,
        title: "Strategy & Content Planning",
        topics: [
          "Building a content strategy and content pillars",
          "Creating a content calendar",
          "Understanding target audience and buyer personas",
          "Defining brand voice and tone",
        ],
        deliverable:
          "Create a 2-week content calendar for a chosen brand or niche",
      },
      {
        n: 3,
        title: "Content Creation",
        topics: [
          "Graphic design basics using Canva",
          "Writing captions that convert",
          "Short-form video and Reels basics using CapCut",
          "Hashtag research and strategy",
        ],
        deliverable:
          "Design 10 social media posts (graphics and captions) for the chosen brand",
      },
      {
        n: 4,
        title: "Scheduling, Publishing & Community Management",
        topics: [
          "Using scheduling tools such as Meta Business Suite and Buffer",
          "Best times to post and understanding platform algorithms",
          "Community management — responding to comments and DMs",
          "Handling negative feedback and reviews professionally",
        ],
        deliverable:
          "Schedule one week of content and respond to a set of sample comments/DMs",
      },
      {
        n: 5,
        title: "Paid Advertising & Analytics",
        topics: [
          "Introduction to boosting posts and Meta Ads basics",
          "Setting a budget and targeting the right audience",
          "Reading and interpreting analytics and insights",
          "Reporting results to clients",
        ],
        deliverable:
          "Create a sample analytics report with 3 key recommendations",
      },
      {
        n: 6,
        title: "Client Acquisition & Career Launch",
        topics: [
          "Freelancing vs. agency employment",
          "Pricing your services",
          "Writing proposals and pitching to clients",
          "Building and presenting your portfolio",
        ],
        deliverable:
          "Final project — deliver a complete social media management package for a mock/real client, and present it for graduation",
      },
    ],
  },

  {
    slug: "ai-video-production",
    title: "AI Video Production",
    tagline: "From concept to publish-ready content",
    badge: "4-week course",
    image: "/images/ai-video.jpeg",
    heroSummary:
      "Plan, produce and publish professional videos with AI — no crew, studio or editing background.",
    duration: "4 Weeks",
    level: "Hands-on — no camera or studio needed",
    priceUSD: 500,
    priceNGN: 692500,
    priceNote: "for the full 4-week program",
    description:
      "A 4-week hands-on course on producing publish-ready video with AI — combining AI scriptwriting, voice, image/video generation and editing into one repeatable pipeline for YouTube, social, ads and brand storytelling. You finish with a portfolio of AI-produced videos and a reusable workflow.",
    outcomes: [
      "How to plan a video project (concept, script, storyboard) before touching any tool",
      "How to write effective AI prompts for scripts, images, and video generation",
      "How to generate consistent AI voiceovers and character voices",
      "How to generate or source visuals using AI image/video generation tools",
      "How to edit and assemble a full video (pacing, transitions, sound design, captions)",
      "How to add music, sound effects, and voice syncing for atmosphere",
      "How to optimize videos for different platforms (YouTube, Instagram Reels, TikTok)",
      "How to build a repeatable production workflow to reuse for clients or a personal channel",
      "Basic AI ethics and originality practices (avoiding copyright/IP issues)",
    ],
    highlights: [
      { icon: "FileText", label: "AI scriptwriting" },
      { icon: "Mic", label: "AI voiceovers" },
      { icon: "Image", label: "AI visuals" },
      { icon: "Scissors", label: "Editing & assembly" },
      { icon: "Music", label: "Sound & music" },
      { icon: "Video", label: "Publish-ready export" },
    ],
    weeks: [
      {
        n: 1,
        title: "Foundations & Concept Development",
        topics: [
          "Introduction to the AI video production landscape and tools overview",
          "Understanding video formats and platform requirements",
          "Concept development: idea generation, target audience, tone",
          "Scriptwriting with AI (structure, hooks, pacing)",
          "Storyboarding basics",
        ],
        deliverable:
          "A finalized script and storyboard for their course project video",
      },
      {
        n: 2,
        title: "Voice, Visuals & AI Generation",
        topics: [
          "AI voiceover tools (voice selection, tone, pacing, multi-character voices)",
          "AI image generation for scenes and thumbnails (prompt engineering)",
          "AI video generation tools (text-to-video, image-to-video)",
          "Maintaining visual and character consistency across scenes",
        ],
        deliverable:
          "A complete voiceover track and set of AI-generated visuals/clips for their project",
      },
      {
        n: 3,
        title: "Editing & Assembly",
        topics: [
          "Video editing fundamentals (cutting, pacing, transitions)",
          "Syncing voice, visuals, and music",
          "Adding captions and subtitles",
          "Sound design: music selection, SFX, mixing levels",
          "Color grading and visual polish basics",
        ],
        deliverable: "A rough-cut edit of their full video project",
      },
      {
        n: 4,
        title: "Finishing, Optimization & Publishing",
        topics: [
          "Final edit refinement and feedback session",
          "Platform optimization (aspect ratios, thumbnails, titles, SEO for YouTube/social)",
          "Export settings and quality control",
          "Building a repeatable AI production workflow/template",
          "Portfolio review and next steps (freelancing, client work, personal channel growth)",
        ],
        deliverable:
          "Final, publish-ready video and a personal AI video production workflow template",
      },
    ],
  },
];

export const getCourseBySlug = (slug) => courses.find((c) => c.slug === slug);

export const formatUSD = (n) => `$${n.toLocaleString("en-US")}`;
export const formatNGN = (n) => `₦${n.toLocaleString("en-NG")}`;
export const toKobo = (naira) => naira * 100;
