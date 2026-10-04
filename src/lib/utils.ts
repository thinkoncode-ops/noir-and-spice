export function cn(...classes: (string | false | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}

export function formatINR(amount: number) {
  return `₹${amount.toLocaleString("en-IN")}`;
}
