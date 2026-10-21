# Cover art

Painted cover illustrations for the twelve sample books. Drop a file here
named after the book's id and it appears on every cover of that book: the
Shelf, the book page, the Library, the homepage and the 3D films. Until a file
exists, the site shows a plain edition (a soft wash in the book's colour with
the title), so a missing file never looks broken.

## Format

- **Name:** `<book-id>.webp` (preferred). `<book-id>.jpg` also works.
- **Shape:** portrait 2:3. About **1200 x 1800 px**. Anything else is cropped to fill, from the centre.
- **Size:** aim for 150 to 400 KB per file (WebP quality around 80).
- **No type.** The site sets the title, the "A Novel" line and the Novinity mark on top of the art. No title, author name, logo or border in the painting.
- **Keep the top third calm.** The title sits there: sky, mist, a wall, open water. Put the subject in the middle and lower thirds.
- **Keep the bottom 10% quiet** too. The small Novinity mark sits at the foot, centred.
- Full bleed: paint to the edges. No frame, no vignette.
- Title colour is chosen automatically: white type over a soft dark shade when the top of the painting is mid or dark, near-black type over a soft light shade when it is pale. To force one, set `ink: 'light'` or `ink: 'dark'` for that book in `src/data/covers.ts`.

After adding files, rebuild and redeploy as usual. Nothing in the code needs to change.

## Files

| File | Title | Genre | Art brief |
| --- | --- | --- | --- |
| `quiet-frequency.webp` | The Quiet Frequency | Mystery, Historical | A stone radio hut on a storm-bitten Hebridean headland at night, 1957, one warm window lit, a lighthouse beam crossing rain over a heavy dark sea. Slate blues and storm greys, a single amber light. |
| `unmade-places.webp` | A Map of Unmade Places | Fantasy, Romance | A canal city of bridges and towers at dawn, its eastern edge dissolving into white fog as if the map is being erased; a small figure with a lantern on a bridge. Parchment, ink green, a touch of vermilion. |
| `meridian-drift.webp` | Meridian Drift | Science Fiction, Mystery | The garden deck of a vast generation ship: strawberry plants flowering under long grow-lights, a lone botanist kneeling, and through a curved window low in the frame, a field of perfectly still stars. Cream, soft greens, strawberry red. |
| `lemon-house.webp` | The Lemon House Letters | Romance, Contemporary | Sun-warmed lemon terraces and a vine pergola stepping down to the sea on the Amalfi coast in late summer; a tin of old letters on a stone wall. Lemon yellow, sea blue, white afternoon light. |
| `harrow-keys.webp` | Nine Keys to Harrow House | Thriller, Mystery | A Jacobean manor in the Cotswolds on a storm-bound November night, one long corridor of closed doors lit from within; an old iron key ring in the foreground. Charcoal and black, candlelight, one red accent. |
| `silk-ledger.webp` | The Silk Ledger | Historical Fiction, Mystery | Venice, plague summer 1576: a candlelit merchant's room above the Rialto, an open ledger and bolts of crimson silk, a dark canal and arcades through the window. Oxblood, old gold, deep shadow. |
| `ninth-dune.webp` | Beneath the Ninth Dune | Adventure, Historical | A small 1930s biplane throwing a long shadow across vast apricot dunes of the Namib, the hint of ruined walls in the valley between two dunes. Burnt orange, sand, a pale hot sky. |
| `saint-agathe.webp` | The Hollowing of Saint Agathe | Horror, Gothic | A former convent school half-buried in snow in a dark pine forest, winter 1974, drifts up to the sills, one high arched window glowing amber. Olive-black, bone white, one warm light. Unsettling and quiet, nothing gory. |
| `ordinary-weather.webp` | All the Ordinary Weather | Literary Fiction | A Lisbon street of tiled facades and laundry lines as river fog lifts, a woman at an open window with a notebook, a wide changing sky. Soft blue-greys, rain light, a touch of terracotta. |
| `glass-orchard.webp` | The Glass Orchard | Fantasy, Cozy | An orchard of glass trees on a mountainside at evening, branches catching lantern light, a small apprentice with a lantern climbing a path toward the peaks. Deep pine green, amber glow, glints of glass. |
| `marmalade-society.webp` | Murder at the Marmalade Society | Cozy Mystery, Comedy | A village-hall table of marmalade jars glowing like stained glass, a silver prize ladle and a tipped crate of Seville oranges, a stone Yorkshire Dales village in January through the window. Marmalade orange and cream, playful, nothing grisly. |
| `tethys-garden.webp` | The Last Garden on Tethys | Science Fiction, Literary | A small domed greenhouse glowing green on the rim of an icy canyon on a frozen moon, Saturn and its rings low and pale on the horizon. Ice blue-grey, soft green, quiet and hopeful. |
