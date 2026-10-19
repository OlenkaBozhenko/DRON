---
name: Place field and last search
slug: place-field
group: Wide screens
order: 26
classes: .dr-place · __key · --empty · .dr-places · .dr-lastsearch · __places
file: place.css · lastsearch.css
inventory: (new, wide screens)
kit: 4072
---

## Anatomy

```html
<div class="dr dr-desk dr-desk--order" style="width:496px;max-width:100%;padding:16px"><div class="dr-places" role="group" aria-label="Where">
        <span class="dr-place"><svg class="dr-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 21s-6.5-6-6.5-11a6.5 6.5 0 0 1 13 0c0 5-6.5 11-6.5 11z"/><circle cx="12" cy="10" r="2.3"/></svg>Podil — Naberezhno-Khreshchatytska St, 21</span>
        <span class="dr-place"><svg class="dr-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 21s-6.5-6-6.5-11a6.5 6.5 0 0 1 13 0c0 5-6.5 11-6.5 11z"/><circle cx="12" cy="10" r="2.3"/></svg>Osokorky — Dniprovska Naberezhna, 14</span>
      </div></div>
```

- `.dr-place` — A pin and the place on `--bg-well`, 48 tall: read, not typed — the search already took it. Ink 13.33:1 light, 14.09:1 dark.
- `.dr-places` — The places of the order, 8 apart.

## Variants

### Phone

```html
<p class="dr-note">Not on the phone.</p>
```

The phone never draws it: every rule here matches only inside `.dr-desk`, the frame of a desktop twin.

### The step window

