export const onPreBuild = async ({ utils }) => {
  await utils.cache.restore("/opt/buildhome/.cache/puppeteer/");
};

export const onPostBuild = async ({ utils }) => {
  await utils.cache.save("/opt/buildhome/.cache/puppeteer/");
};
