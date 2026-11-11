/* Private diary: server-only validation and storage path helpers. Never export this data to public content APIs. */
export const DIARY_BUCKET = 'private-diary';
export const MAX_DIARY_IMAGES = 8;
export const MAX_DIARY_IMAGE_BYTES = 2_500_000;
const IMAGE_PATH_PATTERN = /^[a-f0-9]{8}-[a-f0-9]{4}-4[a-f0-9]{3}-[89ab][a-f0-9]{3}-[a-f0-9]{12}\.(?:jpg|png|webp)$/i;
const ID_PATTERN = /^[a-f0-9]{8}-[a-f0-9]{4}-[1-8][a-f0-9]{3}-[89ab][a-f0-9]{3}-[a-f0-9]{12}$/i;

export function validDiaryId(id) { return typeof id === 'string' && ID_PATTERN.test(id); }
export function validDiaryImagePath(path) { return typeof path === 'string' && IMAGE_PATH_PATTERN.test(path); }
export function validateDiaryEntry(input) {
  if (!input || typeof input !== 'object' || Array.isArray(input)) throw new Error('Invalid diary entry.');
  const { title, body, mood = '', entry_date, image_paths = [] } = input;
  if (typeof title !== 'string' || !title.trim() || title.length > 160) throw new Error('Add a title (maximum 160 characters).');
  if (typeof body !== 'string' || body.length > 24_000) throw new Error('Diary text is too long (maximum 24,000 characters).');
  if (typeof mood !== 'string' || mood.length > 32) throw new Error('Invalid mood.');
  if (typeof entry_date !== 'string' || !/^(19\d\d|20\d\d|21\d\d)-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/.test(entry_date) || Number.isNaN(Date.parse(entry_date)) || new Date(`${entry_date}T00:00:00.000Z`).toISOString().slice(0,10) !== entry_date) throw new Error('Choose a valid date.');
  if (!Array.isArray(image_paths) || image_paths.length > MAX_DIARY_IMAGES || new Set(image_paths).size !== image_paths.length || image_paths.some(p => !validDiaryImagePath(p))) throw new Error('Choose up to 8 valid diary images.');
  if (!body.trim() && image_paths.length === 0) throw new Error('Write something or attach an image.');
  return { title: title.trim(), body, mood: mood.trim(), entry_date, image_paths };
}

export function detectDiaryImage(data, mimeType) {
  const types = { 'image/jpeg':'jpg', 'image/png':'png', 'image/webp':'webp' };
  if (!Object.hasOwn(types, mimeType) || typeof data !== 'string' || data.length > 3_450_000 || !/^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(data)) throw new Error('Choose a JPEG, PNG or WebP image under 2.5 MB.');
  const bytes = Buffer.from(data, 'base64');
  if (!bytes.length || bytes.length > MAX_DIARY_IMAGE_BYTES) throw new Error('Image is too large.');
  const magic = mimeType === 'image/jpeg' ? bytes[0] === 0xff && bytes[1] === 0xd8 && bytes[2] === 0xff
    : mimeType === 'image/png' ? bytes.subarray(0,8).equals(Buffer.from('89504e470d0a1a0a','hex'))
    : bytes.toString('ascii',0,4) === 'RIFF' && bytes.toString('ascii',8,12) === 'WEBP';
  if (!magic) throw new Error('Image content does not match its file type.');
  return { bytes, extension:types[mimeType] };
}
