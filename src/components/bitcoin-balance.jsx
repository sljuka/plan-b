/* eslint-disable react/prop-types */

import { toSats } from "@/utils/sats";

export default function BitcoinBalance({ balance, view }) {
  // Convert from msatoshis to BTC and format with 8 decimal places

  const formattedBalance = (balance / 100000000000).toFixed(8); // Convert from msatoshis to BTC
  const [whole, decimal] = formattedBalance.split(".");

  // Ensure the decimal part has exactly 8 digits, adding trailing zeros if needed
  const paddedDecimal = decimal.padEnd(8, "0"); // Ensure 8 decimal places

  // Format the decimal part by adding a space every 3 digits after the first 2 digits
  const firstPart = paddedDecimal.slice(0, 2); // Get the first two digits after the decimal point
  const remainingPart = paddedDecimal.slice(2); // Get the remaining digits

  // Group the remaining digits in sets of 3
  const groupedDecimal = remainingPart.match(/.{1,3}/g)?.join(" ") || "";

  // Function to grey out zero digits, including the first zero
  const greyOutZeroes = (decimalPart) => {
    return decimalPart.split("").map((char, index) => {
      if (char === "0") {
        return (
          <span className="text-gray-500" key={index}>
            {char}
          </span>
        ); // Grey out zeroes
      }
      return char; // Keep other digits as they are
    });
  };

  console.log("SSSS", balance);

  // Apply the greyOutZeroes function to both the whole and decimal parts
  const formattedWhole = greyOutZeroes(whole);
  const formattedDecimal = `${firstPart} ${groupedDecimal}`.trim();

  return (
    <div className="bg-gradient-to-br from-gray-900 to-black p-4 md:p-8 rounded-2xl w-full shadow-lg border border-white/10">
      <div className="text-center font-mono text-xl md:text-4xl tracking-wider">
        {view === "BTC" ? (
          <>
            <span className="text-[#F89B2A] mr-2">₿</span>
            <span className="text-white">{formattedWhole}</span>
            <span className="text-white">.</span>
            <span className="text-white">
              {greyOutZeroes(formattedDecimal)}
            </span>
          </>
        ) : (
          <span className="flex justify-center gap-2">
            {Math.round(toSats(balance))}
            <span className="text-[#F89B2A]">sats</span>
          </span>
        )}
      </div>
    </div>
  );
}
