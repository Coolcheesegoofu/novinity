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

The twelve paintings were commissioned by the creative director on 2026-11-07 and the books were written to match them. Each file is a 2:3 crop (800 x 1200) of the original landscape painting.

| File | Title | Genre | The painting |
| --- | --- | --- | --- |
| `last-passenger.webp` | The Last Passenger | Mystery, Historical | Ink-and-wash noir: a man in a long coat and hat on a foggy night platform beside a lit train. |
| `interior-line.webp` | The Interior Line | Fantasy, Adventure | A young man in an orange checked coat and green top hat in a red carriage, a painted dream-country outside. |
| `small-print.webp` | Small Print | Science Fiction, Comedy | A small handmade pink robot reading a green book. |
| `lost-property.webp` | Lost Property | Romance, Cozy | Watercolour: a black cat in a cornflower meadow under a wide blue sky. |
| `return-job.webp` | The Return Job | Crime, Comedy | Flat graphic faces in sunglasses on bright blue. |
| `eighth-panel.webp` | The Eighth Panel | Historical, Mystery | A young woman's eye behind torn layers of a painted Joseon folding screen. |
| `ember-road.webp` | The Ember Road | Adventure, Fantasy | A lone cloaked figure on a ridge at a red sunset, a dark mountain behind. |
| `underpainting.webp` | Underpainting | Horror, Literary | A man face down in bright, painted rippling water. |
| `missing-words.webp` | The Missing Words | Literary, Magical Realism | A red-haired woman at a desk, a riotous picture-book world through the window. |
| `no-king.webp` | The Moon Keeps No King | Fantasy, Epic | A cloaked warrior before red and black banners under a white full moon. |
| `low-valley.webp` | Low Valley | Literary, Near Future | A sunlit aerial view of a green valley village. |
| `planted.webp` | Nobody Planted This | Science Fiction, Mystery | A lake of coral and pink flowering trees under huge pink clouds and two moons. |
