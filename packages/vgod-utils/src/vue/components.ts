export function createNamespace(name: string) {
  const namespace = `vg-${name}`

  const createBEM = (suffix?: string): string => {
    if (!suffix) return namespace

    return suffix.startsWith('--')
      ? `${namespace}${suffix}`
      : `${namespace}__${suffix}`
  }

  return {
    namespace: namespace,
    createBEM: createBEM
  }
}