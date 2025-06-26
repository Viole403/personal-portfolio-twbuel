import { Elysia, t } from 'elysia';

const app = new Elysia({ prefix: '/api' })
  .get('/:slug', ({ params }) => ({
    message: `Hello ${params.slug}!`
  }), {
    params: t.Object({
      slug: t.String()
    })
  });

export const GET = app.handle;
