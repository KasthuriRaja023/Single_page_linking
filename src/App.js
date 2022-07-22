import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
export default function App() {
  return (
    <>
      <nav class="nav">
        <a href="#about" class="nav-link ">
          About &nbsp;
        </a>
        <a href="#product" class="nav-link">
          Product &nbsp;
        </a>
        <a href="#checkout" class="nav-link">
          Checkout
        </a>
      </nav>

      <div class="page">
        <div id="about">
          <br />
          <br />
          <h1 class="display-1">About</h1>
          <p class="lead">
            "We Are the Internet's Premier Destination for the Classic Flim
            Buff. "
          </p>
        </div>

        <div id="product">
          <br />
          <br />
          <br />
          <h1 class="head">Feature Flims</h1>
          <p class="read">
            "Each Week, We feature a classic flim and have an accompanying movie
            Screening and Blu-Ray Special.This Week is "A Streetcar Named
            Desire" "
          </p>
          <br />
          <div class="active">
            <a href="https://in.bookmyshow.com/" target="blank">
              Buy Movie Tickets
            </a>{" "}
            &nbsp;
            <a
              href="https://www.primevideo.com/?ref_=dvm_pds_gen_in_as_s_g_32243_mkw_s9dvASwFs-dc&mrntrk=pcrid_380846442174_slid__pgrid_84570234624_pgeo_9300000_x__ptid_kwd-17821901"
              target="blank"
            >
              Purchase Blu-Ray
            </a>
          </div>
          <br />
          <br />
          <img
            class="img"
            src="https://wallpapercave.com/wp/wp5204046.jpg"
            alt="kgf"
          />
          <h1 class="display-2">Product</h1>
          <div class="images">
            <div class="photo">
              <img
                src="https://wallpapercave.com/wp/wp10659747.jpg"
                alt="kgf"
              />
            </div>
            <div class="photo">
              <img
                src="https://wallpaperaccess.com/full/7067658.jpg"
                alt="kgf"
              />
            </div>
            <div class="photo">
              <img
                src="https://moviegalleri.net/wp-content/uploads/2021/09/Rajinikanth-Annathe-First-Look-Poster-HD.jpg"
                alt="kgf"
              />
            </div>
          </div>
        </div>

        <div id="checkout">
          <br />
          <br />
          <br />
          <h1 class="display-3">Checkout</h1>
          <p class="dead">"Your Cart"</p>

          <p class="texts">
            "A hollywood classic starring Humphrey Bogart and Ingred Bergman.
            DVD Format."
          </p>

          <p class="texts">$12</p>

          <p class="texts">"A family favourite musical starrin. DVD format"</p>

          <p class="texts">$8</p>

          <p class="texts">
            "The quintisential sword and sandal film. Blu-Ray Format."
          </p>

          <p class="texts">$5</p>

          <div class="promocode">
            <input type="text" name="name" placeholder="Promocode" />
            <button class="button">Redeem</button>
          </div>

          <h3 class="address">Billing Address</h3>
          <form class="form">
            <label>
              First Name:
              <input type="text" name="name" />
            </label>
            <br />
            <br />
            <label>
              Last Name:
              <input type="text" name="name" />
            </label>
            <br />
            <br />
            <label>
              Username @:
              <input type="text" name="name" />
            </label>
            <br />
            <br />
            <label>
              Email Id:
              <input type="text" name="name" />
            </label>
            <br />
            <br />
            <label>
              Address:
              <input type="text" name="name" />
            </label>
            <br />
            <br />
            <label>
              Country:
              <select>
                <option>Select your Country</option>
                <option>India</option>
                <option>Outside India</option>
              </select>
            </label>
            <br />
            <br />
            <label>
              State:
              <select>
                <option>Select your State</option>
                <option>Tamil Nadu</option>
                <option>Outside Tamil Nadu</option>
              </select>
            </label>
            <br />
            <br />
            <label>
              Zipcode:
              <input type="number" name="name" />
            </label>
            <br />
            <br />
            <div className="topping">
              <input
                type="checkbox"
                id="top"
                name="topping"
                value="Shipping Address is Same as my Billing Address"
              />
              Shipping Address is Same as my Billing Address
              <br />
              <br />
              <input
                type="checkbox"
                id="bottom"
                name="topping"
                value="Save this information for next time"
              />
              Save this information for next time
            </div>
            <h3>Payment</h3>
            <div>
              <input type="radio" value="Credit Card" name="gender" /> Credit
              Card
              <input type="radio" value="Debit Card" name="gender" /> Debit Card
              <input type="radio" value="Online Payment" name="gender" /> Online
              Payment
            </div>
            <br />
            <br />
          </form>
          <form class="form">
            <label>
              Name On Card:
              <input type="text" name="name" />
            </label>
            <br />
            <br />
            <label>
              Credit/Debit Card Number:
              <input type="number" name="name" />
            </label>
            <br />
            <br />
            <label>
              CVV:
              <input type="number" name="name" />
            </label>
            <br />
            <br />
            <label>
              Expiry Date:
              <input type="number" name="name" />
            </label>
            <br />
            <br />
            <input type="button" value="Continue to Checkout" />
          </form>
        </div>
      </div>
    </>
  );
}
