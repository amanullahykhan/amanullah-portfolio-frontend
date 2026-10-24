const WP_URL = "http://168.110.208.201:8081";

export async function getProjects() {
  const res = await fetch(`${WP_URL}/wp-json/wp/v2/project?_embed`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error(`WP fetch failed: ${res.status}`);
  }

  return res.json();
}