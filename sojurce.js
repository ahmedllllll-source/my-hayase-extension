export default {
  id: "my-anime-source",
  name: "My Anime Source",

  // بحث تجريبي: اكتب "demo" أو "test" عشان يظهر
  async search(query) {
    const item = { id: "demo", title: "Demo Anime (Test)", poster: "" };
    const q = (query || "").toLowerCase();
    if (!q || ["demo", "test", "تجربة", "تيست"].some(k => q.includes(k))) {
      return [item];
    }
    return [item]; // خليه يظهر دايمًا عشان تتأكد الإكستانشن شغال
  },

  // قائمة حلقات تجريبية
  async listEpisodes(animeId) {
    return [
      { id: "demo-1", title: "Episode 1" },
      { id: "demo-2", title: "Episode 2" },
      { id: "demo-3", title: "Episode 3" }
    ];
  },

  // رابط تشغيل تجريبي (HLS عام)
  async getStream(episodeId) {
    // لو حصلت مشكلة تشغيل، جرّب هذا بدلاً منه:
    // const url = "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4";
    const url = "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8";
    return { url, subtitles: [] };
  }
};
