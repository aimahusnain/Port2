export default function manifest() {
  return {
    name: "WebKin Solutions",
    short_name: "WebKin",
    description:
      "WebKin Solutions: Crafting Digital Excellence | Elevate your online presence with our innovative solutions. Expertise, Collaboration, Quality - Experience the Difference!",
    start_url: "/",
    scope:"/",
    background_color: "#fff",
    theme_color: "#fff",
    display: "standalone",
    icons: [
      {
        src: "/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        src: "/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        src: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
