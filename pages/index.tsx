import { GetStaticProps, InferGetStaticPropsType } from "next";
import { FunctionComponent } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const Index: FunctionComponent<
  InferGetStaticPropsType<typeof getStaticProps>
> = ({ locale, defaultLocale }) => {
  const {
    locale: routerLocale,
    defaultLocale: routerDefaultLocale,
  } = useRouter();
  return (
    <div className="root">
      <h1>
        {
          {
            de: "Beispielseite",
            en: "Demo Page",
          }[(locale as "de") ?? "en"]
        }
      </h1>
      <pre>locale: {locale}</pre>
      <pre>defaultLocale: {defaultLocale}</pre>
      <pre>routerLocale: {routerLocale}</pre>
      <pre>routerDefaultLocale: {routerDefaultLocale}</pre>
      <Link href="/about">
        {
          {
            de: "Über uns",
            en: "About us",
          }[(locale as "de") ?? "en"]
        }
      </Link>
      <style jsx>{`
        .root {
          margin: 2em;
        }
      `}</style>
    </div>
  );
};

export default Index;

export const getStaticProps: GetStaticProps<{
  locale: string | null;
  defaultLocale: string | null;
}> = async ({ locale, defaultLocale }) => ({
  props: {
    locale: locale ?? null,
    defaultLocale: defaultLocale ?? null,
  },
});
