import nextCoreWebVitals from 'eslint-config-next/core-web-vitals'

/** @type {import('eslint').Linter.Config[]} */
const eslintConfig = [
  { ignores: ['.next/**', 'out/**', 'node_modules/**'] },
  ...nextCoreWebVitals,
]

export default eslintConfig
