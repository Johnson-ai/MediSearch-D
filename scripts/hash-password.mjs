import { scryptSync, randomBytes } from 'node:crypto';
const password = process.argv[2];
if (!password || password.length < 14) { console.error('Usage: npm run hash-password -- "a-long-unique-admin-password" (at least 14 characters)'); process.exit(1); }
const salt = randomBytes(24).toString('hex');
console.log(`ADMIN_PASSWORD_SCRYPT=scrypt$${salt}$${scryptSync(password, salt, 64).toString('hex')}`);
