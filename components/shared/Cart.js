import Link from 'next/link';

import { posts } from '../../api/dummy-json.json';
import { CartComponent } from '@/styles/styled-components/CartComponent';

const Cart = ({ slug }) => {
  const genreUrl = '/genre';

  if (slug) {
    return (
      <CartComponent>
        <div>
          <h1>{slug}s</h1>
        </div>

        <article>
          {posts.map((post) => {
            const { id, tags, body, title, userId, reactions } = post;
            if (tags === slug) {
              return (
                <div key={id}>
                  <div>
                    <h5>{title}</h5>
                  </div>
                  <div>
                    <p>{body}</p>
                    <div>reactions: {reactions}</div>
                  </div>
                  <div>
                    <p>
                      <Link href={`${genreUrl}/${tags}`}>{tags}</Link>
                    </p>
                  </div>
                  <span>
                    userId:
                    <i>{userId}</i>
                  </span>
                </div>
              );
            }
          })}
        </article>
        <div>
          <Link href={genreUrl}>back</Link>
        </div>
      </CartComponent>
    );
  }

  return (
    <CartComponent>
      {posts.map((post) => {
        const { id, tags, body, title, userId, reactions } = post;

        return (
          <main key={id}>
            <div>
              <h5>{title}</h5>
            </div>
            <div>
              <p>{body}</p>
              <div>reactions: {reactions}</div>
            </div>
            <div>
              <p>
                <Link href={`${genreUrl}/${tags}`}>{tags}</Link>
              </p>
            </div>
            <span>
              userId:
              <i>{userId}</i>
            </span>
          </main>
        );
      })}
    </CartComponent>
  );
};

export default Cart;
