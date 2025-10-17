export function prefetchImages(urls: string[]) {
  if (typeof window === 'undefined') return;
  
  urls.forEach(url => {
    const link = document.createElement('link');
    link.rel = 'prefetch';
    link.as = 'image';
    link.href = url;
    document.head.appendChild(link);
  });
}

export function prefetchVideos(urls: string[]) {
  if (typeof window === 'undefined') return;
  
  urls.forEach(url => {
    const link = document.createElement('link');
    link.rel = 'prefetch';
    link.as = 'video';
    link.href = url;
    document.head.appendChild(link);
  });
}
