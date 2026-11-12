export type ToolFaq = {
  q: string;
  a: string;
};

export const toolFaqs: Record<string, ToolFaq[]> = {
  "mp4-to-gif": [
    {
      q: "Does my MP4 video upload to any remote server during conversion?",
      a: "No. The entire conversion process runs 100% locally in your web browser using client-side WebAssembly (Wasm) and HTML5 Canvas. Your video frames never touch an external cloud server, guaranteeing total privacy for proprietary screen recordings and confidential clips.",
    },
    {
      q: "What frame rate (FPS) should I select for my GIF?",
      a: "For technical documentation, bug reports, and software UI demos, 15 to 20 FPS provides the ideal balance between smooth animation and lightweight file size. For high-speed motion, social media memes, or marketing teasers, 24 to 30 FPS gives maximum fluidity.",
    },
    {
      q: "Why is the generated GIF sometimes larger in file size than the source MP4?",
      a: "MP4 uses modern temporal compression algorithms (H.264/H.265) that only store changes between frames. The legacy GIF format stores 256-color uncompressed or LZW-compressed raster frames. Trimming down to the exact 2 to 5 seconds needed and reducing the resolution width to 600px–800px ensures compact GIF sizes.",
    },
    {
      q: "Can I trim precise in and out points of the video?",
      a: "Yes. Use the visual dual-handle scrubber to set exact millisecond start and end timestamps so you only convert the critical product moment rather than entire recordings.",
    },
    {
      q: "How does color palette quantization work?",
      a: "GIF files are limited to a 256-color palette. Our engine analyzes the color distribution across all frames in your video and generates a custom optimized palette with dithering to prevent color banding and preserve UI fidelity.",
    },
    {
      q: "Does the GIF format support audio playback?",
      a: "No. The GIF specification (GIF89a) does not support audio tracks. If you require synchronized sound, consider keeping the file as an MP4 or sharing it via the Marvedge interactive player.",
    },
    {
      q: "Can I convert videos recorded on iPhone (HEVC/H.265 MOV)?",
      a: "Yes, as long as your modern web browser (Chrome, Edge, Safari) has native hardware decoding support for HEVC containers. For widest compatibility, standard MP4 with H.264 video streams is recommended.",
    },
    {
      q: "What are the recommended GIF file size limits for Slack, GitHub, and Jira?",
      a: "GitHub comments and issues cap animated GIFs at 10MB (under 5MB recommended). Slack displays GIFs inline best when under 8MB. Jira and Confluence work reliably with attachments under 10MB.",
    },
    {
      q: "Can I set the GIF to loop infinitely or only play once?",
      a: "By default, converted GIFs loop indefinitely (Netscape 2.0 loop extension = 0), which is standard for UI walkthroughs and documentation embeds.",
    },
    {
      q: "Can I adjust the export dimensions of the GIF?",
      a: "Yes. You can scale down resolution (e.g. 1080p source down to 640px, 800px, or custom width) while automatically maintaining the original aspect ratio.",
    },
  ],

  "image-compressor": [
    {
      q: "Which image formats can I compress with this tool?",
      a: "You can compress JPG, PNG, and modern WebP files directly in your browser with instant before-and-after side-by-side previews.",
    },
    {
      q: "Does compressing an image reduce its pixel dimensions?",
      a: "No. Compression optimizes the internal color encoding, Huffman tables, and discrete cosine transform matrices without altering the pixel width or height unless you explicitly resize it.",
    },
    {
      q: "How much file size reduction should I expect?",
      a: "Most digital camera photos and raw high-res screenshots drop between 60% and 85% in file size with zero perceptible difference in visual clarity at standard 70%–80% quality settings.",
    },
    {
      q: "Are my photos uploaded to a third-party server?",
      a: "Never. All compression calculations are performed entirely in your browser using local canvas decoding and encoding pipelines. Your files never leave your device.",
    },
    {
      q: "Can I compress multiple images simultaneously in batches?",
      a: "Yes. You can drag and drop dozens of files at once. The compressor batches through them multi-threaded, displays total kilobytes saved, and lets you download individual files or a merged bundle.",
    },
    {
      q: "Does the compressor strip private EXIF camera and GPS metadata?",
      a: "Yes. Re-encoding via the browser canvas strips hidden EXIF metadata, including GPS coordinates, camera serial numbers, and exposure parameters, for privacy.",
    },
    {
      q: "Does it preserve transparency for PNG files?",
      a: "Yes. When compressing to PNG or converting to WebP, alpha channel transparency is preserved completely without adding ugly black or white matte borders.",
    },
    {
      q: "What quality setting is recommended for web hero images?",
      a: "A quality setting between 72% and 80% is the industry standard for production websites. It yields lightweight assets that load in milliseconds while retaining crisp edges on 4K Retina displays.",
    },
    {
      q: "Why is WebP export smaller than standard JPG?",
      a: "WebP uses predictive intra-frame coding derived from the VP8 video standard, achieving roughly 30% greater compression efficiency compared to traditional JPEG at equivalent visual quality.",
    },
    {
      q: "Is there any limit on file upload size?",
      a: "Because processing happens locally within your browser's RAM, there are no arbitrary upload caps or subscription paywalls. You can easily compress 50MB+ raw camera files.",
    },
  ],

  "qr-code-generator": [
    {
      q: "What data types can I encode into the QR code?",
      a: "You can encode website URLs, plain text notes, Wi-Fi network credentials (SSID + password with automatic connect syntax), email addresses, phone numbers, and vCard contact details.",
    },
    {
      q: "Are these QR codes static or dynamic?",
      a: "These QR codes are 100% static and permanent. The encoded data is written directly into the matrix modules. They never route through a third-party redirect server and will never expire.",
    },
    {
      q: "Can I customize the colors and corner eye styles?",
      a: "Yes. You can customize the foreground ink color (pure black, deep slate blue, or brand accents) and background substrate, as well as corner radiuses and framing styles.",
    },
    {
      q: "What error correction level should I pick?",
      a: "We support Level L (7%), Level M (15%), Level Q (25%), and Level H (30%). If you plan to print small stickers or place a central logo inside the code, Level H or Q is recommended to ensure scannability even when partially obstructed.",
    },
    {
      q: "How does the physical print sheet layout work?",
      a: "Our print engine arranges your QR codes into real-world millimeter dimensions (e.g. 25mm, 35mm, 50mm) across standard paper formats (A4, A5, A6, US Letter) with adjustable margins and cutting lines.",
    },
    {
      q: "Should I export as PNG or vector SVG for professional printing?",
      a: "For professional printing, posters, merchandise, and signage, SVG (Scalable Vector Graphics) is recommended because it scales infinitely without pixelation. PNG is best for digital screens and emails.",
    },
    {
      q: "How dense can the text or URL be before scanners struggle?",
      a: "Standard smartphone cameras comfortably read up to 100–150 characters. For best reliability on small physical prints, use short, clean URLs or pair with our built-in link shortener.",
    },
    {
      q: "How does the Wi-Fi QR code work on smartphones?",
      a: "When an iOS or Android device scans the generated Wi-Fi code, the OS displays a prompt: 'Join network [SSID]?'. Tapping it connects the phone automatically without manual password entry.",
    },
    {
      q: "Can I print multiple identical copies on a single page?",
      a: "Yes. The print sheet builder lets you specify the number of grid rows and columns so you can print 20, 30, or 50 labels on a single sheet of paper with one click.",
    },
    {
      q: "Can I add a custom text caption below the QR code?",
      a: "Yes. You can add brand labels, table numbers, or call-to-action text (e.g., 'Scan to view menu' or 'Scan to connect') beneath each QR code on your print sheets.",
    },
  ],

  "video-compressor": [
    {
      q: "How does in-browser video compression work without servers?",
      a: "The tool utilizes modern WebCodecs and WebAssembly hardware-accelerated video decoders inside your browser. It trans採用 the video frames locally to lower bitrates or resolutions without network latency.",
    },
    {
      q: "What is target-size guidance?",
      a: "Target-size guidance calculates the exact video bitrate needed to land under strict platform upload caps (such as Discord's 8MB limit or Slack's 25MB ceiling) based on the duration of your video.",
    },
    {
      q: "Will compressing a video make it look blurry or washed out?",
      a: "Not when configured properly. Our engine uses two-pass rate control logic to allocate higher bitrates to complex scenes and lower bitrates to static frames, keeping UI text crisp while slashing file weight.",
    },
    {
      q: "Can I downscale video resolution (e.g., 4K or 1080p to 720p)?",
      a: "Yes. Downscaling from 1080p to 720p reduces total pixel count by more than 55%, producing dramatic file savings with minimal noticeable difference on laptop and mobile screens.",
    },
    {
      q: "Does compressing video alter or desync the audio track?",
      a: "No. The audio stream is either passed through directly or re-encoded with high-efficiency AAC at 128kbps, maintaining sample-level synchronization with the video stream.",
    },
    {
      q: "Which video containers are supported?",
      a: "You can compress standard MP4, WebM, and MOV containers. Output is delivered in universally compatible MP4 (H.264) format.",
    },
    {
      q: "Why does compressing large videos take several seconds?",
      a: "Video encoding requires evaluating millions of pixel blocks per second. Speed depends directly on your computer's CPU and GPU threads, but you save all the time normally wasted uploading hundreds of megabytes.",
    },
    {
      q: "Can I preview the compressed output before saving it?",
      a: "Yes. An integrated HTML5 video player provides instant playback of the compressed stream alongside exact before-and-after file size telemetry.",
    },
    {
      q: "Is there any watermark stamped on my compressed video?",
      a: "Never. Your output is 100% clean, unbranded, and ready for commercial client delivery or company presentations.",
    },
    {
      q: "Can I compress screen recordings made on Mac or Windows?",
      a: "Yes. Screen recordings made with QuickTime, Windows Game Bar, OBS, or browser screen capture are fully supported.",
    },
  ],

  "gif-compressor": [
    {
      q: "What techniques does this tool use to compress GIFs?",
      a: "It combines delta frame optimization (dropping pixels that don't change between frames), adaptive palette quantization (reducing from 256 to 128 or 64 colors), and optional frame rate thinning.",
    },
    {
      q: "What is delta frame optimization in GIFs?",
      a: "In software demos, large areas of the screen (like navigation bars or backdrops) remain completely static. Delta optimization replaces those redundant background pixels with transparency, drastically reducing file size.",
    },
    {
      q: "How much file size reduction can I expect from palette reduction?",
      a: "Dropping an animated GIF from 256 colors to 128 colors typically shaves 20% to 35% off the file size with virtually indistinguishable visual variance on flat software interfaces.",
    },
    {
      q: "Can I thin the frame rate (e.g., 30 FPS to 15 FPS)?",
      a: "Yes. The frame reduction slider lets you drop every second frame while automatically doubling frame delay, cutting total frames by 50% without speeding up animation playback.",
    },
    {
      q: "Will compressing a GIF break its infinite loop playback?",
      a: "No. The Netscape 2.0 application extension header stays intact, so your compressed GIF continues to loop across browsers and social feeds.",
    },
    {
      q: "Why are GIFs so much heavier than MP4 videos?",
      a: "GIF was designed in 1989 for static images and simple banners. It lacks modern inter-frame motion vectors and macroblocks. Our compressor extracts every byte of compression possible within the GIF specification.",
    },
    {
      q: "Is transparency preserved when compressing animated GIFs?",
      a: "Yes. Transparent pixels are mapped to index 0 of the color table and preserved across all animation frames.",
    },
    {
      q: "What is the recommended GIF size for email marketing newsletters?",
      a: "Email clients like Outlook and Gmail perform best with animated GIFs under 2MB to 3MB to prevent slow loading on mobile data connections.",
    },
    {
      q: "Does this compressor work entirely on client-side browser memory?",
      a: "Yes. No GIF frames are uploaded to external APIs. All decompression, color mapping, and encoding run locally in your browser.",
    },
    {
      q: "How does the live before-and-after comparison work?",
      a: "The tool displays synchronized side-by-side player viewports along with exact byte counts and percentage savings so you can verify visual sharpness before downloading.",
    },
  ],

  "image-resizer": [
    {
      q: "Can I resize images to exact pixel dimensions (width × height)?",
      a: "Yes. You can specify exact pixel values or use percentage scaling while optionally locking the aspect ratio to prevent distortion.",
    },
    {
      q: "What presets are included for social media platforms?",
      a: "We include instant one-click dimension presets for Instagram (Square 1080×1080, Portrait 1080×1350, Story 1080×1920), YouTube (Thumbnails 1280×720), Twitter/X (Header 1500×500, Post 1200×675), and LinkedIn (Banner 1584×396).",
    },
    {
      q: "What is the target file size (KB) limit feature?",
      a: "Many official portals (visa applications, passport forms, job boards, university admissions) require images under strict caps (e.g. 'Must be under 200KB' or 'Under 50KB'). Our iterative optimizer automatically tunes quality until the file lands precisely beneath your limit.",
    },
    {
      q: "Does resizing an image degrade its quality?",
      a: "Downscaling actually increases pixel density and apparent sharpness. Upscaling smaller images beyond their native resolution will cause softening, but our high-order bicubic filter minimizes pixelation.",
    },
    {
      q: "Can I crop images using visual drag handles?",
      a: "Yes. You can drag and position the interactive bounding box to crop focal areas, center portraits, or clip unwanted borders.",
    },
    {
      q: "Will resizing a transparent PNG add a black background?",
      a: "No. The alpha channel is preserved with full 8-bit transparency across all PNG and WebP exports.",
    },
    {
      q: "Can I resize multiple images at once?",
      a: "Yes. Batch mode applies your chosen dimensions, preset, or target file size across all dropped images simultaneously.",
    },
    {
      q: "Which file formats are supported for resizing?",
      a: "You can upload JPG, PNG, WebP, SVG, and BMP files.",
    },
    {
      q: "Are print dimensions like inches, centimeters, and 300 DPI supported?",
      a: "Yes. The document presets include standard A4, A5, and US Letter sizes calculated at 300 DPI for crisp physical printing.",
    },
    {
      q: "Is any image data uploaded to a server during resizing?",
      a: "None. All canvas transformations and file downloads are executed locally in browser memory.",
    },
  ],

  "image-format-converter": [
    {
      q: "Which image format conversions are supported?",
      a: "You can convert JPG, PNG, WebP, and static SVG files to PNG, JPG, or WebP in single uploads or multi-file batches.",
    },
    {
      q: "When should I convert PNG to WebP?",
      a: "WebP is the modern web standard supported by 97%+ of all browsers. Converting PNG to WebP typically reduces file size by 25%–35% while preserving full alpha transparency and sharp vector-like text.",
    },
    {
      q: "What happens to transparent backgrounds when converting PNG to JPG?",
      a: "JPEG does not support transparency. When converting a transparent PNG to JPG, transparent areas are cleanly filled with a pure white background by default.",
    },
    {
      q: "Can I convert dozens of files at once and download a single ZIP?",
      a: "Yes. You can drop an entire folder of mixed images, select your target output format, and download all converted files packaged in a single ZIP archive.",
    },
    {
      q: "Is there any quality loss when converting JPG to PNG?",
      a: "Converting from lossy JPG to lossless PNG does not degrade quality further; however, it will not restore data previously lost during the initial JPEG compression.",
    },
    {
      q: "Does this converter run offline without an internet connection?",
      a: "Yes. Once the page is loaded in your browser, the converter operates completely offline using HTML5 Canvas APIs.",
    },
    {
      q: "Are color profiles (such as sRGB and Display P3) preserved?",
      a: "Yes. The browser canvas accurately converts color values to the standard sRGB web color space for consistent rendering across all devices.",
    },
    {
      q: "Can I convert SVG vector files to raster PNG or JPG?",
      a: "Yes. Dropping an SVG renders it at native scale into the canvas and exports it as a high-resolution raster PNG or JPG.",
    },
    {
      q: "What is the maximum number of images I can convert simultaneously?",
      a: "There is no hard software cap. You can comfortably batch 50 to 100 images depending on your computer's available RAM.",
    },
    {
      q: "Does this tool retain original file names?",
      a: "Yes. Converted files retain their original base name with the new format extension appended (e.g. `screenshot.png` becomes `screenshot.webp`).",
    },
  ],

  "pdf-merger": [
    {
      q: "How do I merge multiple PDF files into one?",
      a: "Drop your PDF files onto the workspace, drag the visual document tiles into your preferred sequence, and click 'Merge PDFs' to download a unified document.",
    },
    {
      q: "Can I reorder individual pages within a single PDF document?",
      a: "Yes. The page manager shows visual thumbnail tiles of every page, allowing you to drag and drop individual pages into any order.",
    },
    {
      q: "Can I split a PDF or extract specific page ranges?",
      a: "Yes. You can specify page ranges (e.g. '1-3, 5, 8-12') to extract only the necessary pages into a separate, clean PDF.",
    },
    {
      q: "Are my confidential contracts and financial documents safe?",
      a: "Completely safe. Unlike online PDF websites that upload your files to remote servers, our tool uses `pdf-lib` compiled directly into client-side JavaScript. Your files never leave your browser sandbox.",
    },
    {
      q: "Are embedded vector fonts, bookmarks, and links preserved?",
      a: "Yes. Document font definitions, vector paths, and internal page structures are preserved with pristine fidelity during the merge process.",
    },
    {
      q: "Is there a page limit or file size cap?",
      a: "There are no arbitrary software limits. You can merge PDFs with hundreds of pages directly on your machine.",
    },
    {
      q: "Can I delete unwanted blank pages before exporting?",
      a: "Yes. Hover over any page thumbnail and click the trash icon to delete that page before generating your merged document.",
    },
    {
      q: "Can I rotate upside-down or sideways pages?",
      a: "Yes. You can rotate individual pages by 90°, 180°, or 270° clockwise to ensure all pages orient correctly in the final document.",
    },
    {
      q: "Does this tool require Adobe Acrobat or local software installation?",
      a: "No software or plugins are required. Everything runs natively in Google Chrome, Safari, Firefox, or Microsoft Edge.",
    },
    {
      q: "How fast is client-side PDF merging?",
      a: "Because there is zero network upload and download overhead, merging multiple multi-megabyte PDFs takes only a few hundred milliseconds.",
    },
  ],

  "favicon-generator": [
    {
      q: "What icon files are included in the generated favicon package?",
      a: "The package includes `favicon.ico` (multi-resolution 16×16, 32×32, 48×48), `favicon-16x16.png`, `favicon-32x32.png`, `apple-touch-icon.png` (180×180), and `android-chrome-192x192.png` and `512x512.png` along with a ready-to-use `site.webmanifest`.",
    },
    {
      q: "How does the live browser-tab preview work?",
      a: "The interactive simulator renders your uploaded icon inside a simulated browser tab, bookmark bar, and mobile home screen so you can verify legibility at 16×16 pixels before deploying.",
    },
    {
      q: "What source image format and resolution should I upload?",
      a: "Upload a high-resolution square logo (at least 512×512 pixels) in PNG or SVG format with a transparent background for optimal downsampling sharpness.",
    },
    {
      q: "Can I crop and center non-square logos?",
      a: "Yes. The built-in cropper allows you to position and zoom your brand mark inside the square canvas boundary.",
    },
    {
      q: "How do I install the generated favicons into my website?",
      a: "Extract the downloaded ZIP into your website's root or `/public` folder, and copy the provided 4 lines of HTML `<link>` tags directly into your document `<head>`.",
    },
    {
      q: "Why do I need both `.ico` and `.png` favicons?",
      a: "Modern browsers prefer crisp 32×32 PNG favicons, while legacy browsers, enterprise intranet software, and RSS readers still expect a root `favicon.ico` file.",
    },
    {
      q: "Will the favicon render crisply on Apple Retina displays?",
      a: "Yes. High-DPI screens use the included `favicon-32x32.png` or `apple-touch-icon.png` at double pixel density for razor-sharp display.",
    },
    {
      q: "Should I use a transparent background or solid background?",
      a: "Transparent backgrounds integrate naturally with browser tabs across both light and dark mode. For mobile Apple Touch Icons, iOS automatically fills transparency with black, so a solid brand background is provided.",
    },
    {
      q: "Is there any subscription fee or watermark on the icons?",
      a: "No. The entire icon bundle is 100% free and open for personal and commercial usage with zero watermarks.",
    },
    {
      q: "Are the icons processed privately on my machine?",
      a: "Yes. Canvas downsampling and PNG/ICO byte generation execute entirely in your local browser runtime.",
    },
  ],

  "video-aspect-ratio": [
    {
      q: "How do I convert a 16:9 widescreen video to 9:16 vertical?",
      a: "Drop your widescreen video, select the 9:16 preset, and choose between Smart Center Crop or Intelligent Blur Fill. The video re-renders directly in browser memory.",
    },
    {
      q: "What is the difference between Smart Crop and Blur Fill?",
      a: "Smart Crop fills the entire vertical screen by focusing on the center subject and trimming the left and right wings. Blur Fill preserves your full 16:9 landscape video in the center while placing a blurred, expanded reflection of the video in the top and bottom letterbox bars.",
    },
    {
      q: "Which social media platforms require 9:16 vertical video?",
      a: "TikTok, Instagram Reels, YouTube Shorts, and Facebook Stories all require 9:16 vertical framing for full-screen immersive display.",
    },
    {
      q: "Can I convert video to 1:1 square format?",
      a: "Yes. The 1:1 square preset is ideal for LinkedIn desktop feeds, Instagram carousel posts, and X (Twitter) cards.",
    },
    {
      q: "Will reframing alter video resolution or audio sync?",
      a: "No. The exported video preserves full frame rates (30/60fps) and maintains exact millisecond audio-video synchronization.",
    },
    {
      q: "Does this reframer run on my computer's GPU?",
      a: "Yes. Canvas rendering utilizes hardware acceleration directly on your local GPU for rapid video frame processing.",
    },
    {
      q: "Can I adjust the crop box position manually?",
      a: "Yes. You can slide the horizontal focal offset to keep off-center speakers or software panels in frame throughout the video.",
    },
    {
      q: "What video formats are supported?",
      a: "You can reframe MP4, WebM, and MOV video recordings.",
    },
    {
      q: "How fast is the rendering process for a 60-second video?",
      a: "Because no upload or download network transfer is required, rendering is typically completed in 5 to 15 seconds depending on your device processor.",
    },
    {
      q: "Is my video uploaded to any cloud storage?",
      a: "No. The video stream never leaves your browser sandbox.",
    },
  ],

  "link-shortener": [
    {
      q: "How does this link shortener work?",
      a: "It generates clean, memorable short links (such as `mrv.edge/launch`) that redirect visitors to your destination URL while keeping long tracking parameters tidy.",
    },
    {
      q: "How does the link expiration feature work?",
      a: "You can set links to expire automatically after 24 hours, 7 days, 30 days, or on a specific calendar date. Once expired, the link safely disables itself and ceases redirection.",
    },
    {
      q: "Can I password-protect sensitive short links?",
      a: "Yes. When password protection is enabled, visitors are prompted for a clean security passcode before being redirected to the destination URL, ideal for pre-release demos and investor decks.",
    },
    {
      q: "Are URL query parameters and UTM tracking tags preserved?",
      a: "Yes. All query strings (e.g. `?utm_source=twitter&utm_medium=demo`) are preserved and passed through to the final landing page.",
    },
    {
      q: "Can I customize the slug name of my short link?",
      a: "Yes. You can choose a custom branded slug (e.g. `demo-tour` or `summer-sale`) rather than random gibberish characters.",
    },
    {
      q: "Are the redirects fast?",
      a: "Redirects execute with single-digit millisecond latency at the edge for maximum visitor retention.",
    },
    {
      q: "Can I generate a QR code for my shortened link?",
      a: "Yes. Every short link includes a one-click button to generate a matching scannable QR code for print and offline marketing.",
    },
    {
      q: "Can I disable or delete a link before its expiration date?",
      a: "Yes. You can revoke or deactivate active links at any time from your session dashboard.",
    },
    {
      q: "Are short links safe from spam bots?",
      a: "Yes. All redirect endpoints include automated rate limiting and heuristic bot defenses.",
    },
    {
      q: "Is there a limit on how many links I can create?",
      a: "Free creation is unlimited for standard use cases with instant clipboard copy.",
    },
  ],

  "video-summarizer": [
    {
      q: "How does the AI Video Summarizer work?",
      a: "Our neural model analyzes video transcripts or spoken dialogue, isolates primary thesis arguments, filters out conversational filler, and formats key takeaways into structured, scannable bullet points.",
    },
    {
      q: "Can I paste a transcript from YouTube, Zoom, or Google Meet?",
      a: "Yes. You can paste raw transcripts with or without timestamps from YouTube, Loom, Zoom cloud recordings, Otter.ai, or Microsoft Teams.",
    },
    {
      q: "How does chapter and timestamp generation work?",
      a: "The AI detects semantic shifts in the subject matter and generates clean timestamped chapters (e.g. `02:15 - Pricing Architecture`) ready to copy directly into YouTube descriptions or meeting notes.",
    },
    {
      q: "What languages can the summarizer process?",
      a: "The AI natively processes over 40 languages, including English, Spanish, German, French, Japanese, Mandarin, and Hindi, with automatic language detection.",
    },
    {
      q: "Does it identify actionable decisions and tasks?",
      a: "Yes. The summary includes a dedicated 'Action Items & Decisions' section highlighting who committed to what during the session.",
    },
    {
      q: "Can I choose between an executive brief and detailed notes?",
      a: "Yes. Pick Short, Medium, or Detailed summary length, plus a Chapters breakdown whenever timestamps appear in your source transcript.",
    },
    {
      q: "Is my transcript data used to train public AI models?",
      a: "No. All API calls use private zero-retention enterprise inference endpoints. Your internal company transcripts are never stored or used for model training.",
    },
    {
      q: "What is the maximum transcript length supported?",
      a: "The engine easily processes long-form content up to 100,000 tokens (approximately 2.5 hours of continuous spoken conversation) in a single request.",
    },
    {
      q: "Can I copy the summary directly to Notion or Slack?",
      a: "Yes. Output is formatted with clean GitHub-flavored Markdown headers, bold highlights, and bullet lists ready for instant copy-pasting.",
    },
    {
      q: "How does this compare to watching the full recording?",
      a: "Users report saving 80% to 90% of their time by skimming the structured AI takeaways before deciding if a specific video timestamp warrants full playback.",
    },
  ],

  "subtitle-generator": [
    {
      q: "How does automated speech transcription work?",
      a: "Our neural speech model listens to audio waveforms and accurately decodes speech into text, automatically inserting punctuation, capitalization, and accurate millisecond timecodes.",
    },
    {
      q: "Can I export subtitles in both SRT and VTT formats?",
      a: "Yes. You can download industry-standard SubRip (`.srt`) files for YouTube, Premiere, and Final Cut, or WebVTT (`.vtt`) files for HTML5 `<track>` video elements.",
    },
    {
      q: "Can I manually edit words and timestamps in the editor?",
      a: "Yes. The interactive caption timeline lets you tweak any misheard brand name, split long sentences, or adjust start/end timestamps with instant visual preview.",
    },
    {
      q: "Why are subtitles essential for social video engagement?",
      a: "Over 85% of social media feeds (LinkedIn, Instagram, TikTok, Facebook) play video muted by default. Captioned videos capture up to 80% more view time and significantly higher click-through rates.",
    },
    {
      q: "Does the model support multiple languages and accents?",
      a: "Yes. It supports transcription across 50+ languages with advanced resilience to background room noise, crosstalk, and regional accents.",
    },
    {
      q: "Can I adjust character length per subtitle line?",
      a: "Yes. You can constrain subtitle chunking to 32–42 characters per line to ensure text remains comfortable to read on small mobile screens without blocking key visuals.",
    },
    {
      q: "Can I burn hardcoded subtitles directly into my video?",
      a: "Yes. You can export a hardcoded version with subtitles rendered directly onto the video frames using custom font styling, high-contrast outlines, and background pill highlights.",
    },
    {
      q: "How do I upload the generated SRT to YouTube?",
      a: "In YouTube Studio, open your video's 'Subtitles' tab, click 'Add Language', select 'Upload File', and choose your exported `.srt` file with timing.",
    },
    {
      q: "Is speech transcription processed securely?",
      a: "Yes. Audio streams are processed via encrypted zero-retention API channels and deleted immediately upon completion.",
    },
    {
      q: "How long does it take to transcribe a 2-minute video?",
      a: "Transcription typically takes between 3 and 8 seconds for a standard 2-minute clip.",
    },
  ],

  "youtube-title-generator": [
    {
      q: "How does the AI generate high-CTR YouTube titles?",
      a: "The model is trained on top-performing viral video architectures across education, tech, business, and storytelling. It generates titles that balance strong curiosity hooks with search intent without devolving into deceptive clickbait.",
    },
    {
      q: "What inputs can I provide to generate titles?",
      a: "You can provide a raw topic (e.g. 'How to build interactive product demos'), a rough bulleted outline, or paste a video script/transcript.",
    },
    {
      q: "What is the Hook Score percentage?",
      a: "The Hook Score evaluates character length (under 60 characters to prevent truncation on mobile), emotional valence, keyword prominence, and curiosity gap to predict click-through probability.",
    },
    {
      q: "Does it generate full YouTube video descriptions with timestamps?",
      a: "Yes. In addition to titles, it generates a complete SEO-optimized description box with an engaging summary paragraph, social links placeholders, and chapter timestamp slots.",
    },
    {
      q: "Can I choose different editorial angles or tones?",
      a: "Yes. It provides multiple distinct title angles: Instructional ('How to...'), Storytelling ('I Tried... for 30 Days'), Contrarian ('Why Nobody Needs...'), and Data-Backed ('The Science of...').",
    },
    {
      q: "Does it include YouTube hashtag and tag suggestions?",
      a: "Yes. It suggests relevant high-volume search tags and hashtags aligned with YouTube's current discovery algorithm.",
    },
    {
      q: "How many title options are generated per request?",
      a: "Each generation provides 10 to 15 distinct, ranked title candidates so you have ample options for thumbnail pairing and A/B testing.",
    },
    {
      q: "How do titles optimize for both YouTube Search and Suggested Videos?",
      a: "Search titles prioritize exact user query phrases, while Suggested Video titles emphasize strong narrative curiosity gaps. The tool outputs a balanced mix of both strategies.",
    },
    {
      q: "Can I generate titles for non-English videos?",
      a: "Yes. The AI generates culturally fluent titles and hooks across all major international languages.",
    },
    {
      q: "Can I use these titles for TikTok, Reels, or blog headlines?",
      a: "Yes. Strong curiosity and how-to opening formulas translate directly to TikTok hooks, podcast titles, Substack subject lines, and LinkedIn openers.",
    },
  ],

  "content-repurposer": [
    {
      q: "How does the AI Content Repurposer work?",
      a: "It takes long-form text, such as blog articles, release notes, or podcast transcripts, and converts the points into platform-ready drafts for LinkedIn, X/Twitter, Instagram, and email.",
    },
    {
      q: "Why shouldn't I just copy and paste the same text across platforms?",
      a: "Each platform has distinct cultural and formatting expectations. LinkedIn favors conversational spacing, personal professional reflections, and clean takeaway bullets. Twitter/X requires sharp, punchy thread hooks with tight character limits. Newsletters require personal narrative framing.",
    },
    {
      q: "What formats does the tool generate from a single input?",
      a: "From a single post, it outputs: 1) A formatted LinkedIn post with hook and hashtags, 2) A 5-to-7 tweet Twitter/X thread, 3) An email newsletter digest segment, and 4) Short punchy quote bites for carousel graphics.",
    },
    {
      q: "Can I repurpose video or audio transcripts?",
      a: "Yes. Paste any raw transcript from a recorded webinar, interview, or tutorial. The AI filters out verbal filler and structures the core insights into clean written prose.",
    },
    {
      q: "Can I specify my brand voice or tone of voice?",
      a: "Yes. You can select between Founder/Editorial, Casual & Playful, Concise & Direct, or Deep-Dive Technical tones.",
    },
    {
      q: "Does it format Twitter/X threads with numbered steps?",
      a: "Yes. Threads are generated with engaging opening hooks, numbered 1/N tweets, and concluding summary CTAs formatted within standard 280-character limits.",
    },
    {
      q: "Can I edit and tweak the generated copy before copying?",
      a: "Yes. Every platform tab features an editable text canvas with one-click 'Copy to Clipboard' buttons.",
    },
    {
      q: "How much time does this save marketing and growth teams?",
      a: "Teams report reducing content distribution workflows from 2–3 hours per article down to under 5 minutes.",
    },
    {
      q: "Is my original content kept private and secure?",
      a: "Yes. Submissions are processed through private, zero-retention enterprise AI endpoints and never retained.",
    },
    {
      q: "Can I repurpose content into different languages?",
      a: "Yes. You can paste an English article and request output formatted in Spanish, German, French, or Japanese for global audiences.",
    },
  ],

  "product-description-generator": [
    {
      q: "How does this generator differ from generic AI text writers?",
      a: "Generic tools write hollow marketing fluff. Our generator is calibrated specifically on high-converting eCommerce and SaaS frameworks (Features → Benefits → Outcomes), emphasizing concrete value and sensory clarity.",
    },
    {
      q: "What inputs should I provide for best results?",
      a: "Provide your product name, core specifications, target audience persona, and primary customer pain point. The AI synthesizes these into compelling benefit-led narratives.",
    },
    {
      q: "Can I use this for Shopify, Amazon listings, or SaaS landing pages?",
      a: "Yes. It includes presets optimized for Shopify product pages, Amazon bullet listings (highlighting key features), and SaaS feature cards.",
    },
    {
      q: "Does it incorporate SEO keywords naturally?",
      a: "Yes. Include key product terms inside your Key details input, and the generator weaves them naturally into the headline, description, and feature bullets without stuffing.",
    },
    {
      q: "What tone variants can I generate?",
      a: "You can toggle between Minimalist/Apple-style (restrained and confident), Luxury/Premium (sensory and refined), Technical/B2B (specifications and ROI-focused), or Bold/Playful.",
    },
    {
      q: "Does it generate scannable bullet points for shoppers?",
      a: "Yes. It generates a high-impact editorial paragraph followed by 4–6 skimmable feature-benefit bullets designed for fast mobile shoppers.",
    },
    {
      q: "Can I generate descriptions for physical goods as well as digital software?",
      a: "Yes. It handles physical hardware, consumer goods, digital subscriptions, SaaS tools, and digital downloads equally well.",
    },
    {
      q: "Does it craft high-converting Call-to-Action (CTA) buttons?",
      a: "Yes. Each description includes suggested high-urgency conversion button copy tailored to the product tier.",
    },
    {
      q: "Can I generate descriptions in multiple languages?",
      a: "Yes. Native localized product copy is supported across 30+ international languages.",
    },
    {
      q: "How does benefit-led copy increase conversion rates?",
      a: "Shoppers buy outcomes rather than raw specs. Showing clearly how your product solves a concrete problem or saves time improves page clarity and conversions.",
    },
  ],

  "screenshot-to-guide": [
    {
      q: "How does the AI turn screenshots into step-by-step guides?",
      a: "Our computer vision model inspects your uploaded UI screenshots, detects active buttons, menus, and workflow states, and generates numbered instructional steps explaining exactly what action to take.",
    },
    {
      q: "Can I add brief notes to guide the AI?",
      a: "Yes. Adding quick 3-word notes (e.g. 'Click export button' or 'Select 9:16 ratio') gives the model precise context to craft professional tutorial text.",
    },
    {
      q: "What export formats are available for the completed guide?",
      a: "You can export your completed SOP or user guide as clean GitHub Markdown (ready for Notion, GitHub, or GitBook), formatted HTML, or a clean printable PDF.",
    },
    {
      q: "Can I rearrange the order of screenshot steps?",
      a: "Yes. Drag and drop the thumbnail cards to reorder workflow steps before generating the final guide.",
    },
    {
      q: "Is this suitable for Standard Operating Procedures (SOPs) and employee onboarding?",
      a: "Yes. Operations, IT, and customer support teams use this tool daily to document internal tools, CRM processes, and product workflows in minutes.",
    },
    {
      q: "Does it highlight or blur sensitive information in the screenshots?",
      a: "You can use the built-in blur tool to redact sensitive user data, API keys, or private emails prior to generating and sharing the guide.",
    },
    {
      q: "How many screenshots can I include in a single guide?",
      a: "You can upload between 2 and 20 screenshots per tutorial walkthrough.",
    },
    {
      q: "Does it support mobile and tablet screenshots?",
      a: "Yes. It reads desktop web captures, macOS windows, Windows applications, and mobile screenshots up to 10 images per guide.",
    },
    {
      q: "Can I customize the heading and introductory overview?",
      a: "Yes. The generated title, summary overview, prerequisites, and individual step descriptions are fully editable in the browser canvas.",
    },
    {
      q: "How does this compare to traditional manual documentation?",
      a: "Manual screenshot cropping, typing, and formatting takes 45–60 minutes per workflow. Screenshot-to-Guide reduces that time to under 3 minutes.",
    },
  ],

  "voiceover-generator": [
    {
      q: "How natural do the AI voices sound?",
      a: "Our neural voice synthesis models utilize advanced deep learning to reproduce human breath cadence, subtle micro-intonations, and natural sentence pacing, eliminating robotic TTS artifacts.",
    },
    {
      q: "What voice personas and regional accents are available?",
      a: "We offer diverse studio-quality voice personas spanning Neutral American, British RP, Australian, Canadian, and European accents in both masculine and feminine vocal ranges.",
    },
    {
      q: "Can I preview voiceover audio instantly before downloading?",
      a: "Yes. The integrated HTML5 audio player lets you preview your script with zero latency and test different voice personas with one click.",
    },
    {
      q: "In what audio formats can I download my voiceover?",
      a: "You can download studio-grade 48kHz audio in clean MP3 format or uncompressed WAV format for professional editing in Final Cut or Premiere.",
    },
    {
      q: "Can I adjust speech pacing, speed, and pauses?",
      a: "Yes. Use the speed slider (0.75x to 1.5x) or insert ellipsis (`...`) and punctuation marks to create natural pauses and emphasis.",
    },
    {
      q: "Can I use generated voiceovers for commercial advertising and YouTube monetization?",
      a: "Yes. All generated audio is 100% royalty-free and cleared for commercial use in product videos, YouTube channels, client demos, and paid ads.",
    },
    {
      q: "How does the voice engine pronounce technical terms and brand acronyms?",
      a: "The model is trained on modern technology vocabulary (SaaS, API, WebAssembly, SQL, Kubernetes). For unusual brand names, you can provide phonetic spelling (e.g. 'Marv-edge').",
    },
    {
      q: "Is there a script length limit per generation?",
      a: "Standard generations accommodate scripts up to 2,500 characters (approximately 2.5 minutes of continuous voiceover) at a time.",
    },
    {
      q: "Can I pair this voiceover with the Marvedge Demo Script Generator?",
      a: "Yes. You can generate a tight product demo script with our Demo Script Generator and paste it directly into the Voiceover Generator for instant professional narration.",
    },
    {
      q: "Is my script text stored or shared?",
      a: "No. Your script is processed through an encrypted, zero-retention voice synthesis pipeline and never retained.",
    },
  ],

  "demo-script-generator": [
    {
      q: "What is the 3-Act Demo Script structure?",
      a: "Our framework follows a proven high-conversion narrative arc: 1) The Hook (pinpointing the user's frustrating pain point in the first 5 seconds), 2) The Solution Walkthrough (demonstrating the exact product workflow), and 3) The Conversion CTA (a clear closing next step).",
    },
    {
      q: "What inputs should I provide to generate a great demo script?",
      a: "Provide your product name, core value proposition, key feature workflow, and target customer profile (e.g. 'Founders who want to build interactive demos without coding').",
    },
    {
      q: "Does the script include visual directions and click cues?",
      a: "Yes. Every line of narration is paired with explicit visual cues (e.g. '[Visual: Zoom into the 9:16 toggle button]' or '[Action: Click Export and highlight timer]').",
    },
    {
      q: "Can I customize the target duration of the demo?",
      a: "Yes. Choose 60 seconds, 2 minutes, or 3 minutes under Length to control pacing, scene count, and total spoken word count.",
    },
    {
      q: "How does the script optimize the opening 5 seconds to prevent viewer bounce?",
      a: "The AI crafts opening lines that address an urgent, high-friction problem immediately rather than wasting time with generic brand logos or musical intros.",
    },
    {
      q: "Can I tailor the script for technical developers vs non-technical executives?",
      a: "Yes. You can select between Technical/Architectural tone (emphasizing APIs, Wasm, and speed) or Executive/Business tone (emphasizing revenue, efficiency, and team output).",
    },
    {
      q: "Does it output narration lines ready for text-to-speech voiceovers?",
      a: "Yes. The dialogue is formatted with short, spoken-word sentences that flow naturally when read aloud or pasted into our AI Voiceover Generator.",
    },
    {
      q: "Can I copy the script or export it to Markdown?",
      a: "Yes. One-click copy gives you clean, formatted Markdown ready for your video editor, recording software, or teleprompter.",
    },
    {
      q: "How does a structured demo script bridge into the Marvedge platform?",
      a: "Once you have a tight narrative script, Marvedge allows you to turn that script into a live, interactive, click-through screen demo that converts visitors into customers automatically.",
    },
    {
      q: "Can I generate multiple hook variations to test with prospects?",
      a: "Yes. Every generation outputs 3 distinct opening hook angles so you can pick the one that resonates best with your audience.",
    },
  ],
};

