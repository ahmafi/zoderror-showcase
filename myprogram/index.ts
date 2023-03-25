import { mySchema } from 'mylib';
import { z } from 'zod';

console.log(mySchema instanceof z.Schema); // false

try {
  mySchema.parse('');
} catch (error) {
  console.log(error instanceof z.ZodError); // false
}

// -----------------------------

const localSchema = z.object({});

console.log(localSchema instanceof z.Schema); // true

try {
  localSchema.parse('');
} catch (error) {
  console.log(error instanceof z.ZodError); // true
}
