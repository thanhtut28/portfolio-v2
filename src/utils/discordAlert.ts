export interface DiscordMessage {
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

      const response = await fetch("/api/visitor-alert", {
         method: "POST",
         headers: {
            "Content-Type": "application/json",
         },
         body: JSON.stringify(message),
      });

      if (!response.ok) {
         throw new Error("Failed to send Discord alert");
      }
   } catch (error) {
      console.error("Failed to send Discord alert:", error);
   }
};