```html
<div class="dr dr-screen dr-desk dr-desk--order" style="width:640px;height:900px;max-width:none">
<div class="dr-mapground" role="img" aria-label="Live map of Kyiv, 128 drones in the air"><span class="dr-mapground__drone" style="left:31%;top:34%"></span><span class="dr-mapground__drone" style="left:44%;top:58%"></span><span class="dr-mapground__drone" style="left:63%;top:30%"></span><span class="dr-mapground__drone" style="left:70%;top:66%"></span><span class="dr-mapground__drone" style="left:60%;top:82%"></span><span class="dr-mapground__drone" style="left:38%;top:76%"></span><span class="dr-mapground__drone" style="left:78%;top:44%"></span><span class="dr-mapground__drone" style="left:24%;top:60%"></span><span class="dr-mapground__drone" style="left:58%;top:48%"></span></div>
<div class="dr-veil" aria-hidden="true"></div>
<div class="dr-dim" aria-hidden="true"></div>
<main class="dr-window dr-window--step dr-material" aria-labelledby="dk-title--s82">
    <div class="dr-window__head"><a class="dr-iconbtn dr-material" href="../../wireframes/desktop/listings.html#find" aria-label="Back to Order"><svg class="dr-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M15 5l-7 7 7 7"/></svg></a><h1 class="dr-window__title" id="dk-title--s82">Package delivery</h1></div>
    <div class="dr-scroll">
      <div class="dr-places" role="group" aria-label="Where">
        <span class="dr-place"><svg class="dr-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 21s-6.5-6-6.5-11a6.5 6.5 0 0 1 13 0c0 5-6.5 11-6.5 11z"/><circle cx="12" cy="10" r="2.3"/></svg>Podil — Naberezhno-Khreshchatytska St, 21</span>
        <span class="dr-place"><svg class="dr-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 21s-6.5-6-6.5-11a6.5 6.5 0 0 1 13 0c0 5-6.5 11-6.5 11z"/><circle cx="12" cy="10" r="2.3"/></svg>Osokorky — Dniprovska Naberezhna, 14</span>
      </div>
      <h2 class="dr-zone__title dr-window__sub" id="offers-title--s82">Parcel size</h2>
      <fieldset class="dr-offers" aria-labelledby="offers-title--s82">
        <label class="dr-offer">
          <input type="radio" name="offer" value="2kg" checked class="sr-only">
          <span class="dr-well"><img src="../../assets/drones/thumbs/drone-02.png" alt="" loading="lazy" decoding="async"></span>
          <span class="dr-offer__body">
            <span class="dr-offer__name">Up to 2 kg</span>
            <span class="dr-offer__meta">4 available · arrives in 6 min</span>
          </span>
          <span class="dr-offer__price">₴180</span>
        </label>
        <label class="dr-offer">
          <input type="radio" name="offer" value="5kg" class="sr-only">
          <span class="dr-well"><img src="../../assets/drones/thumbs/drone-01.png" alt="" loading="lazy" decoding="async"></span>
          <span class="dr-offer__body">
            <span class="dr-offer__name">Up to 5 kg</span>
            <span class="dr-offer__meta">2 available · arrives in 9 min</span>
          </span>
          <span class="dr-offer__price">₴240</span>
        </label>
        <label class="dr-offer">
          <input type="radio" name="offer" value="10kg" class="sr-only">
          <span class="dr-well"><img src="../../assets/drones/thumbs/drone-08.png" alt="" loading="lazy" decoding="async"></span>
          <span class="dr-offer__body">
            <span class="dr-offer__name">Up to 10 kg</span>
            <span class="dr-offer__meta">1 available · arrives in 14 min</span>
          </span>
          <span class="dr-offer__price">₴320</span>
        </label>
      </fieldset>
    </div>
    <div class="dr-foot"><div class="dr-window__actions">
      <a class="dr-btn dr-btn--primary dr-btn--block" href="../../wireframes/desktop/order-setup.html">Order</a>
    </div></div>
  </main>
<a class="dr-talk dr-material dr-talkdock" href="../../wireframes/desktop/listings.html"><span class="dr-talk__orb"><svg class="dr-fly" viewBox="0 85 257 86" aria-hidden="true"><g class="dr-fly__body"><path d="M134.562 139.657C139.664 139.658 146.389 139.5 151.382 139.868C150.984 141.355 150.562 142.836 150.115 144.311C159.279 146.64 168.469 149.712 177.476 152.57C181.414 153.821 185.314 155.137 189.047 156.898L189.276 153.86C193.148 153.815 199.501 153.931 203.228 154.268C203.246 157.757 203.813 165.724 202.937 168.598C201.655 169.843 199.563 170.331 197.795 170.379C192.412 170.525 189.205 170.69 188.936 164.715C185.098 164.061 176.035 161.262 172.165 160.131C164.436 157.871 155.866 155.601 148.284 153.053L146.833 155.86C145.925 157.537 144.768 159.497 142.948 160.364C140.897 161.342 116.227 161.345 113.561 160.436C111.313 159.669 109.432 155.1 108.458 153.165C97.3799 156.617 85.743 159.364 74.6133 162.736C72.5648 163.357 70.4584 163.927 68.3809 164.453C68.2577 167.359 67.6582 169.523 64.2471 170.245C61.9199 170.738 54.2735 170.886 53.6827 167.902L53.6573 167.767C53.2528 165.738 53.5011 156.628 53.5274 153.931C57.2809 153.924 64.09 153.664 67.4542 154.016C68.0263 154.488 67.9219 154.77 68.1231 155.624C68.7451 155.76 102.284 145.63 106.523 144.43C106.178 142.869 105.857 141.304 105.561 139.734L134.562 139.657ZM118.426 163.557C124.218 163.303 130.652 163.57 136.507 163.465C137.41 163.449 137.914 163.489 138.448 164.043C138.764 165.348 137.993 166.558 137.398 167.742C135.711 169.657 123.157 169.069 120.406 168.284C119.626 168.061 118.518 164.476 118.426 163.557ZM135.191 95.5869C140.649 95.5867 151.884 95.0279 156.317 96.3848C171.371 100.992 176.141 121.474 164.703 132.057C160.104 136.312 157.137 137.006 151.162 136.983C135.886 137.159 120.478 136.772 105.203 136.874C98.793 136.917 94.0458 135.012 90.4171 129.778C80.9254 116.09 88.8662 96.9445 106.37 95.6973C107.205 95.6192 108.727 95.6147 109.592 95.6074L135.191 95.5869ZM121.193 114.681C119.974 107.065 112.648 101.849 104.821 103.023C96.977 104.2 91.6023 111.348 92.8233 118.98C94.0448 126.613 101.399 131.832 109.239 130.632C117.063 129.434 122.412 122.296 121.193 114.681ZM164.553 115.991C164.117 108.326 157.386 102.45 149.508 102.858C141.607 103.268 135.549 109.842 135.985 117.53C136.423 125.218 143.189 131.101 151.088 130.66C158.964 130.22 164.989 123.657 164.553 115.991ZM104.69 106.195C110.774 104.954 116.731 108.779 117.951 114.71C119.171 120.641 115.187 126.403 109.081 127.537C103.054 128.656 97.2255 124.839 96.0206 118.983C94.8158 113.128 98.6848 107.421 104.69 106.195ZM147.862 106.184C153.882 104.9 159.829 108.615 161.136 114.476C162.442 120.336 158.612 126.115 152.588 127.375C146.581 128.631 140.663 124.916 139.36 119.073C138.058 113.23 141.861 107.464 147.862 106.184ZM37.0499 96.127C40.2966 96.0352 48.7757 95.9395 51.8057 96.4463C52.0005 98.0221 51.9215 100.27 51.9102 101.914C62.4041 103.419 74.0539 106.003 84.4922 108.121C83.7433 110.276 82.8931 114.861 82.3233 117.313C79.943 116.669 75.2325 115.875 72.6143 115.324C65.2613 113.802 57.9231 112.21 50.6016 110.55C50.3201 110.916 50.0118 111.262 49.6778 111.583C47.3823 113.783 40.0354 113.165 38.2129 110.986C35.9837 108.322 36.9734 99.6022 37.0499 96.127ZM204.497 96.3779C209.287 96.2337 214.691 96.3076 219.467 96.3692C219.494 101.069 219.488 105.77 219.448 110.47C215.135 113.377 209.853 114.014 205.463 110.836C200.028 112.444 192.748 113.671 187.066 114.761C183.858 115.156 178.202 116.5 174.578 117.124L172.885 107.998C182.779 105.875 194.251 103.973 204.216 102.278C204.24 100.162 204.314 98.4857 204.497 96.3779ZM113.212 111.92C111.924 110.139 109.882 108.738 107.975 109.712C103.163 112.169 108.976 117.712 111.918 116.973C114.191 116.401 114.815 114.138 113.212 111.92ZM154.978 116.845C159.62 115.042 156.439 108.334 151.97 109.938C147.5 111.541 151.505 118.193 154.978 116.845Z"/><path class="dr-fly__prop" d="M60.2344 143.793C64.4215 142.961 63.4188 145.066 64.9776 147.319C67.7665 147.183 70.8573 145.913 73.7881 145.454C77.7791 144.83 82.3705 146.114 86.503 146.022C87.0801 146.01 87.4827 146.28 87.8087 146.686L87.5889 147.208C86.7803 147.897 73.9714 151.197 71.9307 151.693C70.2101 151.279 66.2276 149.433 64.3106 148.655C64.2168 149.68 64.7415 150.895 63.794 151.99C62.8462 153.085 60.3631 153.208 58.836 152.118C57.8742 151.432 57.9299 150.228 57.8311 149.165L52.0157 151.394C49.8489 151.984 47.7245 152.181 45.4815 152.185C41.8048 152.191 22.4874 150.543 20.0284 149.111C19.6004 148.862 19.6399 148.785 19.5137 148.342C21.02 145.996 44.1194 144.314 48.3594 144.87C50.5748 145.161 55.2029 146.893 57.4483 147.734C57.9683 145.408 57.7913 144.278 60.2344 143.793Z"/><path class="dr-fly__prop" d="M196.037 143.853C199.061 143.971 199.289 145.081 199.524 147.827C202.516 146.756 205.559 145.543 208.71 145.012C212.88 144.309 234.052 146.096 236.707 148.057C237.049 148.308 237.002 148.361 237.062 148.772C235.919 150.013 233.237 150.062 231.534 150.258C224.319 151.276 215.016 153 207.848 151.793C205.29 151.362 201.843 150.03 199.348 149.108C199.338 149.7 199.319 151.175 199.15 151.688C198.64 153.245 194.496 153.014 193.576 152.251C191.922 150.879 192.353 146.617 193.552 144.897C194.16 144.026 195.047 143.814 196.037 143.853Z"/><path class="dr-fly__prop" d="M170.785 145.563C174.665 145.508 189.487 145.006 192.03 148.202C192.275 149.776 190.671 150.058 189.422 150.342C187.702 150.778 184.808 152.215 183.151 151.748C181.027 151.149 170.097 147.542 169.238 146.127L169.514 145.742L170.785 145.563Z"/><path class="dr-fly__prop" d="M211.335 85.5772C214.688 84.9906 214.84 87.1084 215.187 89.919L215.305 89.8692C217.415 88.9906 223.302 87.0417 225.212 86.7139C229.552 85.9689 255.689 87.7388 256.745 90.3692C256.593 90.6991 256.477 91.0653 255.992 91.167C246.81 93.0868 235.102 94.723 225.774 94.1035C223.192 93.9319 217.338 91.8163 215.089 91.0156C215.023 92.4776 215.583 93.9897 214.283 94.6455C212.77 95.4086 210.709 95.396 209.243 94.5479C208.386 94.0516 208.868 92.0731 208.726 91.0547C205.506 92.2602 200.349 94.1827 197.016 94.5567C193.125 94.993 169.117 92.8202 167.92 90.624C168.445 88.9807 171.174 88.8525 172.732 88.6963C180.668 87.9007 188.951 86.5004 196.915 86.8359C200.261 86.9771 204.916 88.4071 208.189 89.2852C209.082 87.0969 209.008 85.9845 211.335 85.5772Z"/><path class="dr-fly__prop" d="M43.7569 85.6768C47.0874 85.4376 47.4774 86.6343 48.1631 89.4522C50.6311 88.4218 53.2948 87.2419 55.9532 86.8047C60.6597 86.0305 84.9501 87.9217 87.5919 89.9102C87.9351 90.1689 87.8832 90.4059 87.9454 90.8047C87.7449 91.1104 87.5224 91.5689 87.1104 91.6494C80.1087 93.0403 72.9139 93.8358 65.7872 94.4229C58.4658 95.0257 54.4571 93.5186 47.7608 91.169C47.4524 93.8534 47.5737 94.7502 44.7012 94.9404C41.5453 95.1494 41.537 94.0497 41.0547 91.3379C37.8203 92.4405 34.0901 94.1795 30.6504 94.3506C27.6092 94.5019 24.4667 94.44 21.4327 94.2422C18.2714 94.0363 1.99609 92.3456 0.122128 90.6143C-0.0498591 90.4552 0.012679 90.0014 0.00494034 89.7666C1.39993 87.8339 26.9564 86.137 31.0381 86.7041C33.0956 86.99 38.4037 88.7789 40.6299 89.5186C41.4057 87.1766 41.2836 86.5541 43.7569 85.6768Z"/></g></svg></span>Talk to AI</a>
</div>
```

