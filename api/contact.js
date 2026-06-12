import { createContactResponse } from '../server/contactEmail.js';

export default async function handler(request, response) {
  const result = await createContactResponse(request);

  Object.entries(result.headers || {}).forEach(([key, value]) => {
    response.setHeader(key, value);
  });

  response.status(result.status).json(result.body);
}
