import hero from "./assets/images/illustration-hero.svg";
import Summary from "./components/Summary";
import Plan from "./components/PaymentPlan";
const App = () => {
  return (
    <main className="max-w-[300px] w-full bg-veryPaleBlue rounded-lg pb-8 shadow-xl">
      <div className="w-full h-full flex justify-center mb-5">
        <div className="w-80 h-full">
          <img
            src={hero}
            alt="illustration hero"
            className="w-full h-full rounded-t-lg"
          />
        </div>
      </div>

      {/* Order summary*/}
      <Summary
        title="Order Summary"
        subtitle={` You can now listen to millions of songs, audiobooks, and podcasts on
          any device anywhere you like!`}
      />
      {/* Payment Plan */}
      <Plan planType="Annual Plan" price={59.99} />
      {/* button containers */}
      <div className="w-full flex flex-col items-center gap-4">
        <button
          type="button"
          className="bg-brightBlue w-64 text-white text-md font-medium rounded-md text-center py-2 hover:opacity-30"
        >
          Proceed to Payment
        </button>
        <button
          type="button"
          className="bg-veryPaleBlue w-64 rounded-md font-medium text-sm text-center text-desaturatedBlue hover:text-darkBlue hover:font-bold "
        >
          Cancel Order
        </button>
      </div>
    </main>
  );
};

export default App;
