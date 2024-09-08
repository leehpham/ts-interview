export async function promise00(): Promise<void> {
  new Promise((resolve: (value: number) => void) => {
    console.log(1);
    resolve(2);
  }).then((value) => console.log(value));
  console.log(3);
}
