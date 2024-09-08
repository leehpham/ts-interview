export function timing00(): void {
  setTimeout(() => console.log("A"), 0);
  console.log("B");

  setTimeout(() => console.log("C"), 100);
  setTimeout(() => console.log("D"), 0);

  let i = 0;
  while (i < 10000000) {
    const ignore = Math.sqrt(i);
    ignore;
    i++;
  }

  console.log("E");
}
