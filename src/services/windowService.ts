export const windowService = {
  assign: (newRoute: string) => {
    window.location.assign(newRoute);
  },
  open: (url: string, inNewTab: boolean) => {
    window.open(url, inNewTab ? "_blank" : undefined, "noreferrer");
  },
  origin: () => {
    return window.location.origin;
  },
  reload: () => {
    window.location.reload();
  },
  scrollToPageTop: () => {
    window.scrollTo(0, 0);
  },
};
