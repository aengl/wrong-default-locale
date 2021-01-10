import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import { FunctionComponent } from "react";

const Page: FunctionComponent<
  InferGetStaticPropsType<typeof getStaticProps>
> = (props) => <h1>{props.slug}</h1>;

export default Page;

export const getStaticProps: GetStaticProps<{ slug: string }> = async (
  context
) => {
  const slug = context.params?.slug as string;
  return {
    props: {
      slug,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const slugs = [...new Array(1000)].map(() =>
    Math.random().toString(36).substr(2, 7)
  );
  return {
    paths: slugs.map((x) => ({
      params: { slug: x },
    })),
    fallback: false,
  };
};
