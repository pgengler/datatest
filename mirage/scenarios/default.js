export default function (server) {
  /*
    Seed your development database using your factories.
    This data will not be loaded in your tests.
  */

  window.server = server;
  let posts = server.createList('post', 10);

  let authors = server.createList('author', 10);
  let comments = server.createList('comment', 4);

  comments.map((c) => c.update({ authors }));
  let post = server.schema.posts.find(1);
  post.update({ comments });
}
