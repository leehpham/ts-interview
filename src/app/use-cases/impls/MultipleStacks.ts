function a(): void {
  b();
}

function b(): void {
  c();
}

function c(): void {
  console.log("c");
}

function x(): void {
  y();
}

function y(): void {
  z();
}

function z(): void {
  console.log("z");
}

export function execute(fn: () => void = a, cb: () => void = x): void {
  setTimeout(cb, 0);
  fn();
}
