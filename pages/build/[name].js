import { fetchBuilds } from '../api/client';

export default function Build({id, name, description}) {
  return (
    <div>
      <h1>{name}</h1>
      <h2>{`Build ID: ${id}`}</h2>
      <p>{description}</p>
    </div>
  );
}

export async function getStaticPaths() {
  const builds = await fetchBuilds();
  const paths = builds.map(build => `/build/${build.name}`);
  return { paths, fallback: false }
}

export async function getStaticProps(context) {
  const buildName = context.params.name;
  const builds = await fetchBuilds();
  const buildData = builds.find(t => t.name === buildName);
  return {props: buildData};
}
