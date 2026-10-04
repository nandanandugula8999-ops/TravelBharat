# TravelBharat — `index7.html`

> Twenty-eight states, eight union territories, one country worth reading slowly.

`index7.html` is a **zero-build static travel guide for India**. Open it in a browser and you get a state-by-state directory of tourist places — with search, gallery, detail modals, wishlist, itinerary builder, and booking links.

No npm, no bundler, no backend. Code is split for maintainability:

- `index7.html` — markup only
- `styles.css` — all styling (base + polish + wow + QA-fix layers)
- `app.js` — all application logic
- `theme.js` — tiny blocking head script that restores the saved theme before first paint

## How to run

1. Go to folder `C:\DOPE SHIT\unified mentor project-1`
2. Double-click `index7.html` — or right-click > Open with Chrome / Edge / Firefox
3. Optional local server (avoids issues with some browsers):
   ```powershell
   # Python
   python -m http.server 8000
   # then open http://localhost:8000/index7.html

   # Node
   npx serve .
   ```

All images are `.webp` files under `images/places/` (lazy-loaded with width/height to avoid layout shift), so the pages work offline except for Google Fonts + external booking/maps links.

## What it does

### 1. Header (sticky)
- `TravelBharat` wordmark → `goHome()` resets to home view
- Live search `#searchInput` (combobox + listbox) → searches places + states by name, capital, category
  - `buildSearchIndex()`, `SEARCH_INDEX`, `renderSearchResults()`, `handleSearchClick()`
  - Shows up to 8 matches in dropdown; click, Enter, or ↑/↓ + Enter jumps to `openState()` / `openPlace()`; Escape/× clears
  - Clear (×) button `#searchClear` appears while typing
- Wishlist star button `#headerWishBtn` with count badge `#wishCount` → `openWishlist()`

### 2. Hero
- Headline + sub-text + region quick-jump buttons `#regionJump`
- `renderRegionJump()` builds buttons from `DATA.regions`
- `scrollToRegion(key)` → `goHome()` + smooth scroll to `#region-<key>`

### 3. Gallery
- `GALLERY` array (5 featured: Taj Mahal, Amber Fort, Palolem Beach, Nubra Valley, Tawang Monastery)
- `renderGallery()` → clickable cards → `openPlace(slug, idx)`

### 4. Regions → States
- 6 regions in `DATA.regions`:
  - `north` — Himalayan passes, Mughal capitals, desert forts
  - `west` — Coastline, salt flats, Deccan trap hills
  - `south` — Temple towns, hill stations, backwaters
  - `east` — River deltas, tribal heartlands, colonial ports
  - `northeast` — Living root bridges and cloud forests
  - `central` — Sandstone temples and tiger forests
- `renderRegions()` → grid of `.state-tile` per visible state (filters `!s.hidden`)
  - Tile shows `heroImg`, `name`, `capital`, `tagline`
  - Click → `openState(slug)`

Visible states (21): Rajasthan, Uttar Pradesh, Himachal Pradesh, Delhi, Jammu & Kashmir, Uttarakhand, Punjab, Haryana, Ladakh, Maharashtra, Gujarat, Goa, Kerala, Tamil Nadu, Karnataka, Telangana, West Bengal, Odisha, Meghalaya, Assam, Madhya Pradesh

Hidden states (still in data + search, `hidden:true`): Dadra and Nagar Haveli and Daman and Diu, Andhra Pradesh, Andaman & Nicobar, Lakshadweep, Puducherry, Chandigarh, Bihar, Jharkhand, Chhattisgarh, Sikkim, Arunachal Pradesh, Manipur, Mizoram, Nagaland, Tripura

### 5. State view
- `openState(slug)` hides hero/regions/gallery, shows `#stateView`
- `renderStateView(state)` → header (name, capital, region, tagline), category chips, itinerary banner, place list
- Category filter chips: `all` + `heritage` / `nature` / `religious` / `adventure` → `setFilter(cat)`
- `renderPlaces(state)` → `.place-card` per place:
  - category color top-border (`catColor()`), label (`catLabel()`), name, desc
  - wishlist star → `toggleWish()`
  - “Book on MakeMyTrip” link → `mmtLink(state, place)` builds a per-place holiday-packages URL from the place's own destination (with aliases for towns MMT doesn't list)

