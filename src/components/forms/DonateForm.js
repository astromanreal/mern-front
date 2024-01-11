import "./DonationForm.css";

export default function DonateForm() {
  return (
    <>
      <div className="testbox">
        <form id="DonateForm">
          <div className="DonateForm-banner">
            <h1>Donation Form</h1>
          </div>
          <br />
          <fieldset>
            <legend className="DonateForm-legend">Donation Details</legend>
            <div className="DonateForm-colums"></div>
            <div className="DonateForm-checkbox">
              <p>May we thank you publicly?</p>
              <label>
                <input type="checkbox" />
                No, please keep my information anonymous
              </label>
            </div>
            <div className="DonateForm-item">
              <label for="amount">
                Donation Amount<span>*</span>
              </label>
              <input id="amount" type="number" name="amount" />
            </div>
            <div className="DonateForm-item">
              <label for="donation">Donation Comments</label>
              <textarea id="donation" rows="3"></textarea>
            </div>
          </fieldset>
          <div className="DonateForm-btn-block">
            <button type="order" href="/">
              Confirm Order
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
