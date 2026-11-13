// Lógica compartida entre el build (frontmatter) y el navegador (<script>) para leer
// la última release de GitHub y elegir qué fichero ofrecer a cada sistema.

export type OS = 'macOS' | 'Windows' | 'Linux';

/** Cómo reconocer un fichero de la release. `pattern` es una regex en texto (se serializa al cliente). */
export type AssetMatcher = { label: string; os?: OS; pattern: string };

export type Download = { label: string; os?: OS; name: string; url: string; size: number };

export type Release = {
	tag: string;
	date: string;
	url: string;
	downloads: Download[];
};

type GitHubAsset = { name: string; browser_download_url: string; size: number };
type GitHubRelease = { tag_name: string; published_at: string; html_url: string; assets: GitHubAsset[] };

export function toRelease(gh: GitHubRelease, matchers: AssetMatcher[]): Release {
	const downloads: Download[] = [];
	for (const m of matchers) {
		const re = new RegExp(m.pattern, 'i');
		const asset = gh.assets.find((a) => re.test(a.name));
		if (asset) {
			downloads.push({ label: m.label, os: m.os, name: asset.name, url: asset.browser_download_url, size: asset.size });
		}
	}
	return { tag: gh.tag_name, date: gh.published_at, url: gh.html_url, downloads };
}

export async function fetchLatestRelease(
	repo: string,
	matchers: AssetMatcher[],
	token?: string,
): Promise<Release | undefined> {
	try {
		const res = await fetch(`https://api.github.com/repos/${repo}/releases/latest`, {
			headers: {
				Accept: 'application/vnd.github+json',
				...(token ? { Authorization: `Bearer ${token}` } : {}),
			},
		});
		if (!res.ok) return undefined;
		return toRelease(await res.json(), matchers);
	} catch {
		return undefined;
	}
}

export function formatDate(iso: string): string {
	return new Date(iso).toLocaleDateString('es-ES', { day: 'numeric', month: 'short', year: 'numeric' });
}

export function formatSize(bytes: number): string {
	return bytes >= 1024 * 1024 ? `${(bytes / 1024 / 1024).toFixed(1)} MB` : `${Math.max(1, Math.round(bytes / 1024))} KB`;
}
