const buildConfig = () => {
  const name = process.env.NEXT_PUBLIC_BLOG_DISPLAY_NAME || "Paragon Exterior";
  const copyright = process.env.NEXT_PUBLIC_BLOG_COPYRIGHT || "Paragon Exterior";
  const defaultTitle =
    process.env.NEXT_DEFAULT_METADATA_DEFAULT_TITLE || "Paragon Exterior";
  const defaultDescription =
    process.env.NEXT_PUBLIC_BLOG_DESCRIPTION || "Paragon Exterior";

  return {
    baseUrl: process.env.NEXT_PUBLIC_BASE_URL || "https://www.paragonexterior.com",
    blog: {
      name,
      copyright,
      metadata: {
        title: {
          absolute: defaultTitle,
          default: defaultTitle,
          template: `%s - ${defaultTitle}`,
        },
        description: defaultDescription,
      },
    },
    ogImageSecret:
      process.env.OG_IMAGE_SECRET ||
      "secret_used_for_signing_and_verifying_the_og_image_url",

  };
};

export const config = buildConfig();