### 6. Place detail modal
- `openPlace(stateSlug, idx)` → `#modalOverlay` + `#modalBody`
- Shows: image, category, name, state, `desc` + `history`, fact-grid:
  - Best time to visit (`best`), Entry fee (`fee`), Timings (`timings`), State
- Buttons: View on Google Maps (`https://www.google.com/maps/search/?api=1&query=<map>`), Book Your Trip (MakeMyTrip), Nearby in state (up to 3 others)
- `closeModal()` on X / overlay click / Escape

### 7. Wishlist (persistent)
- `wishlist = new Set("slug|idx")`, saved to `localStorage['travelbharat-wishlist']`
- `toggleWish()`, `updateWishCount()`, `wishEntries()`, `renderWishlist()`, `openWishlist()`, `closeWishlist()`, `viewWishPlace()`, `removeWish()`, `clearWishlist()` (two-tap confirm)
- Stores count in header, syncs stars via `syncWishButtons()`

### 8. Itinerary builder (persistent)
- `itinerary = new Set("slug|idx")`, saved to `localStorage['travelbharat-itinerary']` (loaded + pruned on start)
- Banner in state view: count + Generate button → `updateItineraryUI()`
- `openItineraryModal()` groups by state, sorts, chunks into days (max 3 places/day, new day on state change)
- Shows `Your N-Day Trip Plan` with day timeline

### 9. Styling / UX
- Fonts: `Fraunces` (serif headings) + `Work Sans` (body) via Google Fonts
- CSS variables in `:root` for light theme + `prefers-color-scheme: dark` + manual `[data-theme="dark"]`
- Colors: `--ink`, `--paper`, `--gold`, `--teal`, `--maroon`, `--slate`
- Responsive grid, sticky header, skeleton shimmer CSS (`.skeleton`), hover zooms, modal overlays
- `images/favicon.png` linked as icon

## Data model

```js
DATA = {
  regions: [{ key, name, blurb }],
  categories: {
    heritage: { label, color },
    nature: {...},
    religious: {...},
    adventure: {...}
  },
  states: [{
    slug, name, region, capital, tagline, heroImg, hidden?,
    places: [{
      name, category, img?, desc, history,
      best, fee, timings, map
    }]
  }]
}
```

To add a place:
1. Find state by `slug` in `DATA.states`
2. Push `{ name, category: 'heritage|nature|religious|adventure', desc, history, best, fee, timings, map }`
3. Optional `img: IMG.X` or `IMG2/IMG3/IMG4.<slug>`
4. To expose a hidden state, remove `hidden:true`

To add a booking deep-link per place, edit:
```js
function mmtLink(state, place) { return MMT_URL; }
```

## Files in this folder

- `index7.html` — page markup (styles in `styles.css`, logic in `app.js`, pre-paint theme in `theme.js`)
- `images/places/` — site images (`.webp`, referenced by the app)
- `images/raw/` — standalone source photos (`.avif`, not referenced by the app)
- `images/favicon.png` — site icon
- `data/image-sources.json` — image source data

## Limitations / TODO

- All modals lock background scrolling while open (nesting-safe counter in `lockScroll()` / `unlockScroll()`).
- Search is substring-only, no fuzzy match.
- No router — back button doesn’t restore `openState()`, view state is in-memory only.

## How to test locally

Keep all four files (`index7.html`, `styles.css`, `app.js`, `theme.js`) together — `file://` works, but a local server is more reliable:

```powershell
# Python
python -m http.server 8000
# then open http://localhost:8000/index7.html
```

Checklist: nav links + hamburger (desktop & phone widths) · search typing, ↑/↓/Enter, Escape, × · filters + Reset · empty-filter message · place cards (wishlist star, View details, + Add to trip, Maps, MakeMyTrip) · detail modal (facts, nearby, wishlist/trip buttons, Escape/X/overlay close) · wishlist add/remove/persist after refresh · trip planner add/reorder/remove/print/download/persist after refresh · theme toggle persists · light + dark mode · 320px width with no horizontal scroll · keyboard-only run (Tab through header, search, cards, modals).

## Quick customize

- Change title: `<title>TravelBharat — Explore India, State by State</title>`
- Change theme: edit `:root { --paper, --ink, --gold... }`
- Add region: push to `DATA.regions` + set `region` on states
