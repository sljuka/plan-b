/* eslint-disable react/prop-types */

export default function BitcoinBalance({balance}) {
  const formattedBalance = balance.toFixed(8);
  const [whole, decimal] = formattedBalance.split(".");

/*   const lastNonZeroIndex = decimal
    .split("")
    .reverse()
    .findIndex((char) => char !== "0");
  const significantDigits =
    decimal.length -
    (lastNonZeroIndex === -1 ? decimal.length : lastNonZeroIndex); */

/*   const decimalParts = decimal.split("").map((digit, index) => {
    const isSignificant = index < significantDigits;
    return (
      <span
        key={index}
        className={`${isSignificant ? "text-white" : "text-white/30"} ${
          (index + 1) % 3 === 0 ? "mr-0.5" : ""
        }`}
      >
        {digit}
      </span>
    );
  }); */

  return (
    <div className="bg-gradient-to-br from-gray-900 to-black p-4 md:p-8 rounded-2xl w-full shadow-lg border border-white/10">
      {/* <div className="flex justify-center mb-4">
        {isLoading && (
          <Loader2 className="h-8 w-8 text-white/50 animate-spin" />
        )}
      </div> */}
      <div className="text-center font-mono text-xl md:text-4xl tracking-wider">
        <span className="text-[#F89B2A] mr-2">₿</span>
        <span className="text-white">{balance}</span>
        {/* <span className="text-white">{whole}</span>
        <span className="text-white">.</span>
        {decimalParts} */}
      </div>
    </div>
  );
}
