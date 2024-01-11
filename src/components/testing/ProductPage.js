import "./ProductPage.css";

export default function ProductPage() {
  return (
    <div>
      <div class="ProductPage-shop">
        {/* <!-- Start Left --> */}

        <div class="ProductPage-left">
          <div class="ProductPage-navbar">
            <span>Home</span>
            <i class="fas fa-chevron-right"></i>
            <span>Shop</span>
          </div>
          <div class="ProductPage-image">
            <img src="https://i.postimg.cc/rphmNw8X/sale.jpg" />
          </div>
          <div class="ProductPage-show">
            <div class="ProductPage-number">
              <i class="fas fa-th fa-sm"></i>
              <i class="fas fa-bars"></i>
              <span>Showing 1 To 9 Of 15 (2 Pages)</span>
            </div>
            <div class="ProductPage-sort">
              <span>Show: </span>
              <select>
                <option>10</option>
              </select>
              <span>Sort By: </span>
              <select>
                <option>Default</option>
              </select>
            </div>
          </div>
          <div class="ProductPage-controler">
            <div class="ProductPage-img">
              <img src="https://i.postimg.cc/dVZRkgv9/xbox3.jpg" />
            </div>
            <div class="ProductPage-info">
              <div class="ProductPage-stars">
                <i class="fas fa-star fa-xs"></i>
                <i class="fas fa-star fa-xs"></i>
                <i class="fas fa-star fa-xs"></i>
                <i class="fas fa-star fa-xs"></i>
                <i class="fas fa-star fa-xs"></i>
              </div>
              <p>Cale 6 Eu Accumsan Massa Facilisis Madden By Steve</p>
              <p>Availability: 299 In Stock</p>
              <span>&euro; 23.90</span>
              <span>&euro;21.90</span>
              <p>
                Block out the haters with the fresh adidas &reg; Originals Kaval
                Windbreaker Jacket. Part of the Kaval Collection. Regular fit is
                eased. but not sloppy. and Perfect for any activity. plain-woven
                jacket specifically constructed for freedom of movement.
              </p>
              <div class="ProductPage-icons">
                <i class="fas fa-shopping-bag"></i>
                <i class="far fa-heart"></i>
                <i class="fas fa-sliders-h"></i>
                <i class="fas fa-external-link-alt"></i>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- End Left -->

  <!-- Start Right --> */}

        <div class="ProductPage-right">
          <div class="ProductPage-laptop">
            <p>LAPTOP</p>
            <div class="ProductPage-hot">
              <h4>Hot Category</h4>
              <i class="fas fa-chevron-up fa-xs"></i>
            </div>
            <ul>
              <li>Dresses</li>
              <li>Jackets &amp; Coats</li>
              <li>Sweaters</li>
              <li>Jeans</li>
              <li>Blouses &amp; Shirts</li>
            </ul>
            <div class="ProductPage-out">
              <h4>Outerwear &amp; Jackets</h4>
              <i class="fas fa-chevron-down fa-xs"></i>
            </div>
            <div class="ProductPage-weddings">
              <h4>Weddings &amp; Events</h4>
              <i class="fas fa-chevron-down fa-xs"></i>
            </div>
            <div class="ProductPage-bottoms">
              <h4>Bottoms</h4>
              <i class="fas fa-chevron-down fa-xs"></i>
            </div>
            <div class="ProductPage-tops">
              <h4>Tops &amp; Sets</h4>
              <i class="fas fa-chevron-down fa-xs"></i>
            </div>
            <div class="ProductPage-access">
              <h4>Accessories</h4>
              <i class="fas fa-chevron-down fa-xs"></i>
            </div>
          </div>
          <div class="ProductPage-color">
            <p>COLOR</p>
            <h5>Gray(1)</h5>
            <h5>White(5)</h5>
            <h5>Black(5)</h5>
            <h5>Camel(1)</h5>
            <h5>Orange(1)</h5>
          </div>
        </div>

        {/* <!-- End Right --> */}
      </div>
    </div>
  );
}
