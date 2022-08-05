import { SERVICES } from "./constants";

type Service = { title: string; body: string };

export function getServices(): [Service, Service[]] {
   const [firstService] = SERVICES.slice(0, 1);
   const rest = SERVICES.slice(1, SERVICES.length);
   return [firstService, rest];
}
