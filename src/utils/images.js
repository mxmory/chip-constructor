const importAll = (r) => {
    let images = {};
    r.keys().map((item) => {
      return images[item.replace('./', '')] = r(item);
    });
    return images;
}

const images = importAll(require.context('../assets/img', false, /\.(png|jpe?g|svg)$/));

export { images }
