# cssexercise2

## todo

Nav bottom
-Rename and align items center

Menu

- Buttons should not be presented by any other elements than
- They also don’t have a hover state (when one hover over the element and its colour changes a bit indicating that the element is clickable) ... fixa nav-text (se ovan)

- toggleBox can be styled without JavaScript with the pseudo-class “:checked” on the input the label is connected to
- Its circle should ideally be a div. One usually uses pseudo-elements for it (:after).
  If it’s needed to use a div, don’t forget to add an aria-hidden property on the element
- Same with the .circle — you can use pseudo-class “:checked” and avoid using JavaScript

Cards

- “image-avatar-wrapper-purple” should not contain an image so that the network is not over flooded with unnecessary requests. Rendering images also takes some time thus there might be “blinking”. This styling can be done with CSS instead.

JavaScript

- Event listeners on growth, analytics, thirdParty and etc look all the same. There’s a way to write this code only once that would apply to all of those categories

## done

Top right menu (list of pages)

- The sandwich button doesn’t work on mobile
  Menu
- A menu element should not contain p elements — read up on it on MDN
- “menu-filter” don’t have “cursor: pointer” on hover
- On tablet size screens “slider-text” is too close to the toggle

Card

- “attendee-number” is not centred properly. It should be relative to the “image-avatar-wrapper-purple” element
- “card-text” is truncated everywhere. This makes the content of the cards useless for users. Must be a bug.

---

- toggle display: bug
- event delegation på filter
- bilderna ser ut att vara olika platser på kortet?
- fler än 3 bild med antal
- fixa bug i menu
- lägg i hamburger i en knapp. läs om det på sidan
- fixa så api funkar
- bug hamburger knapp
- alla menu filter ska vara button ej p
- All button ska följa med scroll
- pilen ska ej följa med i top-menu
- pilen ska ej vara img. Använd after element pseudo använd background image.
- på varje kort: när text lång...
- responsive - kolla google drive/ hur boxar funkar när fönster minskar
- filters
- bild
- gradiant overlay ska vara kvar i top menu när man scrollar. Får den ej att funka. Antingen ligger den ovanpå o det går ej att plicka eller så ligger den under och då går det att klicka.
