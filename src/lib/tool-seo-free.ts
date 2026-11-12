import type { ToolSeoData } from "./tool-seo-types";

export const freeToolSeo: Record<string, ToolSeoData> = {
  "mp4-to-gif": {
    seoTitle: "Free MP4 to GIF Converter Online (No Watermark) | Marvedge",
    metaDescription:
      "Convert MP4, MOV, and WebM clips up to 20 seconds into clean looping GIFs in your browser. Adjust width, FPS, and color count with zero server uploads.",
    primaryKeyword: "mp4 to gif converter",
    applicationCategory: "MultimediaApplication",
    definitionLead:
      "Marvedge MP4 to GIF Converter turns short screen recordings and video clips into animated GIF files directly inside your browser. Select an MP4, MOV, or WebM file, trim start and end points up to 20 seconds, tune width, frame rate, and palette size, then download an unwatermarked GIF with no upload.",
    lastUpdated: "November 2026",
    lastUpdatedIso: "2026-11-12",
    capabilities: [
      "Trim start & end",
      "160-960px width & 5-25 FPS",
      "Live looping preview",
      "16-256 color palette slider",
    ],
    howItWorks: {
      heading: "How to convert MP4 to GIF online",
      intro:
        "Every frame is decoded by your browser video engine and quantized into an indexed GIF locally, so private product footage stays on your machine.",
      steps: [
        {
          title: "Drop a video or load the sample clip",
          body: "Drag an MP4, MOV, or WebM recording into the workspace, or click Try a sample clip to test with a 5-second recording right away.",
        },
        {
          title: "Trim to a tight loop and set resolution",
          body: "Set numeric start and end timestamps (up to 20 seconds max) to isolate one UI action or gesture. Keep width between 480px and 720px and frame rate around 10 to 15 fps for crisp motion without bloat.",
        },
        {
          title: "Quantize colors and download your GIF",
          body: "Lower the color count from 256 toward 64 or 128 on flat UI recordings to cut file size sharply, click Create GIF, verify the live preview, and save the unwatermarked .gif file.",
        },
      ],
    },
    environments: {
      heading: "Works across desktop and mobile browsers",
      intro:
        "You do not need FFmpeg installed on your laptop or a Chrome extension. Open this page in any modern browser and encode clips locally.",
      cards: [
        {
          title: "macOS & Windows",
          steps: [
            "Drop Loom exports, QuickTime .mov captures, or OBS recordings directly onto the panel.",
            "Seek exact fractional seconds (0.1s precision) next to the muted video player.",
            "Save clean GIFs straight to your Downloads folder with the original base filename.",
          ],
        },
        {
          title: "iPhone & Android",
          steps: [
            "Pick any screen recording from Photos or Files without installing a third-party app.",
            "Lower width to 360px or 480px and frame rate to 10 fps for instant mobile encoding.",
            "Tap Download to save the looping animation to your camera roll or Files.",
          ],
        },
        {
          title: "Chrome, Safari, Firefox & Edge",
          steps: [
            "Uses standard HTML5 video seeking and 2D Canvas frame extraction with gifenc.",
            "Zero extensions, logins, or temporary cloud buckets required.",
            "Keep the tab visible during frame capture so browser timers stay responsive.",
          ],
        },
      ],
      note: "No uploads, no watermarks, no browser extension. Because frame extraction runs in memory inside your current browser tab, confidential staging builds, customer data, and pre-launch prototypes never touch an external media server.",
    },
    specs: {
      heading: "Output specifications and encoding controls",
      intro:
        "GIF uses indexed 256-color palettes rather than modern inter-frame video codecs. Knowing these control limits keeps documentation loops fast and sharp.",
      items: [
        {
          label: "Clip length cap",
          value: "Up to 20 s",
          detail: "Trim any recording to an exact start and end second before encoding.",
        },
        {
          label: "Output width",
          value: "160 - 960 px",
          detail: "20px steps with automatic height calculation matching source aspect ratio.",
        },
        {
          label: "Frame rate",
          value: "5 - 25 fps",
          detail:
            "10-12 fps handles UI walkthroughs smoothly at roughly one-third the bytes of 25 fps.",
        },
        {
          label: "Color depth",
          value: "16 - 256 colors",
          detail: "Step in multiples of 16 via per-frame palette quantization.",
        },
        {
          label: "Output format",
          value: ".gif (image/gif)",
          detail: "Universal infinite-loop playback across Slack, GitHub, Notion, docs, and email.",
        },
        {
          label: "Watermark policy",
          value: "None ($0)",
          detail: "Clean full-bleed frames with original dimensions preserved.",
        },
      ],
      callouts: [
        {
          title: "Why width matters more than frame rate",
          body: "Doubling GIF width multiplies pixel area by four. Dropping width from 960px to 480px reduces raw frame pixels by 75 percent while keeping interface labels readable in inline Slack or Markdown embeds.",
        },
        {
          title: "Choosing 64 vs 256 colors",
          body: "Software interfaces with flat buttons and sharp text look nearly identical at 64 or 128 colors. Live-action video gradients benefit from 192 to 256 colors to avoid visible color banding.",
        },
        {
          title: "When a GIF beats an MP4 player",
          body: "GitHub pull requests, Jira tickets, email newsletters, and Markdown help centers inline GIFs automatically without play buttons or blocked media players.",
        },
      ],
    },
    compatibility: {
      heading: "What video inputs work and where to optimize",
      intro:
        "Most standard browser-compatible video files convert immediately. Check edge cases below before dragging large files in.",
      columns: ["Input or workflow", "Supported", "Technical notes"],
      rows: [
        {
          target: "H.264 MP4 & QuickTime MOV",
          status: "Yes",
          detail:
            "Decodes cleanly across Chrome, Edge, and Safari for crisp 0.1-second frame stepping.",
        },
        {
          target: "WebM (VP8 / VP9) screen captures",
          status: "Yes",
          detail: "Directly supported in desktop Chrome, Firefox, and Edge browsers.",
        },
        {
          target: "Variable frame rate mobile clips",
          status: "Yes",
          detail:
            "Resampled cleanly to fixed 5-25 fps intervals by seeking each timestamp explicitly.",
        },
        {
          target: "Clips longer than 20 seconds",
          status: "Partial",
          detail:
            "Trim a 20-second segment using the start and end inputs; longer sequences belong in Video Compressor.",
        },
        {
          target: "Audio tracks inside the video",
          status: "No",
          detail:
            "The GIF container has no audio channel. Use MP4 video if viewers need spoken narration.",
        },
        {
          target: "HEVC / ProRes raw camera files",
          status: "Partial",
          detail:
            "Works in Safari on Apple silicon; other browsers may require transcoding to H.264 MP4 first.",
        },
      ],
    },
    troubleshooting: {
      heading: "Troubleshooting common GIF conversion issues",
      intro:
        "If an export stalls or looks grainier than the original recording, these fixes solve almost every browser limitation.",
      items: [
        {
          issue: "Keep clips under 20 seconds error appears",
          fix: "The tool enforces a 20-second selection window so your browser tab does not run out of memory encoding hundreds of uncompressed canvas frames. Shorten the End timestamp or split into two smaller loops.",
        },
        {
          issue: "Resulting GIF file size is over 10 MB",
          fix: "Lower Width from 960px to 480px first, set Frame rate to 10 or 12 fps, and step Colors down to 64 or 96. Then run the output through GIF Compressor if needed.",
        },
        {
          issue: "Preview shows black frames or stalls on MOV files",
          fix: "Some HEVC iPhone .mov recordings cannot decode inside non-Safari Windows or Linux browsers. Open in Safari on macOS or convert the source clip to standard H.264 MP4.",
        },
        {
          issue: "Small UI cursor text looks fuzzy",
          fix: "Increase width toward 720px and keep Colors at 128 or higher so subtle antialiasing tones around typography stay intact.",
        },
      ],
    },
    privacy: {
      heading: "Your recordings stay inside your browser tab",
      paragraphs: [
        "Videos never get uploaded to remote queues or CDNs. Refreshing the tab frees the temporary object URL immediately. Record internal admin consoles, customer dashboards, or unreleased product builds without exposing screenshots or clips to cloud storage.",
        "Marvedge claims no license or tracking embed on any exported GIF. Publish freely across commercial docs, blogs, and ads.",
      ],
    },
  },

  "image-compressor": {
    seoTitle: "Free Image Compressor Online (JPG, PNG, WebP) | Marvedge",
    metaDescription:
      "Shrink JPG, PNG, and WebP images right in your browser with batch processing and a 10% to 95% quality slider. Instant download with zero server upload.",
    primaryKeyword: "image compressor",
    applicationCategory: "MultimediaApplication",
    definitionLead:
      "Marvedge Image Compressor reduces JPG, PNG, and WebP file sizes in seconds using client-side HTML5 Canvas encoding. Drop single photos or an entire batch, tune compression quality from 10% to 95%, export as smallest-size WebP or universal JPG, and save up to 80% in bytes without sending images to a server.",
    lastUpdated: "November 2026",
    lastUpdatedIso: "2026-11-12",
    capabilities: [
      "Batch compress multiple files",
      "10-95% quality control",
      "WebP & JPG output formats",
      "Side-by-side byte savings readout",
    ],
    howItWorks: {
      heading: "How to compress images without ruining sharpness",
      intro:
        "Batch encoding runs sequentially in your browser using native Canvas compression codecs, showing exact byte savings for every image.",
      steps: [
        {
          title: "Drop one or multiple JPG, PNG, or WebP files",
          body: "Drag photos, UI screenshots, or hero banners into the dropzone, or click Try a sample photo to preview savings immediately.",
        },
        {
          title: "Pick output format and tune quality",
          body: "Choose WebP for the smallest web payloads (around 25% to 35% smaller than JPG at equal visual detail) or JPG when an upload portal requires .jpg.",
        },
        {
          title: "Review savings and download",
          body: "Click Compress, inspect original vs output sizes and exact percentage reduction per file, then download each compressed file.",
        },
      ],
    },
    environments: {
      heading: "Ready in every modern desktop and mobile browser",
      intro:
        "No desktop CLI wrappers, Electron apps, or account rate limits get between your screenshot folder and faster page loads.",
      cards: [
        {
          title: "macOS, Windows & Linux",
          steps: [
            "Drop 10+ UI screenshots or product photos directly from Finder or File Explorer.",
            "Compare total saved kilobytes or megabytes in the live summary bar.",
            "Keep original pixel dimensions intact while stripping oversized uncompressed bloat.",
          ],
        },
        {
          title: "iOS Safari & Android Chrome",
          steps: [
            "Compress multi-megabyte phone camera photos down before emailing or uploading.",
            "Runs in local memory on cellular or flaky Wi-Fi with no upload waits.",
            "Download straight into Files or Photo library.",
          ],
        },
        {
          title: "Zero server round-trips",
          steps: [
            "No images cross the network; even huge uncompressed PNG screenshots never leave your RAM.",
            "Transparent areas flatten automatically to crisp white when exporting to JPG.",
            "Ideal for NDAs, medical uploads, financial receipts, and unreleased designs.",
          ],
        },
      ],
      note: "Need an exact portal limit like 20 KB or 50 KB? Use Marvedge Image Compressor when you want fast batch shrinking by quality percentage. If a visa, exam, or HR portal rejects files over a strict kilobyte ceiling, switch to Image Resizer and enter the exact KB cap.",
    },
    specs: {
      heading: "Supported formats and compression metrics",
      intro:
        "These technical defaults balance aggressive byte savings with clean typography and smooth photography gradients.",
      items: [
        {
          label: "Accepted inputs",
          value: "JPG, PNG, WebP",
          detail: "Handles lossless screenshots, camera photos, and web assets in mixed batches.",
        },
        {
          label: "Quality range",
          value: "10% - 95%",
          detail: "Defaults to 70% for optimal size-to-detail balance across UI and photo shots.",
        },
        {
          label: "Output codecs",
          value: "WebP / JPG",
          detail: "Choose modern WebP (smallest) or universal JPEG encoding.",
        },
        {
          label: "Batch support",
          value: "Unlimited files",
          detail: "Drop dozens of screenshots in one go with aggregated savings summary.",
        },
        {
          label: "Transparency handling",
          value: "Alpha in WebP",
          detail: "WebP preserves transparency; JPG fills transparent pixels with #FFFFFF.",
        },
        {
          label: "Dimension scaling",
          value: "1:1 preserved",
          detail: "Keeps exact width and height unless you explicitly resize elsewhere.",
        },
      ],
      callouts: [
        {
          title: "Why PNG screenshots shrink by 70%+",
          body: "Operating systems save screenshots as lossless PNGs with massive flat color blocks. Converting them to 75% quality WebP often trims 2 MB retina captures under 250 KB with crisp edges.",
        },
        {
          title: "WebP vs JPG for Core Web Vitals",
          body: "Google Lighthouse specifically flags unoptimized JPG and PNG assets. Exporting hero graphics as WebP improves Largest Contentful Paint (LCP) across all modern browsers.",
        },
        {
          title: "Avoiding double-compression artifacts",
          body: "Always compress from the original PNG or high-bitrate photo rather than re-saving an already crunchy 40% JPG, which amplifies block noise around text.",
        },
      ],
    },
    compatibility: {
      heading: "Format compatibility and best-use guide",
      intro:
        "See which source types and destinations pair best with browser-native WebP and JPEG output.",
      columns: ["Image scenario", "Supported", "Recommendation"],
      rows: [
        {
          target: "Retina PNG screenshots (2x / 3x)",
          status: "Yes",
          detail: "Export to WebP at 75%-85% for maximum legibility and drastic file reduction.",
        },
        {
          target: "DSLR / iPhone JPEG photos",
          status: "Yes",
          detail: "Export to WebP at 70% to cut 4 MB photos below 500 KB for blog posts.",
        },
        {
          target: "Transparent logos or icons",
          status: "Partial",
          detail:
            "Keep Output format set to WebP to retain alpha transparency; avoid JPG output here.",
        },
        {
          target: "Strict portal KB limits (<= 50 KB)",
          status: "Partial",
          detail: "Works for mild trims, or open Image Resizer for binary-search KB targeting.",
        },
        {
          target: "Animated GIF files",
          status: "No",
          detail:
            "Canvas compression extracts a single still frame. Use GIF Compressor for animations.",
        },
      ],
    },
    troubleshooting: {
      heading: "Troubleshooting image compression",
      intro: "Quick adjustments when compressed output looks unexpected.",
      items: [
        {
          issue: "Output file came out larger than input",
          fix: "Your source file was already heavily compressed at low quality. Drop Quality below 65% or switch output to WebP.",
        },
        {
          issue: "Transparent background turned solid white",
          fix: "JPG does not support alpha transparency, so Marvedge paints white behind transparent pixels before encoding JPEG. Switch Output format to WebP to keep transparent edges.",
        },
        {
          issue: "Crisp red or blue UI text looks slightly soft",
          fix: "JPEG/WebP chroma subsampling softens saturated thin red text on dark backgrounds. Slide Quality up to 85% or 90% for UI shots with red badges.",
        },
        {
          issue: "WebP not accepted by an older CMS or form",
          fix: "Change Output format from WebP to JPG; it keeps the compressed size savings with 100% legacy software support.",
        },
      ],
    },
    privacy: {
      heading: "Client-side Canvas compression means zero uploads",
      paragraphs: [
        "Once the page loads, compression runs inside your browser tab even if you unplug from Wi-Fi. Re-drawing images onto HTML5 Canvas strips hidden GPS coordinates and camera serial metadata automatically on export.",
        "Use your compressed images on client sites, Shopify stores, SaaS docs, and print PDFs freely.",
      ],
    },
  },

  "qr-code-generator": {
    seoTitle: "Free Custom QR Code Generator (Logo, Print & SVG) | Marvedge",
    metaDescription:
      "Create branded QR codes for URLs, Wi-Fi, vCards, email, and phone. Customize frames, dot shapes, colors, center logos, and export PNG, SVG, or A4 print sheets.",
    primaryKeyword: "qr code generator",
    applicationCategory: "UtilitiesApplication",
    definitionLead:
      "Marvedge QR Code Generator builds high-contrast static QR codes right in your browser for links, Wi-Fi logins, vCards, emails, phones, and plain text. Customize frames, 8 dot styles, corner eyes, and center logos with automatic Level H error recovery, then download crisp PNG/SVG files, A4-Letter print sheets, or grid collages.",
    lastUpdated: "November 2026",
    lastUpdatedIso: "2026-11-12",
    capabilities: [
      "6 QR types (URL, Wi-Fi, vCard)",
      "8 dot styles, 4 frames & center logo",
      "A4/A5/A6/Letter multi-label print sheets",
      "Sharp PNG & clean vector SVG",
    ],
    howItWorks: {
      heading: "How to generate, style, and print a QR code",
      intro:
        "Build permanent static codes with no tracking redirects or scan expiration timers, all rendered in real time.",
      steps: [
        {
          title: "Choose your payload type and enter data",
          body: "Pick Website, Text, Wi-Fi, Email, Phone, or vCard in Step 1. For Wi-Fi codes, enter SSID, encryption (WPA/WEP/None), and password so guests join with one scan.",
        },
        {
          title: "Customize frames, shapes, colors, and logo",
          body: "Open the Frame, Shape, Logo, and Level tabs in Step 2. Choose among 8 module shapes, 4 corner eye styles, custom hex swatches, or upload a centered logo on a protective white patch.",
        },
        {
          title: "Export PNG/SVG, Collage, or Print Sheet",
          body: "Test the live preview with your phone camera, then export a high-res PNG, switch to classic style for crisp vector SVG, or click Print Sheet / Collage mode for multi-copy layouts.",
        },
      ],
    },
    environments: {
      heading: "Three dedicated modes from one studio workspace",
      intro:
        "Switch top workspace tabs cleanly between single-code branding, multi-label paper printing, and tiled collage sheets.",
      cards: [
        {
          title: "Design studio (PNG & SVG)",
          steps: [
            "Customize frames (Border, Scan-me banner, Badge ring) and 8 geometric dot patterns.",
            "Set exact foreground/background colors while maintaining strong scan contrast.",
            "Download high-DPI PNGs or clean vector SVGs for Figma and Illustrator.",
          ],
        },
        {
          title: "Print sheet layout",
          steps: [
            "Choose physical paper standards: A4, A5, A6, or US Letter.",
            "Configure QR size (15-120mm), page margins, border thickness, and caption text.",
            "Grid up to 6 columns by 8 rows of scannable sticker labels ready for print.",
          ],
        },
        {
          title: "Collage PNG exporter",
          steps: [
            "Arrange 1 to 6 columns of identical or spaced QR tiles inside a single high-res PNG.",
            "Dial cell size from 160px to 600px, gap spacing, border thickness, and corner radius.",
            "Ideal for tabletop tent cards, badge sheets, and multi-up packaging templates.",
          ],
        },
      ],
      note: "True static QR codes never expire or show third-party ads. Unlike SaaS QR generators that lock your URL behind paid redirect servers after a 14-day trial, Marvedge encodes your destination string directly into the QR matrix. As long as your destination URL stays live, the printed code keeps working.",
    },
    specs: {
      heading: "QR encoding specs, styles, and print tolerances",
      intro:
        "Every design option respects ISO QR quiet-zone margins and Reed-Solomon error correction guarantees.",
      items: [
        {
          label: "Supported payloads",
          value: "6 formats",
          detail: "URL, plain Text, Wi-Fi credentials, Email (mailto), Phone (tel), and vCard 3.0.",
        },
        {
          label: "Module & eye styles",
          value: "8 dots · 4 corners",
          detail: "Classic, Rounded, Dots, Diamond, Star, Classy, Fluid, Bars plus 4 corner eyes.",
        },
        {
          label: "Error correction",
          value: "L / M / Q / H",
          detail:
            "Up to 30% damage recovery on Level H (enforced automatically when adding a logo).",
        },
        {
          label: "Print paper sizes",
          value: "A4, A5, A6, Letter",
          detail: "Millimeter-accurate print layout (15-120mm per code) up to 6x8 grids.",
        },
        {
          label: "Vector SVG export",
          value: "Infinite scale",
          detail:
            "Available whenever using Classic square style with no outer frame or center logo.",
        },
        {
          label: "Link expiration",
          value: "Never",
          detail: "100% direct static encoding with zero redirect middleman.",
        },
      ],
      callouts: [
        {
          title: "Contrast rules for reliable camera scans",
          body: "Camera scanners read dark modules against a bright background best. Inverted codes (white dots on black) or low-contrast pastels fail under dim restaurant or retail lighting.",
        },
        {
          title: "Sizing QR codes for print distance",
          body: "As a rule of thumb, keep a minimum 1:10 ratio between code width and scan distance. Tabletop flyers scan fine at 25mm, whereas conference banners need 100mm+ or SVG export.",
        },
        {
          title: "When you actually want dynamic links + QR",
          body: "If you need password locks, expiration timestamps, or shorter clean URLs that fit densely printed badges, generate a /go/ link in Marvedge Link Shortener along with its paired QR PNG.",
        },
      ],
    },
    compatibility: {
      heading: "Feature availability by export mode",
      intro:
        "Compare what stays active across PNG, vector SVG, and Print Sheet modes before sending files to a printer.",
      columns: ["Feature or format", "Supported", "Behavior notes"],
      rows: [
        {
          target: "High-res PNG export (custom frame/logo/dots)",
          status: "Yes",
          detail:
            "All 8 dot styles, 4 frames, custom colors, and center logo patches export to crisp PNG.",
        },
        {
          target: "Vector SVG export",
          status: "Partial",
          detail:
            "Active for Classic square modules without a decorative frame or embedded raster logo.",
        },
        {
          target: "Multi-copy A4 / US Letter printing",
          status: "Yes",
          detail:
            "Dedicated Print mode arranges custom captions, cut borders, and exact mm spacing.",
        },
        {
          target: "vCard 3.0 & Wi-Fi auto-join payloads",
          status: "Yes",
          detail:
            "Natively recognized by iOS Camera and Android Google Lens with zero app required.",
        },
        {
          target: "Editable destination after printing",
          status: "No",
          detail:
            "Static codes encode data directly. Point to a short URL if the final destination might change.",
        },
      ],
    },
    troubleshooting: {
      heading: "Troubleshooting QR scan and export issues",
      intro: "Fix scanning failures or grayed-out buttons in seconds.",
      items: [
        {
          issue: "SVG export button is disabled",
          fix: "SVG export requires Classic square modules, square corners, No frame, and no embedded raster logo. Set Shape to Classic, Frame to No frame, and clear any uploaded logo to enable crisp vector SVG.",
        },
        {
          issue: "Phone camera struggles to scan my stylized QR",
          fix: "Check two things: make sure the foreground color is significantly darker than the background, and raise Error level from L to Q or H if you use Stars or Dots styling.",
        },
        {
          issue: "Wi-Fi QR shows connected error or wrong password",
          fix: "Verify your router uses WPA/WPA2 (standard) and match exact case-sensitive capitalization in both Network Name (SSID) and Password fields.",
        },
        {
          issue: "Grid print layout overflows one page",
          fix: "Reduce QR size (mm), reduce Gap (mm), or lower Columns/Rows until the live A4/Letter preview fits inside page margins cleanly.",
        },
      ],
    },
    privacy: {
      heading: "Your URLs and credentials stay private",
      paragraphs: [
        "Scanners jump straight to your target link, email, or vCard with zero analytics middlemen intercepting clicks. Because QR rendering happens completely client-side, your office or home Wi-Fi password never touches any database.",
        "Use generated PNG, SVG, and printable PDF/paper sheets on packaging, menus, signage, and ads without attribution.",
      ],
    },
  },

  "video-compressor": {
    seoTitle: "Free Online Video Compressor (360p-1080p) | Marvedge",
    metaDescription:
      "Compress MP4, MOV, and WebM videos in your browser with resolution downscaling (360p-1080p) and 0.3-6 Mbps bitrate control. Private local processing.",
    primaryKeyword: "video compressor",
    applicationCategory: "MultimediaApplication",
    definitionLead:
      "Marvedge Video Compressor shrinks oversized video recordings right inside your browser using native Canvas and MediaRecorder re-encoding. Select target height from 360p to 1080p, adjust video bitrate between 0.3 and 6 Mbps with live file-size estimates, and save smaller MP4 or WebM videos with audio preserved.",
    lastUpdated: "November 2026",
    lastUpdatedIso: "2026-11-12",
    capabilities: [
      "360p / 480p / 720p / 1080p scaling",
      "0.3 - 6 Mbps bitrate slider",
      "Live estimated output size",
      "Audio stream preserved cleanly",
    ],
    howItWorks: {
      heading: "How to compress large videos without server uploads",
      intro:
        "Your browser decodes and re-records frames in real time at your exact target bitrate and resolution, keeping audio synchronized.",
      steps: [
        {
          title: "Drop your recording or test the sample clip",
          body: "Add an MP4, MOV, or WebM file to view its original file size and exact duration in seconds, or load the 5-second dummy recording to benchmark speed first.",
        },
        {
          title: "Select resolution and bitrate target",
          body: "Downscale 4K or 1080p captures to 720p or 480p and move the Mbps slider while watching the Estimated output readout update live.",
        },
        {
          title: "Keep the tab open during export and save",
          body: "Click Compress video. Real-time browser MediaRecorder capture runs for the clip's duration, then displays the preview player and Download button.",
        },
      ],
    },
    environments: {
      heading: "Works anywhere modern Web MediaRecorder runs",
      intro:
        "Hardware-accelerated encoders built into desktop and mobile browsers handle re-compression with zero software installs.",
      cards: [
        {
          title: "macOS & Windows Desktop",
          steps: [
            "Shrink 80 MB 4K screen recordings to under 8 MB before attaching to Linear, Jira, or Zendesk.",
            "Keep the active browser tab focused so real-time 30 fps frame capture runs uninterrupted.",
            "Automatic H.264 MP4 output where supported, falling back cleanly to VP9 WebM.",
          ],
        },
        {
          title: "Mobile Browsers",
          steps: [
            "Drop heavy phone camera 4K clips right from iOS Photos or Android Gallery.",
            "Step down to 720p at 1.5 Mbps for quick WhatsApp, Discord, or LMS uploads.",
            "Download compressed footage without waiting on slow upstream upload speeds.",
          ],
        },
        {
          title: "Unmuted voice capture",
          steps: [
            "Audio tracks on your source video automatically pipe into the compressed recording.",
            "Audio playback plays softly while capturing real-time frames; do not mute system tab mid-pass if capturing audio.",
            "Odd widths automatically round to even numbers for codec stability.",
          ],
        },
      ],
      note: "Why compression runs in real time (1x playback speed). Because the tool avoids heavy 30 MB external WebAssembly FFmpeg downloads and relies on your browser's hardware-accelerated MediaRecorder pipeline, a 20-second clip takes about 20 seconds to compress with zero server upload wait.",
    },
    specs: {
      heading: "Supported containers, resolutions, and bitrate math",
      intro:
        "Size estimation follows true bitrate physics: bitrate (Mbps) multiplied by clip duration divided by 8.",
      items: [
        {
          label: "Resolution presets",
          value: "1080p - 360p",
          detail: "Caps max output height while locking original aspect ratio (never upscales).",
        },
        {
          label: "Bitrate range",
          value: "0.3 - 6.0 Mbps",
          detail: "Step in 0.1 Mbps increments with real-time byte prediction before running.",
        },
        {
          label: "Capture frame rate",
          value: "30 fps Canvas",
          detail: "Even-rounded frame dimensions prevent H.264/VP9 chroma glitches.",
        },
        {
          label: "Output codecs",
          value: "H.264 MP4 / VP9 WebM",
          detail: "Selects hardware-supported MP4 (avc1) first, otherwise high-efficiency WebM.",
        },
        {
          label: "Audio preservation",
          value: "Original tracks",
          detail: "Copies live video audio streams straight into the final MediaRecorder mux.",
        },
        {
          label: "Upload transfer",
          value: "0 bytes",
          detail: "Compression happens purely inside client browser memory.",
        },
      ],
      callouts: [
        {
          title: "Quick bitrate cheat sheet by platform",
          body: "For Discord (10 MB free tier) or email attachments under 25 MB, pick 720p and drag Mbps until Estimated output sits 15% below the platform cap to leave headroom for audio.",
        },
        {
          title: "Why 720p beats 1080p at low bitrates",
          body: "Crushing 1080p down to 0.5 Mbps smears block artifacts everywhere. Reducing resolution to 720p or 480p first lets each remaining pixel keep sharp edges.",
        },
        {
          title: "Real-time tab visibility tip",
          body: "Modern browsers throttle background requestAnimationFrame loops. Keep the Marvedge tab active on screen until progress hits 100%.",
        },
      ],
    },
    compatibility: {
      heading: "Browser codec support and input considerations",
      intro:
        "Output container format depends on which hardware media encoders your browser exposes to MediaRecorder.",
      columns: ["Browser or workflow", "Supported", "Technical notes"],
      rows: [
        {
          target: "Chrome & Edge (Desktop)",
          status: "Yes",
          detail: "Outputs H.264 MP4 when video/mp4;codecs=avc1 is enabled, or compact VP9 WebM.",
        },
        {
          target: "Safari (macOS & iOS)",
          status: "Yes",
          detail: "Native H.264 MP4 export supported via Apple VideoToolbox hardware acceleration.",
        },
        {
          target: "Firefox (Desktop)",
          status: "Yes",
          detail: "Re-encodes cleanly into WebM (VP8/VP9) with audio preserved.",
        },
        {
          target: "Multi-hour movies",
          status: "Partial",
          detail:
            "Works technically, but real-time 1x capture makes desktop FFmpeg faster for 30+ minute files.",
        },
        {
          target: "DRM-protected streams",
          status: "No",
          detail: "Browser Canvas security blocks captureStream() on DRM encrypted media.",
        },
      ],
    },
    troubleshooting: {
      heading: "Troubleshooting browser video compression",
      intro: "How to resolve playback, audio, or container issues quickly.",
      items: [
        {
          issue: "Output file exported as .webm instead of .mp4",
          fix: "Your browser version did not advertise H.264 MediaRecorder support, so Marvedge automatically used WebM (VP9/VP8). WebM plays natively in Chrome, Firefox, Edge, Slack, and Discord. For strict .mp4 requirements on iOS/macOS, run the same clip in Safari or recent Chrome.",
        },
        {
          issue: "Progress stalled mid-export",
          fix: "Switching to another browser tab or minimizing the window pauses requestAnimationFrame in Chrome/Safari. Keep this tab visible in the foreground until compression hits 100%.",
        },
        {
          issue: "Output clip has missing audio",
          fix: "Make sure your input file actually contains an audio track (screen captures without mic input are silent), and check that browser captureStream() is not restricted by strict privacy extensions.",
        },
        {
          issue: "Final file size differed slightly from estimate",
          fix: "The estimate calculates target video bitrate + duration. Audio track overhead (~96-128 kbps) and VBR encoder bursts during rapid scene motion add minor variance.",
        },
      ],
    },
    privacy: {
      heading: "Sensitive demos never touch external transcoders",
      paragraphs: [
        "Canvas capture and MediaRecorder encoding run inside your device GPU/CPU directly. Shrink recorded user interviews, CRM screens, or internal security demos under strict company confidentiality rules.",
        "Clean unwatermarked files retain exact visual framing with zero intro or outro cards.",
      ],
    },
  },

  "gif-compressor": {
    seoTitle: "Free GIF Compressor Online (Reduce GIF File Size) | Marvedge",
    metaDescription:
      "Shrink animated GIFs in your browser via scaling (20%-100%), frame skipping, 16-256 color palettes, and delta-pixel optimization with zero uploads.",
    primaryKeyword: "gif compressor",
    applicationCategory: "MultimediaApplication",
    definitionLead:
      "Marvedge GIF Compressor shrinks animated GIFs in your browser without sacrificing smooth motion or uploading files. It decompresses every frame locally, applies delta-pixel transparency so static regions are not re-encoded across frames, and lets you tune output scale (20% to 100%), frame skipping, and palette size (16 to 256 colors).",
    lastUpdated: "November 2026",
    lastUpdatedIso: "2026-11-12",
    capabilities: [
      "Delta-pixel frame optimization",
      "20% - 100% resolution scale",
      "1-in-N frame skipper",
      "16 - 256 color palette slider",
    ],
    howItWorks: {
      heading: "How to shrink a GIF while keeping text crisp",
      intro:
        "Unlike naive frame-blitting compressors, Marvedge reserves a transparent palette slot for unchanged pixels between frames, slashing bytes cleanly on UI animations.",
      steps: [
        {
          title: "Upload an animated GIF or try the sample",
          body: "Drop any .gif file into the dropzone to reveal compression controls, or click Try a sample GIF to benchmark byte savings immediately.",
        },
        {
          title: "Adjust resolution, frame skip, and colors",
          body: "Start with defaults (75% size, all frames kept, 64 colors). For dramatic reductions, drop size toward 60%, skip every 2nd frame on 30+ fps exports, or pick 32-64 colors.",
        },
        {
          title: "Compress and verify savings live",
          body: "Click Compress GIF to watch per-frame progress reach 100%, check exact byte comparison (before -> after & percentage saved), preview the loop, and download.",
        },
      ],
    },
    environments: {
      heading: "Fast client-side GIF optimization in any browser",
      intro:
        "Built with gifuct-js frame parsing and gifenc palette quantization, the compressor runs completely on your device.",
      cards: [
        {
          title: "GitHub & Slack Ready",
          steps: [
            "Shrink oversized 14 MB QuickTime-converted GIFs below Slack's preview limits or GitHub's 10 MB comment cap.",
            "Keep full UI legibility by targeting 75%-80% scale and 64 colors.",
            "Delta transparency skips unchanged background chrome automatically.",
          ],
        },
        {
          title: "Email & Notion Embeds",
          steps: [
            "Reduce email hero GIF payloads under 1-2 MB so Apple Mail and Gmail animate reliably on cellular.",
            "Keep every 2nd or 3rd frame when exporting silky 30 fps product shots to cut frame overhead cleanly.",
            "Preserve true transparent backgrounds when the source GIF already includes alpha channels.",
          ],
        },
        {
          title: "Desktop & Mobile",
          steps: [
            "No ImageMagick, Gifsicle CLI flags, or desktop shareware needed.",
            "Exact original frame timing delays merge automatically when skipping frames so playback speed stays 1:1.",
            "Instant local download with `-compressed.gif` suffix.",
          ],
        },
      ],
      note: "Automatic timing compensation when skipping frames. When you choose Keep 1 in every 2 frames (or 3 or 4), Marvedge accumulates the skipped frames' millisecond delays into the kept frames. Your animation stays at the exact same playback speed instead of fast-forwarding.",
    },
    specs: {
      heading: "Compression controls and optimization mechanics",
      intro:
        "Fine-tune the three levers that actually govern animated GIF size: pixel area, frame count, and color palette bits.",
      items: [
        {
          label: "Scale slider",
          value: "20% - 100%",
          detail:
            "Resizes width and height proportionally in 5% increments with high-quality smoothing.",
        },
        {
          label: "Frame retention",
          value: "1/1 to 1/4",
          detail:
            "Keep every frame or sample every 2nd, 3rd, or 4th frame with summed delay timing.",
        },
        {
          label: "Palette range",
          value: "16 - 256 colors",
          detail: "Step in multiples of 16; opaque frames use inter-frame delta masking.",
        },
        {
          label: "Alpha transparency",
          value: "rgba4444 mode",
          detail:
            "Detects transparent source GIFs and keeps crisp transparent edges automatically.",
        },
        {
          label: "Delta tolerance",
          value: "L1 <= 18 RGB",
          detail:
            "Near-identical pixels across adjacent frames convert to transparent skip-pixels.",
        },
        {
          label: "Server round-trip",
          value: "None (local)",
          detail: "Uses gifuct-js and gifenc directly inside browser memory.",
        },
      ],
      callouts: [
        {
          title: "Opaque vs transparent GIF optimization paths",
          body: "On opaque recordings, Marvedge tracks previously drawn pixels and makes static pixels transparent (dispose: 1) so LZW compresses large runs of identical transparency bytes. On transparent stickers, it uses clean per-frame disposal (dispose: 2) to prevent ghosting.",
        },
        {
          title: "Why skipping frames never causes speedups",
          body: "Dropping 1 frame between two kept frames adds its delay (e.g., 50ms + 50ms = 100ms) onto the retained frame, preserving natural real-time pacing.",
        },
        {
          title: "Still not small enough? Check source clip dimensions",
          body: "If an already small GIF shows little reduction, lower Size to 50% and Colors to 32, or switch back to the raw MP4 with Marvedge MP4 to GIF at 10 fps.",
        },
      ],
    },
    compatibility: {
      heading: "GIF types supported and expected savings",
      intro:
        "Savings vary dramatically depending on whether a GIF came from uncompressed desktop capture or an already-optimized meme.",
      columns: ["GIF source type", "Expected savings", "Recommended settings"],
      rows: [
        {
          target: "UI screen recordings (static sidebars)",
          status: "Yes",
          detail: "Often shrinks 50%-80% via delta transparency plus 64 colors.",
        },
        {
          target: "High-FPS 30-50fps exports",
          status: "Yes",
          detail: "Set Keep 1 in every 2 frames alongside 75% size for immediate 60%+ reduction.",
        },
        {
          target: "Transparent sticker / badge GIFs",
          status: "Yes",
          detail: "Preserves 1-bit transparency cleanly with rgba4444 quantization.",
        },
        {
          target: "Pre-crushed 200 KB reaction GIFs",
          status: "Partial",
          detail: "Already tight LZW streams may show warning hint; lower Size or Colors further.",
        },
        {
          target: "Animated WebP / APNG",
          status: "No",
          detail: "Requires standard image/gif containers using GIF87a or GIF89a headers.",
        },
      ],
    },
    troubleshooting: {
      heading: "Troubleshooting GIF compression",
      intro: "Resolve color noise, ghost frames, or minimal file shrinkage cleanly.",
      items: [
        {
          issue: "Warning: This GIF is already well optimised",
          fix: "Your source file already had aggressive frame pruning or low resolution. Drag Size down to 50%-60%, set Keep 1 in every 2 frames, or reduce Colors to 32 and run again.",
        },
        {
          issue: "Noticeable speckling in dark shadow gradients",
          fix: "Raise Colors from 64 up to 128 or 192 so gradients receive enough palette entries without harsh quantization.",
        },
        {
          issue: "Couldn't read file as a GIF error",
          fix: "Many Twitter/X and Giphy '.gif' downloads are actually muted MP4 files renamed with a .gif extension. Open MP4 to GIF instead if your file is secretly an MP4.",
        },
        {
          issue: "Browser tab feels slow on huge 1920px GIFs",
          fix: "Large multi-hundred-frame 1080p GIFs require millions of pixels per frame pass. Lower Size scale first (e.g. 40% or 50%) before compressing.",
        },
      ],
    },
    privacy: {
      heading: "Decompressed and re-encoded solely on your device",
      paragraphs: [
        "Byte arrays never leave your browser sandbox; nothing hits a remote API. Rebuilding clean canvas frames naturally drops any stray comment blocks embedded in legacy GIF editors.",
        "Iterate on scale, frame skip, and palette counts endlessly without daily conversion limits.",
      ],
    },
  },

  "image-resizer": {
    seoTitle: "Image Resizer to Exact KB & Passport Size | Marvedge",
    metaDescription:
      "Resize images by exact pixels or strict KB targets in your browser. Includes 1-click passport, visa, exam, signature, and social presets.",
    primaryKeyword: "image resizer",
    applicationCategory: "UtilitiesApplication",
    definitionLead:
      "Marvedge Image Resizer resizes and crops photos to exact pixel dimensions or strict KB limits inside your browser. Choose 1-click document presets for India (PAN, Aadhaar, GATE, SSC, UPSC, Sarathi), USA/Canada, Europe/UK, social platforms, and ecommerce, or type a target kilobyte cap so automatic quality tuning keeps sharpness intact.",
    lastUpdated: "November 2026",
    lastUpdatedIso: "2026-11-12",
    capabilities: [
      "Country ID, visa & exam presets",
      "Smart Target KB size solver",
      "Crop to fill, fit bars or stretch",
      "Aspect-ratio lock & live preview",
    ],
    howItWorks: {
      heading: "How to resize an image to exact pixels and KB size",
      intro:
        "Instead of guessing JPEG quality blindly until an exam or visa portal stops rejecting your file, let the binary size solver find the highest sharp quality under your KB limit.",
      steps: [
        {
          title: "Upload your photo or test the sample passport",
          body: "Drop any JPG, PNG, or WebP portrait or product image. You can also click Try a sample passport photo to preview sizing and KB limits cleanly.",
        },
        {
          title: "Pick a country/portal preset or type custom width & height",
          body: "Select India, USA & Canada, Europe & UK, Middle East, Australia & NZ, Latin America, Africa, Documents, Job & profile, Social media, or Ecommerce cards to auto-fill exact dimensions and KB limits.",
        },
        {
          title: "Choose Crop/Fit style and download exact JPG",
          body: "Set Target file size (10 KB, 20 KB, 50 KB, 100 KB, 200 KB, or custom), verify the green under-target badge plus quality readout, and download the `-WxH.jpg` file.",
        },
      ],
    },
    environments: {
      heading: "Built for strict government portals, exams, and creators",
      intro:
        "Portal upload validators fail photos for exceeding a narrow 20 KB or 50 KB cap just as often as wrong aspect ratios. Marvedge solves both at once.",
      cards: [
        {
          title: "GATE, SSC, UPSC, Sarathi & PAN",
          steps: [
            "Built-in presets for Aadhaar, PAN Form 49A, Voter ID, Sarathi Driving Licence (<= 20 KB), SSC, UPSC ORA, IBPS, GATE, and NTA JEE/NEET.",
            "Dedicated rectangular signature presets (SSC 6x2cm <= 20 KB, IBPS <= 20 KB, Sarathi, GATE, NTA).",
            "Automatic quality tuning avoids making small 200x230px photos unreadable.",
          ],
        },
        {
          title: "US, UK, Schengen, AU & GCC",
          steps: [
            "Preset groups for USA & Canada, Europe & UK, Middle East, Australia & NZ, Latin America, and Africa.",
            "Matches square (e.g. 600x600px US / Indian Visa) or vertical millimeter ratios cleanly.",
            "Use Crop to fill for centered portraits or Fit inside to preserve full framing with crisp white padding.",
          ],
        },
        {
          title: "LinkedIn, Shop & Résumés",
          steps: [
            "Quick categories for Job & profile headshots, Social media sizes, Documents, and Ecommerce product thumbnails.",
            "Toggle Lock aspect ratio on or off when entering custom pixel dimensions.",
            "Instant live canvas update shows exact final bytes before downloading.",
          ],
        },
      ],
      note: "How our smart KB solver protects detail. Unlike naive tools that shrink pixel resolution right away, Marvedge tunes JPEG encoding quality first (via `fitToTarget`). It only steps down output pixel dimensions if the lowest acceptable quality still cannot fit under a tight 10 KB or 20 KB portal ceiling.",
    },
    specs: {
      heading: "Preset coverage, scaling logic, and output specs",
      intro:
        "Verify exact solver behavior before submitting time-sensitive applications or bulk store imagery.",
      items: [
        {
          label: "Preset groups",
          value: "11 categories",
          detail: "7 global regions + Documents, Job & profile, Social media, and Ecommerce.",
        },
        {
          label: "Quick KB caps",
          value: "10 - 200+ KB",
          detail: "1-click chips for <= 10, 20, 50, 100, 200 KB or any custom integer KB limit.",
        },
        {
          label: "Fit behaviors",
          value: "Crop / Fit / Stretch",
          detail:
            "Crop fills exact frame cleanly; Fit adds white bars; Stretch fits any explicit dimension.",
        },
        {
          label: "Default quality",
          value: "92% JPEG",
          detail: "Applied cleanly whenever Target file size is left blank (No target).",
        },
        {
          label: "Output filename",
          value: "name-WxH.jpg",
          detail: "Universal .jpg file accepted by government, exam, and university forms.",
        },
        {
          label: "Privacy guarantee",
          value: "Device-only",
          detail: "Passport photos, PAN cards, and signatures never leave your device memory.",
        },
      ],
      callouts: [
        {
          title: "Crop to fill vs Fit inside for passport photos",
          body: "Always pick Crop to fill when turning a wide phone portrait into a vertical 35x45mm ID photo, unless doing so cuts off hair or chin. Only use Fit inside if an edge must stay completely uncropped.",
        },
        {
          title: "Handling ultra-strict <= 20 KB signature scans",
          body: "Crop tightly around the ink signature before uploading, photograph on bright white paper, and pick the exact exam signature preset (e.g. SSC 709x236 or IBPS 140x60) so white space compresses tightly under 20 KB.",
        },
        {
          title: "Reading the live warning alert",
          body: "If an orange warning banner shows 'still above your KB target' or warns quality dropped below 25%, pick slightly smaller pixel dimensions so legible sharpness returns cleanly.",
        },
      ],
    },
    compatibility: {
      heading: "Supported image inputs and portal requirements",
      intro: "See what image formats decode smoothly and how to match strict form rules.",
      columns: ["Requirement or source", "Supported", "Guidance"],
      rows: [
        {
          target: "Phone JPG, PNG, or WebP photos",
          status: "Yes",
          detail: "Normalized reliably to crisp standard .jpg output for form compatibility.",
        },
        {
          target: "Physical mm/cm conversion (e.g. 3.5x4.5 cm)",
          status: "Yes",
          detail: "Built-in country presets map 300 DPI equivalent pixel dimensions automatically.",
        },
        {
          target: "Exact max-KB enforcement (e.g. 10-50 KB)",
          status: "Yes",
          detail: "Binary quality search checks real Blob byte size before showing checkmark.",
        },
        {
          target: "Transparent background PNG retention",
          status: "No",
          detail:
            "Outputs universal JPEG for form compatibility; use Image Compressor (WebP) or Converter (PNG) for alpha.",
        },
        {
          target: "PDF / TIFF scans",
          status: "Partial",
          detail: "Save PDF scan pages or TIFFs as PNG/JPG first before cropping here.",
        },
      ],
    },
    troubleshooting: {
      heading: "Troubleshooting image resizing and KB targets",
      intro: "Fix soft pixels, framing crops, or stubborn target-size warnings.",
      items: [
        {
          issue: "Portal still complains file is over limit even when under target",
          fix: "Some legacy portals measure size in kilobytes using 1,000 bytes instead of 1,024 (KiB). Set Target file size 2 KB lower (for instance 18 KB instead of 20 KB) to guarantee safety.",
        },
        {
          issue: "Warning says: quality below 25%, image will look soft",
          fix: "The pixel box is too large for the tiny byte cap. Lower Width and Height by 25%-30% while keeping ratio locked so JPEG can allocate clean bits per pixel.",
        },
        {
          issue: "Sides of my headshot got cropped off",
          fix: "Change Fit from Crop to fill to Fit inside (white bars) or crop a looser photo around your shoulders first.",
        },
        {
          issue: "Preset badge disappeared when editing size",
          fix: "Preset tiles highlight only while width, height, and KB target match that preset exactly. Re-click any preset tile to restore its exact rules.",
        },
      ],
    },
    privacy: {
      heading: "Safe for passports, Aadhaar, PAN, and personal IDs",
      paragraphs: [
        "Your face photos, scanned documents, and signatures are processed inside local HTML5 Canvas memory only. Generated JPEGs do not copy old GPS tags or device EXIF headers from your phone gallery.",
        "As soon as you click New image or close the browser tab, object URLs are released cleanly.",
      ],
    },
  },

  "image-format-converter": {
    seoTitle: "Free Image Format Converter (PNG, JPG, WebP) | Marvedge",
    metaDescription:
      "Batch convert PNG, JPG, WebP, GIF, or SVG images to PNG, JPG, or WebP inside your browser. Save individual files or download all together in one ZIP.",
    primaryKeyword: "image format converter",
    applicationCategory: "MultimediaApplication",
    definitionLead:
      "Marvedge Image Format Converter transforms images between PNG, JPG, and WebP locally inside your browser without uploading files. Drop one or dozens of mixed image files, pick your destination format, inspect exact output byte sizes per file, and save singles or download the entire batch bundled into a single .zip archive.",
    lastUpdated: "November 2026",
    lastUpdatedIso: "2026-11-12",
    capabilities: [
      "Convert to PNG, JPG, or WebP",
      "Mixed batch upload support",
      "1-click ZIP archive download",
      "Auto white fill for PNG-to-JPG",
    ],
    howItWorks: {
      heading: "How to convert image formats in batches",
      intro:
        "Every file renders through your browser's native Canvas decoder at 92% encode quality for sharp, production-ready conversions.",
      steps: [
        {
          title: "Drop mixed image files or try samples",
          body: "Add WebP downloads, PNG logos, or JPG photos together into the dropzone, or click Try sample images to test a 2-file batch immediately.",
        },
        {
          title: "Select target format: PNG, JPG, or WebP",
          body: "Tap PNG for lossless sharp UI edges and transparency, JPG for universal legacy portals (transparent areas turn crisp #FFFFFF), or WebP for compact web performance.",
        },
        {
          title: "Convert and save singles or ZIP",
          body: "Click Convert, inspect per-file thumbnails and output byte weights, then click Save on individual items or Download all as ZIP for multi-file batches.",
        },
      ],
    },
    environments: {
      heading: "Instant relief from annoying .webp downloads",
      intro:
        "Whenever Chrome or Safari saves website assets as .webp that Keynote, Word, or older CMS tools refuse to open, drop the whole folder here.",
      cards: [
        {
          title: "WebP to PNG / JPG",
          steps: [
            "Open modern website downloads cleanly in legacy office suites, Adobe CS, or print RIP software.",
            "Choose PNG to keep transparent logo cutouts intact.",
            "Choose JPG to fill transparent channels neatly with solid white.",
          ],
        },
        {
          title: "PNG / JPG to WebP",
          steps: [
            "Modernize heavy PNG blog images and JPG hero photos before pushing to staging.",
            "Preserve alpha transparency smoothly while trimming weight dramatically.",
            "Maintain original pixel dimensions with crisp 0.92 encoding.",
          ],
        },
        {
          title: "Mac, Windows & Mobile",
          steps: [
            "Faster than opening Preview or Photoshop on 20 individual files.",
            "Built-in JSZip bundles converted sets into converted-images.zip in one click.",
            "Works across iPhone Safari, Android Chrome, and desktop browsers alike.",
          ],
        },
      ],
      note: "Transparent-to-JPG safety built in. Naively saving a transparent PNG as JPG often leaves ugly black halos or crushed black backgrounds in cheap converters. Marvedge fills the Canvas with pure white (#FFFFFF) before drawing transparent assets into JPEG.",
    },
    specs: {
      heading: "Conversion engine specifications",
      intro:
        "Understand exact encoder defaults before converting brand logos, photography, or vector exports.",
      items: [
        {
          label: "Input support",
          value: "Any browser image",
          detail: "PNG, JPG, WebP, BMP, single-frame GIF, AVIF (where browser supports), and SVG.",
        },
        {
          label: "Output formats",
          value: "PNG · JPG · WebP",
          detail: "Full lossless PNG plus high-fidelity 92% JPG and WebP outputs.",
        },
        {
          label: "Batch limit",
          value: "Unlimited",
          detail: "Process multiple files together cleanly in memory.",
        },
        {
          label: "Archive export",
          value: "converted-images.zip",
          detail: "Downloads automatically when two or more converted files are ready.",
        },
        {
          label: "JPEG canvas fill",
          value: "#FFFFFF white",
          detail: "Replaces transparent background channels safely on JPG export.",
        },
        {
          label: "Dimensions",
          value: "Original 1:1",
          detail: "No accidental cropping or unexpected scaling during format conversion.",
        },
      ],
      callouts: [
        {
          title: "Converting SVG icons cleanly to PNG",
          body: "Your browser renders vector SVGs natively onto HTML5 Canvas at their natural intrinsic width and height, turning quick PNG rasterization into a one-click job without vector software.",
        },
        {
          title: "PNG vs WebP when keeping alpha channels",
          body: "Both PNG and WebP support transparent backgrounds cleanly. Pick PNG for pixel-exact master assets or print workflows; pick WebP for fast website embeds.",
        },
        {
          title: "Tuning aggressive file size reductions",
          body: "Format Converter locks encode quality at crisp 92% for clean fidelity. If you want an aggressive 30%-70% quality slider to minimize bytes, drop outputs into Image Compressor.",
        },
      ],
    },
    compatibility: {
      heading: "Format compatibility matrix",
      intro:
        "See how common desktop and camera image containers behave when converted inside the browser.",
      columns: ["Source format", "Supported", "Conversion behavior"],
      rows: [
        {
          target: "WebP (including transparent WebP)",
          status: "Yes",
          detail: "Converts cleanly to lossless transparent PNG or white-backed JPG.",
        },
        {
          target: "PNG & JPG",
          status: "Yes",
          detail: "Cross-converts cleanly between PNG, JPG, and WebP at full pixel width.",
        },
        {
          target: "AVIF images",
          status: "Partial",
          detail:
            "Converts cleanly in Chrome, Edge, Firefox, and Safari 16+ where AVIF decoding is active.",
        },
        {
          target: "SVG files with explicit dimensions",
          status: "Yes",
          detail: "Rasterizes smoothly onto PNG, JPG, or WebP.",
        },
        {
          target: "RAW (.CR2 / .NEF / .ARW) or HEIC on Windows Chrome",
          status: "No",
          detail:
            "HEIC opens inside Safari on Apple devices, but camera RAW requires Lightroom or Darktable first.",
        },
      ],
    },
    troubleshooting: {
      heading: "Troubleshooting image format conversions",
      intro: "Fast fixes if transparency, file sizes, or inputs behave unexpectedly.",
      items: [
        {
          issue: "Converted PNG came out bigger than original JPG",
          fix: "PNG uses lossless compression, so photographic noise expands cleanly compared to lossy JPG. Only pick PNG when you need alpha transparency or pixel-sharp diagrams; choose WebP or JPG for photography.",
        },
        {
          issue: "Download all as ZIP button isn't shown",
          fix: "The ZIP pack appears whenever 2 or more converted files are listed. Single-image runs show a direct Save button.",
        },
        {
          issue: "SVG rendered smaller than expected",
          fix: "Browser Canvas draws SVGs using their root width/height viewBox dimensions. Set explicit high viewBox pixel attributes or enlarge the source vector if needed.",
        },
        {
          issue: "Animated GIF exported as a single frame",
          fix: "Format Converter exports static images from the first decoded frame. Keep animations intact with GIF Compressor instead.",
        },
      ],
    },
    privacy: {
      heading: "Zero uploads across every file in your batch",
      paragraphs: [
        "converted-images.zip builds directly inside your browser RAM without any temporary server bucket. Convert unreleased campaign creatives, confidential decks, and customer logos safely offline.",
        "Re-rendering via Canvas wipes embedded device GPS tags cleanly from converted photographs.",
      ],
    },
  },

  "pdf-merger": {
    seoTitle: "Free PDF Merger & Splitter (Browser Private) | Marvedge",
    metaDescription:
      "Combine multiple PDFs in custom order or extract specific page ranges like 1-3, 5 cleanly in your browser using pdf-lib. Zero server uploads or page limits.",
    primaryKeyword: "pdf merger and splitter",
    applicationCategory: "UtilitiesApplication",
    definitionLead:
      "Marvedge PDF Merger & Splitter joins multiple PDF documents or extracts selected pages cleanly inside your browser powered by pdf-lib. Switch between Merge PDFs (with drag-free up/down page reordering) and Split / extract pages using comma ranges like 1-3, 5, with zero watermarks, file limits, or document uploads.",
    lastUpdated: "November 2026",
    lastUpdatedIso: "2026-11-12",
    capabilities: [
      "Merge & split in one workspace",
      "Reorder PDF files before merging",
      "Range syntax (1-3, 5, 8-10)",
      "Zero server uploads for legal/tax PDFs",
    ],
    howItWorks: {
      heading: "How to merge or split PDFs securely in your browser",
      intro:
        "Document bytes are parsed and copied natively into fresh PDF containers in local JavaScript memory, keeping text searchable and crisp.",
      steps: [
        {
          title: "Select Merge PDFs or Split / extract pages mode",
          body: "Pick your workflow tab at the top. You can test either mode right away with built-in sample documents generated cleanly inside your browser.",
        },
        {
          title: "Arrange files or specify target page ranges",
          body: "In Merge mode, use the up/down arrows or remove icon to lock exact document order and see live per-file page counts. In Split mode, type page lists such as 1-3, 5, 8-10.",
        },
        {
          title: "Generate and download clean PDF output",
          body: "Click Merge PDFs or Extract pages to export merged.pdf or extracted-pages.pdf instantly with selectable text, vector diagrams, and fonts intact.",
        },
      ],
    },
    environments: {
      heading: "Built for sensitive contracts, invoices, and reports",
      intro:
        "Unlike cloud PDF tools that upload tax returns, offer letters, or legal NDAs onto unknown servers before merging them, Marvedge runs exclusively in your tab.",
      cards: [
        {
          title: "Contracts, Invoices & Tax Packets",
          steps: [
            "Combine scanned receipts, signed exhibits, and itemized PDF invoices into merged.pdf.",
            "Pull page 1 or signature pages cleanly out of 80-page vendor MSAs via Split mode.",
            "Keep confidential payroll and banking PDFs safely inside corporate browsers.",
          ],
        },
        {
          title: "Application Packets & Transcripts",
          steps: [
            "Merge resume, cover letter, portfolio, and reference letters into exact reviewer order.",
            "See exact verified page count per file before combining.",
            "Split giant textbook chapters into concise study handouts by range.",
          ],
        },
        {
          title: "Windows, Mac & Chromebooks",
          steps: [
            "Replaces clunky desktop Print-to-PDF hacks that rasterize crisp fonts into blurry images.",
            "Works reliably on locked-down office Chromebooks and corporate laptops without installing Acrobat.",
            "Supports multi-range extraction (e.g., 2, 4-7, 12) in one pass.",
          ],
        },
      ],
      note: "True vector page copying (zero raster blur). Print-to-PDF workarounds often flatten text into heavy bitmaps. Using pdf-lib, Marvedge copies underlying PDF object trees directly, preserving searchable text, clickable outlines, and sharp vector typography.",
    },
    specs: {
      heading: "Technical specs and page range rules",
      intro:
        "Clear parsing rules prevent missed pages when combining or breaking apart multi-section reports.",
      items: [
        {
          label: "PDF Engine",
          value: "pdf-lib client",
          detail: "Loads, counts, and copies raw PDF page dictionaries locally in memory.",
        },
        {
          label: "Split syntax",
          value: "1-3, 5, 8-10",
          detail: "Supports individual pages, ascending hyphenated ranges, and comma combinations.",
        },
        {
          label: "Encrypted flag",
          value: "ignoreEncryption",
          detail:
            "Handles owner/permission restrictions smoothly when files are viewable in browser.",
        },
        {
          label: "Output filenames",
          value: "merged / extracted",
          detail: "Exports standard merged.pdf or extracted-pages.pdf immediately.",
        },
        {
          label: "Page count limit",
          value: "Browser RAM only",
          detail: "No artificial 2-document cap or forced hourly quota.",
        },
        {
          label: "Text fidelity",
          value: "100% preserved",
          detail: "Copyable text layers and vector illustrations remain untouched.",
        },
      ],
      callouts: [
        {
          title: "Out-of-bounds numbers fail safely",
          body: "If you enter `1-20` on a 12-page PDF, pages past page 12 are quietly clamped rather than crashing mid-extraction.",
        },
        {
          title: "Reorder multiple times before merging",
          body: "In Merge mode, use the up and down arrow controls on any file card, or drop extra files afterward, since your order remains live until export.",
        },
        {
          title: "Sample test files available anytime",
          body: "Not ready with real tax or legal files yet? Load our instant browser-synthesized Quarterly Report and Invoice #1042 dummy PDFs in one click.",
        },
      ],
    },
    compatibility: {
      heading: "PDF type support matrix",
      intro: "Check how special PDF features behave during client-side merging and extraction.",
      columns: ["PDF document characteristic", "Supported", "Technical notes"],
      rows: [
        {
          target: "Standard PDFs (Word, Figma, Docs, Print)",
          status: "Yes",
          detail: "Merges and splits instantaneously with fonts and vectors intact.",
        },
        {
          target: "Scanned image-based PDFs",
          status: "Yes",
          detail: "Copies full scanned page streams smoothly in original resolution.",
        },
        {
          target: "Owner-locked (print/edit restricted) PDFs",
          status: "Partial",
          detail: "Loads cleanly when no user open-password is set; copies page trees smoothly.",
        },
        {
          target: "Open-password encrypted PDFs (AES prompt)",
          status: "No",
          detail:
            "Must be unlocked in your PDF viewer first if it requires a password just to view pages.",
        },
        {
          target: "Live interactive AcroForm fields",
          status: "Partial",
          detail:
            "Visual field appearances preserve cleanly; flatten filled forms first if sharing finalized signatures.",
        },
      ],
    },
    troubleshooting: {
      heading: "Troubleshooting PDF merge and split runs",
      intro: "Quick steps if a PDF refuses to parse or a range comes back empty.",
      items: [
        {
          issue: "Error: One of those files couldn't be read as a PDF",
          fix: "Your file may be corrupted, require an open password, or actually be a non-PDF saved with a .pdf suffix (such as a raw HTML page). Open it in Chrome/Preview and Print -> Save as PDF to normalize it cleanly.",
        },
        {
          issue: "Merge button is disabled after adding a file",
          fix: "Merge mode needs at least two PDFs loaded in the list. Drop a second PDF or toggle to Split / extract pages if pulling pages from one document.",
        },
        {
          issue: "Error: Enter page numbers like 1-3, 5",
          fix: "Double-check your page list matches numbers between 1 and the shown total page count, avoiding letters or reversed ranges like 5-2.",
        },
        {
          issue: "Browser slows down merging 100 MB+ files",
          fix: "Split huge multi-hundred-page scans into smaller batches, since browser RAM holds both source arrays and output pages simultaneously.",
        },
      ],
    },
    privacy: {
      heading: "Private enough for tax returns and legal filings",
      paragraphs: [
        "No external workers ever read, cache, OCR, or index your PDF pages. Marvedge inserts zero branded stamps onto real merged or extracted pages.",
        "Switching modes or closing the tab clears loaded ArrayBuffers immediately.",
      ],
    },
  },

  "favicon-generator": {
    seoTitle: "Free Favicon Generator (PNG Sizes + ZIP) | Marvedge",
    metaDescription:
      "Create crisp 16px to 512px PNG favicons, apple-touch-icon.png, live browser tab preview, custom rounding, and HTML snippet tags in one browser ZIP.",
    primaryKeyword: "favicon generator",
    applicationCategory: "UtilitiesApplication",
    definitionLead:
      "Marvedge Favicon Generator turns any square or rectangular brand logo into a complete 6-size PNG icon pack directly inside your browser. Preview how your mark looks inside a live 16x16 browser tab header, adjust corner rounding from 0% to 100%, and download favicons.zip containing every size plus a ready-to-paste snippet.html file.",
    lastUpdated: "November 2026",
    lastUpdatedIso: "2026-11-12",
    capabilities: [
      "16, 32, 48, 180, 192 & 512px PNGs",
      "Live 16px browser tab preview",
      "0-100% corner radius rounding",
      "Includes apple-touch-icon & snippet.html",
    ],
    howItWorks: {
      heading: "How to generate a production favicon pack in 20 seconds",
      intro:
        "Modern browsers, iOS home screens, and Android PWAs expect specific icon dimensions rather than a single outdated .ico file.",
      steps: [
        {
          title: "Drop your brand mark or load the sample logo",
          body: "Upload a PNG, SVG, WebP, or JPG logo (square padding works cleanest), or click Try a sample logo to preview the full pipeline first.",
        },
        {
          title: "Check the 16px browser tab preview and tune corner radius",
          body: "Inspect the simulated browser tab strip preview immediately. Slide Corner rounding from sharp 0% squares to soft 20% squircles or 100% clean circular avatars.",
        },
        {
          title: "Download icon pack ZIP and drop snippet.html in <head>",
          body: "Click Download icon pack to grab favicons.zip containing all 6 PNGs plus ready-to-paste <link> tags.",
        },
      ],
    },
    environments: {
      heading: "Every icon size modern platforms check for",
      intro:
        "Included dimensions cover desktop browser tabs, bookmark bars, mobile home screens, and progressive web app manifests.",
      cards: [
        {
          title: "16px, 32px & 48px PNGs",
          steps: [
            "Sharp favicon-16x16.png and favicon-32x32.png stay recognizable in dark and light Chrome/Safari/Firefox tabs.",
            "favicon-48x48.png satisfies Google Search result site-icon minimum display requirements.",
            "Live tab bar preview lets you catch blurry tiny strokes before deploying.",
          ],
        },
        {
          title: "iOS 180px & Android 192px",
          steps: [
            "Automatically names the 180x180 file apple-touch-icon.png for iPhone and iPad Share -> Add to Home Screen.",
            "Exports favicon-192x192.png for Chrome Android shortcuts and Web App Manifest icons.",
            "Custom corner rounding trims harsh white square edges cleanly.",
          ],
        },
        {
          title: "512px High-Res Master",
          steps: [
            "Outputs crisp favicon-512x512.png ready for site.webmanifest splash screens and app directories.",
            "Generates clean `<link>` tags inside snippet.html so no syntax errors slip into production.",
            "Bundles all 7 files cleanly via JSZip in local RAM.",
          ],
        },
      ],
      note: "Why modern PNG packs beat legacy multi-frame .ico blobs. All evergreen browsers, Google Search snippets, iOS Safari, and PWA manifests prefer lightweight PNG `<link rel='icon'>` tags with explicit `sizes` attributes, delivering sharper alpha antialiasing and crisp scaling.",
    },
    specs: {
      heading: "Generated icon pack inventory",
      intro: "Every download of favicons.zip includes seven cleanly named production files.",
      items: [
        {
          label: "Browser tab icons",
          value: "16px, 32px, 48px",
          detail: "Named favicon-16x16.png, favicon-32x32.png, and favicon-48x48.png.",
        },
        {
          label: "iOS home screen",
          value: "180 x 180 px",
          detail: "Saved directly as apple-touch-icon.png ready for Apple touch devices.",
        },
        {
          label: "Android & PWA",
          value: "192px & 512px",
          detail: "Ready for site.webmanifest icons arrays and store/directory listings.",
        },
        {
          label: "Corner radius",
          value: "0% - 100%",
          detail: "Clips canvas roundRect dynamically; defaults to a modern 20% radius.",
        },
        {
          label: "Included markup",
          value: "snippet.html",
          detail: "Ready-to-paste <link rel='icon'> and <link rel='apple-touch-icon'> HTML.",
        },
        {
          label: "Processing location",
          value: "100% browser",
          detail: "Uses native HTML5 Canvas scaling + client-side JSZip packaging.",
        },
      ],
      callouts: [
        {
          title: "What makes a good 16x16 favicon",
          body: "Drop detailed wordmarks and tiny gradients; at 16 pixels tall, bold standalone logomarks (one letter, symbol, or geometric shape) stay sharp and readable beside dozens of open tabs.",
        },
        {
          title: "White background tip for apple-touch-icon",
          body: "iOS turns transparent pixels inside apple-touch-icon.png black on the home screen. If your mark is dark on transparent PNG, upload a logo with a clean background fill or mild 20% rounded tile.",
        },
        {
          title: "Google Search favicon indexing guidelines",
          body: "Google recommends site icons be multiples of 48px (such as our included 48x48 and 192x192 files) served consistently from root `/favicon-...` paths.",
        },
      ],
    },
    compatibility: {
      heading: "Logo input formats and platform coverage",
      intro: "See what happens across input formats and destination web frameworks.",
      columns: ["Target or input", "Supported", "Setup notes"],
      rows: [
        {
          target: "Square transparent PNG or SVG logos",
          status: "Yes",
          detail: "Produces crisp transparency-aware rounded icons cleanly.",
        },
        {
          target: "Rectangular banner logos",
          status: "Partial",
          detail:
            "Automatically center-crops a square from the middle; crop your icon mark square first for best results.",
        },
        {
          target: "Next.js, Astro, Vite, React, Webflow & Framer",
          status: "Yes",
          detail:
            "Drop unzipped PNGs into /public/ and paste snippet.html inside your document <head>.",
        },
        {
          target: "Legacy IE10 .ico container",
          status: "No",
          detail:
            "Outputs modern lossless PNG sets; Chrome, Safari, Edge, Firefox, iOS, and Android read PNG icons natively.",
        },
      ],
    },
    troubleshooting: {
      heading: "Troubleshooting favicon generation and deployment",
      intro: "Fix browser cache delays, dark-mode contrast, and cropping surprises.",
      items: [
        {
          issue: "Updated favicon still shows old globe after deploy",
          fix: "Browsers aggressively cache favicons. Hard-refresh, test in an incognito window, or append `?v=2` to your `<link href='/favicon-32x32.png?v=2'>` paths cleanly.",
        },
        {
          issue: "Wordmark text inside favicon looks unreadable",
          fix: "Full company names do not fit inside 16x16 squares. Upload just your brand symbol, monogram letter, or icon mark instead.",
        },
        {
          issue: "Left and right edges of logo got clipped",
          fix: "The generator extracts a centered square along the logo's shortest axis. Give your logo extra transparent square canvas padding before dropping it in.",
        },
        {
          issue: "Corner rounding clips my circular mark asymmetrically",
          fix: "Make sure your source canvas is an exact 1:1 square before adjusting Corner rounding to 100%.",
        },
      ],
    },
    privacy: {
      heading: "Pre-launch brand marks never leave your machine",
      paragraphs: [
        "All six PNG resolutions generate inside local browser tabs with zero network transmission. No tracker comments or watermarks inside snippet.html or generated PNG files.",
        "Drag Corner rounding between 0%, 20%, and 100% repeatedly with instant zero-latency re-renders.",
      ],
    },
  },

  "video-aspect-ratio": {
    seoTitle: "Video Aspect Ratio Converter (16:9 to 9:16) | Marvedge",
    metaDescription:
      "Convert video aspect ratios between 16:9, 9:16, 1:1, and 4:5 in your browser. Pick blurred background fill, solid bars, or crop-to-fill cleanly.",
    primaryKeyword: "video aspect ratio converter",
    applicationCategory: "MultimediaApplication",
    definitionLead:
      "Marvedge Video Aspect Ratio Converter reframes existing videos between YouTube landscape (16:9), Reels/Shorts vertical (9:16), square (1:1), and LinkedIn/Instagram feed portrait (4:5) inside your browser. Choose blurred background padding, custom solid bars, or edge-to-edge crop, preview motion live, and export MP4/WebM with audio intact.",
    lastUpdated: "November 2026",
    lastUpdatedIso: "2026-11-12",
    capabilities: [
      "16:9, 9:16, 1:1 & 4:5 output presets",
      "Blurred background, solid bars & crop modes",
      "Side-by-side live motion canvas preview",
      "Keeps original video audio tracks",
    ],
    howItWorks: {
      heading: "How to convert landscape video to 9:16, 4:5, or 1:1",
      intro:
        "Turn one desktop demo recording into vertical mobile clips or social feed videos without heavy timeline editing software.",
      steps: [
        {
          title: "Drop a video or load the sample recording",
          body: "Select an MP4, MOV, or WebM clip from your desktop or phone, or click Try a sample clip to test all four aspect ratios cleanly.",
        },
        {
          title: "Pick target aspect ratio and fill treatment",
          body: "Toggle 16:9 (1280x720), 9:16 (720x1280), 1:1 (1080x1080), or 4:5 (1080x1350). Pick Blurred background to keep screen UI completely visible, Solid color bars with a custom hex swatch, or Crop to fill.",
        },
        {
          title: "Export reframed video with audio preserved",
          body: "Click Export video and keep this browser tab open during real-time recording, then save the `{name}-{ratio}` output.",
        },
      ],
    },
    environments: {
      heading: "Tailored canvas sizes for every social feed",
      intro:
        "Uploading horizontal 16:9 screen demos straight onto vertical feeds wastes three-quarters of mobile screen real estate. Reframe cleanly first.",
      cards: [
        {
          title: "9:16 Vertical (720 x 1280)",
          steps: [
            "Keeps full horizontal SaaS software UI uncropped when paired with Blurred background mode.",
            "Eliminates tiny letterboxed thumbnails inside vertical mobile video players.",
            "Smooth 24px blur + dim backdrop puts clear focus back onto crisp foreground screens.",
          ],
        },
        {
          title: "4:5 Portrait (1080 x 1350) & 1:1",
          steps: [
            "4:5 Portrait claims maximum vertical feed height on LinkedIn and Instagram without forced Reels cropping.",
            "1:1 Square fits cleanly into older embedded blog grids, newsletters, and documentation hubs.",
            "Match brand palette cleanly using the Solid color bars hex picker.",
          ],
        },
        {
          title: "16:9 Landscape (1280 x 720)",
          steps: [
            "Rescue vertical iPhone captures into clean desktop widescreen 16:9 documentation embeds.",
            "Blurs vertical side margins naturally instead of leaving harsh black pillars.",
            "Exports clean 4 Mbps encoded streams with synchronized audio.",
          ],
        },
      ],
      note: "Blurred background vs Crop to fill for screen recordings. Always pick Blurred background or Solid color bars when reframing software demos from 16:9 to 9:16, because Crop to fill cuts off left/right sidebars and menus suited only for centered talking-head shots.",
    },
    specs: {
      heading: "Exact preset dimensions and fill modes",
      intro:
        "Built-in presets export crisp HD resolutions optimized for social re-compression pipelines.",
      items: [
        {
          label: "16:9 Landscape",
          value: "1280 x 720 px",
          detail: "HD widescreen output for YouTube, product embeds, and help articles.",
        },
        {
          label: "9:16 Vertical",
          value: "720 x 1280 px",
          detail: "Mobile-first portrait ideal for TikTok, Instagram Reels, and YouTube Shorts.",
        },
        {
          label: "1:1 Square",
          value: "1080 x 1080 px",
          detail:
            "Balanced square frame for social feeds, carousels, and clean documentation slots.",
        },
        {
          label: "4:5 Portrait",
          value: "1080 x 1350 px",
          detail: "Highest-visibility non-Reels aspect ratio across LinkedIn and Instagram feeds.",
        },
        {
          label: "Export bitrate",
          value: "4.0 Mbps · 30fps",
          detail: "Maintains sharp interface fonts even through platform re-encoding.",
        },
        {
          label: "Processing scope",
          value: "100% browser",
          detail: "Canvas real-time compositor + MediaRecorder with source audio stream.",
        },
      ],
      callouts: [
        {
          title: "Real-time compositor preview before export",
          body: "Unlike blind conversion queues, clicking play on the source player renders every fill frame onto the checkerboard preview canvas immediately.",
        },
        {
          title: "Custom brand bars with Solid color mode",
          body: "Want vertical product demos framed on warm sand, pure black, or company navy? Pick Solid color bars and sample any hex color directly.",
        },
        {
          title: "Keeping exports snappy",
          body: "Just like Video Compressor, recording runs at 1x video speed in the visible foreground tab so no massive cloud servers need your private raw clips.",
        },
      ],
    },
    compatibility: {
      heading: "Video format and mode compatibility",
      intro: "Review supported video containers and what changes between browsers.",
      columns: ["Input or browser context", "Supported", "Details"],
      rows: [
        {
          target: "H.264 MP4 & QuickTime MOV",
          status: "Yes",
          detail: "Cleanly reframes and outputs H.264 MP4 in Chrome/Edge/Safari where supported.",
        },
        {
          target: "WebM captures",
          status: "Yes",
          detail: "Reframes cleanly across desktop Chromium, Edge, and Firefox browsers.",
        },
        {
          target: "Audio tracks on input video",
          status: "Yes",
          detail: "Pipes voiceover and background audio into exported file.",
        },
        {
          target: "Keep tab visible during export",
          status: "Partial",
          detail: "Required so browser animation loops keep encoding frames at full 30 fps rate.",
        },
        {
          target: "Variable focal-point panning within crop",
          status: "No",
          detail:
            "Crop mode centers strictly around the geometric midpoint; use Blur/Pad for side menus.",
        },
      ],
    },
    troubleshooting: {
      heading: "Troubleshooting video aspect ratio exports",
      intro: "Fix canvas blur, cropped edges, or slow export tabs.",
      items: [
        {
          issue: "Crop to fill cut off important navigation buttons",
          fix: "Switch Fill style from Crop to fill to Blurred background or Solid color bars so the entire original 16:9 canvas fits cleanly inside 9:16 or 4:5.",
        },
        {
          issue: "Right-side preview canvas looks blank initially",
          fix: "Press Play briefly or scrub the source video player on the left so the first frame paints into the HTML5 video buffer.",
        },
        {
          issue: "Export stalled around 20% after switching apps",
          fix: "Browser power-saving stalls background tab painting. Stay on this tab until Export reaches 100%.",
        },
        {
          issue: "File exported as .webm on Firefox",
          fix: "MediaRecorder defaults to WebM in Firefox; run inside Chrome, Edge, or Safari if you explicitly need an `.mp4` file container.",
        },
      ],
    },
    privacy: {
      heading: "Zero uploads for confidential roadmap or founder videos",
      paragraphs: [
        "Unannounced launch trailers and internal training recordings never touch cloud queues. Export clean full-bleed social assets ready for brand channels and paid ads.",
        "No external re-encoding server injects unwanted static or fades out closing remarks.",
      ],
    },
  },

  "link-shortener": {
    seoTitle: "Free URL Shortener (Custom Slugs & QR Code) | Marvedge",
    metaDescription:
      "Shorten URLs into clean /go/ links with optional custom names, password locks, auto expiration dates, and instant PNG QR codes without signup.",
    primaryKeyword: "url link shortener",
    applicationCategory: "UtilitiesApplication",
    definitionLead:
      "Marvedge Link Shortener turns unwieldy tracking URLs into clean `/go/` short links ready to share across decks, QR codes, and social profiles. Toggle optional controls on demand to claim a custom slug (3 to 40 characters), enforce a link password, set exact expiration timestamps, and download an instant matching QR code PNG.",
    lastUpdated: "November 2026",
    lastUpdatedIso: "2026-11-12",
    capabilities: [
      "Optional custom /go/ slug",
      "4+ char password protection",
      "Hourly, daily or custom expiry",
      "Instant matching PNG QR code",
    ],
    howItWorks: {
      heading: "How to create a custom, expiring, or password-locked link",
      intro:
        "Keep everyday links friction-free, or toggle security and expiration controls before clicking Shorten Link.",
      steps: [
        {
          title: "Paste your destination URL",
          body: "Paste a full `https://` URL directly into the bar, or click the Paste button to read from your system clipboard with one tap.",
        },
        {
          title: "Toggle optional slug, password, expiration, or QR",
          body: "Pick Custom Link for a readable `/go/slug` (3-40 letters, numbers, hyphens, or underscores), Password Protection (min 4 characters), Set Expiration (1h, 24h, 7d, 30d, or custom date), or Generate QR Code.",
        },
        {
          title: "Create link, copy URL, and save paired QR",
          body: "Click Shorten Link to generate your active short link immediately, check active policy status (`Never expires` or formatted expiration timestamp), Copy URL, and download `qr-code.png` if toggled.",
        },
      ],
    },
    environments: {
      heading: "Purpose-built for gated decks, temporary promos, and clean shares",
      intro:
        "Standard URL shorteners force you to upgrade to paid plans just to password-gate a confidential link or auto-expire a temporary campaign.",
      cards: [
        {
          title: "Confidential Buyer Links",
          steps: [
            "Turn ugly Notion, Google Drive, or Figma prototype URLs into crisp `/go/acme-demo` slugs.",
            "Enable Password Protection before sharing unreleased pitch decks or pricing calculators.",
            "Set a 7-day or 30-day automatic expiry so old proposal links close cleanly after negotiations.",
          ],
        },
        {
          title: "Clean URLs + Instant QR",
          steps: [
            "Toggle both Custom Link and Generate QR Code simultaneously before hitting Shorten.",
            "Shorter `/go/` paths create noticeably cleaner, less-dense QR grids that scan fast at small sizes.",
            "Download the generated `320px` black-on-white `qr-code.png` in one click.",
          ],
        },
        {
          title: "Time-Boxed Access",
          steps: [
            "Generate 1-hour or 24-hour temporary links for live webinar handouts or beta onboarding tokens.",
            "Pick Custom date and time using native calendar controls for fixed launch deadlines.",
            "Zero user signup barrier: create ready-to-share links immediately.",
          ],
        },
      ],
      note: "Notice: short links store the redirect mapping on the server. Unlike purely client-side tools, short redirects require a persistent routing record so visitors opening `/go/your-slug` arrive at your destination even after you close your tab. Use passwords and short expiry windows whenever sharing sensitive links.",
    },
    specs: {
      heading: "Slug rules, expiration options, and QR output specs",
      intro:
        "Clear validation boundaries prevent rejected links when creating branded URLs quickly.",
      items: [
        {
          label: "Custom slug syntax",
          value: "3 - 40 chars",
          detail: "Permits letters, numbers, hyphens (`-`), and underscores (`_`) under `/go/`.",
        },
        {
          label: "Password minimum",
          value: "4+ characters",
          detail: "Required cleanly on visitor interstitial before forwarding to target URL.",
        },
        {
          label: "Preset expirations",
          value: "1h, 24h, 7d, 30d",
          detail: "Plus Custom date picker accepting any future date and time.",
        },
        {
          label: "QR export format",
          value: "320px PNG",
          detail: "Generated locally in browser via qrcode library (`#000000` on `#FFFFFF`).",
        },
        {
          label: "Default longevity",
          value: "Permanent",
          detail: "Links stay live indefinitely unless Set Expiration is switched on.",
        },
        {
          label: "Signup required",
          value: "None",
          detail: "Immediate creation, copy, and testing straight from the tool bar.",
        },
      ],
      callouts: [
        {
          title: "Why custom slugs stay case-consistent",
          body: "Use lowercase letters and hyphens (e.g. `q4-roadmap`) so speakers can dictate `/go/q4-roadmap` aloud during live talks without visitors wondering about capitals.",
        },
        {
          title: "Combining Password + Expiration on high-stakes sends",
          body: "When distributing investor updates or pre-release builds, enabling both password lock and 7-day auto-expiry ensures stray old email forwards turn harmless.",
        },
        {
          title: "Need more visual QR branding?",
          body: "Copy your finished `/go/your-slug` short URL and drop it into Marvedge QR Code Generator if you want custom shapes, logo overlays, or printable A4 sheets.",
        },
      ],
    },
    compatibility: {
      heading: "Link features and redirect behavior",
      intro:
        "Understand how different target URLs, UTM parameters, and expiry states behave when shared.",
      columns: ["Link scenario", "Supported", "Redirect behavior"],
      rows: [
        {
          target: "Long SaaS / Docs / UTM campaign URLs",
          status: "Yes",
          detail: "Preserves full query strings and hash fragments accurately on redirect.",
        },
        {
          target: "Custom branded `/go/slug` aliases",
          status: "Yes",
          detail:
            "Available on demand whenever another creator has not already claimed that exact name.",
        },
        {
          target: "Password-gated redirects",
          status: "Yes",
          detail:
            "Prompts visitors for your password before revealing or forwarding the target URL.",
        },
        {
          target: "Time-limited expiring links",
          status: "Yes",
          detail:
            "Stops forwarding automatically once current UTC time crosses your chosen timestamp.",
        },
        {
          target: "Editing destination after creation",
          status: "No",
          detail:
            "Guest links lock their target on creation for safety; simply mint a fresh slug if the URL changes.",
        },
      ],
    },
    troubleshooting: {
      heading: "Troubleshooting short links",
      intro: "Fast answers when validation flags a slug, password, or paste.",
      items: [
        {
          issue: "Clipboard blocked the Paste button",
          fix: "Firefox and strict Safari privacy preferences block programmatic `clipboard.readText()`. Click inside the input bar and press Ctrl+V or Cmd+V manually.",
        },
        {
          issue: "Slug rejected or already taken",
          fix: "Custom names must be 3 to 40 characters using only letters, numbers, hyphens (`-`), or underscores (`_`) with no spaces or slashes. Try appending a year or team code if a generic word is already claimed.",
        },
        {
          issue: "Password shorter than 4 characters error",
          fix: "Enter at least 4 characters when Password Protection is active, or toggle Password Protection off if you want direct 1-click redirects.",
        },
        {
          issue: "Expiry must be in the future error",
          fix: "Verify your chosen Custom date and time lies ahead of your current local clock, or switch back to 24 hours or 7 days.",
        },
      ],
    },
    privacy: {
      heading: "Clean redirects with clear access rules",
      paragraphs: [
        "Visitors either go straight through or clear your clean password gate without banners. Using 1-hour or custom expiry controls shuts down temporary promo links automatically on schedule.",
        "Even when generating a paired QR image, that graphic builds completely in your browser DOM.",
      ],
    },
  },
};
