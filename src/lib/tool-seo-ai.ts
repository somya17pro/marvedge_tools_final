import type { ToolSeoData } from "./tool-seo-types";

export const aiToolSeo: Record<string, ToolSeoData> = {
  "video-summarizer": {
    seoTitle: "AI Video Transcript Summarizer & Chapters | Marvedge",
    metaDescription:
      "Condense video transcripts up to 40,000 characters into a 2-sentence TL;DR, 5-8 key bullets, and verified chapters whenever timestamps are provided.",
    primaryKeyword: "ai video summarizer",
    applicationCategory: "BusinessApplication",
    definitionLead:
      "Marvedge Video Summarizer condenses long webinar, Loom, podcast, and YouTube transcripts into scannable takeaways in seconds. Paste up to 40,000 characters, choose Short, Medium, or Detailed length, and receive a two-sentence TL;DR, five to eight key points, and timestamped chapters derived from your source timestamps.",
    lastUpdated: "November 2026",
    lastUpdatedIso: "2026-11-12",
    capabilities: [
      "2-sentence executive TL;DR",
      "5-8 scannable key bullets",
      "Timestamp-grounded chapters",
      "Short, Medium & Detailed modes",
    ],
    howItWorks: {
      heading: "How to summarize a video transcript into key notes",
      intro:
        "Skip re-watching 45-minute meeting replays. Paste the transcript once to pull out structure, decisions, and chapters.",
      steps: [
        {
          title: "Paste your video transcript (up to 40,000 chars)",
          body: "Drop raw text from YouTube, Zoom, Riverside, Loom, or Descript into the Transcript box. Include timestamps like 01:41 if you want clean chapter markers generated automatically.",
        },
        {
          title: "Pick Short, Medium, or Detailed output length",
          body: "Choose Short for Slack updates, Medium for show notes and team handoffs, or Detailed when documenting multi-topic product interviews.",
        },
        {
          title: "Generate, review, and copy structured notes",
          body: "Click Summarize to get a tight TL;DR, bulleted Key points, and verified Chapters, then click Copy to paste into Notion, Linear, or Google Docs.",
        },
      ],
    },
    environments: {
      heading: "Built for every async team workflow",
      intro:
        "Most video insights get lost inside hours of unindexed recordings. Convert transcripts into reusable written artifacts.",
      cards: [
        {
          title: "Show Notes & Chapters",
          steps: [
            "Paste SRT text or timestamped transcripts to automatically extract chapter breakpoints.",
            "Chapters appear strictly when real source timestamps exist in your input.",
            "Paste the Key points block straight beneath embedded videos.",
          ],
        },
        {
          title: "Customer Interview Synthesis",
          steps: [
            "Cleanly compress 30-minute discovery call transcripts before team syncs.",
            "Preserve exact user workflows and feature requests across 5 to 8 concise bullets.",
            "Paste key findings straight into roadmap tickets or weekly recaps.",
          ],
        },
        {
          title: "Non-Stored API Requests",
          steps: [
            "Requests run via server gateway with storage disabled (`store: false`).",
            "Only pasted transcript text is sent; raw video files never upload here.",
            "Click Clear example anytime to start clean.",
          ],
        },
      ],
      note: "Grounded chapter timestamps with zero hallucinated times. Unlike summarizers that invent fake `04:15` timestamps on plain prose, Marvedge only writes a Chapters section when genuine timestamps exist inside your pasted transcript.",
    },
    specs: {
      heading: "Input limits and structured output sections",
      intro:
        "Clear formatting constraints keep outputs predictable for knowledge bases and changelogs.",
      items: [
        {
          label: "Max input length",
          value: "40,000 chars",
          detail: "Holds roughly 6,000 to 7,500 spoken words (~45 to 60 minutes of speech).",
        },
        {
          label: "Output sections",
          value: "TL;DR + Bullets + Chapters",
          detail: "Two-sentence summary, 5-8 `-` bullets, and verified chapters when timestamped.",
        },
        {
          label: "Length presets",
          value: "3 depths",
          detail: "Switch between Short, Medium (default), and Detailed response depth.",
        },
        {
          label: "Raw video needed?",
          value: "No (text only)",
          detail:
            "Processes transcript text rapidly without burning bandwidth on gigabyte MP4 uploads.",
        },
        {
          label: "Retention setting",
          value: "store: false",
          detail: "Provider requests opt out of remote conversation state storage.",
        },
        {
          label: "Format compatibility",
          value: "Plain text / Markdown",
          detail: "Pastes cleanly into Slack, Notion, Obsidian, Jira, and YouTube descriptions.",
        },
      ],
      callouts: [
        {
          title: "Don't have a written transcript yet?",
          body: "Drop your audio or video file (up to 24 MB) into Marvedge Subtitle Generator first, copy the full plain-text transcript button, and paste it straight here.",
        },
        {
          title: "Preserving speaker attribution in interviews",
          body: "Keep speaker names (`Alex:` / `Priya:`) and timestamps (`[02:14]`) in your paste so bullets distinguish who raised an objection or insight.",
        },
        {
          title: "Splitting 2-hour town halls cleanly",
          body: "If your complete transcript exceeds 40,000 characters, run the first 45 minutes and second 45 minutes in two clean passes by agenda topic.",
        },
      ],
    },
    compatibility: {
      heading: "Transcript source compatibility",
      intro:
        "Works smoothly with raw exports from common video recorders, caption files, and conference tools.",
      columns: ["Transcript source", "Supported", "Formatting tip"],
      rows: [
        {
          target: "Zoom, Meet, Teams & Loom transcripts",
          status: "Yes",
          detail: "Paste complete copied VTT/TXT transcripts including timestamps cleanly.",
        },
        {
          target: "YouTube 'Show transcript' copy-paste",
          status: "Yes",
          detail: "Maintains inline `0:24` timestamps so accurate Chapters build automatically.",
        },
        {
          target: "SRT or VTT subtitle text",
          status: "Yes",
          detail: "Handles cue numbers and timecodes smoothly while extracting clean themes.",
        },
        {
          target: "Raw `.mp4` / `.mov` files without text",
          status: "Partial",
          detail:
            "Transcribe the media file in Subtitle Generator first, then summarize the output text.",
        },
        {
          target: "Pasted text over 40,000 characters",
          status: "No",
          detail:
            "Trim introductions or run 40k-character halves per session to stay within validator caps.",
        },
      ],
    },
    troubleshooting: {
      heading: "Troubleshooting transcript summaries",
      intro: "Resolve validation or formatting issues quickly.",
      items: [
        {
          issue: "Chapters section did not appear in result",
          fix: "Chapters only generate when explicit timestamps (`00:24`, `[1:02]`, `00:04:10`) exist in your pasted transcript so zero times get fabricated. Paste a timestamped transcript if chapters are required.",
        },
        {
          issue: "Submit fails on unusually long webinar transcripts",
          fix: "Check character count against the 40,000-character limit. Split multi-hour events into discrete half-hour blocks.",
        },
        {
          issue: "Temporary rate limit error (429)",
          fix: "Wait 10 to 15 seconds between burst requests and retry once traffic clears.",
        },
        {
          issue: "Summary sounds slightly too brief on technical talks",
          fix: "Change Summary length from Short or Medium to Detailed and click Summarize again.",
        },
      ],
    },
    privacy: {
      heading: "Zero retention mode on submitted transcripts",
      paragraphs: [
        "Text payloads pass securely via server inference with storage turned off at request time. Summarize calls and articles straight away without binding notes to a user dashboard.",
        "Always proofread names, dates, and product terminology against the original call before sharing externally.",
      ],
    },
  },

  "subtitle-generator": {
    seoTitle: "Free AI Subtitle Generator (SRT & WebVTT) | Marvedge",
    metaDescription:
      "Transcribe MP4, MOV, WebM, and audio files under 24 MB into editable timed cues. Adjust timestamps inline and export SRT, WebVTT, or plain text.",
    primaryKeyword: "subtitle generator",
    applicationCategory: "MultimediaApplication",
    definitionLead:
      "Marvedge Subtitle Generator transcribes audio and video files under 24 MB into editable caption tracks in your browser workspace. Drop an MP4, MOV, WebM, or audio file, inspect AI speech transcription paired with estimated line timing, nudge start or end seconds directly inside the list, and export standard `.srt` or `.vtt` subtitle files.",
    lastUpdated: "November 2026",
    lastUpdatedIso: "2026-11-12",
    capabilities: [
      "Supports audio & video under 24 MB",
      "Editable cue text & timestamps",
      "One-click SRT & WebVTT export",
      "Full plain-text transcript copy",
    ],
    howItWorks: {
      heading: "How to generate, tweak, and export video subtitles",
      intro:
        "Captions boost silent-autoplay completion across LinkedIn, Reels, and docs while making product training accessible.",
      steps: [
        {
          title: "Drop an audio or video clip under 24 MB",
          body: "Upload MP4, WebM, MOV, MP3, WAV, or M4A recordings, or click Try a sample narration to caption our built-in 15-second voiceover demo immediately.",
        },
        {
          title: "Inspect transcript and nudge cue timings",
          body: "Marvedge transcribes speech, reads real media duration, splits phrasing into crisp ~9-word subtitle lines, and lets you adjust start/end times (`0.1s` step) or fix brand spellings inline.",
        },
        {
          title: "Download .srt, .vtt, or copy full text",
          body: "Save `subtitles.srt` for desktop NLE editors and social platforms, `subtitles.vtt` for HTML5 `<track>` video players, or copy clean transcript text.",
        },
      ],
    },
    environments: {
      heading: "Built for social editors, doc writers, and course creators",
      intro:
        "Whether adding closed captions in Premiere/CapCut or shipping compliant HTML5 documentation videos, clean SRT and VTT files save manual typing.",
      cards: [
        {
          title: "SRT for CapCut, Premiere & YouTube",
          steps: [
            "Download standard numbered `subtitles.srt` (`00:00:01,200 --> 00:00:03,800`).",
            "Fix uncommon SaaS brand names inside the inline cue fields before exporting.",
            "Import cleanly into YouTube Studio, LinkedIn native video, CapCut, or Descript.",
          ],
        },
        {
          title: "WebVTT for HTML5 Players",
          steps: [
            "Download spec-compliant `subtitles.vtt` starting with a clean `WEBVTT` header and dot millisecond timestamps.",
            "Attach straight onto `<video><track kind='captions' src='/subtitles.vtt' /></video>` embeds.",
            "Keep cue lines short at roughly 9 words max for fast single-glance reading.",
          ],
        },
        {
          title: "Instant Transcript Recycling",
          steps: [
            "Click Copy in the toolbar to grab clean concatenated text with timestamps removed.",
            "Paste into Video Summarizer or Content Repurposer for instant blog drafts.",
            "Preview uploaded video or audio right inside the tool panel while checking timing.",
          ],
        },
      ],
      note: "Staying cleanly under the 24 MB file cap on long videos. For 20-minute HD screen recordings that weigh 80 MB, you do not need video pixels to generate subtitles: run your video through Video Compressor (360p, 0.3 Mbps) first or upload an extracted audio-only `.mp3`/`.m4a` track, which shrinks an hour of speech comfortably below 24 MB.",
    },
    specs: {
      heading: "Caption file formats, size caps, and cue rules",
      intro: "Review exact accepted formats and cue formatting logic before publishing.",
      items: [
        {
          label: "Max upload size",
          value: "24 MB max",
          detail: "Enforced cleanly before transfer so oversized raw captures do not stall.",
        },
        {
          label: "Accepted inputs",
          value: "Audio & Video",
          detail: "audio/* plus MP4, WebM, and QuickTime (.mov) media containers.",
        },
        {
          label: "Export files",
          value: "SRT & VTT + Text",
          detail: "Downloads subtitles.srt, subtitles.vtt, or copies plain transcript text.",
        },
        {
          label: "Cue line length",
          value: "~9 words max",
          detail: "Punctuation-aware splitting breaks long run-on sentences into readable chunks.",
        },
        {
          label: "Timing editor",
          value: "0.1s precision",
          detail: "Inline Start, End, and text inputs per cue row before final download.",
        },
        {
          label: "Preview player",
          value: "Built-in",
          detail: "Scrub uploaded video/audio right above the cue list while adjusting times.",
        },
      ],
      callouts: [
        {
          title: "How timing estimation works under the hood",
          body: "Our speech model returns a clean punctuated transcript. Marvedge reads your exact audio/video duration (`m.duration`) and assigns each cue segment proportional start/end offsets based on character weight, so spoken density matches naturally before optional manual nudging.",
        },
        {
          title: "SRT vs WebVTT formatting differences",
          body: "SRT uses comma milliseconds (`00:00:12,500`) without a file header, favored by desktop editors and social uploads. VTT starts with `WEBVTT` and uses period milliseconds (`00:00:12.500`), required by web browsers.",
        },
        {
          title: "Handling noisy backgrounds or multiple speakers",
          body: "Clean close-mic narration yields near-verbatim punctuation. If music is loud, edit tricky technical terms directly inside the cue text fields prior to saving SRT.",
        },
      ],
    },
    compatibility: {
      heading: "Platform and media input compatibility",
      intro: "Check container limits and downstream subtitle destinations at a glance.",
      columns: ["Input or export target", "Supported", "Notes"],
      rows: [
        {
          target: "MP4 / WebM / QuickTime MOV (under 24 MB)",
          status: "Yes",
          detail: "Transcribed cleanly with native video preview player rendered inline.",
        },
        {
          target: "MP3, WAV, M4A, OGG voice notes (under 24 MB)",
          status: "Yes",
          detail: "Audio-only files compress far more speech into 24 MB than video streams.",
        },
        {
          target: "YouTube, LinkedIn, Instagram, Vimeo captions",
          status: "Yes",
          detail: "Upload exported `subtitles.srt` directly inside native platform caption menus.",
        },
        {
          target: "HTML5 `<track>` web embeds",
          status: "Yes",
          detail: "Export `subtitles.vtt` (WebVTT standard) for zero-plugin browser support.",
        },
        {
          target: "Hardcoding burned-in open captions onto MP4",
          status: "No",
          detail:
            "Outputs sidecar `.srt` and `.vtt` files rather than burning pixels into video frames.",
        },
      ],
    },
    troubleshooting: {
      heading: "Troubleshooting subtitle generation",
      intro: "Fast solutions if a clip is too large or speech isn't detected.",
      items: [
        {
          issue: "Error: Please use a file under 24 MB",
          fix: "Your raw recording exceeds the 24 MB speech payload cap. Shrink the clip with Video Compressor (pick 360p + 0.4 Mbps) or export an audio-only `.mp3`/`.m4a` track before dropping it here.",
        },
        {
          issue: "Error: No speech was detected in that file",
          fix: "Ensure the file has a clear spoken track rather than music-only audio or muted screen capture.",
        },
        {
          issue: "Captions run slightly early after a silent intro pause",
          fix: "Check the video player timestamp where talking actually begins, and nudge the first few numeric Start/End fields (0.1s resolution) directly inside the cue editor before saving `.srt` or `.vtt`.",
        },
        {
          issue: "Proper product names were misspelled",
          fix: "Click directly inside the affected text box in the scrollable cue list, fix spelling cleanly, then re-download SRT/VTT.",
        },
      ],
    },
    privacy: {
      heading: "Uploaded solely to extract timed text cues",
      paragraphs: [
        "Media bytes buffer in your client tab and pass securely through encrypted transcription only when dropped. Your video or audio scrubber runs off a temporary local browser URL.",
        "Edit typos and trim confidential cues directly in your browser prior to downloading SRT/VTT.",
      ],
    },
  },

  "youtube-title-generator": {
    seoTitle: "AI YouTube Title, Hook & Description Tool | Marvedge",
    metaDescription:
      "Generate 8 high-CTR YouTube titles under 70 characters, 3 opening hooks, a 150-250 word SEO description with CTA, and 15 tags from one topic or transcript.",
    primaryKeyword: "youtube title generator",
    applicationCategory: "BusinessApplication",
    definitionLead:
      "Marvedge YouTube Title Generator builds complete upload packaging from a brief topic summary or rough video transcript. Choose your target audience and packaging style (Curiosity, How-to, Listicle, or Bold & punchy) to get 8 titles kept under 70 characters, 3 first-frame spoken hooks, an SEO-ready 150-250 word description, and 15 copy-ready tags.",
    lastUpdated: "November 2026",
    lastUpdatedIso: "2026-11-12",
    capabilities: [
      "8 click-worthy titles (< 70 chars)",
      "3 opening retention hooks",
      "150-250 word SEO description",
      "15 comma-separated topic tags",
    ],
    howItWorks: {
      heading: "How to package YouTube videos for higher clicks and search",
      intro:
        "Great edits flop when the headline gets truncated on mobile or lacks search clarity. Dial audience + angle in before publishing.",
      steps: [
        {
          title: "Describe your video or paste the transcript",
          body: "Share core tension, test results, or exact tutorial outcome in the top field. Concrete numbers (like testing 5 budget mics under $50) produce far stronger titles than vague topics.",
        },
        {
          title: "Name your viewer audience and pick packaging style",
          body: "Specify who is watching (e.g. Beginner podcasters or B2B founders) and choose Curiosity, How-to, Listicle, or Bold & punchy framing.",
        },
        {
          title: "Compare 8 title variants and grab complete metadata",
          body: "Click Generate titles to inspect 8 un-truncated titles under 70 characters, pick an opening hook that matches the promise, and copy the SEO description and 15 tags cleanly.",
        },
      ],
    },
    environments: {
      heading: "Packaging built around YouTube mobile and search constraints",
      intro:
        "Most generated titles cut off awkwardly past ~65 characters in suggested feeds. Every option enforces strict length discipline.",
      cards: [
        {
          title: "8 Titles Under 70 Chars",
          steps: [
            "Front-loads curiosity gaps, concrete outcomes, or contrast cleanly within desktop & mobile width.",
            "Explore multiple angles in one pass rather than staring at a blank Studio field.",
            "Re-run quickly under Curiosity vs How-to to shortlist A/B thumbnail tests.",
          ],
        },
        {
          title: "3 Matched Opening Hooks",
          steps: [
            "Never promise something in the title and ramble for 40 seconds on intro fluff.",
            "Use the 3 suggested opening lines right at second zero to validate viewer expectations instantly.",
            "Aligns spoken first line directly with the thumbnail concept.",
          ],
        },
        {
          title: "Description & 15 Tags",
          steps: [
            "Outputs a clean 150-250 word natural-keyword description ending with a clear CTA.",
            "Includes 15 comma-separated keyword tags ready to paste straight into YouTube Studio.",
            "Test input comes pre-filled so you can verify output structure immediately.",
          ],
        },
      ],
      note: "Test titles before editing your final intro voiceover. Pick your winning title and opening hook *before* exporting final edits or recording voiceovers. When your first 5 seconds deliver straight on the title promise, average view duration climbs naturally.",
    },
    specs: {
      heading: "Packaging deliverable inventory",
      intro:
        "Each run returns four distinct packaging blocks formatted for rapid copy-paste into YouTube Studio.",
      items: [
        {
          label: "Title variations",
          value: "8 options (<70 ch)",
          detail: "Tuned across different emotional and structural triggers without truncation.",
        },
        {
          label: "Opening hooks",
          value: "3 first lines",
          detail: "Short spoken openers aligned directly with thumbnail/title intrigue.",
        },
        {
          label: "Video description",
          value: "150 - 250 words",
          detail: "Natural readable SEO copy with keyword context plus call to action.",
        },
        {
          label: "Studio tags",
          value: "15 comma list",
          detail: "Paste directly into YouTube Studio's tags box cleanly.",
        },
        {
          label: "Style presets",
          value: "4 angles",
          detail: "Curiosity, How-to, Listicle, and Bold & punchy framing options.",
        },
        {
          label: "Input limit",
          value: "Up to 40,000 ch",
          detail: "Accepts either a 1-sentence brief or an entire video transcript.",
        },
      ],
      callouts: [
        {
          title: "Pairing How-to for Search vs Curiosity for Browse",
          body: "How-to titles rank consistently in evergreen YouTube and Google Search ('How to fix slow React renders'). Curiosity titles pull higher CTR on Home feeds ('The $30 mic beat every flagship in blind tests'). Run both styles and compare!",
        },
        {
          title: "Do not leave 'Who is it for?' vague",
          body: "'Everyone' writes generic copy. Changing Audience from 'creators' to 'SaaS founders launching solo' turns bland titles specific and clickable.",
        },
        {
          title: "A/B testing titles cleanly in YouTube Studio",
          body: "Grab 2 or 3 distinct angles from the 8 titles returned here and rotate them across YouTube's native Test & Compare workflow or early upload analytics.",
        },
      ],
    },
    compatibility: {
      heading: "Content types and packaging use cases",
      intro:
        "See which YouTube and short-form video formats benefit most from structured packaging runs.",
      columns: ["Video style", "Supported", "Recommended style"],
      rows: [
        {
          target: "Software tutorials & product walkthroughs",
          status: "Yes",
          detail: "Use How-to style to lead with concrete end results ('Build X in 5 Minutes').",
        },
        {
          target: "Experiments, tear-downs & gear tests",
          status: "Yes",
          detail: "Pick Curiosity or Bold & punchy to highlight unexpected outcomes or contrasts.",
        },
        {
          target: "Curated roundups & tool rankings",
          status: "Yes",
          detail: "Choose Listicle to generate scannable numbered title options.",
        },
        {
          target: "YouTube Shorts (<60s) & Reels",
          status: "Yes",
          detail: "Borrow the 3 generated opening Hooks as on-screen text overlays at frame one.",
        },
        {
          target: "Raw unlisted URL crawling",
          status: "No",
          detail:
            "Paste your topic summary or transcript text directly rather than relying on URL scraping.",
        },
      ],
    },
    troubleshooting: {
      heading: "Troubleshooting generated titles and metadata",
      intro: "Quick ways to sharpen generic outputs into standout titles.",
      items: [
        {
          issue: "Titles feel slightly generic or soft",
          fix: "Feed stronger concrete constraints into 'What's your video about?': add dollar numbers, failure moments, time saved, or surprising test winners so the generator avoids broad filler.",
        },
        {
          issue: "Tags included broad phrases you don't rank for",
          fix: "Trim generic 1-word tags before pasting into Studio and keep the specific multi-word intent phrases tailored to your channel size.",
        },
        {
          issue: "Need more listicle angles vs mystery hooks",
          fix: "Keep your topic text untouched, toggle Style from Curiosity to Listicle or How-to, and click Generate titles again.",
        },
        {
          issue: "Description needs affiliate or product links added",
          fix: "Click Copy, paste into Studio, and plug your clean `/go/` short links directly where the CTA block ends.",
        },
      ],
    },
    privacy: {
      heading: "Pre-publish ideas and drafts stay private",
      paragraphs: [
        "Topic prompts run transiently via server gateway without persistent archive storage. Nothing connects to your Google/YouTube Studio OAuth account; you choose and edit what publishes.",
        "Refine, shorten, or mix-and-match title pieces freely across thumbnails and descriptions.",
      ],
    },
  },

  "content-repurposer": {
    seoTitle: "AI Content Repurposer (LinkedIn, X & Email) | Marvedge",
    metaDescription:
      "Turn any blog post, transcript, or release note into a LinkedIn post, 5-post X/Twitter thread, Instagram caption, and newsletter draft matching your voice.",
    primaryKeyword: "content repurposer",
    applicationCategory: "BusinessApplication",
    definitionLead:
      "Marvedge Content Repurposer converts one finished blog post, changelog, or transcript into four platform-native formats in a single click. Paste your source text (up to 40,000 characters), choose Same as original, Professional, Casual, or Witty voice, and receive a tailored LinkedIn post, 5-part X/Twitter thread, Instagram caption, and newsletter draft.",
    lastUpdated: "November 2026",
    lastUpdatedIso: "2026-11-12",
    capabilities: [
      "LinkedIn post + 5-post X thread",
      "Instagram caption + hashtags",
      "Newsletter subject + body draft",
      "Matches original or chosen voice",
    ],
    howItWorks: {
      heading: "How to turn one piece of content into four social channels",
      intro:
        "Writing natively per channel takes hours. Reformat strong source thinking across formats cleanly without sounding robotic.",
      steps: [
        {
          title: "Paste your finished article, changelog, or transcript",
          body: "Drop full written prose or a spoken video transcript into Source content. Clear arguments and specific real examples yield crisp social posts.",
        },
        {
          title: "Choose your target editorial voice",
          body: "Leave Voice set to Same as original to preserve your personal phrasing, or switch to Professional, Casual, or Witty to adapt tone cleanly per campaign.",
        },
        {
          title: "Generate and copy channel-native drafts",
          body: "Click Repurpose to generate LinkedIn, X thread (5 posts), Instagram caption, and Newsletter draft together, then click Copy to grab and refine before scheduling.",
        },
      ],
    },
    environments: {
      heading: "Designed around real editorial workflows",
      intro:
        "Rather than repeating the same paragraph four times, each block respects native length, hook style, and reader pacing.",
      cards: [
        {
          title: "Founder & Product Updates",
          steps: [
            "Extracts scannable short-line LinkedIn commentary rather than a link-dump teaser.",
            "Breaks complex arguments into a structured 5-post X/Twitter thread where post 1 carries standalone pull.",
            "Works cleanly from shipped release notes or internal engineering post-mortems.",
          ],
        },
        {
          title: "Newsletter + Visual Captions",
          steps: [
            "Generates both an email Subject line and tight Newsletter body ready for weekly digests.",
            "Drafts conversational Instagram captions with clean relevant hashtag sets.",
            "Matches exact product specs found in your input without inventing unverified claims.",
          ],
        },
        {
          title: "Transcript-to-Distribution Loop",
          steps: [
            "Transcribe a quick 2-minute spoken founder memo with Subtitle Generator.",
            "Paste the copied text right here to produce a week of social distribution.",
            "Save hours staring at blank LinkedIn or newsletter compose windows.",
          ],
        },
      ],
      note: "Tip: Always run 'Same as original' when sharing opinion pieces. When your draft already contains strong founder anecdotes or contrarian takes, keeping Voice on Same as original retains your real sentence cadence instead of flattening your phrasing.",
    },
    specs: {
      heading: "Output formats and input specifications",
      intro: "One prompt generates all four formatted social and email deliverables side by side.",
      items: [
        {
          label: "Channel outputs",
          value: "4 complete formats",
          detail: "LinkedIn post, 5-post X thread, Instagram caption, and Newsletter draft.",
        },
        {
          label: "Voice controls",
          value: "4 tone modes",
          detail: "Same as original, Professional, Casual, or Witty styling.",
        },
        {
          label: "Source ceiling",
          value: "40,000 chars",
          detail: "Accepts longform guides, whitepapers, podcasts, and founder memos.",
        },
        {
          label: "Thread depth",
          value: "5 posts (X)",
          detail: "Tight self-contained thread avoiding bloated 15-tweet filler.",
        },
        {
          label: "Email structure",
          value: "Subject + body",
          detail: "Includes punchy open-ready subject suggestion plus tight body copy.",
        },
        {
          label: "State retention",
          value: "store: false",
          detail: "Zero server storage of embargoed announcements or unpublished blogs.",
        },
      ],
      callouts: [
        {
          title: "Why copying links rarely works on LinkedIn or X",
          body: "Feeds suppress bare outbound links. Repurposing key takeaways into self-contained native posts drives clicks into comments or profile CTAs reliably.",
        },
        {
          title: "Re-running from focused highlights",
          body: "Got a massive 4,000-word pillar post? Paste one sub-section at a time to generate deeply focused threads per insight instead of diluting the whole guide into one post.",
        },
        {
          title: "Always verify quotes and figures",
          body: "Give the generated X thread and newsletter a quick 30-second human pass to double-check URLs, numbers, and handle mentions before posting.",
        },
      ],
    },
    compatibility: {
      heading: "Source inputs that convert cleanly",
      intro: "Better source clarity creates noticeably sharper social drafts.",
      columns: ["Source content type", "Supported", "Best practice"],
      rows: [
        {
          target: "Longform blog posts & case studies",
          status: "Yes",
          detail: "Paste core narrative sections with clear customer outcomes or metrics.",
        },
        {
          target: "Video & podcast transcripts",
          status: "Yes",
          detail: "Pair with Video Summarizer first if the raw recording is very noisy.",
        },
        {
          target: "Product changelog & release memos",
          status: "Yes",
          detail:
            "Select Casual or Professional tone to frame 'why users care' beyond raw PR logs.",
        },
        {
          target: "Direct URL scraping",
          status: "No",
          detail: "Paste article body text directly cleanly in your clipboard instead of raw URLs.",
        },
      ],
    },
    troubleshooting: {
      heading: "Troubleshooting repurposed outputs",
      intro: "How to tighten voice, hook strength, or length quickly.",
      items: [
        {
          issue: "Output sounds slightly stiff or marketing-heavy",
          fix: "Check your Voice selector and switch from Professional to Casual or Same as original so plain natural cadence from your draft shines through.",
        },
        {
          issue: "Source note too short for four rich outputs",
          fix: "Two bullet fragments leave very little meat to expand across 5 X posts + a newsletter. Paste at least 3 to 5 clear paragraphs of real context.",
        },
        {
          issue: "Newsletter body is shorter than your regular edition",
          fix: "Use the generated newsletter draft as your scannable intro + core insight block, then plug in curated links below it.",
        },
        {
          issue: "Input rejected near character ceiling",
          fix: "Trim transcripts or whitepapers cleanly under 40,000 characters by chapter before running.",
        },
      ],
    },
    privacy: {
      heading: "Embargoed announcements stay unindexed",
      paragraphs: [
        "Source content and outputs pass transiently through server inference without archival. No LinkedIn or X API tokens required: review and schedule manually inside your preferred client.",
        "Publish, remix, or adapt every generated post across personal and company accounts freely.",
      ],
    },
  },

  "product-description-generator": {
    seoTitle: "AI Product Description & Copy Generator | Marvedge",
    metaDescription:
      "Turn raw product details into benefit-led ecommerce headlines, 80-150 word descriptions, 5 feature bullets, and a 1-sentence hook across 5 brand tones.",
    primaryKeyword: "product description generator",
    applicationCategory: "BusinessApplication",
    definitionLead:
      "Marvedge Product Description Generator transforms rough SKU specs and materials into clean ecommerce store copy. Enter product name, factual details, ideal buyer, and pick Warm, Luxury, Playful, Technical, or Minimal tone to generate a Headline, 80-150 word Description, 5 feature bullets, and a 1-sentence summary without invented specifications.",
    lastUpdated: "November 2026",
    lastUpdatedIso: "2026-11-12",
    capabilities: [
      "Headline + 80-150w product story",
      "5 scannable benefit bullets",
      "1-sentence meta/ad short version",
      "Strict zero-spec-hallucination guard",
    ],
    howItWorks: {
      heading: "How to write grounded, conversion-ready product copy",
      intro:
        "Most AI copywriters fabricate fake battery hours, waterproof ratings, or materials when sparse specs are given. This prompt forbids inventing unstated numbers.",
      steps: [
        {
          title: "Enter Product name and true Key details",
          body: "List accurate measurements, materials, care directions, and what comes in the box inside Key details & features so every output benefit anchors to truth.",
        },
        {
          title: "Define your Ideal customer and pick brand Tone",
          body: "Specify who buys it (e.g. Coffee lovers who like slow mornings or Trail runners in wet winters) and pick Warm, Luxury, Playful, Technical, or Minimal tone.",
        },
        {
          title: "Generate and paste clean store-ready blocks",
          body: "Click Write description to receive a ready-to-publish Headline, Description, 5 Feature bullets, and 1-sentence Short version ready for Shopify, Amazon, or Webflow.",
        },
      ],
    },
    environments: {
      heading: "Ready-made structure for storefronts and marketplaces",
      intro:
        "Each output segment maps cleanly to standard product detail page (PDP) layout blocks and ad fields.",
      cards: [
        {
          title: "Clean PDP Layout Blocks",
          steps: [
            "Drop the Headline right beside gallery images; use Description as your emotional narrative intro.",
            "Paste the 5 Feature bullets straight into accordion spec tabs or above-the-fold scannable lists.",
            "Keep length crisp around 80 to 150 words so mobile shoppers read without fatigue.",
          ],
        },
        {
          title: "The 1-Sentence Short Version",
          steps: [
            "Paste the included Short version straight into Shopify SEO meta descriptions or collection cards.",
            "Double-check tone consistency across luxury cosmetics, B2B hardware, or cozy ceramics.",
            "Click Clear example anytime to swap in new catalog SKUs rapidly.",
          ],
        },
        {
          title: "No Invented Certifications or Specs",
          steps: [
            "System instructions explicitly forbid inventing certifications, dimensions, or performance figures not in your input.",
            "Avoids compliance headaches with misstated materials or warranty claims.",
            "Test input comes pre-filled cleanly on load so you can inspect exact formatting.",
          ],
        },
      ],
      note: "Better raw facts beat clever adjectives every time. Listing '350ml stoneware, dishwasher & microwave safe, matte unglazed base' lets the generator translate tangible craftsmanship into customer benefits, whereas entering 'great coffee mug' leaves little substance to sell.",
    },
    specs: {
      heading: "Copy sections and tone matrix",
      intro:
        "Every SKU run outputs four structured sections tuned to your selected storefront voice.",
      items: [
        {
          label: "Output blocks",
          value: "Headline + 3 sections",
          detail:
            "Headline, 80-150 word Description, 5 Feature bullets, and 1-sentence Short version.",
        },
        {
          label: "Available tones",
          value: "5 voice presets",
          detail: "Warm, Luxury, Playful, Technical, and Minimal storefront tones.",
        },
        {
          label: "Spec integrity",
          value: "Strictly grounded",
          detail: "Prompt instructs zero invention of unstated measurements, alloys, or claims.",
        },
        {
          label: "Ideal description",
          value: "80 - 150 words",
          detail:
            "Balanced length built for both mobile PDP scannability and Google index context.",
        },
        {
          label: "Max field size",
          value: "40,000 chars",
          detail:
            "Paste full manufacturer spec sheets or safety PDF text if translating messy data.",
        },
        {
          label: "Storage policy",
          value: "store: false",
          detail: "Unlaunched private-label product catalogs stay off remote storage logs.",
        },
      ],
      callouts: [
        {
          title: "Translating raw engineering specs into buyer benefits",
          body: "B2B buyers want accurate specs plus why they save time. Use Technical tone to emphasize measured precision, or Minimal tone for clean Apple-style restraint.",
        },
        {
          title: "Handling multi-product variations cleanly",
          body: "Run your flagship SKU through once, pick the crispest structure, and adapt color or dimension swaps uniformly across the whole collection.",
        },
        {
          title: "Optimize product photos right alongside copy",
          body: "Before uploading SKU imagery to Shopify or Etsy, shrink lossless PNG captures below target store weights in Marvedge Image Compressor or Image Resizer (Ecommerce presets).",
        },
      ],
    },
    compatibility: {
      heading: "Storefront channels and tone pairing guide",
      intro: "Match store platform needs and choose tones that fit different buyer categories.",
      columns: ["Catalog type or platform", "Supported", "Recommended tone setting"],
      rows: [
        {
          target: "Boutique / Craft / Food & Home Goods",
          status: "Yes",
          detail: "Warm or Minimal tone highlights sensory craft without cheesy exaggeration.",
        },
        {
          target: "Jewelry, Watches, Beauty & Apparel",
          status: "Yes",
          detail: "Luxury tone crafts restrained sensory elegance cleanly around real materials.",
        },
        {
          target: "Electronics, SaaS Add-ons & Tools",
          status: "Yes",
          detail: "Technical tone focuses sharply on specs, tolerances, and buyer clarity.",
        },
        {
          target: "Gifts, Toys & Lifestyle Accessories",
          status: "Yes",
          detail: "Playful tone creates upbeat energy while sticking to true features.",
        },
        {
          target: "Wholesale CSV batch sheet imports",
          status: "No",
          detail:
            "Interactive single-SKU editor built for fast copy-paste workflow rather than bulk CSV parsing.",
        },
      ],
    },
    troubleshooting: {
      heading: "Troubleshooting product copy runs",
      intro: "Ways to pull sharper benefits or match stricter store compliance.",
      items: [
        {
          issue: "Bullets feel shorter or thinner than hoped",
          fix: "Feed at least 4 to 6 concrete specs, use cases, materials, or size details into Key details & features. Because the tool refuses to invent fake specifications, richer inputs yield sharper bullets.",
        },
        {
          issue: "Description included phrasing too casual for B2B",
          fix: "Change Tone dropdown from Warm/Playful to Technical or Minimal and click Write description again.",
        },
        {
          issue: "Store platform has medical or regulatory rules",
          fix: "Review generated Headline and bullets carefully against FDA, FTC, or marketplace compliance claims before publishing live.",
        },
        {
          issue: "Write description button stays grayed out",
          fix: "Check that text fields contain at least 3 meaningful characters after clicking Clear example.",
        },
      ],
    },
    privacy: {
      heading: "Keep upcoming product launches under wraps",
      paragraphs: [
        "Submitted product names and SKU specs are processed transiently with storage opted out. Modify and publish generated descriptions anywhere across DTC sites, marketplaces, and print catalogs.",
        "Each generation evaluates purely your inputs inside an isolated session.",
      ],
    },
  },

  "screenshot-to-guide": {
    seoTitle: "Free AI Screenshot to Step-by-Step Guide & SOP Tool | Marvedge",
    metaDescription:
      "Turn up to 10 ordered screenshots and quick context notes into a clean title, numbered how-to steps, pro tips, and SOP summary. Fast documentation in one click.",
    primaryKeyword: "screenshot to guide",
    applicationCategory: "BusinessApplication",
    definitionLead:
      "Marvedge Screenshot to Guide converts ordered app screenshots into formatted step-by-step documentation automatically. Upload up to 10 screenshots (scaled smartly to 1280px max on your device before sending), optionally add a one-line context note per screen, and get a clean Title, Purpose, Numbered Steps, Tips, and short SOP summary.",
    lastUpdated: "November 2026",
    lastUpdatedIso: "2026-11-12",
    capabilities: [
      "Up to 10 screenshots per guide",
      "Per-screen context notes",
      "Auto-marks inferred areas (verify)",
      "Title, steps, tips & SOP block",
    ],
    howItWorks: {
      heading: "How to turn screenshots into clean SOPs and help docs",
      intro:
        "Skip typing out 'Step 1: Click Settings in the top right' manually for twenty help center updates every sprint.",
      steps: [
        {
          title: "Name your guide topic and add up to 10 screenshots",
          body: "Drag PNG/JPG/WebP captures in sequence (each numbered badge confirms step order), or click Try sample screenshots to test with 3 built-in ordered UI captures.",
        },
        {
          title: "Add brief optional notes beneath tricky screens",
          body: "Write a 3-word pointer under ambiguous views (like 'Select billing tab' or 'Paste API key') so captions hit 100% accuracy.",
        },
        {
          title: "Generate, verify flagged spots, and publish",
          body: "Click Generate guide to create a structured title, 1-line purpose, numbered instructions, tips, and SOP recap. Check any spots marked `(verify)` before sharing.",
        },
      ],
    },
    environments: {
      heading: "Built for support teams, onboarding writers, and internal ops",
      intro:
        "Turn scattered bug captures or visual QA walkthroughs into clean written documentation that reads naturally across help desks.",
      cards: [
        {
          title: "Help Center Articles (Intercom / Zendesk)",
          steps: [
            "Drop ordered feature screenshots once and paste clean step text straight beneath them.",
            "Consistent imperative style ('Click Publish', 'Select Team Role') removes author voice variance.",
            "Copy clean plain text with zero bloated HTML spans.",
          ],
        },
        {
          title: "Internal Standard Operating Procedures",
          steps: [
            "Document multi-step billing, payroll, or admin dashboard workflows in 60 seconds.",
            "Use the bottom SOP summary block for quick onboarding checklists in Notion or Confluence.",
            "Spot subtle edge checks right where AI flags `(verify)` on unclear screenshots.",
          ],
        },
        {
          title: "Built-in Verification Flag `(verify)`",
          steps: [
            "Instead of confidently hallucinating labels you cannot see, Marvedge appends `(verify)` when visual text is ambiguous.",
            "Includes an explicit reminder beneath output to review steps prior to team rollout.",
            "Delete or reorder workflow slots cleanly before running.",
          ],
        },
      ],
      note: "Need interactive clickable guides instead of static text + images? Written guides work cleanly for internal Notion wikis, while customer-facing onboarding often converts far better as interactive Marvedge demos where users actually click through real UI states.",
    },
    specs: {
      heading: "Vision pipeline specs and screenshot handling",
      intro:
        "Client-side image downscaling keeps multi-screenshot AI runs snappy and bandwidth-light.",
      items: [
        {
          label: "Screenshots per run",
          value: "1 - 10 images",
          detail: "Sequential numbered tiles maintain step order from screenshot 1 through 10.",
        },
        {
          label: "Client downscale",
          value: "Max 1280px JPG",
          detail: "Large 5K retina PNGs resize locally at 0.8 quality prior to API call.",
        },
        {
          label: "Output structure",
          value: "Title, Steps, SOP",
          detail: "Title, 1-line purpose, numbered instructions per screen, tips, and SOP summary.",
        },
        {
          label: "Uncertainty flag",
          value: "`(verify)` marker",
          detail: "Highlights button labels or clicks inferred rather than clearly visible.",
        },
        {
          label: "Per-screen notes",
          value: "Optional input",
          detail: "Supply short hints per screenshot card to steer complex state transitions.",
        },
        {
          label: "Storage policy",
          value: "store: false",
          detail: "Images process transiently through server inference without archival.",
        },
      ],
      callouts: [
        {
          title: "Tighter crops read far better than full 32-inch desktops",
          body: "Downscaling a huge dual-monitor capture to 1280px makes 9pt sidebar text tiny. Capture tight window or region screenshots around the relevant dialog so vision reads button names accurately.",
        },
        {
          title: "Add 1 screenshot per user click/action",
          body: "Skipping 3 clicks between screenshot 2 and 3 forces guesswork. Upload sequential screens so every step writes clearly without gaps.",
        },
        {
          title: "Always follow up with image compression for your live help docs",
          body: "When dropping the original crisp screenshots into Zendesk or Notion alongside this guide text, run them through Marvedge Image Compressor (WebP) so the doc loads instantaneously.",
        },
      ],
    },
    compatibility: {
      heading: "Supported image captures and doc outputs",
      intro: "Know how different capture sources behave before batching 10 screenshots.",
      columns: ["Screenshot input or destination", "Supported", "Best practice"],
      rows: [
        {
          target: "Desktop / Web / Mobile UI PNG, JPG, WebP",
          status: "Yes",
          detail: "Tight window captures maximize label readability after 1280px scaling.",
        },
        {
          target: "Sample 3-screen Marvedge test bundle",
          status: "Yes",
          detail: "Instant 1-click sample screens available directly inside dropzone.",
        },
        {
          target: "Handwritten whiteboard sketches",
          status: "Partial",
          detail: "Legible block handwriting works well when accompanied by per-image note hints.",
        },
        {
          target: "Docs over 10 steps long",
          status: "Partial",
          detail:
            "Split 20-step onboarding sequences cleanly into Part 1 and Part 2 runs of up to 10 screens.",
        },
        {
          target: "Automatic HTML/DOCX screenshot embedding",
          status: "No",
          detail:
            "Exports clean plain-text steps ready for Markdown, Notion, Confluence, or Help Scout.",
        },
      ],
    },
    troubleshooting: {
      heading: "Troubleshooting screenshot guides",
      intro: "Fix tiny UI misreads, dropped screenshots, or vague notes cleanly.",
      items: [
        {
          issue: "Output keeps tagging `(verify)` on small menu items",
          fix: "Your screenshot showed too wide a viewport, shrinking small menu text during 1280px compression. Crop tightly around the active panel or mention the clicked tab inside 'Optional note: what happens here?'.",
        },
        {
          issue: "Cannot drop screenshot #11",
          fix: "Each guide run caps at 10 images to keep multimodal latency tight. Break longer journeys into logical Phase 1 and Phase 2 docs.",
        },
        {
          issue: "Steps came out in the wrong workflow sequence",
          fix: "Drop files in numbered order (`step1.png`, `step2.png`) or remove and re-add trailing shots cleanly via the card `X` button.",
        },
        {
          issue: "Notice: Always review AI-written steps before sharing",
          fix: "Treat generated steps as an ultra-fast first draft, and verify URLs, keyboard shortcuts, and warning prompts against live production UI.",
        },
      ],
    },
    privacy: {
      heading: "Scrub sensitive secrets before uploading UI screens",
      paragraphs: [
        "Avoid uploading live customer emails, billing keys, or PII; test or blur real customer rows first. Scaled JPEGs process transiently for instruction generation with storage flags off.",
        "Full-resolution source PNGs stay inside browser memory; only compact 1280px JPEGs travel cleanly over TLS.",
      ],
    },
  },

  "voiceover-generator": {
    seoTitle: "AI Voiceover Generator (6 Voices + WAV) | Marvedge",
    metaDescription:
      "Turn scripts up to 4,000 characters into studio narration across 6 AI voices (Kore, Puck, Charon, Aoede, Fenrir, Leda) with delivery direction and WAV export.",
    primaryKeyword: "ai voiceover generator",
    applicationCategory: "MultimediaApplication",
    definitionLead:
      "Marvedge Voiceover Generator converts written narration scripts up to 4,000 characters into natural spoken audio directly in your browser. Choose among six distinct AI voices (Kore, Puck, Charon, Aoede, Fenrir, and Leda), guide tone with an optional Delivery direction prompt, audition playback inline, and download uncompressed `.wav` audio.",
    lastUpdated: "November 2026",
    lastUpdatedIso: "2026-11-12",
    capabilities: [
      "6 distinct studio AI voices",
      "Custom tone & delivery prompt",
      "Up to 4,000 characters per take",
      "Instant inline play & .wav download",
    ],
    howItWorks: {
      heading: "How to generate studio-grade voiceovers from text",
      intro:
        "No microphone acoustic room setup or choppy rerecordings just to tweak one product feature name.",
      steps: [
        {
          title: "Write or paste your script (up to 4,000 characters)",
          body: "Enter clean conversational narration (roughly 4 to 5 minutes of speech max) into the Script field. Punctuation controls natural breathing rhythm.",
        },
        {
          title: "Pick a voice persona and optional Delivery style",
          body: "Choose from Kore (Firm & clear), Puck (Upbeat), Charon (Informative), Aoede (Breezy), Fenrir (Excitable), or Leda (Youthful). Optionally cue tone in Delivery (e.g. 'warmly, calm pace' or 'confident documentary narrator').",
        },
        {
          title: "Generate, audition playback, and download WAV",
          body: "Click Generate voiceover to hear instant autoplay playback right below the form, then click Download to save `voiceover.wav` cleanly for Premiere, CapCut, or slide decks.",
        },
      ],
    },
    environments: {
      heading: "Six tuned voices across SaaS demos, explainers, and ads",
      intro:
        "Different channels call for distinct pacing. Test the exact same script across two voices cleanly before locking edits.",
      cards: [
        {
          title: "Kore & Charon (Clear Authority)",
          steps: [
            "Kore (Firm & clear) fits B2B product walkthroughs, onboarding tours, and executive feature updates.",
            "Charon (Informative) keeps educational tutorials, course modules, and documentation videos calm and grounded.",
            "Pair with subtle delivery notes like 'steady instructional pace, clear enunciation'.",
          ],
        },
        {
          title: "Puck, Aoede & Fenrir",
          steps: [
            "Puck (Upbeat) works cleanly on Product Hunt trailers, snappy feature launches, and Reels.",
            "Aoede (Breezy) feels friendly and natural for lifestyle brands and creator intros.",
            "Fenrir (Excitable) punches energetic hooks inside ads and short-form teasers.",
          ],
        },
        {
          title: "Uncompressed WAV Ready to Cut",
          steps: [
            "Saves cleanly as `voiceover.wav` rather than muddy low-bitrate audio files.",
            "Drag straight into DaVinci Resolve, Premiere Pro, CapCut, iMovie, or Keynote.",
            "Zero license strings or paid voice-seat watermarks.",
          ],
        },
      ],
      note: "Controlling pacing with Delivery prompts & punctuation. Think of the Delivery field like directing a voice actor behind glass (`Say calmly, conversational tempo:`). Combine it with short crisp sentences, commas for brief breaths, and ellipses or line breaks where you want extra pause between UI steps.",
    },
    specs: {
      heading: "Voice inventory, script limit, and audio export specs",
      intro:
        "Review character boundaries and voice characteristics before scripting a full release narration.",
      items: [
        {
          label: "Voice library",
          value: "6 personas",
          detail: "Kore, Puck, Charon, Aoede, Fenrir, and Leda built on Gemini speech synthesis.",
        },
        {
          label: "Script cap",
          value: "4,000 chars max",
          detail: "Visible live character counter (`.../4000`) updates as you type.",
        },
        {
          label: "Delivery field",
          value: "Style steering",
          detail: "Freeform tone guidance prepended cleanly (`Say <style>: <script>`).",
        },
        {
          label: "Audio container",
          value: "voiceover.wav",
          detail: "Clean uncompressed waveform export ideal for timeline NLE mixing.",
        },
        {
          label: "Playback check",
          value: "Built-in <audio>",
          detail: "Instant inline scrubbing and auditioning directly under Generate button.",
        },
        {
          label: "Account wall",
          value: "None",
          detail: "Generate and test line reads immediately without voice-slot signups.",
        },
      ],
      callouts: [
        {
          title: "Break long 10-minute scripts into scene takes",
          body: "Even under 4,000 characters, generating scene-by-scene clips makes slipping animations around video edits way easier than fighting one monolithic 4-minute WAV track.",
        },
        {
          title: "Fixing tricky brand or technical pronunciation",
          body: "If an unusual product name blends syllables awkwardly, swap it phonetically (e.g. writing 'Marv-edge' or 'Postgres' -> 'Post-gres') in a quick re-run without touching timing.",
        },
        {
          title: "Always pair spoken demos with subtitles",
          body: "Drop your finished video cut with this WAV narration into Marvedge Subtitle Generator so social feeds keep silent viewers engaged automatically.",
        },
      ],
    },
    compatibility: {
      heading: "Voices and delivery workflow compatibility",
      intro: "Match voice presets to common production scenarios and check practical boundaries.",
      columns: ["Voiceover scenario", "Supported", "Recommended setup"],
      rows: [
        {
          target: "Product demo narration & feature announcements",
          status: "Yes",
          detail: "Pair Kore or Puck with Demo Script Generator for crisp 60-second walks.",
        },
        {
          target: "YouTube tutorial & SaaS help center explainers",
          status: "Yes",
          detail: "Select Charon or Kore with a calm 'clear, friendly guide' delivery hint.",
        },
        {
          target: "Vertical Reels, TikTok & launch teasers",
          status: "Yes",
          detail: "Use Puck, Aoede, or Fenrir with Delivery set to 'warmly, with energy'.",
        },
        {
          target: "Voice cloning from custom audio samples",
          status: "No",
          detail: "Provides 6 clean studio voices safely without personal voice-cloning risk.",
        },
        {
          target: "Scripts above 4,000 characters in one click",
          status: "Partial",
          detail:
            "Split multi-chapter narration into 2-3 clean takes (~3,500 chars each) and stitch in your editor.",
        },
      ],
    },
    troubleshooting: {
      heading: "Troubleshooting AI voiceover takes",
      intro: "Fix awkward pronunciation, cutoffs, or temporary rate errors cleanly.",
      items: [
        {
          issue: "Pacing ran too fast through technical acronyms",
          fix: "Add periods or commas around clauses, write out symbols like `&` as `and`, and include 'moderate pace, pause slightly between sentences' inside Delivery.",
        },
        {
          issue: "Text cut off near end of long paste",
          fix: "The Script box caps cleanly at `4000` characters (`maxLength={4000}`). Trim trailing sentences into a second separate take cleanly.",
        },
        {
          issue: "Voice sounds different from requested Delivery tag",
          fix: "Keep Delivery instructions short and expressive ('warmly, conversational', 'slow and reassuring') rather than multi-sentence formatting paragraphs.",
        },
        {
          issue: "Error: Too many requests or temporary timeout",
          fix: "Wait briefly and hit Generate voiceover again; if converting large scripts, generate one clean section per take.",
        },
      ],
    },
    privacy: {
      heading: "Safe studio synthesis without voice impersonation risks",
      paragraphs: [
        "Six curated voices eliminate unauthorized celebrity likeness or talent clearance disputes. Rendered audio decodes directly into a browser `.wav` Blob you save locally.",
        "Use downloaded `.wav` tracks inside product videos, docs, paid ads, and internal training.",
      ],
    },
  },

  "demo-script-generator": {
    seoTitle: "AI Product Demo Script & Scene Generator | Marvedge",
    metaDescription:
      "Turn product specs and buyer personas into a structured Demo outline, numbered Scenes pairing screen actions with spoken narration, and a Closing CTA.",
    primaryKeyword: "product demo script generator",
    applicationCategory: "BusinessApplication",
    definitionLead:
      "Marvedge Demo Script Generator writes structured product demo scripts tailored to B2B buyers and product launches. Enter your product summary, features to highlight, target viewer persona, and length (60 seconds, 2 minutes, or 3 minutes) to get a crisp Demo outline, numbered Scenes mapping on-screen actions to spoken lines, and a Closing CTA.",
    lastUpdated: "November 2026",
    lastUpdatedIso: "2026-11-12",
    capabilities: [
      "Structured Demo outline block",
      "Numbered Action + Narration scenes",
      "60s, 2-min & 3-min pacing presets",
      "Benefit-driven Closing CTA",
    ],
    howItWorks: {
      heading: "How to write a conversion-focused product demo script",
      intro:
        "Random unscripted feature clicking puts prospects to sleep. Lock on-screen visuals cleanly to concise spoken benefits before recording.",
      steps: [
        {
          title: "Summarize your product & core buyer workflow",
          body: "Fill in Product name & what it does and list only the 3 to 5 key workflows buyers actually care about in Features to show (skip boring login and settings screens).",
        },
        {
          title: "Set Who's watching and pick target spoken Length",
          body: "Specify buyer persona (e.g. Sales leaders at B2B SaaS companies or DevOps engineers) and choose 60 seconds (homepage teaser), 2 minutes (landing explainer), or 3 minutes (buyer champion share).",
        },
        {
          title: "Generate scenes, rehearse, and voice or publish",
          body: "Click Write demo script to inspect your Demo outline, numbered Action + Narration scenes, and Closing CTA, then click Copy to build your visual sequence.",
        },
      ],
    },
    environments: {
      heading: "Built for founder launches, GTM teams, and interactive demos",
      intro:
        "Pairing explicit visual cue directions with tight spoken lines prevents rambling mid-take.",
      cards: [
        {
          title: "60-Second Teaser Scripts",
          steps: [
            "Starts directly with the user's core pain point rather than a 15-second company history.",
            "Alternates 3 high-impact UI screens tightly within ~140 spoken words.",
            "Ends on a single unmistakable Closing CTA (`Book a demo`, `Start free`, or `Try it now`).",
          ],
        },
        {
          title: "2-3 Minute Deal Accelerators",
          steps: [
            "Structured around value milestones buyers forward smoothly to economic decision makers.",
            "On-screen cues tell editors cleanly when to zoom, highlight, or click menus.",
            "Strict output prompt ensures zero fake URL claims or invented site scrapes.",
          ],
        },
        {
          title: "Script -> Voice -> Loop/Tour",
          steps: [
            "Copy narration straight into Voiceover Generator to audition studio audio speed.",
            "Capture real screen scenes matching numbered Scene descriptions cleanly.",
            "Package finished screens interactively in Marvedge instead of rigid flat videos.",
          ],
        },
      ],
      note: "Why leading with buyer outcomes beats showing the login screen. Prospects already know how signup forms and workspace settings look. Listing only high-impact product actions inside 'Features to show' steers your script straight into the core payoff inside the first 10 seconds.",
    },
    specs: {
      heading: "Script structure and pacing specs",
      intro:
        "Every generated script separates spoken voiceover cleanly from visual director notes.",
      items: [
        {
          label: "Duration targets",
          value: "60s · 2m · 3m",
          detail: "Matches typical homepage teaser, explainer, and deep-dive walkthrough lengths.",
        },
        {
          label: "Script anatomy",
          value: "Outline + Scenes + CTA",
          detail: "Clean hierarchy built for editors, voice artists, and product marketers.",
        },
        {
          label: "Scene pairing",
          value: "Action + Narration",
          detail: "Every numbered beat explicitly couples UI cursor movement with spoken phrasing.",
        },
        {
          label: "Factual guard",
          value: "No URL hallucination",
          detail:
            "Relies strictly on features you list; never fabricates details from outside URLs.",
        },
        {
          label: "Max prompt box",
          value: "40,000 chars",
          detail:
            "Handles full product PRDs or positioning briefs if pasted alongside core bullets.",
        },
        {
          label: "State privacy",
          value: "store: false",
          detail:
            "Pre-launch product positioning stays private with storage disabled on API calls.",
        },
      ],
      callouts: [
        {
          title: "Timing check: 130 to 150 spoken words per minute",
          body: "After generating your script, read narration lines aloud once with a stopwatch. Trimming 20% of filler adjectives lets on-screen transitions breathe calmly.",
        },
        {
          title: "Writing clearly for silent & captioned viewing",
          body: "Even with clear narration, keep on-screen actions obvious visually so muted LinkedIn or landing-page visitors follow the story easily.",
        },
        {
          title: "Turn scenes straight into Marvedge hotspots",
          body: "Each numbered Scene returned by this generator translates cleanly into one clickable tooltip/hotspot step inside an interactive Marvedge demo.",
        },
      ],
    },
    compatibility: {
      heading: "Demo formats supported cleanly",
      intro:
        "Adapt numbered action-and-narration beats across video, live calls, or self-serve product tours.",
      columns: ["Demo destination", "Supported", "Usage tip"],
      rows: [
        {
          target: "Interactive clickable demos (Marvedge)",
          status: "Yes",
          detail: "Map every numbered Scene directly into one guided click-through step.",
        },
        {
          target: "Product Hunt & launch announcement videos",
          status: "Yes",
          detail: "Choose 60 seconds + send narration lines straight to Voiceover Generator.",
        },
        {
          target: "Asynchronous sales Loom leave-behinds",
          status: "Yes",
          detail:
            "Use 2-minute length tailored to specific buyer role (e.g., VP Engineering vs RevOps).",
        },
        {
          target: "Live AE discovery call scripts",
          status: "Yes",
          detail:
            "Keep Demo outline beside Zoom as a guard against drifting into irrelevant menus.",
        },
        {
          target: "Automatic crawling of private app URLs",
          status: "No",
          detail:
            "Describe your product behavior clearly in text fields rather than expecting automatic URL browsing.",
        },
      ],
    },
    troubleshooting: {
      heading: "Troubleshooting demo scripts",
      intro: "Fix vague action beats or overly long word counts rapidly.",
      items: [
        {
          issue: "On-screen actions look too generic (e.g. 'Show dashboard')",
          fix: "List real feature names and UI workflows inside 'Features to show' (e.g. 'Drop a video, set 480px width slider, drag start/end trim handles, copy link') for concrete visual direction.",
        },
        {
          issue: "Script felt slightly long for a 60-second sprint",
          fix: "Verify Length is selected as 60 seconds and trim secondary features out of 'Features to show', since showing 3 workflows clearly beats cramming 8.",
        },
        {
          issue: "Need script tailored to different buyer personas",
          fix: "Keep Product text untouched and rerun twice changing only 'Who's watching?' (for example: Marketing Directors vs Frontend Engineers).",
        },
        {
          issue: "Forgot to clear prefilled Marvedge example text",
          fix: "Click Clear example directly next to the Generate button to reset fields immediately before pasting your own product details.",
        },
      ],
    },
    privacy: {
      heading: "Unlaunched features stay private cleanly",
      paragraphs: [
        "Inputs travel over HTTPS for one-shot generation with state persistence disabled. Tool never probes private staging links; only details typed explicitly enter the prompt.",
        "Adapt, record, voice, and publish finished scripts freely across landing pages and sales teams.",
      ],
    },
  },
};
