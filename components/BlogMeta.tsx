export default function BlogMeta(props: { title: string; desc: string }) {
  return (
    <>
      <title>{props.title}</title>
      <meta content={props.title} name="twitter:title" />
      <meta content={props.title} property="og:title" />
      <meta content={props.desc} name="twitter:description" />
      <meta content={props.desc} property="og:description" />
    </>
  );
}
