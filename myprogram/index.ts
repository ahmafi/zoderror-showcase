import { mySchema } from 'mylib';
import { z } from 'zod';

try {
  mySchema.parse('');
} catch (error) {
  console.log(error instanceof z.ZodError);
}
