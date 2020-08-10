import { fetchTags } from '../api/client';

export default function Tag({id, name, description}) {
  return (
    <div>
      <h1>{name}</h1>
      <h2>Tag ID: {id}</h2>
      <p>{description}</p>
    </div>
  );
}

export async function getStaticPaths() {
  const tags = await fetchTags();
  const paths = tags.map(tag => `/tag/${tag.name}`);
  return { paths, fallback: false }
}

export async function getStaticProps(context) {
  const tagName = context.params.tag;
  const tags = await fetchTags();
  const tagData = tags.find(t => t.name === tagName);
  return {props: tagData};
}
