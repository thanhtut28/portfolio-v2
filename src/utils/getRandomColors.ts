export function getRandomColors() {
   const colors = ["red", "lime", "teal", "sky", "violet", "pink", "rose"];

   return `${colors[Math.floor(Math.random() * colors.length)]}`;
}
