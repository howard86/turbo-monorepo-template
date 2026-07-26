import { describe, expect, test } from 'bun:test'
import { toSlug } from './toSlug'

describe('toSlug', () => {
  test('should return empty string', () => {
    expect(toSlug('')).toBe('')
  })

  test('should remove white space', () => {
    expect(toSlug('some thing')).toBe('some-thing')
  })
})
