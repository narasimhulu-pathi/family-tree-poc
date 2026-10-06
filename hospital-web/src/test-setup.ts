import '@testing-library/jest-dom'

// jsdom doesn't implement IntersectionObserver — provide a no-op stub
global.IntersectionObserver = class IntersectionObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
} as unknown as typeof IntersectionObserver
