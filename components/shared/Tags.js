import { posts } from '../../api/dummy-json.json';
import Link from 'next/link';
import { TagsComponent } from '@/styles/styled-components/GenreComponent';
const Tags = () => {
  // * creating an array to filter tags
  const tagsContainer = [];
  // * going through all posts to push their tags into the array
  posts.map((item) => tagsContainer.push(item.tags));
  // * filtering tagsContainer using ~Set Object~
  const filteredTags = [...new Set(tagsContainer)];
  return (
    <TagsComponent>
      {filteredTags.map((tag) => (
        <ul>
          <li>
            <Link href={`/genre/${tag}`}>{tag}</Link>
          </li>
        </ul>
      ))}
    </TagsComponent>
  );
};

export default Tags;
