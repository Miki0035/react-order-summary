import musicLogo from "../assets/images/icon-music.svg";

const PaymentPlan = ({
  planType,
  price,
}: {
  planType: string;
  price: number;
}) => {
  return (
    <div className="w-full flex justify-center">
      <div className="w-72 gap-16 items-center flex rounded-md px-3 py-5 bg-veryPaleBlue">
        <div className="flex gap-3 items-center">
          <img
            src={musicLogo}
            alt="music logo"
            className="rounded-full w-8 h-8"
          />
          <div className="flex flex-col justify-start">
            <h2 className="font-bold text-sm">{planType}</h2>
            <p className="text-sm font-medium text-desaturatedBlue">
              ${price}/year
            </p>
          </div>
        </div>
        <div className="h-full flex items-center">
          <a href="#" className="text-brightBlue font-medium text-sm underline hover:no-underline hover:opacity-50">
            Change
          </a>
        </div>
      </div>
    </div>
  );
};

export default PaymentPlan;
