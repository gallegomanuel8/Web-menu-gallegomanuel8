export type AppLink = { label: string; href: string };

export type App = {
	name: string;
	description: string;
	platforms: string[];
	tech: string;
	repo: string;
	/** Enlace principal: descarga (app nativa) o web desplegada. */
	primary?: AppLink;
	status?: string;
};

const GH = 'https://github.com/gallegomanuel8';

export const apps: App[] = [
	{
		name: 'Invertario',
		description:
			'Catálogo de fondos indexados, ETFs y planes de pensiones de plataformas españolas, con simulador de carteras a interés compuesto y seguimiento privado de tu cartera (todo se guarda en el navegador).',
		platforms: ['Web'],
		tech: 'TypeScript · Vite',
		repo: `${GH}/Invertario`,
		primary: { label: 'Abrir web', href: 'https://invertario.vercel.app' },
	},
	{
		name: 'Boost',
		description:
			'Gestor de descargas con varias conexiones y segmentación dinámica, pausa y reanudación, vídeo de YouTube y cientos de webs con yt-dlp, HLS, audio MP3 y extensión para Firefox y Chromium.',
		platforms: ['Linux', 'Windows', 'macOS'],
		tech: 'Rust',
		repo: `${GH}/Boost`,
		primary: { label: 'Descargar', href: `${GH}/Boost/releases/latest` },
	},
	{
		name: 'WoL Manu',
		description:
			'App nativa de macOS para encender equipos con Wake-on-LAN, en red local o a través de VPN con servidor relay. Incluye escáner de red, alertas de dispositivos nuevos y herramientas de diagnóstico (ping, traceroute, puertos, DNS).',
		platforms: ['macOS'],
		tech: 'Swift · SwiftUI',
		repo: `${GH}/WoL-Manu`,
		status: 'Sin release aún · compilar desde el código',
	},
	{
		name: 'Lorca',
		description: 'Editor de texto vitaminado.',
		platforms: [],
		tech: '',
		repo: `${GH}/Lorca`,
		status: 'En desarrollo',
	},
];
