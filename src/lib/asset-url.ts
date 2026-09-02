// Asset pointer files (src/assets/*.asset.json) contain relative URLs served by
// Lovable's asset CDN ("/__l5e/assets-v1/..."). On Lovable-hosted deployments the
// relative URL works as-is. When self-hosting (e.g. Netlify), set the
// VITE_ASSET_BASE_URL environment variable to the published Lovable URL so the
// images load from the CDN, e.g. https://dkattorneys.lovable.app
const assetBase = (import.meta.env.VITE_ASSET_BASE_URL ?? "").replace(/\/$/, "");

export function assetUrl(asset: { url: string }): string {
  return `${assetBase}${asset.url}`;
}
