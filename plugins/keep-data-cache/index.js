export const onPreBuild = async function ({ utils }) {
  await utils.cache.restore("/opt/buildhome/.cache/puppeteer/");
};

export const onPostBuild = async function ({ utils }) {
  await utils.cache.save("/opt/buildhome/.cache/puppeteer/");
};
