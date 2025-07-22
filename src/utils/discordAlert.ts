interface DiscordMessage {
   content?: string;
   embeds?: Array<{
      title?: string;
      description?: string;
      color?: number;
      timestamp?: string;
      fields?: Array<{
         name: string;
         value: string;
         inline?: boolean;
      }>;
   }>;
}

export const sendDiscordAlert = async (): Promise<void> => {
   const webhookUrl = process.env.REACT_APP_DISCORD_WEBHOOK_URL;

   if (!webhookUrl) {
      console.warn("Discord webhook URL not configured");
      return;
   }

   try {
      const now = new Date();
      const userAgent = navigator.userAgent;
      const referrer = document.referrer || "Direct visit";
      const timestamp = now.toISOString();

      // Get basic visitor info
      const visitorInfo = {
         timestamp: now.toLocaleString(),
         userAgent: userAgent,
         referrer: referrer,
         url: window.location.href,
         language: navigator.language,
         platform: navigator.platform,
      };

      const message: DiscordMessage = {
         embeds: [
            {
               title: "🌐 New Website Visitor",
               description: "Someone just visited your portfolio!",
               color: 0x5865f2, // Discord's blurple color
               timestamp: timestamp,
               fields: [
                  {
                     name: "📍 URL",
                     value: visitorInfo.url,
                     inline: false,
                  },
                  {
                     name: "🕒 Time",
                     value: visitorInfo.timestamp,
                     inline: true,
                  },
                  {
                     name: "🌍 Language",
                     value: visitorInfo.language,
                     inline: true,
                  },
                  {
                     name: "💻 Platform",
                     value: visitorInfo.platform,
                     inline: true,
                  },
                  {
                     name: "🔗 Referrer",
                     value: referrer === "Direct visit" ? "Direct visit" : referrer,
                     inline: false,
                  },
               ],
            },
         ],
      };

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

      console.log("Discord alert sent successfully");
   } catch (error) {
      console.error("Failed to send Discord alert:", error);
   }
};
