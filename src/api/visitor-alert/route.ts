export async function POST(request: Request) {
   const { data } = await request.json();

   const webhookUrl = process.env.DISCORD_WEBHOOK_URL;

   if (!webhookUrl) {
      return new Response("Discord webhook URL is not set", { status: 500 });
   }

   try {
      await fetch(webhookUrl, {
         method: "POST",
         headers: {
            "Content-Type": "application/json",
         },
         body: JSON.stringify({
            content: `New visitor alert: ${data.date}`,
         }),
      });
   } catch (error) {
      console.error("Failed to send Discord alert:", error);
      return new Response("Failed to send Discord alert", { status: 500 });
   }

   return new Response("Discord alert sent successfully", { status: 200 });
}
