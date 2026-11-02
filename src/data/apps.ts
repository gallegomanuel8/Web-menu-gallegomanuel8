import type { ImageMetadata } from 'astro';
import invertarioIcon from '../assets/apps/invertario-icon.svg';
import invertarioShot from '../assets/apps/invertario-shot.png';
import boostIcon from '../assets/apps/boost-icon.png';
import boostShot from '../assets/apps/boost-shot.png';
import wolIcon from '../assets/apps/wol-icon.png';
import lorcaIcon from '../assets/apps/lorca-icon.png';
import lorcaShot from '../assets/apps/lorca-shot.png';

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
	icon?: ImageMetadata;
	/** Captura de pantalla; si no hay, la cabecera muestra el icono en grande. */
	screenshot?: ImageMetadata;
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
		icon: invertarioIcon,
		screenshot: invertarioShot,
	},
	{
		name: 'Boost',
		description:
			'Gestor de descargas con varias conexiones y segmentación dinámica, pausa y reanudación, vídeo de YouTube y cientos de webs con yt-dlp, HLS, audio MP3 y extensión para Firefox y Chromium.',
		platforms: ['Linux', 'Windows', 'macOS'],
		tech: 'Rust',
		repo: `${GH}/Boost`,
		primary: { label: 'Descargar', href: `${GH}/Boost/releases/latest` },
		icon: boostIcon,
		screenshot: boostShot,
	},
	{
		name: 'WoL Manu',
		description:
			'App nativa de macOS para encender equipos con Wake-on-LAN, en red local o a través de VPN con servidor relay. Incluye escáner de red, alertas de dispositivos nuevos y herramientas de diagnóstico (ping, traceroute, puertos, DNS).',
		platforms: ['macOS'],
		tech: 'Swift · SwiftUI',
		repo: `${GH}/WoL-Manu`,
		primary: { label: 'Descargar', href: `${GH}/WoL-Manu/releases/latest` },
		icon: wolIcon,
	},
	{
		name: 'Lorca',
		description:
			'Editor de texto y código con autocompletado y diagnósticos vía LSP, búsqueda al estilo Notepad++, multicursor, pantalla dividida, vista previa de Markdown y sesión que nunca pierde lo escrito. Homenaje a García Lorca.',
		platforms: ['macOS', 'Windows', 'Linux'],
		tech: 'Rust · iced',
		repo: `${GH}/Lorca`,
		primary: { label: 'Descargar', href: `${GH}/Lorca/releases/latest` },
		icon: lorcaIcon,
		screenshot: lorcaShot,
	},
];
