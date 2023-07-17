export default function imgixLoader({ src, width, quality }: {src: any , width: any , quality: any }) {
    const url = new URL(`https://worlas.imgix.net/${src}`)
    const params = url.searchParams
    params.set('auto', params.getAll('auto').join(',') || 'format')
    params.set('fit', params.get('fit') || 'max')
    params.set('w', params.get('w') || width.toString())
    params.set('q', (quality || 50).toString())
    return url.href
  }