`listings-map`: the places, then the offers, then *Order* at the foot.

### The last search

```html
<div class="dr dr-desk dr-desk--order" style="width:680px;max-width:100%;padding:24px"><div class="dr-assistant">
        <div class="dr-assistant__orb"><svg class="dr-fly" viewBox="0 85 257 86" aria-hidden="true"><g class="dr-fly__body"><path d="M134.562 139.657C139.664 139.658 146.389 139.5 151.382 139.868C150.984 141.355 150.562 142.836 150.115 144.311C159.279 146.64 168.469 149.712 177.476 152.57C181.414 153.821 185.314 155.137 189.047 156.898L189.276 153.86C193.148 153.815 199.501 153.931 203.228 154.268C203.246 157.757 203.813 165.724 202.937 168.598C201.655 169.843 199.563 170.331 197.795 170.379C192.412 170.525 189.205 170.69 188.936 164.715C185.098 164.061 176.035 161.262 172.165 160.131C164.436 157.871 155.866 155.601 148.284 153.053L146.833 155.86C145.925 157.537 144.768 159.497 142.948 160.364C140.897 161.342 116.227 161.345 113.561 160.436C111.313 159.669 109.432 155.1 108.458 153.165C97.3799 156.617 85.743 159.364 74.6133 162.736C72.5648 163.357 70.4584 163.927 68.3809 164.453C68.2577 167.359 67.6582 169.523 64.2471 170.245C61.9199 170.738 54.2735 170.886 53.6827 167.902L53.6573 167.767C53.2528 165.738 53.5011 156.628 53.5274 153.931C57.2809 153.924 64.09 153.664 67.4542 154.016C68.0263 154.488 67.9219 154.77 68.1231 155.624C68.7451 155.76 102.284 145.63 106.523 144.43C106.178 142.869 105.857 141.304 105.561 139.734L134.562 139.657ZM118.426 163.557C124.218 163.303 130.652 163.57 136.507 163.465C137.41 163.449 137.914 163.489 138.448 164.043C138.764 165.348 137.993 166.558 137.398 167.742C135.711 169.657 123.157 169.069 120.406 168.284C119.626 168.061 118.518 164.476 118.426 163.557ZM135.191 95.5869C140.649 95.5867 151.884 95.0279 156.317 96.3848C171.371 100.992 176.141 121.474 164.703 132.057C160.104 136.312 157.137 137.006 151.162 136.983C135.886 137.159 120.478 136.772 105.203 136.874C98.793 136.917 94.0458 135.012 90.4171 129.778C80.9254 116.09 88.8662 96.9445 106.37 95.6973C107.205 95.6192 108.727 95.6147 109.592 95.6074L135.191 95.5869ZM121.193 114.681C119.974 107.065 112.648 101.849 104.821 103.023C96.977 104.2 91.6023 111.348 92.8233 118.98C94.0448 126.613 101.399 131.832 109.239 130.632C117.063 129.434 122.412 122.296 121.193 114.681ZM164.553 115.991C164.117 108.326 157.386 102.45 149.508 102.858C141.607 103.268 135.549 109.842 135.985 117.53C136.423 125.218 143.189 131.101 151.088 130.66C158.964 130.22 164.989 123.657 164.553 115.991ZM104.69 106.195C110.774 104.954 116.731 108.779 117.951 114.71C119.171 120.641 115.187 126.403 109.081 127.537C103.054 128.656 97.2255 124.839 96.0206 118.983C94.8158 113.128 98.6848 107.421 104.69 106.195ZM147.862 106.184C153.882 104.9 159.829 108.615 161.136 114.476C162.442 120.336 158.612 126.115 152.588 127.375C146.581 128.631 140.663 124.916 139.36 119.073C138.058 113.23 141.861 107.464 147.862 106.184ZM37.0499 96.127C40.2966 96.0352 48.7757 95.9395 51.8057 96.4463C52.0005 98.0221 51.9215 100.27 51.9102 101.914C62.4041 103.419 74.0539 106.003 84.4922 108.121C83.7433 110.276 82.8931 114.861 82.3233 117.313C79.943 116.669 75.2325 115.875 72.6143 115.324C65.2613 113.802 57.9231 112.21 50.6016 110.55C50.3201 110.916 50.0118 111.262 49.6778 111.583C47.3823 113.783 40.0354 113.165 38.2129 110.986C35.9837 108.322 36.9734 99.6022 37.0499 96.127ZM204.497 96.3779C209.287 96.2337 214.691 96.3076 219.467 96.3692C219.494 101.069 219.488 105.77 219.448 110.47C215.135 113.377 209.853 114.014 205.463 110.836C200.028 112.444 192.748 113.671 187.066 114.761C183.858 115.156 178.202 116.5 174.578 117.124L172.885 107.998C182.779 105.875 194.251 103.973 204.216 102.278C204.24 100.162 204.314 98.4857 204.497 96.3779ZM113.212 111.92C111.924 110.139 109.882 108.738 107.975 109.712C103.163 112.169 108.976 117.712 111.918 116.973C114.191 116.401 114.815 114.138 113.212 111.92ZM154.978 116.845C159.62 115.042 156.439 108.334 151.97 109.938C147.5 111.541 151.505 118.193 154.978 116.845Z"/><path class="dr-fly__prop" d="M60.2344 143.793C64.4215 142.961 63.4188 145.066 64.9776 147.319C67.7665 147.183 70.8573 145.913 73.7881 145.454C77.7791 144.83 82.3705 146.114 86.503 146.022C87.0801 146.01 87.4827 146.28 87.8087 146.686L87.5889 147.208C86.7803 147.897 73.9714 151.197 71.9307 151.693C70.2101 151.279 66.2276 149.433 64.3106 148.655C64.2168 149.68 64.7415 150.895 63.794 151.99C62.8462 153.085 60.3631 153.208 58.836 152.118C57.8742 151.432 57.9299 150.228 57.8311 149.165L52.0157 151.394C49.8489 151.984 47.7245 152.181 45.4815 152.185C41.8048 152.191 22.4874 150.543 20.0284 149.111C19.6004 148.862 19.6399 148.785 19.5137 148.342C21.02 145.996 44.1194 144.314 48.3594 144.87C50.5748 145.161 55.2029 146.893 57.4483 147.734C57.9683 145.408 57.7913 144.278 60.2344 143.793Z"/><path class="dr-fly__prop" d="M196.037 143.853C199.061 143.971 199.289 145.081 199.524 147.827C202.516 146.756 205.559 145.543 208.71 145.012C212.88 144.309 234.052 146.096 236.707 148.057C237.049 148.308 237.002 148.361 237.062 148.772C235.919 150.013 233.237 150.062 231.534 150.258C224.319 151.276 215.016 153 207.848 151.793C205.29 151.362 201.843 150.03 199.348 149.108C199.338 149.7 199.319 151.175 199.15 151.688C198.64 153.245 194.496 153.014 193.576 152.251C191.922 150.879 192.353 146.617 193.552 144.897C194.16 144.026 195.047 143.814 196.037 143.853Z"/><path class="dr-fly__prop" d="M170.785 145.563C174.665 145.508 189.487 145.006 192.03 148.202C192.275 149.776 190.671 150.058 189.422 150.342C187.702 150.778 184.808 152.215 183.151 151.748C181.027 151.149 170.097 147.542 169.238 146.127L169.514 145.742L170.785 145.563Z"/><path class="dr-fly__prop" d="M211.335 85.5772C214.688 84.9906 214.84 87.1084 215.187 89.919L215.305 89.8692C217.415 88.9906 223.302 87.0417 225.212 86.7139C229.552 85.9689 255.689 87.7388 256.745 90.3692C256.593 90.6991 256.477 91.0653 255.992 91.167C246.81 93.0868 235.102 94.723 225.774 94.1035C223.192 93.9319 217.338 91.8163 215.089 91.0156C215.023 92.4776 215.583 93.9897 214.283 94.6455C212.77 95.4086 210.709 95.396 209.243 94.5479C208.386 94.0516 208.868 92.0731 208.726 91.0547C205.506 92.2602 200.349 94.1827 197.016 94.5567C193.125 94.993 169.117 92.8202 167.92 90.624C168.445 88.9807 171.174 88.8525 172.732 88.6963C180.668 87.9007 188.951 86.5004 196.915 86.8359C200.261 86.9771 204.916 88.4071 208.189 89.2852C209.082 87.0969 209.008 85.9845 211.335 85.5772Z"/><path class="dr-fly__prop" d="M43.7569 85.6768C47.0874 85.4376 47.4774 86.6343 48.1631 89.4522C50.6311 88.4218 53.2948 87.2419 55.9532 86.8047C60.6597 86.0305 84.9501 87.9217 87.5919 89.9102C87.9351 90.1689 87.8832 90.4059 87.9454 90.8047C87.7449 91.1104 87.5224 91.5689 87.1104 91.6494C80.1087 93.0403 72.9139 93.8358 65.7872 94.4229C58.4658 95.0257 54.4571 93.5186 47.7608 91.169C47.4524 93.8534 47.5737 94.7502 44.7012 94.9404C41.5453 95.1494 41.537 94.0497 41.0547 91.3379C37.8203 92.4405 34.0901 94.1795 30.6504 94.3506C27.6092 94.5019 24.4667 94.44 21.4327 94.2422C18.2714 94.0363 1.99609 92.3456 0.122128 90.6143C-0.0498591 90.4552 0.012679 90.0014 0.00494034 89.7666C1.39993 87.8339 26.9564 86.137 31.0381 86.7041C33.0956 86.99 38.4037 88.7789 40.6299 89.5186C41.4057 87.1766 41.2836 86.5541 43.7569 85.6768Z"/></g></svg></div>
        <h1 class="dr-assistant__title">Olena, what do you need<br>done today?</h1>
        <p class="dr-assistant__lead">Tell me in your own words — I will find the drone, the operator and the price.</p>
        <form class="dr-assistant__ask dr-material" role="search" action="../../wireframes/desktop/listings-map.html"><label class="sr-only" for="ask--s83">Tell DRON what you need</label>
          <input class="dr-assistant__input" id="ask--s83" placeholder="Send documents from Podil to Osokorky…"><button class="dr-assistant__send" type="submit" aria-label="Send"><svg class="dr-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h13M13 6l6 6-6 6"/></svg></button></form>
        <section class="dr-lastsearch dr-material" aria-label="Your search">
          <fieldset class="dr-finder__services" aria-label="Service">
            <label class="dr-grouptab dr-grouptab--icon">
              <input type="radio" name="service" value="delivery" checked class="sr-only">
              <svg class="dr-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 3.6l7.6 4.2v8.4L12 20.4l-7.6-4.2V7.8z"/><path d="M4.6 7.9L12 12l7.4-4.1"/><path d="M12 12v8.3"/></svg>Delivery
            </label>
            <label class="dr-grouptab dr-grouptab--icon">
              <input type="radio" name="service" value="aerial" class="sr-only">
              <svg class="dr-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3.5" y="7" width="17" height="12.5" rx="2.6"/><path d="M8.6 7l1.3-2.4h4.2L15.4 7"/><circle cx="12" cy="13.2" r="3.2"/></svg>Photo &amp; video
            </label>
            <label class="dr-grouptab dr-grouptab--icon">
              <input type="radio" name="service" value="inspection" class="sr-only">
              <svg class="dr-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 8.5v-3A1.5 1.5 0 0 1 5.5 4h3M15.5 4h3A1.5 1.5 0 0 1 20 5.5v3M20 15.5v3a1.5 1.5 0 0 1-1.5 1.5h-3M8.5 20h-3A1.5 1.5 0 0 1 4 18.5v-3"/><path d="M8 12.6L12 9l4 3.6V16H8z"/></svg>Inspection
            </label>
          </fieldset>
          <div class="dr-lastsearch__places">
            <span class="dr-place"><svg class="dr-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 21s-6.5-6-6.5-11a6.5 6.5 0 0 1 13 0c0 5-6.5 11-6.5 11z"/><circle cx="12" cy="10" r="2.3"/></svg><span class="dr-place__key">From</span>Podil, 21</span>
            <span class="dr-place"><svg class="dr-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 21s-6.5-6-6.5-11a6.5 6.5 0 0 1 13 0c0 5-6.5 11-6.5 11z"/><circle cx="12" cy="10" r="2.3"/></svg><span class="dr-place__key">To</span>Osokorky, 14</span>
            <span class="dr-place"><svg class="dr-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="4" y="5.5" width="16" height="14" rx="2.4"/><path d="M4 10h16M8.5 3.5v4M15.5 3.5v4"/></svg><span class="dr-place__key">Date</span>Today</span>
            <span class="dr-place"><svg class="dr-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="8"/><path d="M12 8v4l3 2"/></svg><span class="dr-place__key">Time</span>Now</span>
          </div>
          <div class="dr-fchips" role="group" aria-label="Applied filters" data-fchips hidden></div>
          <div class="dr-finder__actions">
            <button class="dr-btn dr-btn--secondary" type="button" aria-haspopup="dialog" aria-expanded="false" aria-controls="sheet-filters--s83" data-filters-open><svg class="dr-ic dr-ic--20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 7.5h9"/><circle cx="17" cy="7.5" r="2.4"/><path d="M20 16.5h-9"/><circle cx="7" cy="16.5" r="2.4"/></svg>Filters</button>
            <button class="dr-btn dr-btn--primary" type="button" disabled>Searching…</button>
          </div>
          <p class="dr-status-line" role="status">Looking for drones near Podil, 21…</p>
        </section>
      </div></div>
```

