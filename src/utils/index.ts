export function getUrlId(url: string) {
  const splitedUrl = url.split('/');
  return splitedUrl[splitedUrl.length - 2];
}

export function getChangedPathname(pathname: string) {
  const hasDigits = /\d+/g.test(pathname);
  const endWithDash = pathname.endsWith('/');
  return hasDigits || endWithDash
    ? pathname.replace(/(\d+)/g, '').slice(0, -1)
    : pathname;
}
