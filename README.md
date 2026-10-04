# TravelBharat — `index7.html`

> Twenty-eight states, eight union territories, one country worth reading slowly.

`index7.html` is a **single-file, zero-build static travel guide for India**. Open it in a browser and you get a state-by-state directory of tourist places — with search, gallery, detail modals, wishlist, itinerary builder, and booking links.

No npm, no bundler, no backend. Just HTML + CSS + JS in one file.

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

All images are embedded as `data:image/jpeg;base64,...` (`IMG`, `IMG2`, `IMG3`, `IMG4` objects), so the file works offline except for Google Fonts + external booking/maps links.

## What it does

### 1. Header (sticky)
- `TravelBharat` wordmark → `goHome()` resets to home view
- Live search `#searchInput` → searches places + states by name, capital, category
  - `buildSearchIndex()`, `SEARCH_INDEX`, `handleSearchClick()`
  - Shows up to 8 matches in dropdown, click jumps to `openState()` / `openPlace()`
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
  - “Book on MakeMyTrip” link → `mmtLink()` currently returns `https://www.makemytrip.com/`

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

### 8. Itinerary builder
- `itinerary = new Set("slug|idx")`
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

- Images are base64 in-file → `index7.html` is very large (~MBs). Consider moving to `/images/` + lazy loading.
- `mmtLink()` is generic, not per-place deep link yet.
- Itinerary selection UI (`toggleItinerary`) exists in JS but no “+” button wired in current `renderPlaces()` — only wishlist star is wired.
- Wishlist modal CSS (`.wishlist-modal`, `.wl-*`) referenced in HTML/JS but styles are missing in `<style>` — works functionally, looks unstyled.
- Search is substring-only, no fuzzy match.
- No router — back button doesn’t restore `openState()`, state is in-memory only.

## Quick customize

- Change title: `<title>TravelBharat — Explore India, State by State</title>`
- Change theme: edit `:root { --paper, --ink, --gold... }`
- Add region: push to `DATA.regions` + set `region` on states
