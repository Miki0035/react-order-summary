const Summary = ({ title, subtitle }: { title: string; subtitle: string }) => {
  return (
    <div className="w-full flex gap-2 flex-col items-center">
      <h1 className="text-xl text-darkBlue font-black">{title}</h1>
      <p className="text-center font-medium text-desaturatedBlue text-sm w-4/5 lg:w-full">
        {subtitle}
      </p>
    </div>
  );
};

export default Summary;
