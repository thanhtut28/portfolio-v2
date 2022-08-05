export function getRandomColors() {
   const colors = ["red", "lime", "teal", "sky", "violet", "pink", "rose"];

   return `bg-${colors[Math.floor(Math.random() * colors.length)]}-100`;
}
