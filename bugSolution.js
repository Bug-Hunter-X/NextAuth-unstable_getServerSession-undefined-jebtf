```javascript
import { unstable_getServerSession } from 'next-auth/react';
import { authOptions } from './api/auth/[...nextauth]'; // path adjusted

export default async function handler(req, res) {
  const session = await unstable_getServerSession(req, res, authOptions);

  if (!session) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  // ... rest of your API route handler
}
```