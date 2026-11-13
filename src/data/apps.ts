import type { ImageMetadata } from 'astro';
import type { AssetMatcher } from '../lib/releases';
import invertarioIcon from '../assets/apps/invertario-icon.svg';
import invertarioShot from '../assets/apps/invertario-shot.png';
import lorcaIcon from '../assets/apps/lorca-icon.png';
import lorcaShot from '../assets/apps/lorca-shot.png';
import boostIcon from '../assets/apps/boost-icon.png';
import boostShot from '../assets/apps/boost-shot.png';
import mrlaserIcon from '../assets/apps/mrlaser-icon.png';
import mrlaserShot from '../assets/apps/mrlaser-shot.png';
import wolIcon from '../assets/apps/wol-icon.png';

export type App = {
	name: string;
	description: string;
	/** web: se abre en el navegador · game: juego web · desktop: se descarga de la última release */
	kind: 'web' | 'game' | 'desktop';
	platforms: string[];
	tech: string;
	/** owner/nombre en GitHub */
	repo: string;
	/** URL desplegada (web y game). */
	url?: string;
	/** Ficheros de la release a ofrecer, en orden (desktop). */
	assets?: AssetMatcher[];
	icon?: ImageMetadata;
	/** Captura de pantalla; si no hay, la cabecera muestra el icono en grande. */
	screenshot?: ImageMetadata;
	/** Captura pixel art: escalar sin suavizar. */
	pixelated?: boolean;
};

export const apps: App[] = [
	{
		name: 'Invertario',
		description:
			'Catálogo de fondos indexados, ETFs y planes de pensiones de plataformas españolas, con simulador de carteras a interés compuesto y seguimiento privado de tu cartera (todo se guarda en el navegador).',
		kind: 'web',
		platforms: ['Web'],
		tech: 'TypeScript · Vite',
		repo: 'gallegomanuel8/Invertario',
		url: 'https://invertario.vercel.app',
		icon: invertarioIcon,
		screenshot: invertarioShot,
	},
	{
		name: 'Lorca',
		description:
			'Editor de texto y código con autocompletado y diagnósticos vía LSP, búsqueda al estilo Notepad++, multicursor, pantalla dividida, vista previa de Markdown y sesión que nunca pierde lo escrito. Homenaje a García Lorca.',
		kind: 'desktop',
		platforms: ['macOS', 'Windows', 'Linux'],
		tech: 'Rust · iced',
		repo: 'gallegomanuel8/Lorca',
		assets: [
			{ label: 'macOS (Apple Silicon) · .dmg', os: 'macOS', pattern: 'aarch64\\.dmg$' },
			{ label: 'Windows · instalador', os: 'Windows', pattern: 'x64-setup\\.exe$' },
			{ label: 'Windows · .msi', pattern: '\\.msi$' },
			{ label: 'Linux · Debian/Ubuntu (.deb)', os: 'Linux', pattern: 'amd64\\.deb$' },
			{ label: 'Linux · Fedora/openSUSE (.rpm)', pattern: '\\.rpm$' },
			{ label: 'Linux · AppImage', pattern: '\\.AppImage$' },
		],
		icon: lorcaIcon,
		screenshot: lorcaShot,
	},
	{
		name: 'Boost',
		description:
			'Gestor de descargas con varias conexiones y segmentación dinámica, pausa y reanudación, vídeo de YouTube y cientos de webs con yt-dlp, HLS, audio MP3 y extensión para Firefox y Chromium.',
		kind: 'desktop',
		platforms: ['Windows', 'Linux', 'macOS'],
		tech: 'Rust',
		repo: 'gallegomanuel8/Boost',
		assets: [
			{ label: 'Windows · instalador', os: 'Windows', pattern: 'windows-x86_64-setup\\.exe$' },
			{ label: 'Windows · portable (.zip)', pattern: 'windows-x86_64\\.zip$' },
			{ label: 'Linux · .tar.gz', os: 'Linux', pattern: 'linux-x86_64\\.tar\\.gz$' },
			{ label: 'macOS (Apple Silicon) · .dmg', os: 'macOS', pattern: 'macos-arm64\\.dmg$' },
			{ label: 'Extensión Firefox', pattern: 'extension-firefox\\.xpi$' },
			{ label: 'Extensión Chrome/Brave/Edge', pattern: 'extension-chromium\\.zip$' },
		],
		icon: boostIcon,
		screenshot: boostShot,
	},
	{
		name: 'Mr Laser',
		description:
			'Plataformas 2D en el navegador: Mr Laser borra la tinta a golpe de láser. Se juega con teclado, mando o controles táctiles en el móvil, sin instalar nada.',
		kind: 'game',
		platforms: ['Navegador', 'Móvil'],
		tech: 'JavaScript · Canvas',
		repo: 'gallegomanuel8/Game-MrLaser',
		url: 'https://game-mrlaser.vercel.app',
		icon: mrlaserIcon,
		screenshot: mrlaserShot,
		pixelated: true,
	},
	{
		name: 'WoL Manu',
		description:
			'App nativa de macOS para encender equipos con Wake-on-LAN, en red local o a través de VPN con servidor relay. Incluye escáner de red, alertas de dispositivos nuevos y herramientas de diagnóstico (ping, traceroute, puertos, DNS).',
		kind: 'desktop',
		platforms: ['macOS'],
		tech: 'Swift · SwiftUI',
		repo: 'gallegomanuel8/WoL-Manu',
		assets: [{ label: 'macOS (universal) · .zip', os: 'macOS', pattern: '\\.zip$' }],
		icon: wolIcon,
	},
];