`listings-loading`: on the home's states the search that was run stands where the services stood (`.dr-lastsearch`), the places two across with their keys (`.dr-place__key`, muted); the orb steps down to 120.

### An empty place

```html
<div class="dr dr-desk dr-desk--order" style="width:620px;max-width:100%;padding:16px"><section class="dr-lastsearch dr-material" aria-label="Your search">
          <fieldset class="dr-finder__services" aria-label="Service">
            <label class="dr-grouptab dr-grouptab--icon">
              <input type="radio" name="service" value="delivery" checked class="sr-only">
              <svg class="dr-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 3.6l7.6 4.2v8.4L12 20.4l-7.6-4.2V7.8z"/><path d="M4.6 7.9L12 12l7.4-4.1"/><path d="M12 12v8.3"/></svg>Delivery
            </label>
            <label class="dr-grouptab dr-grouptab--icon">
              <input type="radio" name="service" value="aerial" class="sr-only">
              <svg class="dr-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3.5" y="7" width="17" height="12.5" rx="2.6"/><path d="M8.6 7l1.3-2.4h4.2L15.4 7"/><circle cx="12" cy="13.2" r="3.2"/></svg>Photo &amp; video
            </label>
            <label class="dr-grouptab dr-grouptab--icon">
              <input type="radio" name="service" value="inspection" class="sr-only">
              <svg class="dr-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 8.5v-3A1.5 1.5 0 0 1 5.5 4h3M15.5 4h3A1.5 1.5 0 0 1 20 5.5v3M20 15.5v3a1.5 1.5 0 0 1-1.5 1.5h-3M8.5 20h-3A1.5 1.5 0 0 1 4 18.5v-3"/><path d="M8 12.6L12 9l4 3.6V16H8z"/></svg>Inspection
            </label>
          </fieldset>
          <div class="dr-lastsearch__places">
            <span class="dr-place dr-place--empty"><svg class="dr-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 21s-6.5-6-6.5-11a6.5 6.5 0 0 1 13 0c0 5-6.5 11-6.5 11z"/><circle cx="12" cy="10" r="2.3"/></svg><span class="dr-place__key">From</span>Pickup address</span>
            <span class="dr-place dr-place--empty"><svg class="dr-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 21s-6.5-6-6.5-11a6.5 6.5 0 0 1 13 0c0 5-6.5 11-6.5 11z"/><circle cx="12" cy="10" r="2.3"/></svg><span class="dr-place__key">To</span>Drop-off address</span>
            <span class="dr-place"><svg class="dr-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="4" y="5.5" width="16" height="14" rx="2.4"/><path d="M4 10h16M8.5 3.5v4M15.5 3.5v4"/></svg><span class="dr-place__key">Date</span>Today</span>
            <span class="dr-place"><svg class="dr-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="8"/><path d="M12 8v4l3 2"/></svg><span class="dr-place__key">Time</span>Now</span>
          </div>
          <div class="dr-fchips" role="group" aria-label="Applied filters" data-fchips hidden></div>
          <div class="dr-finder__actions">
            <button class="dr-btn dr-btn--secondary" type="button" aria-haspopup="dialog" aria-expanded="false" aria-controls="sheet-filters--s84" data-filters-open><svg class="dr-ic dr-ic--20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 7.5h9"/><circle cx="17" cy="7.5" r="2.4"/><path d="M20 16.5h-9"/><circle cx="7" cy="16.5" r="2.4"/></svg>Filters</button>
            <a class="dr-btn dr-btn--primary" href="../../wireframes/desktop/listings-map.html" data-find>Find</a>
          </div>
        </section></div>
```

`listings-filters`: a place not yet given reads as its placeholder, muted (`.dr-place--empty`, 6.33:1).

### Tablet

```html
<p class="dr-note">Coming soon.</p>
```

The tablet layout is being redesigned from scratch (the designer, 2026-10-18). Until then this page shows the phone and the desktop only.

## States

No state of its own: a place is read here, not typed.

## When to use

In the order's step window and in the home's last search, to show where the order goes before it is paid.

Sources: wireframes/desktop/listings-map.html, listings-loading.html, listings-filters.html; design-system/components/place.css, lastsearch.css

## Rule

Show the places before the price.

## Anti-rule

Do not let the client type the address here; it is changed in the search.
