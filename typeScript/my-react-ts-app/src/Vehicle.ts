export interface Vehicle {
  make: string;
  model: string;
  year: number;
  start(): void; // Logs "Engine started" to the console
}
