import helmetAsync from "../../node_modules/react-helmet-async/lib/index.js";

type HelmetLike = {
  Helmet: unknown;
  HelmetProvider: unknown;
  HelmetData: unknown;
};

const typedHelmet = helmetAsync as HelmetLike;

export const Helmet = typedHelmet.Helmet;
export const HelmetProvider = typedHelmet.HelmetProvider;
export const HelmetData = typedHelmet.HelmetData;

export type FilledContext = {
  helmet?: {
    title: { toString: () => string };
    priority?: { toString: () => string };
    meta: { toString: () => string };
    link: { toString: () => string };
    script: { toString: () => string };
  };
};
