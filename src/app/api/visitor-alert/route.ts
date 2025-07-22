import { NextResponse } from "next/server";
import { DiscordMessage } from "../../../utils/discordAlert";

export async function POST(request: Request) {
   const message: DiscordMessage = await request.json();

   const webhookUrl = process.env.REACT_APP_DISCORD_WEBHOOK_URL;

   if (!webhookUrl) {
      console.warn("Discord webhook URL not configured");
      return;
   }

   try {
      const response = await fetch(webhookUrl, {
         method: "POST",
         headers: {
            "Content-Type": "application/json",
         },
         body: JSON.stringify(message),
      });

      if (!response.ok) {
         throw new Error(`Discord webhook failed: ${response.status}`);
      }

      return NextResponse.json({ message: "Discord alert sent successfully", ok: true });
   } catch (error) {
      console.error("Failed to send Discord alert:", error);
      return NextResponse.json({ message: "Failed to send Discord alert", ok: false });
   }
}
