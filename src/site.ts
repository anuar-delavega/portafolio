// Datos públicos de contacto. No pongas aquí teléfono ni datos sensibles.
export const site = {
  name: 'Anuar De La Vega',
  linkedin: 'https://www.linkedin.com/in/anuar-de-la-vega-14000',
  github: 'https://github.com/AmashPit',
  // Deja vacío para no publicar correo; si lo llenas aparece en Contacto.
  email: '',
};

/** Une BASE_URL con una ruta interna, respetando trailingSlash: 'always'. */
export function href(path = ''): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const clean = path.replace(/^\/|\/$/g, '');
  return clean ? `${base}/${clean}/` : `${base}/`;
}
