import "./Benifit.css";

export default function Benifit() {
  return (
    <>
      <HoverCard />
      <PokemonCard />
      <DarkCard />
      <SemiOverlay />
    </>
  );
}

export function WaveBackground() {
  return (
    <>
      <section id="WaveBackground">
        <div class="content">
          <h1>CSS Wavy Background</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
            autem distinctio voluptatem vero modi consequuntur suscipit rem
            laborum aliquam voluptas temporibus, dolorem minus. Culpa,
            praesentium dolorum. Molestiae quam, repellendus beatae, facere
            dignissimos omnis vel assumenda consequuntur, sunt illum laudantium
            reprehenderit.
          </p>
        </div>
      </section>
    </>
  );
}

export function DarkCard() {
  return (
    <>
      <div class="DarkCard-container">
        <div class="DarkCard-card">
          <div class="DarkCard-box">
            <div class="DarkCard-content">
              <h2>01</h2>
              <h3>Card Title</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
                maiores pariatur corporis assumenda rem laborum ad accusantium
                hic.
              </p>
              <a href="#">Read More</a>
            </div>
          </div>
        </div>
        <div class="DarkCard-card">
          <div class="DarkCard-box">
            <div class="DarkCard-content">
              <h2>02</h2>
              <h3>Card Title</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
                maiores pariatur corporis assumenda rem laborum ad accusantium
                hic.
              </p>
              <a href="#">Read More</a>
            </div>
          </div>
        </div>
        <div class="DarkCard-card">
          <div class="DarkCard-box">
            <div class="DarkCard-content">
              <h2>03</h2>
              <h3>Card Title</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
                maiores pariatur corporis assumenda rem laborum ad accusantium
                hic.
              </p>
              <a href="#">Read More</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export function PokemonCard() {
  return (
    <>
      <div class="Pokemon-card__container">
        <div class="Pokemon-card">
          <div class="Pokemon-card__cover Pokemon-card__cover--one">
            <div class="Pokemon-card__tag">Pokemon</div>
          </div>
          <div class="Pokemon-card__body">
            <div class="Pokemon-card__title">Pokemon Halloween Event</div>
            <div class="Pokemon-card__desc">
              Mario ipsum RGB mushroom 1-up. Lava NES fireball 1-up piranha
              plant castle green shell.
            </div>
          </div>
        </div>
        <div class="Pokemon-card">
          <div class="Pokemon-card__cover Pokemon-card__cover--two">
            <div class="Pokemon-card__tag">Animal Crossings</div>
          </div>
          <div class="Pokemon-card__body">
            <div class="Pokemon-card__title">Fishing in Animal Crossing</div>
            <div class="Pokemon-card__desc">
              Mario ipsum RGB mushroom 1-up. Lava NES fireball 1-up piranha
              plant castle green shell.{" "}
            </div>
          </div>
        </div>
        <div class="Pokemon-card">
          <div class="Pokemon-card__cover Pokemon-card__cover--three">
            <div class="Pokemon-card__tag">Zelda</div>
          </div>
          <div class="Pokemon-card__body">
            <div class="Pokemon-card__title">New Zelda Release</div>
            <div class="Pokemon-card__desc">
              Mario ipsum RGB mushroom 1-up. Lava NES fireball 1-up piranha
              plant castle green shell.{" "}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export function SemiOverlay() {
  return (
    <>
      <div class="SemiOverlay-page1"></div>
      <div class="SemiOverlay-page2wrapper">
        <div class="SemiOverlay-page2">
          <div class="SemiOverlay-content">
            <h1>Making things look great</h1>
            <h2>For companies who do great stuff</h2>
          </div>
        </div>
      </div>
    </>
  );
}

export function HoverCard() {
  return (
    <>
      <div class="HoverCard-container">
        <div class="HoverCard-card">
          <div class="HoverCard-circle">
            <h2>01</h2>
          </div>
          <div class="HoverCard-content">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
              voluptates ea officia totam magni natus recusandae.
            </p>
            <a href="#">Read More</a>
          </div>
        </div>
        <div class="HoverCard-card">
          <div class="HoverCard-circle">
            <h2>02</h2>
          </div>
          <div class="HoverCard-content">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
              voluptates ea officia totam magni natus recusandae.
            </p>
            <a href="#">Read More</a>
          </div>
        </div>
        <div class="HoverCard-card">
          <div class="HoverCard-circle">
            <h2>03</h2>
          </div>
          <div class="HoverCard-content">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
              voluptates ea officia totam magni natus recusandae.
            </p>
            <a href="#">Read More</a>
          </div>
        </div>
      </div>
    </>
  );
}
