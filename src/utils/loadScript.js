// Dynamically load a script and return a Promise that resolves when it's loaded.
// Usage:
//   loadScript('/scripts/foo.js').then(() => { /* ready */ })
function loadScript(src, { async = true, defer = false, attrs = {} } = {}) {
  return new Promise((resolve, reject) => {
    if (!src) return reject(new Error('loadScript: src is required'))

    // avoid adding the same script twice
    const existing = document.querySelector(`script[src="${src}"]`)
    if (existing) {
      // already loaded (or loading)
      if (existing.getAttribute('data-loaded') === 'true') return resolve()
      existing.addEventListener('load', () => resolve())
      existing.addEventListener('error', (e) => reject(e))
      return
    }

    const script = document.createElement('script')
    script.src = src
    script.async = async
    script.defer = defer

    // add any extra attributes
    Object.keys(attrs).forEach((k) => script.setAttribute(k, attrs[k]))

    script.addEventListener('load', () => {
      script.setAttribute('data-loaded', 'true')
      resolve()
    })
    script.addEventListener('error', (e) => reject(e))

    document.body.appendChild(script)
  })
}

export default loadScript
